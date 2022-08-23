import React from "react";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import Data from "../Data";
import { Button, TableBody } from "@mui/material";
import Typography from "@mui/material";
import Jobs from "../components/Details/JobDescription/Jobs";
import YcwNav from "../components/Details/YCWNav";
import JobsAllDetails from "../components/Details/JobDescription/JobsAllDetails";

function Details() {
  const { id } = useParams();
  return (
    <Box bgcolor="" padding="20px" flex={7}>
      <YcwNav />
      <Jobs />
      <JobsAllDetails />
    </Box>
  );
}

export default Details;
