process.chdir(__dirname)
const Discord=require('discord.js')
let token=process.env.TOKEN || process.argv[2]
let developers=["343046183088029696","242975403512168449"]
const client=new Discord.Client();client.login(token)
let translitor=require("./translitor")
client.on('message',(message)=>{
    let args=""
    for(let x=1;x<message.content.split(" ").length;x++){
        args = args+message.content.split(" ")[x]+" "
    }
 
if(message.content=="%ping"){
    let emb=new Discord.RichEmbed()
    .setAuthor("Xerl ping")
    .setColor("#2E190F")
    .setFooter("Ping")
    .setDescription(`Я занимаю ${Math.round(process.memoryUsage().rss/ 1024 / 1024)}мб RAM \n Мой пинг ${Math.round(client.ping)} ms `)
    .setTitle("PING")
  message.channel.send(emb)
}
if(message.content.startsWith("%tr")){
    message.reply(translitor.trEnRu(args))
}
    if(message.content.startsWith('%evil')){
if(developers.includes(String(message.author.id))){
    let evresult
    try{ evresult=eval(args)}catch(ex){
        let emb=new Discord.RichEmbed()
.setAuthor("Чето все хуево")
.setColor("#2E190F")
.setFooter("Mice is great")
.setDescription("мне стало хуево по этой причине:\n "+ ex)
.setTitle("EVIL")
return message.channel.send(emb)

    }

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
// let translateparams="qйwцeуrкtеyнuгiшoщpз[х]ъaфsыdвfаgпhрjоkлlд;ж'эzяxчcсvмbиnтmь,б.ю"
// function translit(text, tp) {
//     let tpa=tp.split("")
//     let tr=tp
//     for(x=0;x>=tpa.length;x=+2){
//         tr=tr.replace(tpa[x-1],tpa[x])
//     }
//     return tr
// }
// console.log(translit("ghbdtn",translateparams))