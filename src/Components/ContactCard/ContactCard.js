import React, { useEffect, useState } from "react";

const ContactCard = ({ item }) => {
  const [contactItem, setContactItem] = useState(null);
  useEffect(() => {
    setContactItem(item);
  }, [item]);
  return (
    <div className="col-span-12 md:col-span-4 my-5">
      <div className="box flex justify-content-between">
        <img src={item.icon} alt={item.name} className="inline-block h-20 aspect-square rounded-full" />
        <div className="ml-3">
          <h2 className="text-lg font-bold">{item.name} </h2>
          <h2 className="text-mono  my-3">{item.idName} </h2>
          <a
            href={item.link}
            className="px-2 py-1 bg-slate-900 rounded text-white my-5 btn "
          >
            Visit Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
