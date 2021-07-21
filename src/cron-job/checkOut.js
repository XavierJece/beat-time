const { cronJob } = require("./cronJob");

const checkOut = () => {

  // MON - TUE (19h)
  cronJob("0 0 19 * * SUN,TUE,WED,THU", () => {
    console.log("checkOut: MON - TUE");
  });

  // FRI (18h
  cronJob("0 0 18 * * FRI", () => {
    console.log("checkOut: MON - TUE");
  });

};

module.exports = {
  checkOut,
}
