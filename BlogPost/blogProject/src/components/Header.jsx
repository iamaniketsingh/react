import React from 'react'

const Header = () => {
  return (
    <div
      className="w-[100vw] border-b-1 shadow-md shadow-white
     text-center py-4 fixed top-0 inset-x-0 bg-[#242424]"
    >
      <header>
        <h1 className="uppercase antialiased text-3xl tracking-wider font-bold">
          Aniket Blogs
        </h1>
      </header>
    </div>
  );
}

export default Header