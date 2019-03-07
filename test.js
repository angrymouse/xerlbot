let express=require("express")
let app=express()
app.listen(8080)
app.get("*",(req,res)=>{
  res.send(req.params)
})
