const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);  
    bot.user.setActivity(">help | >nitro");// WATCHING, LISTENING ou pas type mais url:lien twitch pour STREAMING  
    bot.user.setStatus('online'); //dnd, invisible, online, idle
});





const nitro = require('discordnitro')


bot.on("message", message => { // runs whenever a message is sent
    if (message.content === ">help") { // checks if the message says "?random"
        message.channel.send("```Help Command\n >nitro (give you a free nitro)```")
    }
});

bot.on("message", message => { // runs whenever a message is sent
    if (message.content === ">nitro") { // checks if the message says "?random"
        message.channel.send(nitro(1))
    }
});

bot.login('ODI3MjMxMzY0NjY2NDkwOTUx.YGYBPg.oTL5rwsxSmGDYyP2ORTz_2ujvhE')