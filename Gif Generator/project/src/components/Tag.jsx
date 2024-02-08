import {  useState } from "react";

import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = "5rFtailwiYiFAu9rBG1MmScQ54oF2C9E";
export default function Tag() {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);
  const [Tag, setTag] = useState("")

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${Tag}`;
  //   const { data } = await axios.get(url);
  //   let imagesource = await data.data.images.downsized_large.url;
  //   setGif(imagesource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {gif,loading,fetchData} = useGif(Tag)

  function clickHandler() {
    fetchData();
  }

  return (
    <div
      className="bg-blue-500 w-1/2 h-1/2 gap-y-4
    flex flex-col items-center rounded-md border-[3px] border-gray-500"
    >
      <h1 className="text-xl mt-4 underline uppercase font-semibold text-center">
        Searching {Tag} Gif
      </h1>
      <div className="lg:w-[350px] lg:h-[350px] sm:w-[100px] sm:h-[100px] mt-5 relative mx-[10px] border-2 border-slate-600 ">
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} className="absolue object-cover w-[100%] h-[100%]" />
        )}
      </div>
      
      <input
        type="text"
        onChange={(event) => setTag(event.target.value)}
        value={Tag}
        className="w-[70%] text-center p-2 shadow-2xl shadow-black rounded-md border-2 border-slate-600"
      />
      <button
        className="w-[70%] mx-auto  font-[600] text-black bg-white 
      rounded-md mb-4  p-2 bg-opacity-70"
        onClick={clickHandler}
      >
        GENERATE
      </button>
    </div>
  );
}
