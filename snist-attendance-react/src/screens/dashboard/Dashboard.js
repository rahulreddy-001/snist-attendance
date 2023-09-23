import React from "react";
import {
  process,
  getPAW,
  calGraphData,
  getlineData,
  getMainStats,
} from "./components/calc";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { logout, refresh } from "../redux/sessionSlice";

import Header from "./components/Header";
import Refresh from "./components/Refresh";
import UpdateStatus from "./components/UpdateStatus";
import MainTable from "./components/MainTable";
import RecordTable from "./components/RecordTable";
import HeatGraph from "./components/graphComponents/HeatGraph";
import PieChart from "./components/graphComponents/PieChat";
import BarGraph from "./components/graphComponents/BarGraph";
import LineGraph from "./components/graphComponents/LineGraph";

function createDateFromDateTimeString(dateTimeString) {
  const [datePart, timePart] = dateTimeString.split(", ");
  const [day, month, year] = datePart.split("/").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
}

export default function Dashboard() {
  const sessionData = useSelector((state) => state.session);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = React.useState("");
  const [months, setMonths] = React.useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const trigger = () => {
    let time = createDateFromDateTimeString(sessionData.data.time);
    let now = new Date();
    let diff = Math.floor((now - time) / 60000);
    if (diff >= 50) {
      dispatch(refresh());
    }
  };

  React.useEffect(() => {
    if (sessionData.data && sessionData.data.success) {
      setName(sessionData.data.data.name);
      setMonths(process(sessionData.data.data.monthlyData));
      setRefreshing(sessionData.loading);
    } else {
      dispatch(logout());
      navigate("/");
    }
    trigger();
  }, [sessionData]);

  return (
    <div>
      <Refresh status={refreshing} />
      <Header name={name} />
      {sessionData.data ? <UpdateStatus status={refreshing} /> : null}
      <div className="view">
        <MainTable mainStats={getMainStats(months)} />
        <HeatGraph data={calGraphData(months)} />
        <RecordTable months={months} />
        <div className="graphBox">
          <LineGraph className="graph" props={getlineData(months)} />
          <PieChart className="graph" props={getMainStats(months)} />
          <BarGraph className="graph" props={getPAW(months)} />
        </div>
      </div>
    </div>
  );
}
