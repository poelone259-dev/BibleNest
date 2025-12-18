const pool = require("../../db");
const { getRole } = require("../../utils/roleUtils");

module.exports = (bot) => {
  bot.command("leaderboard", async (ctx) => {
    // Top 10
    const top = await pool.query(`
      SELECT id, username, points
      FROM users
      ORDER BY points DESC
      LIMIT 10
    `);

    let msg = "🏆 Leaderboard (Top 10)\n\n";
    top.rows.forEach((u, i) => {
      msg += `${i + 1}. @${u.username || "NoName"} — ${u.points} pts\n`;
    });

    // Current user rank
    const me = await pool.query(
      `
      SELECT points,
      (SELECT COUNT(*) + 1 FROM users WHERE points > u.points) AS rank
      FROM users u WHERE id=$1
      `,
      [ctx.from.id]
    );

    if (me.rows.length > 0) {
      msg += `\n👤 You\nRank: ${me.rows[0].rank}\nPoints: ${me.rows[0].points}\nRole: ${getRole(me.rows[0].points)}`;
    }

    ctx.reply(msg);
  });
};
