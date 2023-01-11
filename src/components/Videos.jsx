import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

const Videos = ({videos}) => {
  console.log(videos);
    
  return (
   <Stack  direction= "row" lexWrap="wrap" justifyContent="start"  gap={2}>
      {videos.map((item,idx) =>(
        <Box key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
       </Box>
      ))}
    
   </Stack>
  )
}
export default Videos

