const router = require("express").Router();
const login = require("../controllers/login");

const log = async (data) => {
  console.log(
    data.success ? `Y - ${data.data.year}` : `N - ${data.data.message}`
  );
};

router.post("/", async (req, res) => {
  let data = await login(req.body);
  await log(data);
  res.json(data);
});

module.exports = router;
