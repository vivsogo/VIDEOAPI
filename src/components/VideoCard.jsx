import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {CheckCircleIcon} from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../Utils/constants";

const VideoCard = ({video: { id:{ videoId}, snippet}}) => {
  
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia image={snippet?. thumbnails?.high?.url} 
        alt={snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} />

      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard