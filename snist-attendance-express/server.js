const express = require("express");
const cors = require("cors");
const qs = require("qs");
const parseData = require("./parseHTML");

const PORT = process.env.PORT || 3000;
const HOST = "103.167.126.190";

const app = express();

//add your site url here
//for local development use http://localhost:3000

const whitelist = [
  `http://localhost:${PORT}`,
  "https://snist-attendance-b.onrender.com",
  "https://snist.netlify.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || true) {
      callback(null, true);
    } else {
      callback("Not allowed by CORS", false);
    }
  },
};

app.use(express.json());
app.use(express.static("build"));
app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.use(cors(corsOptions));

app.post("/login", (req, res) => {
  console.log(req.body);
  var config1 = {
    method: "post",
    headers: {
      "user-Agent":
        '"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36"',
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept-Language": '"en-US,en;q=0.9"',
      Host: "103.15.62.28",
      Origin: `http://${HOST}`,
      Referer: `http://${HOST}/`,
      "Content-Length": qs.stringify(req.body).length,
    },
    body: qs.stringify(req.body),
  };

  fetch(`http://${HOST}/LoginValid.php`, config1)
    .then((response) => {
      let cookie = response.headers.get("set-cookie").split(";")[0];
      let rollno = req.body.user;
      let config2 = {
        method: "get",
        headers: {
          Cookie: cookie,
          Host: HOST,
          Referer: `http://${HOST}/student/index.php?studentid=${rollno}&no=0&val=1`,
          Connection: "keep-alive",
        },
      };
      fetch(
        `http://${HOST}/student/?value=attendance_datereporttest&left=attendance&tab=attendance`,
        config2
      )
        .then((response) => {
          const reader = response.body.getReader();
          const decoder = new TextDecoder("utf-8");
          let html = "";
          reader
            .read()
            .then(function processResult(result) {
              if (result.done) {
                parseData(html, res);
                return;
              }
              html += decoder.decode(result.value, { stream: true });
              return reader.read().then(processResult);
            })
            .catch((e) => {
              console.log("Invalid Credentials - " + e.name);
              res.status(401).send({ data: "Invalid Credentials." });
            });
        })
        .catch((e) => {
          console.log(e.name);
          res
            .status(500)
            .send({ data: "Something went wrong. Please try again later." });
        });
    })
    .catch((e) => {
      console.log(e.name);
      res
        .status(500)
        .send({ data: "Something went wrong. Please try again later." });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
