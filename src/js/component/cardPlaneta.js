import React from 'react';

const CardPlaneta = ({ name, population, terrain }) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{population}</p>
                    <p>{terrain}</p>

                    <button className="btn btn-primary">+ info</button>
                </div>
            </div>
        </div>
    );
};

export default CardPlaneta;
