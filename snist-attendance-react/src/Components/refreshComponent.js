import React from "react";

export default function RefreshComponent({ status }) {
  return status ? (
    <div className="refresh">
      <div className="refresh__loder"></div>
    </div>
  ) : (
    <></>
  );
}
