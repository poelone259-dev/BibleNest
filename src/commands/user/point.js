// point.js
const pool = require("../../db");
module.exports = (bot) => {
  bot.command("point", async (ctx) => {
    const { rows } = await pool.query(
      "SELECT points FROM users WHERE id=$1",
      [ctx.from.id]
    );
    ctx.reply(`⭐ Your Points: ${rows[0].points}`);
  });
};
