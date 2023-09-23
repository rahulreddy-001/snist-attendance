const qs = require("qs");

const checkServerStatus = require("./ping");
const parse = require("./parse");
const HOST = require("./config").HOST;

function getLoginConfig(data) {
  return {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Host: `${HOST}`,
      Origin: `http://${HOST}`,
      Referer: `http://${HOST}/`,
      "Content-Length": qs.stringify(data).length,
    },
    body: qs.stringify(data),
  };
}

function getAttendanceConfig(cookie, rollno) {
  return {
    method: "get",
    headers: {
      Cookie: cookie,
      Host: HOST,
      Referer: `http://${HOST}/student/index.php?studentid=${rollno}&no=0&val=1`,
      Connection: "keep-alive",
    },
  };
}

const errorResponse = {
  success: false,
  data: {
    message: "Something went wrong.",
  },
};

const errorCredentials = {
  success: false,
  data: { message: "Invalid Credentials." },
};

async function login(body) {
  return new Promise(async (resolve, reject) => {
    let status = await checkServerStatus();

    if (!status.success) {
      resolve(status);
      return;
    }

    let res = await fetch(
      `http://${HOST}/LoginValid.php`,
      getLoginConfig(body)
    ).catch((e) => {
      resolve(errorResponse);
      return;
    });

    let cookie;
    try {
      cookie = res.headers.get("set-cookie").split(";")[0];
    } catch (e) {
      resolve(errorCredentials);
      return;
    }

    let rollno = await body.user;

    let attendance = await fetch(
      `http://${HOST}/student/?value=attendance_datereporttest&left=attendance&tab=attendance`,
      getAttendanceConfig(cookie, rollno)
    ).catch((e) => {
      resolve(errorResponse);
      return;
    });

    let attendanceHTML;
    try {
      attendanceHTML = await attendance.text();
    } catch (e) {
      resolve(errorCredentials);
      return;
    }

    let data = await parse(attendanceHTML);
    resolve(data);
  });
}

module.exports = login;
