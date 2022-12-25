import {React,useState,useEffect} from 'react';
import PostDetail from '../PostDetail/PostDetail';

const Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => setPosts(res))
    },[])
    return (
        <div>
            <h1>Every posts of facebook ever had : {posts.length}</h1>
            {
                posts.map(post => <PostDetail
                key={post.id}
                post={post}
                ></PostDetail>)
            }
        </div>
    );
};

export default Posts;