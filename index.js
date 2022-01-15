const Discord = require('discord.js');
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

Client.on('ready', () => {
  console.log(`Le bot ${Client.user.tag} est connecté !`);
});

const prefix = "ty!";


Client.on("messageCreate", message => {
    if (message.author.bot) return;
//ty!ping
    if(message.content === prefix + "ping"){
        const embed = new Discord.MessageEmbed()
        .setColor("#ffffff")
        .setTitle("🏓Pong")
        .setDescription("Ma latence de ping est de " + Client.ws.ping + " ms")
        
    
    message.channel.send({ embeds: [embed]});
    }
});

Client.login('OTAxNTUxNDUzMTE2Njk4NjI1.YXRhOA.BmEt872Dm-RQZPiNUPCKkj3El24');