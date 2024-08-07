export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/v2/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
