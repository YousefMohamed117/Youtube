import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Loader, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  if (!videos) return <Loader />;
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} color="white">
        Search Reasults For{" "}
        <span style={{ color: "#2196f3" }}>{searchTerm} Videos</span>
      </Typography>
      {videos.length > 0 && <Videos videos={videos} />}
    </Box>
  );
};

export default SearchFeed;
