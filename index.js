const spsave = require("spsave").spsave;
// const spauth = require("node-sp-auth");
var fs = require("fs");

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
    fileName: `${trimSlashes(process.env.GITHUB_REPOSITORY)}${}`,
    fileContent: readFileSync(process.env.FILE_PATH),
}

spsave(coreOptions, creds, fileOptions)
    .then(() => {
        console.log('Success')
    })
    .catch((_) => {
        process.exit(1)
    })
