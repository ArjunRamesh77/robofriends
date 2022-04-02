import React from 'react';

const Card = (props) => {

    const {id, name, email} = props;

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}`} height="200px" width="200px" alt="card image"></img>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;