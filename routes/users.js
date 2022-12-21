const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { FirstName: "Test" });
  //res.send("Username");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ FirstName: req.body.FirstName });
    res.redirect("/users/${users.length - 1}");
  } else {
    console.log("Error");
    res.render("users/new", { FirstName: req.body.FirstName });
  }
  // console.log(req.body.FirstName);
  // res.send("Hi");
  //res.send("Create user");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send("Get User With ID ${req.params.id}");
  })
  .put((req, res) => {
    res.send("Update User With ID ${req.params.id}");
  })
  .delete((req, res) => {
    res.send("Delete User With ID ${req.params.id}");
  });

const users = [{ name: "Kia" }, { name: "Sam" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
module.exports = router;
