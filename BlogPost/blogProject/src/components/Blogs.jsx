import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="flex flex-col min-w-[100vw] justify-center items-center gap-y-10 my-4">
      <div className="my-[100px]">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div>
            <p>No Posts Available</p>
          </div>
        ) : (
          posts.map((post) => (
            <div className="max-w-2xl mx-auto">
              <div key={post.id} className="mb-4 flex flex-col gap-2 px-2">
                <p className="font-bold text-lg">{post.title}</p>
                <p>
                  By <span className="italic">{post.author}</span> on{" "}
                  <span className="font-semibold underline cursor-pointer">
                    {post.category}
                  </span>
                </p>
                <p>
                  Posted on <span>{post.date}</span>
                </p>
                <p className="mt-4 mb-2">{post.content}</p>
                <div className="flex flex-wrap items-center gap-x-2">
                  {post.tags.map((tag, index) => {
                    return (
                      <span key={index}>
                        <a className="underline text-sky-300">{`#${tag}`}</a>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blogs;
