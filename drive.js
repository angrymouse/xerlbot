process.chdir(__dirname)
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const drive = google.drive({
  version: 'v3',
  auth: "AIzaSyAzDGwCIUH8u0F0Uluw7X0LmSqrJwUaBbg"
});

// const res = drive.files.create({
//   requestBody: {
//     name: 'Test',
//     mimeType: 'text/plain'
//   },
//   media: {
//     mimeType: 'text/plain',
//     body: 'Hello World'
//   }
// });