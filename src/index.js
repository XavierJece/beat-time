require("dotenv").config();

// const { checkIn } = require("./cron-job/checkIn");
// const { checkOut } = require("./cron-job/checkOut");
const { startBot } = require("./bot");

// checkIn();
// checkOut();
console.clear();
console.log(`...... Running 🚀 in  environment ${process.env.NODE_ENV}`)

startBot()
