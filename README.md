# action-sharepoint-publish

A simple Github Action that uploads files to a Sharepoint library

## Inputs

### `site_url`

**Required** The complete URL of your SharePoint site. Example: `https://you.sharepoint.com/sites/mySite`

### `library_folder`

**Required** The path relative to the library where to upload a file. Example `Shared documents/releases`.

> :warning: Do not include the first slash

### `sharepoint_user`

**Required** The username to use for authentication. Example `roger.tester@mydomain.com`.

### `sharepoint_password`

**Required** The user's password. Example `MyPassword123!`. 

> :bulb: Tip: It is recommended to use GitHub Actions Secrets to store sensitive information like passwords

### `file_base`

The base folder to apply the file glob pattern to

### `file_glob`

The glob pattern to apply to files in the `file_base`

## Example usage

This action is particularly useful when triggered by new releases :

```yml
name: 'Sharepoint release'

on:
  release:
    types: created

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
    
    - name: Cloning repo # This step is required
      uses: actions/checkout@v2

    - name: Publish to Sharepoint
      uses: obrassard/action-sharepoint-publish@v1.0.1
      with:
       site_url: 'https://you.sharepoint.com/sites/mySite'
       library_folder: 'Shared documents/releases'
       sharepoint_user: ${{ secrets.USER }}
       sharepoint_password: ${{ secrets.PASSWORD }}
       file_base: 'build'
       file_glob: '**/*'
```
