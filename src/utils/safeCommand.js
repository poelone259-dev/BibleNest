module.exports = (fn) => async (ctx) => {
  try {
    await fn(ctx);
  } catch (err) {
    console.error(err);
    ctx.reply("⚠️ Error ဖြစ်နေပါတယ်။ နောက်မှ ပြန်စမ်းပါ");
  }
};
