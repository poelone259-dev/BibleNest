// buy.js
const pool = require("../../db");
const ADMIN = process.env.ADMIN_USERNAME;

const prices = {
  ph_1000: 1000,
  ph_2000: 2000,
  ph_3000: 3000,
  ph_5000: 5000
};

module.exports = (bot) => {
  bot.command("buy", async (ctx) => {
    const item = ctx.message.text.split(" ")[1];
    if (!prices[item]) return ctx.reply("❌ Item မတွေ့ပါ");

    const cost = prices[item];

    const { rows } = await pool.query(
      "SELECT points FROM users WHERE id=$1",
      [ctx.from.id]
    );

    if (rows[0].points < cost)
      return ctx.reply("❌ Point မလုံလောက်ပါ");

    await pool.query(
      "UPDATE users SET points = points - $1 WHERE id=$2",
      [cost, ctx.from.id]
    );

    await pool.query(
      "INSERT INTO purchases (user_id, item, cost) VALUES ($1,$2,$3)",
      [ctx.from.id, item, cost]
    );

    ctx.reply(`✅ ${item} ကို ${cost} Points ဖြင့် ဝယ်ပြီးပါပြီ`);

    bot.telegram.sendMessage(
      `@${ADMIN}`,
      `🛒 New Purchase\nUser: ${ctx.from.username}\nItem: ${item}`
    );
  });
};
