require("dotenv").config();

const { check } = require("./cron-job/check");
console.clear();

console.log(`...... Running 🚀 in  environment ${process.env.NODE_ENV}`)
check();