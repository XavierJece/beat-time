const { punchAClock } = require("./beatTime");
const { iHaveJob } = require("./getInfoDay");
const { notifyMe } = require("./notification");

const  delayExecution = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}



const startBot = async () => {
  const messages = {
    success: "Your point has been hit!! 😜\n",
    failure: "I couldn't register the point 🥲\n",
    dayOff: "This is day off, doesn't need to beat point!! 😁\n",
  };

  //State of company
  const ufCompany = "SP";

  //Get date today
  const today = new Date();
  // const tomorrow = new Date(today.setDate(today.getDate() + 0));


  //Get delay for execution
  const randomMinutes = Math.floor(Math.random() * 19);
  const messageInfoDelay = `I have already checked in. I will wait ${randomMinutes} minutes to clock out!`

  console.log(messageInfoDelay);
  notifyMe(messageInfoDelay);
  
  await delayExecution( randomMinutes * 60 * 1000);


  let fullMessage = messages.dayOff;

  if (iHaveJob(today, ufCompany)) {
    console.log(`I have a job!!`);
    const { status, message } = await punchAClock();

    fullMessage = `${messages[status]}${message}`;
  }

  console.log(fullMessage);
  notifyMe(fullMessage);
};

module.exports = {
  startBot
}

