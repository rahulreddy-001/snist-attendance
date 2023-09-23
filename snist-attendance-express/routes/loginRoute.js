const router = require("express").Router();
const loginCache = require("../controllers/cache/login");

const tm = (req, res, next) => {
  console.log(res);
  next();
};

router.post("/", loginCache, tm);

module.exports = router;
