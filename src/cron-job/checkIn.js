const { cronJob } = require("./cronJob");

const checkIn = () => {
  cronJob("* * * * * *", () => {
    console.log("checkIn: MON - FRI");
  });
};

module.exports = {
  checkIn,
}
