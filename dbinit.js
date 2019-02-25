module.exports=()=>{
  const jsftp = require("jsftp");

const ftp = new jsftp({
  host: "ftpupload.net",
  port: 21, // defaults to 21
  user: "epiz_23505821", // defaults to "anonymous"
  pass: "GitGdp17azUsqd" // defaults to "@anonymous"
});
ftp.get("htdocs/db.json", "db/db.json", err => {
  if (err) {
    return console.error("There was an error retrieving the file.");
  }else{
    console.log("db downloaded succefully")
  }
ftp.raw("quit")
});
}
