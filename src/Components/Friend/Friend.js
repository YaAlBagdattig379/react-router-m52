import React from 'react';
import {useNavigate} from'react-router-dom'

const Friend = (props) => {
    const {name,username,id} = props.friend;
    const navigate = useNavigate();
    const showFrinedDetail = () =>{
        const path = `/friend/${id}`;
        navigate(path)
    };
    return (
        <div>
            <h2>name : {name}</h2>
            <button onClick={showFrinedDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;