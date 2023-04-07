import React from "react";
import ReactEcharts from "echarts-for-react";

export default function BarChart({ props }) {
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    xAxis: {
      type: "category",
      data: labels,
    },
    series: [
      {
        name: "Present",
        type: "bar",
        data: props.p,
      },
      {
        name: "Absent",
        type: "bar",
        data: props.a,
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      style={{
        height: "250px",
        width: "100%",
        paddingTop: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.506)",
        borderRadius: "5px",
        margin: "5px 5px",
      }}
    />
  );
}
