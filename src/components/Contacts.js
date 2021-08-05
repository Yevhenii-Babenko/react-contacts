import React, { Component } from "react";
import Contract from "./Contract";
import '../components/contact.css'

class Contracts extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: [{
                firstName: "Барней",
                lastName: "Стинсовський",
                phone: "+380956319521",
                gender: "male"
            }, {
                firstName: "Робін",
                lastName: "Щербатська",
                phone: "+380931460123",
                gender: "female"
            }, {
                firstName: "Анонімний",
                lastName: "Анонімус",
                phone: "+380666666666"
            }, {
                firstName: "Лілія",
                lastName: "Олдровна",
                phone: "+380504691254",
                gender: "female"
            }, {
                firstName: "Маршен",
                lastName: "Еріксонян",
                phone: "+380739432123",
                gender: "male"
            }, {
                firstName: "Теодор",
                lastName: "Мотсбес",
                phone: "+380956319521",
                gender: "male"
            }],
            search: '',
        }
    }
    handleSearchChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    render() {
        let contactsObj = this.state.contacts;
        const searchState = this.state.search;

        const filteredContracts = contactsObj.filter((value) => {
            return searchState === "" ? value : value.firstName.toLocaleLowerCase().includes(searchState.toLocaleLowerCase())
            || value.lastName.toLocaleLowerCase().includes(searchState.toLocaleLowerCase())
            || value.phone.toLocaleLowerCase().includes(searchState.toLocaleLowerCase())
        })

        if ( searchState !== "") {
            contactsObj = filteredContracts;
        }

        return (
            <div>
                <h1> Hello from Contacts </h1>
                <input type="text" onChange={this.handleSearchChange} />
                    { 
                        (contactsObj.length === 0) ? 
                            <div className="">
                                <p>No element for rendering</p>
                            </div> : 
                            <div className="contacts">
                                {filteredContracts.map((item, index) => <Contract key={index} name={item.firstName} surname={item.lastName} phone={item.phone} gender={item.gender} />)}
                            </div> 
                    }
            </div>
        )
    }
}

export default Contracts