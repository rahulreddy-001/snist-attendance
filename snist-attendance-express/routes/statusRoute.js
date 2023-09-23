const router = require("express").Router();
const checkServerStatus = require("../controllers/ping");

router.get("/", async (req, res) => {
  let data = await checkServerStatus();
  res.json(data);
});

module.exports = router;
