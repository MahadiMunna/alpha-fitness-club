import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('posts.json')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])

    return (
        <div className='posts-container'>
            {
                posts.map(post=>
                    <Post key={post.id}
                    post={post}></Post>)
            }
            
        </div>
    );
};

export default Posts;