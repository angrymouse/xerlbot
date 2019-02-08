const ESD=require('esd-discord')
let token=process.env.TOKEN || process.argv[2]
ESD.client(token)
