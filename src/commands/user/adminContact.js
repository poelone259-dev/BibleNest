module.exports = (bot) => {
  bot.command("admin", (ctx) => {
    ctx.reply(
      "📩 Admin ကို ဆက်သွယ်ရန်\n\n" +
      "ဒီ message ကို reply လုပ်ပြီး စာရေးပို့ပါ။"
    );
  });

  bot.on("text", async (ctx) => {
    if (!ctx.message.reply_to_message) return;
    if (!ctx.message.reply_to_message.text.includes("Admin ကို ဆက်သွယ်ရန်")) return;

    const adminUser = process.env.ADMIN_USERNAME;

    await bot.telegram.sendMessage(
      `@${adminUser}`,
      `📨 Message from @${ctx.from.username}\n\n${ctx.message.text}`
    );

    ctx.reply("✅ Admin ထံသို့ ပို့ပြီးပါပြီ");
  });
};
