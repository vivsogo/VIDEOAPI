import axios from 'axios';


const BASE_URL= 'https://youtube-v31.p.rapidapi.com';


const options = {
  url: BASE_URL,
  params: {maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
// this function accepts the URL and is fetching the information 
// interpolation here to grab those api tabs 
// this is the function that allows us to call into the api
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };

