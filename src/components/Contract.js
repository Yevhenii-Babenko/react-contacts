import React from 'react'

function Contract(props) {
    return(
        <div>
            <p> 
                {props.firstName}
            </p>
            <p> 
                {props.lastName}
            </p>
            <p> 
                {props.phone}
            </p>
            <p> 
                {props.gender} 
            </p>
        </div>
    )
}

export default Contract