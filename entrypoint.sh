#!/bin/sh -l


if [[ -z $PDF_FILE_NAME ]] then
    export FILE_PATH = '/out/repoarchive.zip'
    mkdir /out
    cd "$GITHUB_WORKSPACE"
    echo "Creating archive";
    zip -r "$FILE_PATH" ./* -x .git/*
else
    export FILE_PATH = "/out/$PDF_FILE_NAME"
fi

# run the script to send to sharepoint
node /app/index.js
[ $? -eq 0 ]  || exit 1

