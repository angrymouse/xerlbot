const {google} = require('googleapis');
const oauth2Client = new google.auth.OAuth2(
  "475282420404-u2ncjm7c5f8g89bp02ml72j2bog8an41.apps.googleusercontent.com",
  "qqYrMLbZ4BiSP0xpiKt2Gvwz",
  ["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
);

const drive = google.drive({
  version: 'v3',
  auth:"AIzaSyCNzhC6bJanrd9V5IT2teM4iQ2CR1lYSZA"
});
let res = drive.files.create({
  requestBody: {
    title: 'Test',
    mimeType: 'text/plain',
  },
  media: {
    mimeType: 'text/plain',
    body: 'Hello World updated with metadata',
  },
  auth: "AIzaSyCNzhC6bJanrd9V5IT2teM4iQ2CR1lYSZA"
});