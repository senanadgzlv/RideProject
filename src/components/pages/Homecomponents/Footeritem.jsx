import React from "react";

const FooterItem = (props) => {
  return (
    <>
      <div className="grid-container">
        <span>{props.icon}</span>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <a  className="alink" href="">{props.desc2}</a>
        <span className="nom">{props.desc3}</span>
      </div>
    </>
  );
};

export default FooterItem;
