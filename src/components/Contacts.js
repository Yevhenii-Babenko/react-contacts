import React, { Component } from "react";
import Contract from "./Contract";
/* import Filter from "./Filter" */

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
        const contactsObj = this.state.contacts;
        const searchState = this.state.search;
        
        const fillteredContracts = contactsObj.filter((value) => {
            return searchState === "" ? value : value.firstName.toLocaleLowerCase().includes(searchState.toLocaleLowerCase())
            || value.lastName.toLocaleLowerCase().includes(searchState.toLocaleLowerCase())
            || value.phone.toLocaleLowerCase().includes(searchState.toLocaleLowerCase())
        })
        return (
            <div>
                <h1> Hello from Contacts</h1>
                <input type="text" onChange={(event) => {
                    this.setState({
                        search: event.target.value
                    })
                }} />
                <div>
                    {this.state.search}
                    {fillteredContracts.map((item, index) => <Contract key={index} name={item.firstName} surname={item.lastName} phone={item.phone} gender={item.gender} />)}
                </div>
                {/* <div>
                    {this.state.contacts.map((contact, index) => <Contract properties={contact} key={index} />)}
                </div> */}
            </div>
        )
    }
}

export default Contracts