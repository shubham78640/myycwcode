import React from "react";
import { Box } from "@mui/system";
function BasicInformationCX() {
  return (
    <>
      <Box
        bgcolor="#EDF4FF"
        padding="12px 25px 30px 12px"
        width="40%"
        
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
              <p>CUSTOMER ID</p>
              <p>CXY5555110P</p>
            </Box>
            <Box>
              <p>CUSTOMER NAME</p>
              <p>RAM KARAN SHERA</p>
            </Box>
            <Box>
              <p>CUSTOMER PHONE</p>
              <p>9988776655</p>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "2rem",
          }}
        >
          <p>CUSTOMER ADDRESS</p>
          <p>5D 66o awas vikas hanspuram naubsta kanpur nagar</p>
        </Box>
      </Box>{" "}
    </>
  );
}

export default BasicInformationCX;
