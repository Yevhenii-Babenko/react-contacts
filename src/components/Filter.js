import React from 'react'
/* import { useState } from 'react'; */

export default function Filter() {
    /* const [searchItem, setSearchItem] = useState("");
    const  contacts = [{
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
    }]; */

    return(
        <React.Fragment>
            {/* <h2> Filter </h2>
            <div>
                {contacts
                .filter((value) => {
                    if (searchItem === "") {
                        return value
                    } else if (value.firstName.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
                        return value
                    }
                }).map((contact, index) => <div key={index}><p>{contact.firstName}</p></div>)}
            </div>
            <form>
                <input type="text" placeholder="Search..."  onChange={(event) => {setSearchItem(event.target.value)}} />
                <button type="submit" >Пошук</button>
            </form> */}
        </React.Fragment>
        
    )
}