const Discord = require("discord.js");
const client = new Discord.Client();
const forEachTimeout = require('foreach-timeout');
// const hastebinGen = require('hastebin-gen');
// const mysql = require('mysql');

const creator = '343046183088029696';
const hexreg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

let prefix = '%';

let rainbowOn = new Set();
let rainbowRole = new Set();
let colors = ['#ff0000', '#ffa500', '#ffff00', '#00ff00', '#00BFFF', '#0000ff', '#ff00ff'];




function send(id, msg) {
    client.channels.get(id).send(msg);
}

async function roleChanginging () {
    forEachTimeout(colors, color => {
        client.guilds.forEach(guild => {
            if (rainbowOn.has(guild.id) && guild.roles.find(r => r.name === 'xerlbot.icu')) {
                const role = guild.roles.find(r => r.name === 'xerlbot.icu')
                if (role.editable && role) role.setColor(color);
            };
        });
    }, 1500).then(() => roleChanginging());
};

roleChanginging();

client.on('message', message => {
    if (message.channel.type !== 'text' || message.author.bot || !message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    function random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }

    if (!message.content.startsWith(prefix)) return;

    function succ (text) {
        const embed = new Discord.RichEmbed()
        .setColor('55ff55')
        .setTitle('Успех :white_check_mark:')
        .setDescription(`**${text}**`)
        return message.channel.send({embed});
    }

    function err (text, perms) {
        const embed = new Discord.RichEmbed()
        .setColor('ff5555')
        .setTitle('Ошибка :exclamation:')
        .setDescription(`Причина: **${text}**`)
        if (perms) embed.setDescription(`**У вас нет права "${perms}"**`);
        return message.channel.send({embed});
    }

    if (command === 'stop') {
        if (!message.member.hasPermission("MANAGE_ROLES")) return err(null, 'Управление ролями')

        if (!rainbowOn.has(message.guild.id)) return err('Изменение радужной роли и так не включено')

        rainbowOn.delete(message.guild.id)
        succ('Изменение радужной роли успешно отключено')
    }

        if (['rainbow', 'rb'].includes(command)) {
            const role = message.guild.roles.find(r => r.name === 'xerlbot.icu');

            if (!message.member.hasPermission("MANAGE_ROLES")) return err(null, 'Управление ролями');

            if (!role) return err('На вашем сервере нет роли с названием \`xerlbot.icu\`');

            if (!role.editable) return err(`У меня недостаточно прав для изменения роли ${role}`);

            if (rainbowOn.has(message.guild.id)) return err('Нелья создавать более одной меняющейся роли на сервере');

            rainbowOn.add(message.guild.id);

            succ('Авто-изменение радужной роли успешно включено');
        }

});
client.login(process.env.TOKEN);
