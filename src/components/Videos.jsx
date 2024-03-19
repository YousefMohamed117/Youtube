import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard, PlayListCard } from "./";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
      
    >
      {videos.map((item, idx) => (
        <Box key={idx} sx={{margin:'auto'}}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.playlistId && <PlayListCard playlistDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};
export default Videos;
