const cron = require("node-cron");
const pool = require("../db"); // 🔥 path သတိထားပါ

// Myanmar Time (UTC+6:30) အတွက်
cron.schedule(
  "0 0 1 * *",
  async () => {
    try {
      await pool.query(`
        UPDATE users
        SET points = points +
          CASE
            WHEN points >= 5000 THEN 5000
            WHEN points >= 3000 THEN 4000
            WHEN points >= 2000 THEN 3000
            WHEN points >= 1000 THEN 2000
            WHEN points >= 500 THEN 1000
            ELSE 0
          END
      `);

      console.log("🎁 Monthly rewards distributed");
    } catch (err) {
      console.error("❌ Monthly reward error:", err);
    }
  },
  {
    timezone: "Asia/Yangon"
  }
);
