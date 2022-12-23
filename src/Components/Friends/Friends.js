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
            <h1>hello Friends ! how are you ?</h1>
                        {/* <p>O hello all of my Friends : {Friends.length} </p> */}
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