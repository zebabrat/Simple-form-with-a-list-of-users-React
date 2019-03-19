import React from 'react';

function Form(props) {
    return (
        <div>
            <form className="container" id="form" onSubmit={props.addPets}>
                <img className="plus" src="./img/add.svg" />
                <h3 id="toggler">Add Appointment</h3>
                <div id="box">
                    <label>
                        <span className="span">Pet Name</span>
                        <input
                            id="name"
                            type="text"
                            name="namePet"
                            value={props.name}
                            placeholder="Name"
                            onChange={props.getInfo}
                        />
                    </label>
                    <br />
                    <label>
                        <span className="span">Pet Owner</span>
                        <input
                            id="owner"
                            type="text"
                            name="owner"
                            value={props.owner}
                            placeholder="Owner's Name"
                            onChange={props.getInfo}
                        />
                    </label>
                    <br />
                    <div className="flex-start">
                        <label>
                            <span className="span">Date</span>
                            <input
                                id="date"
                                type="text"
                                name="date"
                                value={props.date}
                                placeholder="dd/mm/yyyy"
                                onChange={props.getInfo}
                            />
                        </label>
                        <label className="flextime">
                            <span className="span">Time</span>
                            <input
                                id="time"
                                type="text"
                                name="time"
                                value={props.time}
                                placeholder="hh:mm"
                                onChange={props.getInfo}
                            />
                        </label>
                    </div>
                </div>
                <label>
                    <span className="nt">Apt. Notes</span>
                    <textarea
                        id="notes"
                        type="text"
                        name="notes"
                        value={props.notes}
                        placeholder="Appointment Notes..."
                        onChange={props.getInfo}
                    />
                </label>
                <button id="btn" type="submit">
                    Add
                </button>
            </form>

            <input
                type="text"
                id="flt"
                placeholder="Search"
                onChange={props.searchByName}
            />
            <select name="sort" id="sort" onChange={props.filterPets}>
                <option defaultValue>Sort By: </option>
                <option value="up">A...Z</option>
                <option value="down">Z...A</option>
            </select>
        </div>
    );
}

export default Form;
