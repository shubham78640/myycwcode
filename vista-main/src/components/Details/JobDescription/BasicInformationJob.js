import React from "react";
import { Box } from "@mui/system";
function BasicInformationJob() {
  return (
    <>
      <Box
        bgcolor="#EDF4FF"
        padding="10px 20px 10px 10px"
        width="53%"
        sx={{
          borderRadius: "8px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <p>JOB ID</p>
              <p>CXY5555110P</p>
            </Box>
            <Box>
              <p>WORK TYPE</p>
              <p>Type of the work</p>
            </Box>
            <Box>
              <p>WORK LOCATION</p>
              <p>Locality and city</p>
            </Box>
            <Box>
              <p>WORK HOUR</p>
              <p>4 hour</p>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <p>WORK START TIME</p>
              <p>6:00 PM</p>
            </Box>
            <Box>
              <p>WORK START TIME</p>
              <p>10:00 AM</p>
            </Box>
            <Box>
              <p># OF SHIFTs</p>
              <p>Once per day</p>
            </Box>
            <Box>
              <p>MAX. SALARY</p>
              <p>9988 -100000</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BasicInformationJob;
