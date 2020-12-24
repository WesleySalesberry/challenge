# Shopify Developer Intern Challenge Question

You will need a mongodb atlas and a cloudinary account 
Mongodb Atlas: You will need a connection string

Cloudinary: You will need the Cloud name:, API Key, API Secret

Create a JSON web token key 

add these to the .env file along with your key and uri string. The JSON token string can be changes to what ever you want

```
MONGODB_URI=
JWT_TOKEN=lkjhYjnbgYJKMyHNyuiJKNngtyuikjmngtyuikjmnbgYUIJKNBkiuytGVbnmkUYGv
CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET=

```

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install the needed packages. 
```javascript
npm install
```

After adding the packages and the env file with necessary env variables, use this command to run the server 
```javascript
npm run server
```

## Usage
Within postman

## Register an account first.
Create a POST request and use this route http://localhost:3000/api/register, within headers add content-type json and within the body, select raw, then create a user:
example:
```
{
    "username": "demo",
    "password": "123456"
}
```

This will send back a token to be used in the header to secure the upload

## To upload an image. 

Create another POST request.
Use the route http://localhost:3000/api/upload, in the headers add auth-token, then the token that was sent back from register, 
within body,
    in the key, 
        select form-data and in the drop down select file. 
    in the value,
        select a file to test.
        the files jpeg, jpg and png will work and everything else should send back an error


This stores the image in the Couldinary account and adds a link to the image in the database attached to the user who uploaded it. 




