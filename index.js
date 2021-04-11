//Code proposé par Natrix#1167

const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);  
    bot.user.setActivity(">help | >nitro");
    bot.user.setStatus('online'); 
});





const nitro = require('discordnitro')


bot.on("message", message => { 
    if (message.content === ">help") { 
        message.channel.send("```Help Command\n >nitro (give you a free nitro)```")
    }
});

bot.on("message", message => { 
    if (message.content === ">nitro") { 
        message.channel.send(nitro(1))
    }
});

bot.login(process.env.TOKEN)

//Code proposé par Natrix#1167
