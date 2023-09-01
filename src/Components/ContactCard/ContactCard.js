import React, { useEffect, useState } from "react";

const ContactCard = ({ item }) => {
  const [contactItem, setContactItem] = useState(null);
  useEffect(() => {
    setContactItem(item);
  }, [item]);
  return (
    <div className="col-span-12 md:col-span-4 my-5">
      <div className="box flex justify-content-between">
        <img src={item.icon} alt={item.name} className="inline-block h-20 aspect-square" />
        <div className="ml-3">
          <h2 className="text-lg font-serif">{item.name} </h2>
          <h2 className="text-xl font-bold italic my-3">{item.idName} </h2>
          <a
            href={item.link}
            className="p-2 bg-slate-900 rounded text-white my-5 btn "
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
