# action-sharepoint-publish
A simple Github Action that create an archive of a repository and upload it to a Sharepoint library

## Inputs

#### `site_url`

**Required** The complete url of your sharepoint site. Example : `https://you.sharepoint.com/sites/mySite`

#### `library_folder`

**Required** The path relative to the library where to upload a file. Example `Shared documents/releases`.

> :warning: Do not include the first slash

#### `sharepoint_user`

**Required** The username to use for authentication. Example `roger.tester@mydomain.com`.

#### `sharepoint_password`

**Required** The user's password. Example `MyPassword123!`. 

> :bulb: Tip : It is recommended to use GitHub Actions Secrets to store sensible informations like passwords

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
```

