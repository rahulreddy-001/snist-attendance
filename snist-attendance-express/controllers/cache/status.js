const NodeCache = require("node-cache");
const checkServerStatus = require("../ping");

const loginCache = new NodeCache({
  stdTTL: 3,
  checkperiod: 1,
});

const applyStatusCache = async (req, res) => {
  let data;
  let key = "status";
  let value = loginCache.get(key);

  if (value != undefined) {
    data = value;
  } else {
    data = await checkServerStatus();
    loginCache.set(key, data);
  }

  res.send(data);
};

module.exports = applyStatusCache;
