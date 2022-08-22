import React from "react";
import { Box } from "@mui/system";
import BasicInformationCX from "./BasicInformationCX";
import BasicInformationJob from "./BasicInformationJob";
import JobSummary from "./JobSummary";
import JobTimeline from "./JobTimeline";
function JobDetails() {
  return (
    <>
      <h3 style={{ marginTop: "2rem" }}>Basic Information</h3>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "2rem",
          fontSize: "13px",
        }}
      >
        <BasicInformationCX />
        <BasicInformationJob />
      </Box>
      <h3
        style={{
          marginTop: "2rem",
        }}
      >
        Job Timeline
      </h3>
      <JobTimeline />
      <h3
        style={{
          marginTop: "2rem",
        }}
      >
        Active Job Summary
      </h3>
      <JobSummary />
    </>
  );
}

export default JobDetails;
