process.chdir(__dirname)
const ESD=require('esd-discord')
let token=process.env.TOKEN || process.argv[2]
let client=ESD.client(token)
client.onCommand('@info', (msg,opts)=>{
    client.sendEmbedToChannel(opts.channelID, {
        title:"Xerl Info",
        color:115,
        description:'Xerl Это разнообразный дискорд бот, который может практически все.',
        footer:'Разработчик Mice 2.0'
    })
})
