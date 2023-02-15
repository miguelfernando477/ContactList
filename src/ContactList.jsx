import React from 'react';


const ContactList = (props)=>
{
    return(
    <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
              {contacts.map((contact, index) => {
                return <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                  </tr>
              })}
            </tbody>
          </table>
    );
}

export default ContactList;