const JSDOM = require("jsdom").JSDOM;
const YEAR_RULE = [11, 10, 2, 2];

const parseData = (html, res) => {
  if (html.includes("your not valid")) {
    res.send({ data: "Invalid Credentials" });
  } else {
    const dom = new JSDOM(html);
    let document = dom.window.document;
    let table = document.querySelector(
      "#mainbody > center > table > tbody > tr > td > center > table:nth-child(7)"
    );
    let name = document.querySelector(
      "#mainbody > center > table > tbody > tr > td > center > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(2) > font > b"
    );

    let year = document.querySelector(
      "#mainbody > center > table > tbody > tr > td > center > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > font > b"
    );

    let branch = document.querySelector(
      "#mainbody > center > table > tbody > tr > td > center > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > font > b"
    );

    let id = document.querySelector(
      "#mainbody > center > table > tbody > tr > td > center > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(4) > font > b"
    );

    name = name.textContent.slice(2, -1);
    year = year.textContent.slice(2, -1);
    branch = branch.textContent.slice(2);
    id = id.textContent.slice(2);
    rule = YEAR_RULE[year - 1] - 1;

    let monthData = [];
    let monthlyData = [];
    let currentMonth = "";
    let rows = table.querySelectorAll("tr");
    for (let i = 1; i < rows.length; i++) {
      let row = rows[i];
      let cols = row.querySelectorAll("td");
      if (cols.length == 1) {
        if (currentMonth !== "") {
          monthlyData.push([currentMonth, monthData]);
          monthData = [];
        }
        currentMonth = cols[0].textContent;
      } else {
        let dayData = [];
        for (let j = 0; j < cols.length; j++) {
          let hourData;
          if (j !== 0) hourData = cols[j].textContent.includes("A") ? "A" : "P";
          else hourData = cols[j].textContent.slice(0, -1);
          dayData.push(hourData);
        }
        monthData.push(dayData);
      }
    }
    monthlyData.push([currentMonth, monthData]);
    dom.window.close();
    console.log("Request Serverd " + id + " " + name);
    res.send({
      data: { name, id, year, rule, branch, monthlyData },
    });
  }
};

module.exports = parseData;
