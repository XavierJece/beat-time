const { checkIn } = require("./cron-job/checkIn");
const { checkOut } = require("./cron-job/checkOut");

checkIn();
checkOut();
console.log("...... Running 🚀")