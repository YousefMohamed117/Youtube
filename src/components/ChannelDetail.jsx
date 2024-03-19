import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import { Loader, Videos } from ".";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!channelDetail?.snippet) return <Loader />;
  console.log(channelDetail)
  return (
    <Box minHeight="95vh" sx={{}}>
      <Box>
        <div
          style={{
            height: "200px",
            zIndex: 10,
            width: "1000px",
            maxWidth: "100%",
            margin: "auto",
            backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl || demoProfilePicture})`|| demoProfilePicture,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <ChannelCard channelDetail={channelDetail } marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
