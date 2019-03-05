process.chdir(__dirname)
var mysql      = require('mysql');
var sql = mysql.createConnection({
  host     : 'remotemysql.com',
  user     : 'x7AOGsQwTV',
  password : 'APrqWNjWpP',
  database : 'x7AOGsQwTV'
});

sql.connect();
let warnedFlood = new Set();


var isgd = require('isgd');
let lib=require("./utils/lib.js")
let pr="%"
const Discord=require('discord.js')
var shajs = require('sha.js')
let nepora=["ghbdtn","rfr","ult","rjulf","pfxtv","ltkfnm","vjq","nt,t","cjcb","ghjcnj", "pfqlb", "yfcnhjqrb","lfkmit","cvj;tim","ghbxtv","jyj","gthtdjlbn","gj,tlbk","gj,tlbkf","xnj","'nf","cltkfk",",eltn","gjktpty","gjktpyf","[jhjij","[jhjifz","cegth","vj;tim","hfpujdfhbdf.","'nj","crfpfk","evysq"]
let token=process.env.TOKEN || process.argv[2]
let color = "#c5fcb3"
let developers = ["343046183088029696","428036906723573760","406343162651738112"]
const client = new Discord.Client(); client.login(token)
function delFromArray(array, nameofemement){
  return array.splice(nameofemement, 1)
}
let translitor=require("./utils/translitor")

console.log(translitor.trEnRu("ghbdtn"))
client.once("ready", ()=>{
client.user.setActivity("%help || xerlbot.icu",{"type":"WATCHING"})

})

client.on("guildCreate",(guild)=>{
sql.query("INSERT INTO `servers` (`id`, `adsprotection`) VALUES ("+guild.id+", '0');", (err,res,fields)=>{console.log(res)})

})
client.on("guildMemberAdd", (member)=>{
    if(member.guild.id == 540192529933664297){
        member.addRole(member.guild.roles.find('name', "Member"))
    }
})

client.on("guildCreate", guild => {
  const logsServerJoin = client.channels.get('551479276247973889');
  const embed = new Discord.RichEmbed()
  .setTitle(guild.name)
  .setDescription("Новый сервер.")
  .setColor(color)
  .addField("Количество людей:", guild.memberCount)
  .addField("Количество ролей:", guild.roles.size)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID:", guild.id)
   logsServerJoin.send(embed);
});
client.on("guildDelete", guild => {
  const logsServerLeave = client.channels.get('551479276247973889');
  const embed = new Discord.RichEmbed()
  .setTitle(guild.name)
  .setDescription("Я был удалён с сервера.")
  .setColor("RED")
  .addField("Количество людей:", guild.memberCount)
  .addField("Количество ролей:", guild.roles.size)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID:", guild.id)

  logsServerLeave.send(embed);
});


client.on('message',(message)=>{

  if (!message.guild || message.author.bot) return;
    let args=""
    for(let x=1;x<message.content.split(" ").length;x++){

        args = args+message.content.split(" ")[x]+" "
    }
    // if(message.content.toLowerCase().startsWith(`${pr}money`)){
    //   if(!undefined.users[String(message.author.id)]){
    //     undefined.users[String(message.author.id)]={"money":0,"canwork":true}
    //     console.log(undefined)
    //   }
//       const embed = new Discord.RichEmbed()
//       .setAuthor(message.author.username,message.author.displayAvatarURL)
//       .setColor(color)
//       .setThumbnail(message.author.avatarURL)
//       .setDescription("Твой баланс "+String(undefined.users[String(message.author.id)].money)+"<:money:551523400158412820>")
// message.channel.send(embed)
//       }
//     if(message.content.toLowerCase().startsWith(`${pr}work`)){
//       if(!undefined.users[String(message.author.id)]){
//         undefined.users[String(message.author.id)]={"money":0, "canwork":true}
//         console.log(undefined)
//       }
//       if(undefined.users[String(message.author.id)].canwork==false){
//         const embed = new Discord.RichEmbed()
//         .setColor("RED")
//         .setAuthor(message.author.username,message.author.displayAvatarURL)
//         .setDescription('<:no:551490591155027970> **Вы можете работать только раз в 2 часа!**')
// message.channel.send(embed)
//         }else{
//       //let work1 = [`Банкиром`, `Дворником`,`Выгульщиком собак`,`Официантом`,`Барменом`,`Уборщиком`];
//      // let work2 = Math.floor(Math.random() * work1.length);
//       let workedmoney=lib.random(1,100)
//       undefined.users[String(message.author.id)].money+=workedmoney
//       console.log(undefined)
//       const embed = new Discord.RichEmbed()
//       .setAuthor(message.author.username,message.author.displayAvatarURL)
//       .setColor(color)
//       .setDescription(`Вы поработали и заработали `+String(workedmoney)+ `<:money:551523400158412820>`)
// message.channel.send(embed)
//       undefined.users[String(message.author.id)].canwork=false
//       console.log(undefined)
//       setTimeout(()=>{
//         undefined.users[String(message.author.id)].canwork=true
//         console.log(undefined)
//       },720000)
//     }
//     }
    if(message.content.toLowerCase()==`${pr}voting`){

      message.reply("**Сообщите мне сообщение голосования**").then(m1=>{

        let colctr = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000 });
        colctr.once("collect", (message)=>{
          m1.delete()
          let votecontent=message.content
          message.reply("**Теперь сообщите мне варианты ответа**").then(m2=>{
            let colctr2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000 });
            colctr2.once("collect", (message)=>{
              m2.delete()
    let arg2=message.content.split('')
    let emb=new Discord.RichEmbed()
    .setTitle("Voting")
    .setColor(color)
    .setDescription(votecontent)
    .setFooter("Please select")
    message.channel.send(emb).then(msg=>{
      let emjes=[]
      if(arg2.includes("y")){
        emjes.push("✅")
      }
        if (arg2.includes("n")) {
          emjes.push("❎")
        }
      if(arg2.includes('1')){
        emjes.push("1⃣")
      }
      if(arg2.includes("2")){
        emjes.push("2⃣")
      }
      if(arg2.includes("3")){
        emjes.push("3⃣")
      }
      if(arg2.includes("4")){
        emjes.push("4⃣")
      }
      if(arg2.includes("5")){
        emjes.push("5⃣")
      }
      if(arg2.includes("6")){
        emjes.push("6⃣")
      }
      if(arg2.includes("7")){
        emjes.push("7⃣")
      }
      if(arg2.includes("8")){
        emjes.push("8⃣")
      }
      if(arg2.includes("9")){
        emjes.push("9⃣")
      }
for(let i=0;i<emjes.length;i++){

  setTimeout(()=>{msg.react(emjes[i])},i*300)
}
    })
            })
          })
        })
      })
    }
    if(message.content.startsWith(`${pr}gs`)){
      message.reply("**Cообщите мне главный приз конкурса**").then(msg=>{
        let colctr=new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000 })
        colctr.once("collect", (message)=>{
          msg.delete()
          let contheme=message.content
          message.reply("**Хорошо, теперь сообщите мне время,через которое истечет конкурс**").then(msg=>{
            let colctr2=new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000 })
            colctr2.once("collect",message=>{
              msg.delete()
              let time
              if(message.content.toLowerCase().endsWith("m")){
                time=Number(String(Number(message.content.toLowerCase().replace("m",""))*60)+"000")
              }else{
                time=Number(String(Number(message.content.toLowerCase().replace("s","")))+"000")
              }
              let emb=new Discord.RichEmbed()
              .setTitle(contheme)
              .setColor(color)
              .setThumbnail('https://cdn.discordapp.com/attachments/482516986677428244/551483342231699456/726532.png')
              .setDescription(`Разыгрывается **${contheme}**!🎉`)
              .setFooter(`Для участия в розыгрыше ${contheme} поставьте галочку под сообщением.`)
              message.channel.send(emb).then(msg=>{
                msg.react("✅").then(rct=>{

                  setTimeout(()=>{
                    winner=rct.users.array()[lib.random(1,rct.users.size-1)]
                    msg.channel.send(winner+" выйграл "+contheme+"! Мои поздравления!🎉")
                  },time )
          })
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
  const embed = new Discord.RichEmbed()
  .setTitle('Donate')
  .setColor(color)
  .setDescription('<:panda_money:551497493532377124> **Вы можете поддержать моих разработчиков по этим ссылкам:**\n\n <:yandex_money:551495863600414730>\`Yandex Money\` - https://xerl.ga/donate.js?money="+mn+"\n<:qiwi:551495863344693258>\`Qiwi\` - https://qiwi.me/xerl\n<:yandex_money:551495863600414730>\`Я Соберу\` - https://yasobe.ru/na/xerl')
  return message.channel.send(embed)
 }
 if(message.content.toLowerCase().startsWith(`${pr}coinflip`)){
   let r=lib.random(1,2)
   if(r==1){
     message.channel.send("**Выпал Орёл!**")
     message.channel.sendFile("./img/eagle.jpg")
   }else{
     message.channel.send("Выпала Решка!")
     message.channel.sendFile("./img/reshka.jpg")
   }
 }
 if(message.content.toLowerCase()==`${pr}server`){
  // var d = message.member.createdAt;
  // var timen = d.toLocaleString();
   let emb=new Discord.RichEmbed()
   .setTitle("Server info")
   .setColor(color)
   .setAuthor("Xerl")
   .setFooter("Server info")
   .setThumbnail(message.guild.iconURL)
   .setDescription(`
Имя сервера - \`${message.guild.name}\`
ID сервера - \`${message.guild.id}\`
ID этого канала - \`${message.channel.id}\`
Кол-во людей на сервере - \`${message.guild.members.size}\`
Кол-во ролей на сервере - \`${message.guild.roles.size}\`
Кол-во каналов на сервере - \`${message.guild.channels.size}\`
Кол-во емоджи на сервере - \`${message.guild.emojis.size}\`
Степень верификации - \`${message.guild.verificationLevel}\`
Регион сервера - \`${message.guild.region}\`
Создатель сервера - ${message.guild.owner}
Сервер создан ${message.guild.createdAt}
     `)
  return   message.channel.send(emb)
 }
 if(message.content.toLowerCase().startsWith(`${pr}donators`)){
   let emb=new Discord.RichEmbed()
   .setTitle("Top of donators")
   .setColor(color)
   .setThumbnail('https://media.discordapp.net/attachments/548220541576806400/551518150672253016/631180.png?width=135&height=135')
   .setAuthor("Xerl",'https://cdn.discordapp.com/attachments/482516986677428244/548450467525427209/xerl.png')
   .setFooter("Спасибо им за донаты❤")
   .setDescription(`
1. Баклажан (крадётся)#0900 - 100 RUB.
2. MerdedSpade#2613 - 67 RUB.
3. Марк#1319 - 13 RUB.
     `)
  return   message.channel.send(emb)
 }
 if(message.content.toLowerCase().startsWith(`${pr}help`)){

  return   message.channel.send("Для того что-бы узнать обо всех моих коммандах перейдите на https://xerlbot.icu/commands")
 }
if(message.content=="%ping"){
 let d = new Date(); 
let timen = d.toLocaleString();
    let emb=new Discord.RichEmbed()
    .setAuthor("Xerl ping",'https://cdn.discordapp.com/attachments/482516986677428244/548450467525427209/xerl.png')
    .setColor(color)
    .setDescription(`Я занимаю ${Math.round(process.memoryUsage().rss/ 1024 / 1024)}мб RAM \n Я был запущен ${timen} \n Мой пинг \`${Math.round(client.ping)}\`ms \n Я присутствую на \`${client.guilds.size}\` серверах \n Пользователей у меня \`${client.users.size}\` \n Я есть на \`${client.channels.size}\` каналах`)
  return message.channel.send(emb)
}
if(message.content.toLowerCase()=="%invite"){
    return message.reply("Меня можно пригласить на свой сервер по этой ссылке: https://xerlbot.icu/invite")
}
if(message.content.toLowerCase().startsWith(`${pr}shell`)){
  let bashres
if(developers.includes(String(message.author.id))){try{
  bashres=require("child_process").execSync(args).toString("utf8")

}catch(ex){
  let emb=new Discord.RichEmbed()
  .setAuthor("Bash results")
  .setColor(color)
  .setFooter("Mice is great")
  .setDescription("Мне стало плохо по следующей причине: \n"+ex)
  .setTitle("Мне плохо!")
  return message.channel.send(emb)
}
let emb=new Discord.RichEmbed()
.setAuthor("Bash results")
.setColor(color)
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
.setColor("RED")
.setFooter("Mice is great")
.setDescription("мне стало плохо по этой причине:\n "+ ex)
.setTitle("EVIL")
return message.channel.send(emb)

    }
let emb=new Discord.RichEmbed()
.setAuthor("Evil results")
.setColor(color)
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
if(message.content.toLowerCase().startsWith(`${pr}avatar`)){
  message.channel.send({files:[message.mentions.users.first().avatarURL.split('?')[0]]})
}
if(message.content.toLowerCase().startsWith(`${pr}ban`)){
  let toban=message.guild.member(message.mentions.users.first())
  if(toban.bannable){
    let emb=new Discord.RichEmbed()
    .setAuthor("Xerl BAN")
    .setColor(color)
    .setFooter("Ban result")
    .setDescription(message.guild.member(message.mentions.users.first())+" **успешно забанен** <:ban:551486850536308768>")

     message.channel.send(emb)
    toban.ban()

  }
}
if(message.content.toLowerCase().startsWith(`${pr}len`)){
  let emb=new Discord.RichEmbed()
  .setAuthor("Length of text")
  .setColor(color)
  .setFooter("length")
  .setDescription("Кол-во символов в тексте который вы написали - "+args.split('').length-1)

   message.channel.send(emb)
}
if(message.content.toLowerCase().split("discord.gg").length>1||message.content.toLowerCase().split("discordapp.com/invite").length>1){
  sql.query("SELECT adsprotection FROM servers  WHERE id = "+String(message.guild.id),(err,res,field)=>{
    if(err){message.channel.send(err)}
    if(res[0].adsprotection==true){
      message.delete()
      message.guild.owner.send(message.author+" **опубликовал сервера на вашем!⚠**")
    }
  })
}
sql.query("SELECT adsprotection FROM servers  WHERE id = "+String(message.guild.id),(err,res,field)=>{
if(err){console.log(err)}
  if(res[0].adsprotection==true){

    let collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 6000 })
    collector.on('collect', msg => {
        collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 4000 })
        collector.on('collect', msg2 => {
            collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 2000 })
            collector.on('collect', msg3 => {
                if (!warnedFlood.has(message.author.id)) {
                    msg3.delete();
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username,message.author.displayAvatarURL)
                .setColor(color)
                .setDescription('**Администратор сервера неодобряет флуд,спам здесь!При следущей попытке флуда вы будете кикнуть**')
                    message.channel.send(embed).then(msg5=>{msg5.delete(3000)})
                    warnedFlood.add(message.author.id);
                    setTimeout(() => warnedFlood.delete(message.author.id), 3000)
                }
            })
        })
    })
    if (warnedFlood.has(message.author.id)) {
      warnedFlood.delete(message.author.id)
      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 4000 })
      collector.on('collect', msg => {
          msg.delete();
              if (message.member.kickable) {
                const embed = new Discord.RichEmbed()
                .setAuthor(message.author.username,message.author.displayAvatarURL)
                .setColor(color)
                .setDescription('<:yes:551490591536578590> <@${message.author.id}>**Был кикнут,по причине: **\`Флуд,спам\`')
                  message.member.kick(embed);
              }
              else{
                const embed = new Discord.RichEmbed()
                .setColor("RED")
                .setDescription("<:no:551490591155027970>**У меня нету прав** \`KICK_MEMBERS\` **для кика данного пользователя**")
                .setImage('https://media.discordapp.net/attachments/548220541576806400/552489909445853205/unknown.png?width=398&height=48')
                 message.channel.send(embed).then(msg=>{msg.delete()(3000)})
              }


      });
  }
  }
})
if(message.content.toLowerCase()==`${pr}protection disable`||message.content.toLowerCase()==`${pr}protection off`){
  if(message.member.hasPermission("ADMINISTRATOR")){
sql.query('UPDATE `servers` SET `adsprotection`=0 WHERE id='+message.guild.id,(err)=>{if(err){console.log(err)}})
    message.reply("**Защита выключена.Теперь ваш сервер снова в опасности!** <:no:551490591155027970>")
  }else{
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription('<:no:551490591155027970>**Вы должны иметь право** `ADMINISTRATOR`')
    .setImage('https://cdn.discordapp.com/attachments/548220541576806400/551512937311895552/1.png')
    message.channel.send(embed)  }
}
if(message.content.toLowerCase()==`${pr}protection enable`||message.content.toLowerCase()==`${pr}protection on`){
  if(message.member.hasPermission("ADMINISTRATOR")){
  sql.query('UPDATE `servers` SET `adsprotection`=1 WHERE id='+message.guild.id,(err)=>{if(err){console.log(err)}})
    message.reply("**Защита включена успешно! Ваш сервер в безопасности!** <:yes:551490591536578590>")
  }else{
    const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setDescription('<:no:551490591155027970>**Вы должны иметь право** `ADMINISTRATOR`')
    .setImage('https://cdn.discordapp.com/attachments/548220541576806400/551512937311895552/1.png')
    message.channel.send(embed)
  }
}
if(message.content.toLowerCase().startsWith(`${pr}say`)){
  message.delete(100)
  message.channel.send(args)
}
if(message.content.toLowerCase().startsWith(`${pr}sha256`)){
  return message.reply("SHA256 Твоего текста: "+shajs('sha256').update(args).digest('hex'))
}
if(message.content.toLowerCase().startsWith(`${pr}sha224`)){
  return message.reply("SHA224 Твоего текста: "+shajs('sha224').update(args).digest('hex'))
}
if(message.content.toLowerCase().startsWith(`${pr}sha512`)){
  return message.reply("SHA512 Твоего текста: "+shajs('sha512').update(args).digest('hex'))
}
if(message.content.toLowerCase().startsWith(`${pr}sha384`)){
  return message.reply("SHA384 Твоего текста: "+shajs('sha384').update(args).digest('hex'))
}
if(message.content.toLowerCase().startsWith(`${pr}haste`)){
  const hastebin = require('hastebin-gen');
  args=args.split(' ')
  args.splice(0,1)
  args=args.join(' ')
  hastebin(args,message.content.toLowerCase().split(' ')[1]).then(ur=>{message.reply(ur)}).catch(message.channel.send)
}
if(developers.includes(String(message.author.id))){return}
})
client.on("messageUpdate",(message)=>{
  if(!message.guild || message.author.bot){return;}
  if(message.author.lastMessage.content.toLowerCase().split("discord.gg").length>1||message.author.lastMessage.content.toLowerCase().split("discordapp.com/invite").length>1){
    sql.query("SELECT adsprotection FROM servers  WHERE id = "+String(message.guild.id),(err,res,field)=>{
      if(err){message.channel.send(err)}
      if(res[0].adsprotection==true){
        message.delete()
        const embed = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.displayAvatarURL)
        .setColor("RED")
        .setDescription('**Администратор данного сервера запретил рекламировать сторонние сервера!**')
        message.reply(".").then(msg=>{msg.edit(embed)(1000)})
      }
    })
  }
  if(developers.includes(String(message.author.id))){return}


})
require("./utils/rainbow.js")
