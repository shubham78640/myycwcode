import React from "react";
import { value } from "../../../Data";
function JobStatus(props) {
  const { title, color } = props;
  let count = value.length;

  return (
    <>
      <span
        style={{
          backgroundColor: color,
          padding: "10px 20px 10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        {title} ({count})
      </span>
    </>
  );
}

export default JobStatus;
