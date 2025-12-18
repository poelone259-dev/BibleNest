console.log("rolerule loaded");

module.exports = (bot) => {
  bot.command("rolerule", (ctx) => {
    ctx.reply(
      "🏅 Role Rules\n\n" +
      "0 pts - New Member\n" +
      "500-999 pts - Bronze (Reward: 500)\n" +
      "1000-1999 pts - Silver (Reward: 1000)\n" +
      "2000-2999 pts - Gold (Reward: 2000)\n" +
      "3000-4999 pts - Platinum (Reward: 4000)\n" +
      "5000+ pts - Diamond (Reward: 5000)\n\n" +
      "🎁 Monthly reward ကို လ၏ ၁ ရက်နေ့တွင် ပေးပါသည်"
    );
  });
};
