require('dotenv').config();

const {Telegraf } = require('telegraf')
const{ message }  = require('telegraf/filters')
const axios = require('axios')

const bot = new Telegraf(process.env.BOT_TOKEN)




bot.start((ctx) => ctx.reply('Welcome to Raj\'s Boat'))    //? when i give /start command it will emit this messsage

bot.command('name', (ctx) => ctx.reply('Hi! My name is Raj'))    // when i give /name then it will tell name


bot.on('sticker', (ctx) => ctx.reply('🥰'));  // when somebody send me a sticker then reply with 🥰

// it will download the code from this github link and fetches the data
bot.command('websocket', async(ctx) => {
   const response = await axios.get('https://raw.githubusercontent.com/TheCodeHeist-Coder/webSockets/refs/heads/main/server.js');
   ctx.reply(response.data)
})

bot.on(message('text'), (ctx) => ctx.reply('I don\'t understand humans'))

bot.launch();