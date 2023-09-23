const net = require("net");

const HOST = require("./config").HOST;

function checkServerStatus() {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();

    client.setTimeout(2000);

    client.on("connect", () => {
      client.end();
      resolve({
        success: true,
        data: { message: "Server is up and reachable." },
      });
    });

    client.on("timeout", () => {
      client.destroy();
      resolve({
        success: false,
        data: { message: "Server is not reachable. " },
      });
    });

    client.on("error", (error) => {
      client.destroy();
      resolve({
        success: false,
        data: { message: "Server is not reachable. " },
      });
    });

    client.connect(80, HOST);
  });
}

module.exports = checkServerStatus;
