import React from 'react';

export { default as ContactRow } from "./ContactRow"

const ContactRow = (props) =>{
    return
    <td>{props.name}</td>
    <td>{props.phone}</td>
    <td>{props.email}</td>
}

export default ContactRow