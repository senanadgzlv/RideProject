import React from "react";
import { footeritems } from "../../../Data/Data";
import FooterItem from "./Footeritem";
import FooterItem2 from "./Footeritem2";

const Footer = () => {
  return (
    <section className="footer mt-5">
      {/* <div className="container-fluid">
    <div className="row">
        <div className="col-6 col-md-2">
            <ul>
                <h4>Senan</h4>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
            </ul>
        </div>
        <div className="col-6 col-md-2">
            <ul>
                <h4>Senan</h4>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
            </ul>
        </div>
        <div className="col-6 col-md-2">
            <ul>
                <h4>Senan</h4>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
            </ul>
        </div>
        <div className="col-6 col-md-2">
            <ul>
                <h4>Senan</h4>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
                <li>sdf,ndks</li>
            </ul>
        </div>
      <div className="col-12 col-md-4">
        <div className="icons">
            dsfgdf
            dsfgdfdsfgs
            dsfgdfdsfgsd
            dfgds
        </div>
        <div className="method">
            fdsgfdfs
            dfgds
            dsfgdfdsfgsd
            dgfdsf
        </div>
      </div>
    </div>
</div> */}

      <div className="container-fluid senan1">
        {footeritems.map((item, acar) => {
          return (
            <FooterItem
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              desc2={item.desc2}
              desc3={item.desc3}
              key={acar}
            />
          );
        })}
      </div>

      <div className="container-fluid mt-5  senan2 ">
        <div className="row">
          <FooterItem2 />
        </div>
      </div>
    </section>
  );
};

export default Footer;
