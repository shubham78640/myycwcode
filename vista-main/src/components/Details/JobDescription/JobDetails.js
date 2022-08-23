import React from "react";
import { Box } from "@mui/system";
import BasicInformationCX from "./BasicInformationCX";
import BasicInformationJob from "./BasicInformationJob";
import JobSummary from "./JobSummary";
import JobTimeline from "./JobTimeline";
import Ledger from "./Ledger";
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
      <Box sx={{display: "flex" }}>
      <Box   p={1}>
      
      <h3
        style={{
          marginTop: "2rem",
        }}
      >
        Active Job Summary
      </h3>
     
      <JobSummary />
      </Box>
      <Box   p={1}>
        <Box sx={{display:"flex",marginTop: "2rem", justifyContent:"space-between"}}
        >
      <h3>
       Ledger
      </h3>
      <h4 style={{color:"red"}}>
      Totle Outstanding : &#x20b9; 40000
      </h4>
      </Box>
      <Ledger/>
      </Box>
      </Box>
    </>
  );
}

export default JobDetails;
