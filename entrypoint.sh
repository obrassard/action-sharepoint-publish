#!/bin/sh -l

echo "Creating archive";
mkdir /out
zip -r /out/repoarchive.zip $GITHUB_WORKSPACE
export FILE_PATH='/out/repoarchive.zip'

node /app/index.js
[ $? -eq 0 ]  || exit 1

