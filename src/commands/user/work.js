const pool = require("../../db");

module.exports = (bot) => {
  bot.command("work", async (ctx) => {
    const userId = ctx.from.id;

    const { rows } = await pool.query(
      "SELECT last_work FROM users WHERE id=$1",
      [userId]
    );

    const last = rows[0].last_work;
    if (last && Date.now() - new Date(last).getTime() < 3 * 60 * 60 * 1000) {
      return ctx.reply("⏳ ၃ နာရီတစ်ခါသာ /work သုံးနိုင်ပါတယ်");
    }

    const rewards = [1,2,3,4,5,6,7,8,9,10,20,30,40,50];
    const reward = rewards[Math.floor(Math.random() * rewards.length)];

    await pool.query(
      `UPDATE users SET points = points + $1, last_work = NOW() WHERE id=$2`,
      [reward, userId]
    );

    ctx.reply(`💼 Work ပြီးပါပြီ!\n🎁 +${reward} Points`);
  });
};
