import React from "react";
// import img1 from "../../assets/images/banner1.png"

const Subs = () => {
  return (
    <>
      <section className="subs">
        <div className="container text  ">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center news">
              <h2>NEWSLETTER</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center text-center order">
              <h1>
                Subscribe Today And Get <br /> 10% Off Your Order
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center subscribe mt-3">
              <input type="email" placeholder="Enter email adress" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subs;
