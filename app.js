process.chdir(__dirname)
const jsftp = require("jsftp");

let fs=require('fs')
const ftp = new jsftp({
  host: "ftpupload.net",
  port: 21, // defaults to 21
  user: "epiz_23505821", // defaults to "anonymous"
  pass: "GitGdp17azUsqd" // defaults to "@anonymous"
});
var Ftpclient = require('ftp');
  let rtdb
 var c = new Ftpclient();
 c.on('ready', function() {
   c.get('htdocs/db.json', function(err, stream) {
     if (err) throw err;
     stream.once('close', function() { c.end();   rtdb=dbget()});
     stream.pipe(fs.createWriteStream('db/db.json'));
   });
 });
 // connect to localhost:21 as anonymous
 c.connect({
   host: "ftpupload.net",
   port: 21, // defaults to 21
   user: "epiz_23505821", // defaults to "anonymous"
   password: "GitGdp17azUsqd" // defaults to "@anonymous"
 });
function dbput(db){
fs.writeFileSync("./db/db.json", JSON.stringify(db))
ftp.put(fs.readFileSync("./db/db.json"), "htdocs/db.json", err => {
  if (err) {
  return  console.log(err);
  }
});
}
function dbget(){
  return JSON.parse(fs.readFileSync("./db/db.json"))
}
var isgd = require('isgd');
let lib=require("./lib.js")
let pr="%"
const Discord=require('discord.js')
let nepora=["ghbdtn","rfr","ult","rjulf","pfxtv","ltkfnm","vjq","nt,t","cjcb","ghjcnj", "pfqlb", "yfcnhjqrb","lfkmit","cvj;tim","ghbxtv","jyj","gthtdjlbn","gj,tlbk","gj,tlbkf","xnj","'nf","cltkfk",",eltn","gjktpty","gjktpyf","[jhjij","[jhjifz","cegth","vj;tim","hfpujdfhbdf.","'nj","crfpfk","evysq"]
let token=process.env.TOKEN || process.argv[2]
let developers = ["343046183088029696","428036906723573760"]
const client = new Discord.Client(); client.login(token)
function delFromArray(array, nameofemement){
  return array.splice(nameofemement, 1)
}
let translitor=require("./translitor")

console.log(translitor.trEnRu("ghbdtn"))
client.once("ready", ()=>{
  client.user.setActivity(`${pr}help || xerlbot.icu`)

})

client.on("guildCreate",(guild)=>{
rtdb.servers[String(guild.id)]={
  "adsprotection":false
}
dbput(rtdb)
})
client.on("guildMemberAdd", (member)=>{
    if(member.guild.id == 540192529933664297){
        member.addRole(member.guild.roles.find('name', "Member"))
    }
})
client.on('message',(message)=>{
  if (!message.guild || message.author.bot) return;
    let args=""
    for(let x=1;x<message.content.split(" ").length;x++){

        args = args+message.content.split(" ")[x]+" "
    }

    if(message.content.toLowerCase()==`${pr}voting`){

      message.reply("Окей, сообщите мне сообщение голосования").then(m1=>{

        let colctr = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000 });
        colctr.once("collect", (message)=>{
          m1.delete()
          let votecontent=message.content
          message.reply("Теперь сообщите мне варианты ответа").then(m2=>{
            let colctr2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000 });
            colctr2.once("collect", (message)=>{
              m2.delete()
    let arg2=message.content.split('')
    let emb=new Discord.RichEmbed()
    .setTitle("Voting")
    .setColor("#2E190F")
    .setDescription(votecontent)
    .setFooter("Please select")
    message.channel.send(emb).then(msg=>{
      if(arg2.includes("y")){
        msg.react("✅")
      }
      setTimeout(() => {
        if (arg2.includes("n")) {
          msg.react("❎")
        }
      },500)

    })
            })
          })
        })
      })
    }
    if(message.content.toLowerCase().startsWith(`${pr}surl`)){
    try{
      isgd.shorten(args, function(res) {
        if(res.startsWith("https://is.gd")){
        return  message.reply("Ваша сокращенная ссылка - "+res)
      }else{
        return message.channel.send(res)
      }
      });
    }catch(ex){
      return message.reply("Ошибка! "+ex)
    }
    }
 if(message.content.toLowerCase().startsWith(`${pr}donate`)){
     let mn=args||"5"
  return   message.reply("Вы можете поддержать моих разработчиков по этим ссылкам:\n Yandex.Money - https://xerl.ga/donate.js?money="+mn+"\nQiwi - https://qiwi.me/xerl\nЯ.Соберу - https://yasobe.ru/na/xerl")
 }
 if(message.content.toLowerCase().startsWith(`${pr}coinflip`)){
   let r=lib.random(1,2)
   if(r==1){
     message.channel.sendFile("./eagle.jpg")
   }else{
     message.channel.sendFile("./reshka.jpg")
   }
 }
 if(message.content.toLowerCase()==`${pr}server`){
   let emb=new Discord.RichEmbed()
   .setTitle("Server info")
   .setColor("#2E190F")
   .setAuthor("Xerl")
   .setFooter("Server info")
   .setDescription(`
Имя сервера - ${message.guild.name}
ID сервера - ${message.guild.id}
ID этого канала - ${message.channel.id}
Кол-во людей на сервере - ${message.guild.members.size}
Кол-во ролей на сервере - ${message.guild.roles.size}
Кол-во каналов на сервере - ${message.guild.channels.size}
Кол-во емоджи на сервере - ${message.guild.emojis.size}
Степень верификации - ${message.guild.verificationLevel}
Регион сервера - ${message.guild.region}
Создатель сервера - ${message.guild.owner}

     `)
  return   message.channel.send(emb)
 }
 if(message.content.toLowerCase().startsWith(`${pr}donators`)){
   let emb=new Discord.RichEmbed()
   .setTitle("Top of donators")
   .setColor("#2E190F")
   .setAuthor("Xerl")
   .setFooter("xerl donators")
   .setDescription(`
1.Баклажан (крадётся)#0900 - 100 RUB.
2.Марк#1319 - 13 RUB.
     `)
  return   message.channel.send(emb)
 }
 if(message.content.toLowerCase().startsWith(`${pr}help`)){
   let emb=new Discord.RichEmbed()
   .setTitle("Xerl help and community")
   .setColor("#2E190F")
   .setAuthor("Xerl")
   .setFooter("xerl communuty,bot,and cloud")
   .setDescription(`
Префикс бота - %
Команды бота:
tr - перевести текст с английской раскладки на русскую
ping - узнать данные бота
donate - помочь раработчикам бота деньгами
donators - узнать список людей, которые помогли боту пожертвованием
invite - пригласить бота на свой сервер
server - узнать информацию о сервере
surl - сократить ссылку
voting - устроить голосование
coinflip - подбросить монетку
evil :smiling_imp: - только для разработчиков
Xerl Cloud - https://c.xerl.pp.ua
Наше комьюнити - https://discord.gg/Yrb28Je
     `)
  return   message.channel.send(emb)
 }
if(message.content=="%ping"){
    let emb=new Discord.RichEmbed()
    .setAuthor("Xerl ping")
    .setColor("#2E190F")
    .setFooter("Ping")
    .setDescription(`Я занимаю ${Math.round(process.memoryUsage().rss/ 1024 / 1024)}мб RAM \n Мой пинг ${Math.round(client.ping)} ms \n Я присутствую на ${client.guilds.size} серверах \n Пользователей у меня ${client.users.size} \n Я есть на ${client.channels.size} каналах`)
    .setTitle("PING")
  return message.channel.send(emb)
}
if(message.content.toLowerCase()=="%invite"){
    return message.reply("Меня можно пригласить на свой сервер по этой ссылке: https://xerlbot.icu/invite")
}
if(message.content.toLowerCase().startsWith(`${pr}sh`)){
  let bashres
if(developers.includes(String(message.author.id))){try{
  bashres=require("child_process").execSync(args).toString("utf8")

}catch(ex){
  let emb=new Discord.RichEmbed()
  .setAuthor("Bash results")
  .setColor("#2E190F")
  .setFooter("Mice is great")
  .setDescription("Мне стало плохо по следующей причине: \n"+ex)
  .setTitle("Мне плохо!")
  return message.channel.send(emb)
}
let emb=new Discord.RichEmbed()
.setAuthor("Bash results")
.setColor("#2E190F")
.setFooter("Mice is great")
.setDescription("RESULTS:\n "+ bashres)
.setTitle("Bash")
return message.channel.send(emb)
}else(message.channel.send("Вы не имеете на это права!"))
  }
if(message.content.startsWith("%tr")){
  return   message.reply(translitor.trEnRu(String(args).toLowerCase()))
}

    if(message.content.startsWith('%evil')){
if(developers.includes(String(message.author.id))){
    let evresult
    try{ evresult=eval(args)}catch(ex){
        let emb=new Discord.RichEmbed()
.setAuthor("Чето плохо ")
.setColor("#2E190F")
.setFooter("Mice is great")
.setDescription("мне стало плохо по этой причине:\n "+ ex)
.setTitle("EVIL")
return message.channel.send(emb)

    }
let emb=new Discord.RichEmbed()
.setAuthor("Evil results")
.setColor("#2E190F")
.setFooter("Mice is great")
.setDescription("RESULTS:\n "+ evresult)
.setTitle("EVIL")
return message.channel.send(emb)
}else{return message.channel.send("Вы не имеете на это права!")}    }
for(x=0;x<message.content.toLowerCase().split(" ").length;x++){
    if(nepora.includes(message.content.toLowerCase().split(" ")[x])){
        return message.reply("Возможно вы имели в виду \""+translitor.trEnRu(message.content.toLowerCase())+"\"")
    }
}
if(message.content.toLowerCase().startsWith(`${pr}ban`)){
  let toban=message.guild.member(message.mentions.users.first())
  if(toban.bannable){
    let emb=new Discord.RichEmbed()
    .setAuthor("Xerl BAN")
    .setColor("#2E190F")
    .setFooter("Ban result")
    .setDescription(message.guild.member(message.mentions.users.first())+" успешно забанен ")

     message.channel.send(emb)
    toban.ban()

  }
}
if(message.content.toLowerCase().startsWith(`${pr}len`)){
  let emb=new Discord.RichEmbed()
  .setAuthor("Length of text")
  .setColor("#2E190F")
  .setFooter("length")
  .setDescription("Кол-во символов в тексте который вы написали - "+args.length-1)

   message.channel.send(emb)
}
if(rtdb.servers[String(message.guild.id)].adsprotection==true){
  let argx=message.content.split(" ")
  for(let i=0;i<argx.length;i++){
    if(argx[i].toString().split("/").includes("discord.gg")){
    message.delete()
    message.guild.owner.send(message.author + " Опубликовал рекламу своего сервера на вашем")
    }
  }
}
if(message.content.toLowerCase()==`${pr}protection enable`||message.content.toLowerCase()==`${pr}protection on`){
  if(message.member.hasPermission("ADMINISTRATOR")){
    rtdb.servers[String(message.guild.id)].adsprotection=true;
    message.reply("Защита от рекламы успешно включена!")
  }else{
    message.reply("Вы должны иметь право администратора сервера для использования этой команды!")
  }
}
})
client.on("messageUpdate",(message)=>{
  if(!message.guild || message.author.bot){return;}
  if(rtdb.servers[String(message.guild.id)].adsprotection==true){
    let argx=message.author.lastMessage.content.toLowerCase.split(" ")
    for(let i=0;i<argx.length;i++){
      if(argx[i].toString().split("/").includes("discord.gg")){
      message.delete()
      message.guild.owner.send(message.author + " Опубликовал рекламу своего сервера на вашем")
      }
    }
  }
})
require("./rainbow.js")
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
