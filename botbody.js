const Discord = require(`discord.js`);
const Discord = new Discord.Client();
let config = require(`./botconfig.json`);
let token = config.token;
let prefix = config.prefix;

bot.login(token);
bot.on(`ready`,() => {
    console.log(`Logged here as ${bot.user.username}!`);
    });

bot.on(`message`, msg => {
        if (msg.content === `ping`) {
            msg.reply(`pong!`);
        }
    });
bot.on(`message`, msg => {
    if (msg.content === `anime`) {
        msg.reply(`https://www.yummyclub.com/milosjke`);
        }
    });
    bot.on(`message`, msg => {
        if (msg.content === `vk`) {
            msg.reply(`https://vk.com/milosj`);
         }
  });
bot.on(`message`, msg => {
    if (msg.content === `anime`) {
        msg.reply(`https://www.yummyclub.com/milosjke`);
        }
    });
bot.on(`message`, msg => {
        if (msg.content === `bets`) {
            msg.reply(`https://www.boosty.to/milosj`);
        }
     });
bot.on(`message`, msg => {
        if (msg.content === `pic`){
            msg.reply(`https:pinterest.com`)
        }
    });
ServiceWorker.console(`crashdebug`, alert => {
    if (alert.content === `505`) {
        console.debug(RTCPeerConnection)
        }
    });
ClientRect.call(`crashconfig`, AnalyserNode => {
    if (webkitConvertPointFromNodeToPage,false) RTCPeerConnection(true) ;{
        debug(sessionStorage = RTCSsrcConflictEvent)
    }
});