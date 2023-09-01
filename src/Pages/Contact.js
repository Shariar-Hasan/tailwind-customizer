import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import ContactCard from "../Components/ContactCard/ContactCard";
import { contactList } from "../Datalist/ContactList";

const Contact = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container mx-auto my-4">
        <div className="grid grid-cols-12">
          {contactList.map((item, i) => (
            <ContactCard key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
