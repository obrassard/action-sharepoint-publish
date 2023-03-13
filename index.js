const spsave = require("spsave").spsave;
// const spauth = require("node-sp-auth");
var fs = require("fs");

const trimSlashes = (string) => {
  return string.replace(new RegExp("/", "g"), "_");
};

let creds = {
  clientId: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
};
// spauth
//   .getAuth(process.env.SITE_URL, {
//     clientId: process.env.CLIENTID,
//     clientSecret: process.env.CLIENTSECRET,
//   })
//   .then((res) => {
//     creds = res;
//     return 0;
//   });

let coreOptions = {
  siteUrl: process.env.SITE_URL,
};

let now = new Date().toISOString().slice(0, 10);

let ref = "";
if (process.env.GITHUB_REF) {
  ref = process.env.GITHUB_REF.substr(
    process.env.GITHUB_REF.lastIndexOf("/") + 1
  );
}

let fileOptions = {
  folder: process.env.LIB_FOLDER,
  fileName: `${trimSlashes(process.env.GITHUB_REPOSITORY)}_${ref}_${now}.zip`,
  fileContent: fs.readFileSync(process.env.FILE_PATH),
};

spsave(coreOptions, creds, fileOptions)
  .then(function () {
    console.log("Success");
  })
  .catch(function (_) {
    process.exit(1);
  });
