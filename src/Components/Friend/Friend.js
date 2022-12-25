import React from 'react';
import {useNavigate,Link} from'react-router-dom'

const Friend = (props) => {
    const {name,username,id} = props.friend;
    const navigate = useNavigate();
    const showFrinedDetail = () =>{
        // const path = `/friend/${id}`;
        const path = `/friend/`+id;
        navigate(path)
    };
    return (
        <div>
            <h2>name : {name}</h2>
            <Link to={'/friend/'+id}>showDetail</Link>
            <button onClick={showFrinedDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;