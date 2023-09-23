import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts/core";
const HeatGraph = ({ data }) => {
  let windowWidth = window.innerWidth;
  let cellSize = 13;
  let height = "140px";
  function getVirtualData(year) {
    let edata = [];
    for (let i = 0; i < data.length; i++) {
      let moment = new Date(data[i][0]);
      let tm = [
        moment.getFullYear(),
        moment.getMonth() + 1,
        moment.getDate(),
      ].join("-");
      let emoment = echarts.time.format(tm, "{yyyy}-{MM}-{dd}");
      edata.push([emoment, data[i][1]]);
    }
    return edata;
  }

  let option = {
    tooltip: {
      show: true,
    },
    gradientColor: ["#fff", "#87d8ff", "#1976d2"],
    visualMap: {
      min: 0,
      max: 7,
      calculable: true,
      show: false,
    },
    calendar: [
      {
        top: 17,
        range: "2023",
        cellSize: ["auto", cellSize],
      },
      // {
      //   top: 17,
      //   range: "2024",
      //   cellSize: ["auto", cellSize],
      // },
    ],
    series: [
      {
        type: "heatmap",
        coordinateSystem: "calendar",
        calendarIndex: 0,
        data: getVirtualData("2023"),
      },
      // {
      //   type: "heatmap",
      //   coordinateSystem: "calendar",
      //   calendarIndex: 0,
      //   data: getVirtualData("2024"),
      // },
    ],
  };
  return (
    <ReactEcharts
      option={option}
      style={{
        width: "98.9%",
        height: windowWidth > 1000 ? "20vh" : "16vh",
        padding: " 10px 15px 10px 0px ",
        margin: "-30px -10px 10px 0px",
        backgroundColor: "rgba(255, 255, 255, 0.506)",
        borderRadius: "5px",
      }}
    />
  );
};
export default HeatGraph;
