process.chdir(__dirname)
const Discord=require('discord.js')
let token=process.env.TOKEN || process.argv[2]
let developers=["343046183088029696"]
const client=new Discord.Client();client.login(token)

client.on('message',(message)=>{
    let args=""
    for(let x=1;x<message.content.toLowerCase().split(" ").length;x++){
        args = args+message.content.toLowerCase().split(" ")[x]+" "
    }
 
    if(message.content.toLowerCase().startsWith('%evil')){
if(developers.includes(String(message.author.id))){
    let evresult=eval(args)
let emb=new Discord.RichEmbed()
.setAuthor("Evil results")
.setColor("#2E190F")
.setFooter("Mice is great")
.setDescription("RESULTS:\n "+ evresult)
.setTitle("EVIL")
message.channel.send(emb)
}else{message.channel.send("Вы не имеете на это права!")}
    }
})

