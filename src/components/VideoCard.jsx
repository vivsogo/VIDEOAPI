import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../Utils/constants";

const VideoCard = ({video: { id:{ videoId}, snippet}}) => {
  
  return (
    <Card>
      <Link to={videoId?}>
        <CardMedia image={snippet?. thumbnails?.high?.url} />
      </Link>
    </Card>
  )
}

export default VideoCard