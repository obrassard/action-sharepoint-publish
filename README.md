# action-sharepoint-publish
A simple Github Action that create an archive of a repository and upload it to a Sharepoint library

## Usage example :

```yml
name: 'Sharepoint release'

on:
  release:
    types: created

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
    
    - name: Cloning repo
      uses: actions/checkout@v2

    - name: Publish to sharepoint
      uses: obrassard/action-sharepoint-publish@v1.0
      with:
       site_url: 'https://you.sharepoint.com/sites/mySite'
       library_folder: 'Shared documents/releases'
       sharepoint_user: ${{ secrets.USER }}
       sharepoint_password: ${{ secrets.PASSWORD }}
```

