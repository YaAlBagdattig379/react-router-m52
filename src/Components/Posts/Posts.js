import {React,useState,useEffect} from 'react';
import {Link,Outlet} from 'react-router-dom';

const Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
          .then(res => setPosts(res));
    },[])
    return (
        <div>
            <h1>Every posts of facebook ever had : {posts.length}</h1>

            {
                posts.map(post => <Link
                    key={post.id}  

                    to={`/posts/ ${post.id}`}

                >{post.id}</Link>)
            }
            <Outlet></Outlet> 
        </div>
    );
};

export default Posts;