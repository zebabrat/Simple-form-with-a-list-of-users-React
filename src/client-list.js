import React from 'react';
import Client from './client.js';

function ClientList({ data, deleteItem }) {
    return (
        <ul>
            {data.map((item, index) => {
                return (
                    <li key={index}>
                        <Client
                            props={item}
                            deleteItem={deleteItem.bind(null, index)}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default ClientList;
