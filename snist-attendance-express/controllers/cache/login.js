const NodeCache = require("node-cache");
const login = require("../login");
const log = require("../util/log");

const loginCache = new NodeCache({
  stdTTL: 600,
  checkperiod: 30,
});

const applyLoginCache = async (req, res) => {
  req.time = new Date();

  let user = req.body.user;
  let password = req.body.password;

  let source = "S";
  let key = user.toLowerCase() + password.toLowerCase();
  let value = await loginCache.get(key);
  let data;

  if (value != undefined) {
    source = "C";
    data = value;
  } else {
    data = await login(req.body);
    if (data.success) loginCache.set(key, data);
  }

  await log(data, source, req.body.user, req.time);

  res.send(data);
};

module.exports = applyLoginCache;
