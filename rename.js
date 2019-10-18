const fs = require("fs");

fs.rename("assets/app.icns", "assets/icon.icns", function(err) {
  if (err) console.log(err);
  console.log("assets/app.icns successfully renamed!");
});

fs.rename("assets/app.ico", "assets/icon.ico", function(err) {
  if (err) console.log(err);
  console.log("assets/app.ico successfully renamed!");
});
