require("dotenv").config();

const { checkIn } = require("./cron-job/checkIn");
const { checkOut } = require("./cron-job/checkOut");

checkIn();
checkOut();
console.log(`...... Running 🚀 in  environment ${process.env.NODE_ENV}`)