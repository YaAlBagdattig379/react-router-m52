import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [Friends,setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json())
           .then(data => setFriends(data));
    },[])
    return (
        <div>
            <h1>Hello Friends ! how are you ?</h1>
            {
                Friends.map(friend => <Friend
                    key={friend.id}
                    friend ={friend} 
                ></Friend>)
            }
        </div>
    );
};

export default Friends;