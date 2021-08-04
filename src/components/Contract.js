import React from 'react'

export default function Contract(props) {
    console.log(props)
    const { firstName, lastName, phone, gender } = props.properties;
    return (
        <div>
            <p>
            {firstName}
            </p>
            <p>
                {lastName}
            </p>
            <p>
                {phone}
            </p>
            <p>
                {gender}
            </p>
        </div>
    )
}