import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  PlayListDetail,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        backdropFilter: " blur(16px) saturate(180%)",
        backgroundColor: " rgba(17, 25, 40, 0.75)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
        <Route path="playlist/:id" element={<PlayListDetail />} />
        <Route path="search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
