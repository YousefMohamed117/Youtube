import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
import Loader from "./Loader";

const VideoCard = ({
  video: {
    snippet,
    id: { videoId },
  },
}) => {
  if (!snippet?.thumbnails?.high?.url) return <Loader />;
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "318px" },
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "transparent",
      }}
    >
      <Link
        to={
          videoId ? (
            `/video/${videoId}`
          ) : snippet.resourceId.videoId ? (
            `/video/${snippet.resourceId.videoId} `
          ) : (
            <demoVideoUrl />
          )
        }
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "transparent", height: "106px" }}>
        <Link
          to={
            videoId
              ? `/video/${videoId}`
              : `/video/${snippet.resourceId.videoId}`
          }
        >
          <Typography variant="subtitle1" color="#fff" fontWeight="bold">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" color="#03a9f4" fontWeight="bold">
              {snippet?.channelTitle.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 12, color: "#03a9f4", ml: "5px" }} />
            </Typography>
          </Link>
          <Typography variant="subtitle2" color="#03a9f4" fontWeight="bold">
            {formatDistance(new Date(snippet.publishedAt), new Date(), {
              addSuffix: true,
            })}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
