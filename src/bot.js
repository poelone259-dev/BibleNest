require("dotenv").config();
const { Telegraf } = require("telegraf");
const pool = require("./db");

const bot = new Telegraf(process.env.BOT_TOKEN);

console.log("bot.js loaded");


// Register user
bot.use(async (ctx, next) => {
  try {
    if (!ctx.from) return next();

    await pool.query(
      `INSERT INTO users (id, username, first_name)
       VALUES ($1,$2,$3)
       ON CONFLICT (id) DO NOTHING`,
      [ctx.from.id, ctx.from.username, ctx.from.first_name]
    );

    return next();
  } catch (err) {
    console.error("User register error:", err);
    return next(); // ❗ မဖြစ်မနေ
  }
});

bot.start((ctx) => {
  ctx.reply("✅ BibleNest bot alive");
});


require("./jobs/monthlyReward");

// User commands
require("./commands/user/work")(bot);
require("./commands/user/point")(bot);
require("./commands/user/role")(bot);
require("./commands/user/rolerule")(bot);
require("./commands/user/verse")(bot);
require("./commands/user/items")(bot);
require("./commands/user/buy")(bot);
require("./commands/user/leaderboard")(bot);
require("./commands/user/help")(bot);
require("./commands/user/adminContact")(bot);

// Admin commands
require("./commands/admin/userlist")(bot);
require("./commands/admin/addpoint")(bot);
require("./commands/admin/removepoint")(bot);
require("./commands/admin/buyers")(bot);
require("./commands/admin/userinfo")(bot);

// /get_id @username
if (cmd === "/get_id") {
  if (!isAdmin(msg.from.id)) return;

  if (!msg.reply_to_message) {
    bot.sendMessage(msg.chat.id, "🔎 Reply to a user's message and type /get_id");
    return;
  }

  const target = msg.reply_to_message.from;
  bot.sendMessage(
    msg.chat.id,
    `👤 Username: @${target.username || "No username"}\n🆔 User ID: ${target.id}`
  );
}


bot.launch()
  .then(() => console.log("✅ BibleNest Bot is running"))
  .catch((err) => console.error("❌ Bot launch error:", err));

// Graceful stop (Railway / Heroku style)
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
