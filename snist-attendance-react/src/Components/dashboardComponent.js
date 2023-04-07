import React from "react";
import {
  process,
  getPAW,
  calGraphData,
  getlineData,
  getMainStats,
} from "./Stats/calc";
import { useNavigate } from "react-router-dom";

import Load from "./loadComponent";
import Header from "./headerComponent";
import RecentUpdate from "./recentUpdateComponent";
import BaseData from "./baseDataComponent";
import HeatGraph from "./Graphs/heatGraphComponent";
import TableView from "./tableComponent";
import PieChart from "./Graphs/pieChatComopnent";
import BarGraph from "./Graphs/barGraphComponent";
import LineGraph from "./Graphs/lineGraphComponent";

export default function Dashboard() {
  const navigate = useNavigate();
  const [months, setMonths] = React.useState([]);
  const [name, setName] = React.useState("");
  const [rule, setRule] = React.useState();
  const [updating, setUpdating] = React.useState(false);

  const onrenderUrl = "https://snist-attendance-b.onrender.com";

  const logOut = () => {
    localStorage.setItem("isLogged", 0);
    localStorage.setItem("userid", "");
    localStorage.setItem("password", "");
    localStorage.setItem("recentLogin", "");
    localStorage.setItem("baseData", "");
    navigate("/login");
  };

  const setItems = () => {
    let data = JSON.parse(localStorage.getItem("baseData"));
    setMonths(process(data.monthlyData));
    setName(data.name);
    setRule(data.rule);
  };

  const getStats = (data) => {
    setUpdating(true);
    fetch(`${onrenderUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        data = data["data"];
        console.log(data);
        if (typeof data === "string") logOut();
        localStorage.setItem("recentLogin", new Date());
        localStorage.setItem("baseData", JSON.stringify(data));

        setMonths(process(data.monthlyData));
        setName(data.name);
        setRule(data.rule);
        setUpdating(false);
      });
  };

  React.useEffect(() => {
    let prevLogin = new Date(localStorage.getItem("recentLogin"));
    let moment = new Date();
    let diff = Math.floor(Math.abs(prevLogin - moment) / 60000);
    if (diff > 50 || diff < 0.1) {
      if (diff > 50) {
        try {
          setItems();
        } catch {
          logOut();
        }
      }
      getStats({
        user: localStorage.getItem("userid"),
        password: localStorage.getItem("password"),
        type: "student",
      });
    } else {
      try {
        setItems();
      } catch {
        logOut();
      }
    }
  }, []);

  if (months.length === 0) {
    return <Load />;
  } else {
    return (
      <div>
        <Header name={name} />
        <RecentUpdate status={updating} />
        <div className="view">
          <BaseData mainStats={getMainStats(months, rule)} />
          <HeatGraph data={calGraphData(months)} />
          <TableView months={months} />
          <div className="graphBox">
            <LineGraph className="graph" props={getlineData(months, rule)} />
            <PieChart className="graph" props={getMainStats(months, rule)} />
            <BarGraph className="graph" props={getPAW(months, rule)} />
          </div>
        </div>
      </div>
    );
  }
}
