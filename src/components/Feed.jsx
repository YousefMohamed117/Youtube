import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Loader, SideBar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSeclectedCategory] = useState("Quran");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);
  if (!videos) return <Loader />;
  return (
    <Stack className="background">
      <Stack
        sx={{
          flexDirection: { sx: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            selectedCategory={selectedCategory}
            setSeclectedCategory={setSeclectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            CopyRight 2024 Youtube Clone
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={2} color="white">
            {selectedCategory} <span style={{ color: "#2196f3" }}>Videos</span>{" "}
          </Typography>
          {videos.length > 0 && <Videos videos={videos} />}
        </Box>
      </Stack>
    </Stack>
  );
};

export default Feed;
