const { cronJob } = require("./cronJob");

const checkOut = () => {

  // MON - TUE
  cronJob("* * * * * *", () => {
    console.log("checkOut: MON - TUE");
  });

  // FRI
  cronJob("* * * * * *", () => {
    console.log("checkOut: FRI");
  });
};

module.exports = {
  checkOut,
}
