const { cronJob } = require("./cronJob");
const { startBot } = require("../bot");

const checkOut = () => {
  const times = JSON.parse(process.env.TIME_BOT_CHECK_OUT);

  Object.entries(times).forEach(([log, cronString]) => {
    cronJob(cronString, async () => {
      console.log(`checkIn: ${log}`);
      await startBot();
    });
  })
};

module.exports = {
  checkOut,
};
