# action-sharepoint-publish

A simple Github Action that create an archive of a repository and upload it to a Sharepoint library

## Inputs

### Example Inputs

```yml
  # The complete url of your sharepoint site.
  site_url: 'https://you.sharepoint.com/sites/mySite',
  
  # The path relative to the library where to upload a file.
  library_folder: 'Shared Documents/Github Sync',
  
  # The client id to use for authentication.
  sharepoint_client_id: 'e2315739-2bca-4d89-a49b-31abc3ce378f',
  
  # The Sharepoint client secret.
  sharepoint_client_secret: 'JVrYn+jdyLk5buuhMtA0CKY9dnv4SMj2SdpZy5Ljcte='
```

> :bulb: Tip : It is recommended to use GitHub Actions Secrets to store sensitive informations like client secrets and id

## Example usage

This action is particularly useful when triggered by push:

```yml
name: 'Sharepoint Sync'

on: push

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:  
    
    - name: Cloning repo
      uses: actions/checkout@v2

    - name: Publish to Sharepoint
      uses: obrassard/action-sharepoint-publish@v1.1.1
      with:
       site_url: 'https://you.sharepoint.com/sites/mySite'
       library_folder: 'Shared documents/releases'
       sharepoint_client_id: ${{ secrets.CLIENTID }}
       sharepoint_client_secret: ${{ secrets.CLIENTSECRET }}
```
