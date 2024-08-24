import React from 'react';

const Card = ({ name, gender, hair_color, eye_color }) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{gender}</p>
                    <p>{hair_color}</p>
                    <p>{eye_color}</p>
                    <button className="btn btn-primary">+ info</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
