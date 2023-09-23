import React from "react";
import { useSelector } from "react-redux";

function Status({ moment, status }) {
  moment = moment.toLocaleString();
  moment = moment.split(",");
  if (status) {
    return <span className="lastUpdate-status lastUpdate">{`Loading...`}</span>;
  } else {
    return (
      <span className="lastUpdate-status ">{`Updated at ${moment[0]} ${moment[1]}`}</span>
    );
  }
}

export default function UpdateStatus({ status }) {
  const sessionData = useSelector((state) => state.session);

  const getFeedback = () => {};
  return (
    <div className="info">
      <Status moment={sessionData.data.time} status={status} />
    </div>
  );
}
