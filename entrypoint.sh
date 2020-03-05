#!/bin/sh -l

echo "Creating archive";
mkdir /out
cd $GITHUB_WORKSPACE
zip -r /out/repoarchive.zip ./* -x .git/*
export FILE_PATH='/out/repoarchive.zip'

node /app/index.js
[ $? -eq 0 ]  || exit 1

