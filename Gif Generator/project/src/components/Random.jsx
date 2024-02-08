import useGif from "../hooks/useGif";

import Spinner from "./Spinner";

export default function Random() {
  const { gif, loading, fetchData } = useGif();
  return (
    <div
      className="bg-green-500 w-1/2 h-1/2 gap-y-4
    flex flex-col items-center rounded-md border-[3px] border-gray-500"
    >
      <h1 className="text-xl mt-4 underline uppercase font-semibold text-center">
        A Random Gif
      </h1>
      <div className="lg:w-[350px] lg:h-[350px] sm:w-[100px] sm:h-[100px] mt-5 relative mx-[10px] border-2 border-slate-600 ">
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} className="absolue object-cover w-[100%] h-[100%]" />
        )}
      </div>{" "}
      
      <button
        className="w-[70%] mx-auto  font-[600] text-black bg-white 
      rounded-md mb-4  p-2 bg-opacity-70"
        onClick={() => fetchData()}
      >
        GENERATE
      </button>
    </div>
  );
}
