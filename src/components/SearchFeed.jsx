import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=`)
      .then((data) => setVideos(data.items))
  }, []);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          Search results for: <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos ={videos}/>
      </Box>

  );
};

export default SearchFeed;


