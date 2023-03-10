import {React,useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    // const [post,setPost] = useState([]);
    const [post,setPost] = useState({});
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postId])
    return (
        <div>
            <h4>This is for PostDetail :{postId}</h4>
            <h2>{post.id}</h2>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;