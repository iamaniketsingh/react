import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = "5rFtailwiYiFAu9rBG1MmScQ54oF2C9E";

const useGif = (Tag) => {
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const searchUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${Tag}`;
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(Tag) {
    setLoading(true);

    const { data } = await axios.get(Tag ? randomUrl : searchUrl);
    let imagesource = await data.data.images.downsized_large.url;
    setGif(imagesource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
