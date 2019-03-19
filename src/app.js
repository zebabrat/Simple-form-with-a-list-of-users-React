import React, { Component } from 'react';

import Form from './form';
import ClientList from './client-list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            search: '',
            namePet: '',
            owner: '',
            time: '',
            date: '',
            notes: '',
            order: ''
        };

        this.getInfo = this.getInfo.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.addPets = this.addPets.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.filterPets = this.filterPets.bind(this);
    }

    getInfo(e) {
        let name = e.target.name;
        let value = e.target.value;

        const obj = {};
        obj[name] = value;
        this.setState(obj);
    }

    deleteItem(index) {
        const results = [...this.state.data];
        results.splice(index, 1);
        this.setState({ data: results });
    }

    searchByName(e) {
        let value = e.target.value;
        this.setState({ search: value });
    }

    filterPets(e) {
        this.setState({ order: e.target.value });
    }

    addPets(e) {
        e.preventDefault();

        var new_pet = {
            namePet: this.state.namePet,
            owner: this.state.owner,
            time: this.state.time,
            date: this.state.date,
            notes: this.state.notes
        };

        let cloneData = [...this.state.data];
        cloneData.push(new_pet);

        this.setState({
            data: cloneData,
            namePet: '',
            owner: '',
            time: '',
            date: '',
            notes: ''
        });
    }

    render() {
        let copyArray = [...this.state.data];

        if (this.state.search) {
            copyArray = copyArray.filter(pet => {
                return pet.namePet
                    .toLowerCase()
                    .includes(this.state.search.toLowerCase());
            });
        }

        if (this.state.order) {
            let check = this.state.order == 'up' ? 1 : -1;
            copyArray.sort(function(a, b) {
                if (a.namePet.toLowerCase() > b.namePet.toLowerCase()) {
                    return check;
                } else {
                    return check * -1;
                }
            });
        }

        return (
            <div>
                <header>
                    <img className="img" src="img/header.png" />
                    <h2 id="hed"> Wilsdom Pet Medicine</h2>
                </header>
                <Form
                    filterPets={this.filterPets}
                    addPets={this.addPets}
                    getInfo={this.getInfo}
                    searchByName={this.searchByName}
                    name={this.state.namePet}
                    owner={this.state.owner}
                    time={this.state.time}
                    date={this.state.date}
                    notes={this.state.notes}
                />
                <ClientList data={copyArray} deleteItem={this.deleteItem} />
            </div>
        );
    }
}

export default App;
