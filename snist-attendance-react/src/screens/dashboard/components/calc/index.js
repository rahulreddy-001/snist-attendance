const rpad = (monthArr) => {
  let res_monthArr = [];
  for (let dayArr of monthArr) {
    let tempDayArr = Object.assign([], dayArr);
    let alen = dayArr.length;
    let ap = 8 - alen;
    for (let i = 0; i < ap; i += 1) {
      tempDayArr.push("");
    }

    res_monthArr.push(tempDayArr);
  }
  return res_monthArr;
};

const process = (months) => {
  let respArr = [];
  for (let month of months) {
    let monthObj = {};
    monthObj.name = month[0];
    let patData = getPAT(month[1]);
    monthObj.p = patData.p;
    monthObj.a = patData.a;
    monthObj.t = patData.t;
    monthObj.pe = patData.pe;
    monthObj.stats = rpad(month[1]);
    respArr.push(monthObj);
  }
  return respArr;
};

const getPAT = (monthArr) => {
  let patData = { p: 0, a: 0, t: 0, pe: 0 };
  for (let dayArr of monthArr) {
    let alen = dayArr.length;
    for (let i = 1; i < alen; i += 1) {
      let ce = dayArr[i];
      if (ce === "A") patData.a += 1;
      else patData.p += 1;
      patData.t += 1;
    }
    patData.pe = ((patData.p / patData.t) * 100).toFixed(1) + "%";
  }
  return patData;
};

const fDate = (date) => {
  let dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dd = date[0] + date[1];
  let mm = date[3] + date[4];
  let yyyy = date[6] + date[7] + date[8] + date[9];

  let tdate = new Date(`${mm}-${dd}-${yyyy}`);
  return dayArr[tdate.getDay()];
};

const gDay = (date) => {
  let dd = date[0] + date[1];
  let mm = date[3] + date[4];
  let yyyy = date[6] + date[7] + date[8] + date[9];

  let tdate = new Date(`${mm}-${dd}-${yyyy}`);
  return tdate;
};

const fDay = (date) => {
  let dd = date[0] + date[1];
  let mm = date[3] + date[4];
  let yyyy = date[6] + date[7] + date[8] + date[9];

  let tdate = new Date(`${mm}-${dd}-${yyyy}`);
  return tdate.getDay();
};

const getS = (s) => {
  if (s.includes("A")) {
    return "❌";
  } else if (s.includes("P")) {
    return "✅";
  } else {
    return "";
  }
};

const calGraphData = (monthArr) => {
  let data = [];
  for (let month of monthArr) {
    let days_arr = month.stats;
    for (let dayArr of days_arr) {
      let d = gDay(dayArr[0]);
      let a = 0;
      let p = 0;
      for (let i = 1; i < 8; i += 1) {
        let cs = dayArr[i];
        if (cs.includes("A")) {
          a += 1;
        } else if (cs.includes("P")) {
          p += 1;
        } else {
        }
      }
      data.push([d, Math.round((p * 7) / (a + p), 1)]);
    }
  }
  return data;
};

const getMainStats = (months) => {
  let a = 0,
    p = 0,
    t = 0,
    pe = 0,
    col = "";
  for (let month of months) {
    let days_arr = month.stats;
    for (let dayArr of days_arr) {
      for (let i = 1; i < 8; i += 1) {
        let cs = dayArr[i];
        if (cs.includes("A")) {
          a += 1;
        } else if (cs.includes("P")) {
          p += 1;
        } else {
        }
      }
    }
  }
  t = a + p;
  pe = ((p / t) * 100).toFixed(1);

  let a65 = Math.ceil((13 / 7) * a - p);
  let a75 = 3 * (a + p) - 4 * p;
  if (a65 <= 0) a65 = "Reached";
  if (a75 <= 0) a75 = "Reached";
  let l5 = ((p / (t + 5 * 4)) * 100).toFixed(1);
  let l10 = ((p / (t + 10 * 4)) * 100).toFixed(1);

  if (pe > 75) col = "green";
  else if (pe < 65) col = "red";
  else col = "rgba(255, 101, 0, 1)";

  return { a, p, t, pe, col, a65, a75, l5, l10 };
};

const getlineData = (months) => {
  let p = 0,
    t = 0;
  let lineArr = [];
  let lineLabels = [];
  for (let month of months) {
    let days_arr = month.stats;
    for (let dayArr of days_arr) {
      for (let i = 1; i < 8; i += 1) {
        let cs = dayArr[i];
        if (cs.includes("A")) {
          t += 1;
        } else if (cs.includes("P")) {
          p += 1;
          t += 1;
        } else {
        }
      }
      lineArr.push(((p * 100) / t).toFixed(1));
      lineLabels.push(dayArr[0]);
    }
  }
  return { lineArr, lineLabels };
};

const getPAW = (months) => {
  let a = [0, 0, 0, 0, 0, 0];
  let p = [0, 0, 0, 0, 0, 0];
  for (let month of months) {
    let days_arr = month.stats;
    for (let dayArr of days_arr) {
      let d = fDay(dayArr[0]) - 1;
      for (let i = 1; i < 8; i += 1) {
        let cs = dayArr[i];
        if (cs.includes("A")) {
          a[d] += 1;
        } else if (cs.includes("P")) {
          p[d] += 1;
        } else {
        }
      }
    }
  }
  return { a: a, p: p };
};

export {
  getS,
  fDate,
  process,
  getPAW,
  calGraphData,
  getMainStats,
  getlineData,
};
