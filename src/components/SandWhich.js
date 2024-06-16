import React from "react";
import { sandWhich } from "./utils/sandWhiches";
import { Item } from "./Item";

const SandWhich = () => {
  return (
    <div>
      {sandWhich.map((item) => (
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

export default SandWhich;
