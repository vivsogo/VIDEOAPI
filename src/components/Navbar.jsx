import { Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../Utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>  
    <Typography fontWeight="bold" color="#FFF"> VivTUBE </Typography>
    <Link to="/">
   <img style={{width: 60, height: 60, borderRadius: 60/ 2}} src={logo} alt="logo" />
    </Link>
    <SearchBar />
  </Stack>
  
  
)

export default Navbar 