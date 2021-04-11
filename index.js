//Code proposé par Natrix#1167

const Discord = require('discord.js')
const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);  
    bot.user.setActivity(">help | >nitro");// WATCHING, LISTENING ou pas type mais url:lien twitch pour STREAMING  
    bot.user.setStatus('online'); //dnd, invisible, online, idle
});





const nitro = require('discordnitro')


bot.on("message", message => { // runs whenever a message is sent
    if (message.content === ">info") { // checks if the message says "?random"
        message.channel.send("```Informations:\n\n Owner : Natrix#1167\n Nitros Claimed : +869k```")
    }
});



bot.on("message", message => { // runs whenever a message is sent
    if (message.content === ">help") { // checks if the message says "?random"
        message.channel.send("```Help Command\n >nitro (give you a free nitro)\n >info (informations about the bot)```")
    }
});

bot.on("message", message => { // runs whenever a message is sent
    if (message.content === ">nitro") { // checks if the message says "?random"
        message.channel.send(nitro(1))
    }
});



bot.login(process.env.TOKEN)

//Code proposé par Natrix#1167
