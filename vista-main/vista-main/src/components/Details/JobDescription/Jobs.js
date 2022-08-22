import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import { Box, color, display, width } from "@mui/system";
import JobStatus from "./JobStatus";
import JobDescription from "./JobDescription";
import styled from "@emotion/styled";

const DIV = styled("div")({
  width: "19%",
});
const Jobs = () => {
  return (
    <>
      <Box sx={{ display: "flex", marginTop: "3rem" }}>
        <AppsIcon />
        <p
          style={{
            fontSize: "1.3rem",
            fontWeight: "bold",
            marginLeft: ".5%",
          }}
        >
          JOBS Board
        </p>

        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: " #7A7D7E",
            marginLeft: "77%",
          }}
        >
          Filter
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#7A7D7E",
            marginLeft: "1.5%",
          }}
        >
          Sort
        </p>
      </Box>
      <hr style={{ marginTop: "1rem" }} />
      {/* {value.map((e) => {
        return ( */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "3rem",
        }}
      >
       
        <DIV>
          {" "}
       
          <JobStatus title={"ACTIVE JOBS"} color={"#DCEDC1"} />
          <JobDescription />
        </DIV>
        <DIV>
          <JobStatus title={"IN PROCESS"} color={"#DDF2F5"} />
          <JobDescription />
        </DIV>
        <DIV>
          {" "}
          <JobStatus title={"OPEN TO APPLY"} color={"#FFEAB6"} />
          <JobDescription />
        </DIV>
        <DIV>
          {" "}
          <JobStatus title={"PAST JOBS"} color={"#E5DBD9"} />
          <JobDescription />
        </DIV>
        <DIV>
          {" "}
          <JobStatus title={"REJECTED JOBS"} color={"#F3CBBD"} />
          <JobDescription />
       
      
        </DIV>
      {/* //   );
      // })} */}
      </Box>
    </>
  );
};

export default Jobs;
