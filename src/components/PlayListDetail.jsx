import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Box, Stack } from "@mui/material";
import { ChannelCard, Loader, VideoCard, Videos } from ".";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`playlists?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );
    fetchFromApi(
      `playlistItems?playlistId=${id}&part=snippet%2Cid&order=date`
    ).then((data) => setVideos(data.items));
  }, [id]);
  if (!videos) return <Loader />;
  console.log(channelDetail)
  return (
    <Box minHeight="95vh"  sx={{
      backdropFilter: " blur(16px) saturate(180%)",
      backgroundColor: " rgba(17, 25, 40, 0.75)",
      border: "1px solid rgba(255, 255, 255, 0.125)",
    }}>
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 12%, rgba(6,83,170,1) 64%, rgba(0,212,255,1) 99%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Stack
          direction={"row"}
          flexWrap="wrap"
          justifyContent="start"
          alignItems="start"
          gap={2}
        >
          {videos.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
