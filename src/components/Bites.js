import React from "react";
import { bites } from "./utils/bites";
import { Item } from "./Item";

const Bites = () => {
  return (
    <div>
      {bites.map((item) => (
        <div>
          <Item
            name={item.name}
            img={item.img}
            price={item.price}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};
export default Bites;
