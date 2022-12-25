import {useState,useEffect,React} from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    // const [friend,setFriends] = useState({})
    const [friend,setFriend] = useState({})
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[]);
    return (
        <div>
            <h1>This details are of my dosto</h1>
            <h3>Name : {friend.name} </h3>
            <h4>Email : {friend.email} </h4>
            <h5>Company : {friend.company.name} </h5>
            <h4>Phone : {friend.phone} </h4>
            <h4>Website : {friend.website} </h4>
            <p><small>City : {friend.address?.city}</small></p>
            <p><small>Lat : {friend.address?.geo.lat}</small></p>
          
            {/* // <h4>Address :{friend.address} </h4> */} 
        </div>
    );
};

export default FriendDetail;