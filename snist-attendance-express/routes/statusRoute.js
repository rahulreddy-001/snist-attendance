const router = require("express").Router();
const statusCache = require("../controllers/cache/status");

router.get("/", statusCache);

module.exports = router;
