const express = require("express");
const calculator = require(__dirname + "/calculator.js");
const app = express();
const port = 3000;


app.set('view engine', 'ejs');

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("simpleVersion");
});


app.post("/", function(req, res) {
  let birthday = req.body.birthday;
  let dogAgeToHumanAge = calculator.getHumanAge(birthday);
  if (birthday === "") {
    res.send("재입력하세요!")
  } else {
    res.render("result", {
      dogAgeToHumanAge: dogAgeToHumanAge
    });
  };
});

app.listen(port, function() {
  console.log("I'm listening on port 3000!");
});