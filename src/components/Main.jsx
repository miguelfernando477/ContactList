import React, { useState } from "react";
import dummyContacts from "../dummyData";
import {ContactList} from "./"

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
          <contactlist contacts={contacts}></contactlist>
      </div>
    </div>
  );
};


export default Main;
