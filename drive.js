const express=require("express")
const app=express()
const fs=require("fs")
 app.get("/",(req,res)=>{
 if(fs.existsSync(__dirname+"/"+req.query.shu+".js")){
res.end("error: link exist")
}else{
  fs.writeFileSync(__dirname+"/"+req.query.shu+".js", `
  const express=require("express")
  const app=express()
  app.listen()
  app.get("*",(req,res)=>{
    res.riderict(${req.query.uts})
  })
  `)
  res.end("ok")
}
 })
 app.listen(9898)
