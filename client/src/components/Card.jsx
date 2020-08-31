import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="icon">
                <img id="icon-img" src="https://picsum.photos/200" />
            </div>
            <div className="wordbox">
                <h1>{props.name}</h1>
                <h3 className="type-header" id="hidden-type">{props.type}</h3>
                <h3>{props.contact_number}</h3>
            </div>
            <div className="type">
                <h4 className="type-header">{props.type}</h4>
            </div>
        </div>
    );
}

export default Card;
