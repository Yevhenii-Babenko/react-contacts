import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import '../components/contact.css'

function Contract({ name, surname, phone, gender }) {
    return (
        <React.Fragment>
            <div className="contacts__blocks">
                <p>
                    <strong> {name} </strong>
                </p>
                <p>
                    <strong> {surname} </strong>
                </p>
                <p> {phone} </p>
                { gender === undefined ? <p> 
                        <i className="contacts__item">gender is not defind</i>
                    </p> : <p> { gender === "male" ? <AndroidIcon /> : <AppleIcon /> }</p> }
            </div>
        </React.Fragment>
    )
}

export default Contract