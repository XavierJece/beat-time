const { cronJob } = require("./cronJob");
const { startBot } = require("../bot");

const checkOut = () => {
  // MON - TUE (19h)
  cronJob("0 0 19 * * MON,TUE,WED,THU", async () => {
    await startBot();
    console.log("checkOut: MON - THU");
  });

  // FRI (18h
  cronJob("0 0 18 * * FRI", async () => {
    await startBot();
    console.log("checkOut: FRI");
  });
};

module.exports = {
  checkOut,
};
