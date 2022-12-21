//console.log("H");

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//app.use(logger);

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   console.log("Hi");
//   res.render("index", {text: "world" });
// });

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000);
