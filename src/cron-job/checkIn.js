const { cronJob } = require("./cronJob");

const checkIn = () => {
  // MON - FRI (19h)
  cronJob("0 0 9 * * SUN,TUE,WED,THU,FRI", () => {
    console.log("checkIn: MON - FRI");
  });
};

module.exports = {
  checkIn,
}
