module.exports = (ctx) => {
  const admin = process.env.ADMIN_USERNAME;
  return ctx.from.username === admin;
};

const isAdmin = require("../../utils/adminOnly");

if (!isAdmin(ctx)) {
  return ctx.reply("❌ Admin only command");
}
