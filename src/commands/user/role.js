// role.js
const pool = require("../../db");
const { getRole } = require("../../utils/roleUtils");

module.exports = (bot) => {
  bot.command("role", async (ctx) => {
    const { rows } = await pool.query(
      "SELECT points FROM users WHERE id=$1",
      [ctx.from.id]
    );
    ctx.reply(`🏅 Your Role: ${getRole(rows[0].points)}`);
  });
};
