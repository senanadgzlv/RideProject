import React from "react";
import { discoverItems } from "../../../Data/Data";
import Discoveritem from "../Homecomponents/Discoveritem";

const Discover = () => {
  return (
    <section className="discover">
      <div className="row">
        {discoverItems.map((item) => (
          <Discoveritem key={item.id} bikeitem={item} />
        ))}
      </div>
    </section>
  );
};

export default Discover;
