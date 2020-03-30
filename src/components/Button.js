import React from 'react';

export default function Button(props) {
    return <div>
        <button className="myButton" onClick ={ () => props.function(props.id)}>
            {props.value}</button>
    </div>

}