const cron = require('node-cron');

const cronJob = (cronTime, job) => {
  cron.schedule(cronTime, async () => job().catch(error => console.error(error)));
}

module.exports = {
  cronJob,
}
