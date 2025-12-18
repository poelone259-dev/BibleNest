module.exports = (bot) => {
  bot.command("items", (ctx) => {
    ctx.reply(
      "🛒 Items List\n\n" +
      "ph_1000\n" +
      "ph_2000\n" +
      "ph_3000\n" +
      "ph_5000"
    );
  });
};
