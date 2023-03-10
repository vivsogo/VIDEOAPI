import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import {Navbar, Feed, VideoDetail, SearchFeed  } from "./components"

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000'}}>
       <Navbar />
       <Routes>
          <Route path="/" exact element={<Feed />}/>
          <Route path="/video/:id" element={<VideoDetail />}/>
          <Route path="/search/:searchTerm" element={<SearchFeed />}/>
        </Routes>
    </Box>
  </BrowserRouter>
);
//<Route path="/channel/:id" element={<ChannelDetail />}/>
export default App