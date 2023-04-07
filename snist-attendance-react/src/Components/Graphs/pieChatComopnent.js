import React from "react";
import ReactEcharts from "echarts-for-react";

export default function PieChart({ props }) {
  var option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          { value: props.p, name: "Present" },
          { value: props.a, name: "Absent" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
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
