import React from 'react';

export default function Total(props){
    return (
        <div className="mt-auto">
            <h5>Total Sum ($): {props.total}</h5>
        </div>
    )
}