import React from "react";
import ContactCard from "../Components/ContactCard/ContactCard";
import { contactList } from "../Datalist/ContactList";

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto my-4">
        <div className="box shadow">
          <p className="text-lg font-mono">
            Hello there, My name is Shariar Hasan, Owner of this website. Feel
            free to get in touch with me through the links given below, if you
            want. 🥳
          </p>
        </div>
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
