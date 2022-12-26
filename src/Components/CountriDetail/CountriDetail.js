import React from 'react';
import { useParams } from 'react-router-dom';

const CountriDetail = () => {
    const {countriName} = useParams();
    return (
        <div>
            <h2>country name : {countriName}</h2>
            <h1>Capital : {countriName}</h1>
        </div>
    );
};

export default CountriDetail;