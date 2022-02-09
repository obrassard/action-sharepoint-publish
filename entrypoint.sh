#!/bin/sh -l

node /app/index.js
[ $? -eq 0 ]  || exit 1
