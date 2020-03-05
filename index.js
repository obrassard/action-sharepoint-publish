var spsave = require("spsave").spsave;
var fs = require('fs');

function trimSlashes(string) {
    return string.replace(new RegExp('/', 'g'), '_');
}

var coreOptions = {
    siteUrl: process.env.SITE_URL,
};
var creds = {
    username: process.env.USER,
    password: process.env.PASSWD
};
 
var fileOptions = {
    folder: process.env.LIB_FOLDER, 
    fileName: `${trimSlashes(process.env.GITHUB_REPOSITORY)}_release_${new Date().getTime()}.zip`,
    fileContent: fs.readFileSync(process.env.FILE_PATH)
};

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    process.exit(1);
});
