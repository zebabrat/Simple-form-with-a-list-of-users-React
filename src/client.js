import React from 'react';

function Client({ props, deleteItem }) {
    const { namePet, owner, notes, time, date } = props;

    return (
        <div className="client-item">
            <button className="close-btn" onClick={deleteItem}>
                x
            </button>
            <h2 className="pet-name">{namePet}</h2>
            <p className="pet-owner">
                {owner && <span className="owner">Owner: </span>}
                {owner}
            </p>
            <div className="flex-between">
                <p>{notes}</p>
                <div className="flex-between">
                    <p className="time">{time}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}

export default Client;
