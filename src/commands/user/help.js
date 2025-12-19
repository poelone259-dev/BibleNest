console.log("help command loaded");

module.exports = (bot) => {
  bot.command("help", (ctx) => {
    ctx.reply(
      "📖 BibleNest Bot Commands\n\n" +
      "👤 User Commands\n" +
      "/work - ၃ နာရီတစ်ခါ Point ရယူ\n" +
      "/point - မိမိ Point စစ်\n" +
      "/role - မိမိ Role စစ်\n" +
      "/rolerule - Role စည်းမျဉ်းများ\n" +
      "/verse - ကျမ်းပိုဒ်တစ်ခု ရယူ\n" +
      "/items - လက်ဆောင်စာရင်း\n" +
      "/buy <item> - Point ဖြင့် လက်ဆောင်ဝယ်\n" +
      "/leaderboard - Top Users\n" +
      "/admin - Admin ကို ဆက်သွယ်\n\n" +
      "⚙️ Admin Commands\n" +
      "/userlist\n" +
      "/addpoint <id> <amount>\n" +
      "/removepoint <id> <amount>\n" +
      "/buyers\n" +
      "/users <id>"
    );
  });
};
