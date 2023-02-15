import React, { useState, useEffect } from "react";
import {ContactList} from "./"


const Main = () => {
  const [contacts, setContacts, selectedContact] = useState([]);
  
  const getContacts = async()=>
  {
    try
    {
      const response = await fetch("http://jsonplace-univclone.herokuapp.com/users");
      const data = await response.json();
      setContacts(data);
    }
    catch (err)
    {
      console.error(err);
    }
  }

  useEffect(()=>
  {
    getContacts();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
          <ContactList contacts={contacts}></ContactList>
      </div>
    </div>
  );
};


export default Main;
