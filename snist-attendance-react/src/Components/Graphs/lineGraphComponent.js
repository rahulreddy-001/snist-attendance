import React from "react";
import ReactEcharts from "echarts-for-react";
export default function LineGraph({ props }) {
  let option = {
    xAxis: {
      type: "category",
      data: props.lineLabels,
    },
    yAxis: [
      {
        type: "value",
      },
    ],
    axisPointer: {
      show: true,
    },
    series: [
      {
        data: props.lineArr,
        type: "line",
        areaStyle: {
          color: "rgba(0, 0, 200, 0.25)",
        },
      },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      style={{
        height: "270px",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.506)",
        borderRadius: "5px",
        margin: "5px 5px",
      }}
    />
  );
}
