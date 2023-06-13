const { cronJob } = require("./cronJob");
const { startBot } = require("../bot");

const checkIn = () => {
  const times = JSON.parse(process.env.TIME_BOT_CHECK_IN);

  Object.entries(times).forEach(([log, cronString]) => {
    cronJob(cronString, async () => {
      console.log(`checkIn: ${log}`);
      await startBot();
    });
  })

  
};

module.exports = {
  checkIn,
}
