console.log("verse command loaded");

module.exports = (bot) => {
  const verses = [
    "📖 Psalm 23:1 — The Lord is my shepherd; I shall not want.",
    "📖 Proverbs 3:5 — Trust in the Lord with all your heart.",
    "📖 John 3:16 — For God so loved the world...",
    "📖 Romans 8:28 — All things work together for good.",
    "📖 Isaiah 41:10 — Fear not, for I am with you."
  ];

  bot.command("verse", (ctx) => {
    const verse = verses[Math.floor(Math.random() * verses.length)];
    ctx.reply(verse);
  });
};
