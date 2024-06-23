const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config();
const bot  = new Telegraf(process.env.BOT_TOKEN);




const binarySearchString = `
const binarySearch = function search(arr, x) {
 
    let start = 0, end = arr.length - 1;
 
    // Iterate while start not meets end
    while (start <= end) {
 
        // Find the mid index
        let mid = Math.floor((start + end) / 2);
 
        // If element is present at 
        // mid, return True
        if (arr[mid] === x) return true;
 
        // Else look in left or 
        // right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
 
    return false;
}
`;

try {
    
        bot.start((ctx) => ctx.reply(
        `Welcome To Subrt \'s Algo Bot
        You can communicate with this bot using  / at starting for acessing commands
        for commnication simple write text message that you want 
        Some commands :
        /start
        /help
        /leetcode
        /github
        /binarysearch
        /SortCharacterByFrequency
        /toplinuxcommands`));
      bot.command('binarysearch',(ctx)=> ctx.reply(binarySearchString));


      bot.command('toplinuxcommands',(ctx) => ctx.reply('ls cwd pwd grep rm'));
      bot.command('leetcode',(ctx) => ctx.reply(`Copy the url and paste it in your browser
        https://leetcode.com/u/Subrat03/`));

        bot.command('SortCharacterByFrequency', async (ctx) =>{
            const response = await axios.get('https://raw.githubusercontent.com/ssubrt/DSA-Striver-Sheet/main/Day-42/Sort%20Character%20by%20Frequency.cpp');
            ctx.reply(response.data);
        })

      bot.command('github',(ctx) => ctx.reply(`Copy the url and paste it in your browser
        https://github.com/ssubrt`));
      


       bot.on('sticker',(ctx) => ctx.reply('👍'));

       

       bot.help((ctx) => ctx.reply('Send me a sticker'));

      bot.on('text',(ctx) => ctx.reply('I did not understand humans language'));


       bot.launch();

}

catch {
    console.log("expected Error");
}

