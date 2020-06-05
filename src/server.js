import express from "express";
import bodypaser from "body-parser";

// 1 .뷰 엔진  -> 퍼그
// 2. 바디파서

const app = express();

app.set("view engine", "pug");

app.use(bodypaser.json());
app.use(bodypaser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/answer", (req, res) => {
  res.render("answer");
});

app.post("/dataTxt", (req, res) => {
  const text = req.body.txt;
  let an = "snow";

  if (text === "스노우") {
    res.render("answer", { an });
  } else {
    an = "번역 불가";
    res.render("answer", { an });
  }
});

app.listen(3000, () => {
  console.log("Server Start");
});
