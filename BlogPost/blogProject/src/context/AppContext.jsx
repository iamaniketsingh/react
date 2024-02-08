import { createContext, useState } from "react";

export const AppContext = createContext();

let baseurl = 'https://codehelp-apis.vercel.app/api/get-blogs'

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    async function fetchBlogPosts(page,tag,category) {
        setLoading(true)

        let url = `${baseurl}?page=${page}`;
        if (tag) {
            url+=`&tag=${tag}`
        }
        if (category) {
            url+=`&category=${category}`
        }

        try {
            const response =await fetch(url);
            const data = await response.json();
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        }
        
        catch (error) {
            console.log(error)
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }

        setLoading(false)
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
        console.log("changed")
    }

    const value = {
      loading,
      setLoading,
      posts,
      setPosts,
      page,
      setPage,
      totalPages,
      setTotalPages,
      handlePageChange,
      fetchBlogPosts,
    };


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}