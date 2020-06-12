import React, {useState }from 'react'

const BlogContext = React.createContext();

const Provider = ({ children }) => {
    // const Bloglist = [{ title: 'Blog Post #1', Author: 'Alpha' }, { title: 'Blog Post #2', Author: 'Alpha' }]
    const [blogPosts, setBlogPosts] = useState([])

    const addBlogPost=()=>{
        setBlogPosts([
            ...blogPosts,
            {title:`Blog Post #${blogPosts.length+1}`,Author:`${Math.random().toString(36).replace(/[^a-z]+/g,'').substr(0,5)}`}
        ])
    }
    return (
        <BlogContext.Provider value={{data:blogPosts,addBlogPost}}>
            {children}
        </BlogContext.Provider>
    )
}

export {BlogContext,Provider}





