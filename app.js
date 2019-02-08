process.chdir(__dirname)
const ESD=require('esd-discord')
let token=process.env.TOKEN || process.argv[2]
let client=ESD.client(token)
client.onCommand('@info', (msg,opts)=>{
    client.sendEmbedToChannel(opts.channelID, {
        title:"Xerl Info",
        color:"rgb(115, 77, 204)"

    })
})
