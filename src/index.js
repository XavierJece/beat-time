require("dotenv").config();

const { check } = require("./cron-job/check");
// const { startBot } = require("./bot/index");

console.clear();

console.log(`...... Running 🚀 in  environment ${process.env.NODE_ENV}`)
check();

// startBot();