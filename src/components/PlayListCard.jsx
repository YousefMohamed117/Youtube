import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
import { formatDistance } from "date-fns";
import Loader from "./Loader";

const VideoCard = ({
  playlistDetail: {
    snippet,
    id: { playlistId },
  },
}) => {
  if (!snippet) return <Loader />;
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "318px" },
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "transparent",
      }}
    >
      <Link to={playlistId ? `/playlist/${playlistId}` : `/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "transparent", height: "106px" }}>
        <Link to={playlistId ? `playlist/${playlistId}` : demoVideoUrl}>
          <Typography variant="subtitle1" color="#fff" fontWeight="bold">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Link
            to={
              snippet?.channelId
                ? `playlist/${snippet?.channelId}`
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
