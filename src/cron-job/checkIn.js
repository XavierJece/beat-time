const { cronJob } = require("./cronJob");
const { startBot } = require("../bot");

const checkIn = () => {
  // MON - FRI (19h)
  cronJob("0 0 9 * * SUN,TUE,WED,THU,FRI", async () => {
    await startBot();
    console.log("checkIn: MON - FRI");
  });
};

module.exports = {
  checkIn,
}
