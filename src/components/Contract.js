import React from 'react'
/* import { useState } from 'react'; */


export function SeachItem (props) {
    /* [searchItem, setSearchItem] = useState(""); */

    return(
        <form>
            {/* <input type="text" placeholder="Search..."  onChange={(event) => {setSearchItem(event.target.value)}} /> */}
            <button type="submit" >Пошук</button>
        </form>
    )
}

function Contract(props) {
    
   /*  const { firstName, lastName, phone, gender } = props.ourProp; */
   /*  const list = [firstName, lastName, phone, gender]; */
    return (
        <React.Fragment>
            {/* <SeachItem /> */}
            <div>
            <p>{props.name}</p>
            <p>{props.surname}</p>
            <p>{props.phone}</p>
            <p>{props.gender}</p>
                {/* {list.map((item, index) => <p key={index}>{item}</p>)} */}
                {/* <h3>
                {`${firstName} ${lastName}`}
                </h3>
                <p>
                    {phone}
                </p>
                <p>
                    {gender}
                </p> */}
            </div>
        </React.Fragment>
    )
}

export default Contract