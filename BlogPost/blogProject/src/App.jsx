import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import TagPage from './pages/TagPage'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import {Routes,Route} from 'react-router-dom'

function App() {

  const { fetchBlogPosts } = useContext(AppContext)
  useEffect(() => {
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(category);
    }
    else {
      fetchBlogPosts(location.pathname);
    }
  },[])
  return (
    

      <Routes>
        <Route path="/" element={<Home />} />
       {/* <Route path="/blog/:blogID" element={<BlogPage />} /> */}
        <Route path="/tags/:tag" element={<TagPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
  
  );
}

export default App
