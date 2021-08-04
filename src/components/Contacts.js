import React, { Component } from "react";
import Contract, { SeachItem } from "./Contract";
import Filter from "./Filter"

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
    
    render() {
        return (
            <div>
                <h1> Hello from Contacts</h1>
                <div>
                    {this.state.contacts.map((contact, index) => <Contract properties={contact} key={index} />)}
                </div>
                <Filter />
            </div>
        )
    }
}

export default Contracts