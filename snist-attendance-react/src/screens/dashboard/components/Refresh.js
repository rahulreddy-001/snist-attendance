import React from "react";

export default function Refresh({ status }) {
  return status ? (
    <div className="refresh">
      <div className="refresh__loder"></div>
    </div>
  ) : (
    <></>
  );
}
