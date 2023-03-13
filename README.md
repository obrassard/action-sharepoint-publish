# action-sharepoint-publish
A simple Github Action that create an archive of a repository and upload it to a Sharepoint library

## Inputs

#### `site_url`

**Required** The complete url of your sharepoint site. Example : `https://you.sharepoint.com/sites/mySite`

#### `library_folder`

**Required** The path relative to the library where to upload a file. Example `Shared documents/releases`.

> :warning: Do not include the first slash

#### `sharepoint_client_id`

**Required** The username to use for authentication. 

##### Example 

`e2315739-2bca-4d89-a49b-31abc3ce378f`.

#### `sharepoint_client_secret`

**Required** The Sharepoint client secret. 

##### Example

`JVrYn+jdyLk5buuhMtA0CKY9dnv4SMj2SdpZy5Ljcte=`. 

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
    
    - name: Cloning repo # This step is required
      uses: actions/checkout@v2

    - name: Publish to Sharepoint
      uses: purplebearddan/action-sharepoint-publish@v0.0.2
      with:
       site_url: 'https://you.sharepoint.com/sites/mySite'
       library_folder: 'Shared documents/releases'
       sharepoint_client_id: ${{ secrets.CLIENTID }}
       sharepoint_client_secret: ${{ secrets.CLIENTSECRET }}
```
