import React from 'react';
import { useParams } from 'react-router-dom';

const CountriDetail = () => {
    const {countriName} = useParams();
    return (
        <div>
            <h1>country name : {countriName}</h1>
        </div>
    );
};

export default CountriDetail;