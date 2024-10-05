import React from "react";

const List = ({ title, info }) => {
  return (
    <div>
      <h1 className="text-2xl font-medium my-3">{title}</h1>
      <div className="flex flex-wrap gap-3">
        {info?.map((item, key) => (
          <span key={key} className="py-1 px-3 border rounded-md font-medium">
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default List;
