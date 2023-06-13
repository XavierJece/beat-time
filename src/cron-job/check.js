const { cronJob } = require("./cronJob");
const { startBot } = require("../bot");

const check = () => {
  

  let times = {};
  try {
    times = JSON.parse(process.env.TIME_BOT_CHECK);
  } catch (error) {
    console.log("ERROR: TIME_BOT_CHECK is not valid JSON");
  }

  const cronJobsKey = Object.keys(times)

  console.log(`Foi encontrado ${cronJobsKey.length} regras para o bot: ${cronJobsKey.join(', ')}.`);

  Object.entries(times).forEach(([log, cronString]) => {
    cronJob(cronString, async () => {
      console.log(`checkIn: ${log}`);
      await startBot();
    });
  })

  
};

module.exports = {
  check,
}
