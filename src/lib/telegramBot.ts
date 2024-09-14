import TelegramBot from "node-telegram-bot-api";

const token = process.env.TOKEN || "";
//const token = '6231546468:AAHPV9pFC_2VHn4ELjW3tOz-EKs-y5ak92g'
let bot: TelegramBot;

declare global {
  var __bot: TelegramBot | undefined;
}

if (!global.__bot) {
  global.__bot = new TelegramBot(token, { polling: true });
}

bot = global.__bot;

export default bot;
