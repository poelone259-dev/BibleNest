// items.js
module.exports = (bot) => {
  bot.command("items", (ctx) => {
    ctx.reply(
      "🛒 Items List\n\n" +
      "ph_1000\nph_2000\nph_3000\nph_5000"
    );
  });
};
