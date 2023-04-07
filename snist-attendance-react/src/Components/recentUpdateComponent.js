import React from "react";
import FeedbackButton from "./feedbackButton";
function UpdateStatus({ status }) {
  if (status) {
    return <span className="lastUpdate">{`Don't refresh updating . . .`}</span>;
  } else {
    let moment = new Date(localStorage.getItem("recentLogin"));
    moment = moment.toLocaleString();
    moment = moment.split(",");
    return (
      <span className="lastUpdate-status">{`Updated at ${moment[0]} ${moment[1]}`}</span>
    );
  }
}

export default function RecentUpdate({ status }) {
  const getFeedback = () => {};
  return (
    <div className="info">
      {/* <FeedbackButton status={status} /> */}
      <UpdateStatus status={status} />
    </div>
  );
}
