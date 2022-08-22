import React from "react";
import { Box } from "@mui/system";
import { value } from "../../../Data";
function JobDescription() {
 
  return (
    <>
      {value.map((e) => {
        return (
          <Box
            marginTop="2rem"
             border={1}
            sx={{
              //border: "1px solid grey",
              borderRadius: "7px",
              borderStyle: "dashed",
              width: "100%",
              boxSizing: "border-box",
              padding: "10px",
            }}
          >
            <h4
              style={{
                color: "grey",
              }}
            >
              Job Id #{e.id}
            </h4>
            <h5>Housekeeping Job ({e.date} hrs)</h5>
            <div
              style={{
                fontSize: "13px",
              }}
            >
              CX NAME :{e.name}
            </div>
          </Box>
        );
      })}
    </>
  );
}

export default JobDescription;
