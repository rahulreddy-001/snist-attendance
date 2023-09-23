const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const loginRoute = require("./routes/loginRoute");
const statusRoute = require("./routes/statusRoute");

const app = express();

const whitelist = [
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
app.use(cors(corsOptions));
app.use(express.static("build"));

app.get(["/dashboard", "/login"], (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.use("/api/status", statusRoute);
app.use("/api/login", loginRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
