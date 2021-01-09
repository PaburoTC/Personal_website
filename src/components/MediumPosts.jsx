import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediumPost from "./MediumPost/MediumPost";

const MediumPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40pablotcampos25')
            .then(res => setPosts(res.data.items))
            .catch(console.error)
    }, [])

    return (
        <div id={'medium-posts'}>
            <h2>Medium Posts</h2>
            {posts.map(post=> <MediumPost title={post.title} key={post.title} img={post.thumbnail} content={''} url={post.link}/>)}
        </div>
    )
}

export default MediumPosts;