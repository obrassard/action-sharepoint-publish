import { spsave } from 'spsave'
import { readFileSync } from 'fs'

filePath = process.env.FILE_PATH
fileExtensionArr = filePath.split('.')
fileExtension = `.${fileExtensionArr[fileExtensionArr.length - 1]}`

const trimSlashes = (string) => {
    return string.replace(new RegExp('/', 'g'), '_')
}

let creds = {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
}

let coreOptions = {
    siteUrl: process.env.SITE_URL,
}

let fileOptions = {
    folder: process.env.LIB_FOLDER,
    fileName: `${trimSlashes(process.env.GITHUB_REPOSITORY)}${fileExtension}`,
    fileContent: readFileSync(process.env.FILE_PATH),
}

spsave(coreOptions, creds, fileOptions)
    .then(() => {
        console.log('Success')
    })
    .catch((_) => {
        process.exit(1)
    })
