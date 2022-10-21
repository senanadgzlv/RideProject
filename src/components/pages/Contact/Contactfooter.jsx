import React from "react";

const Contactfooter = () => {
  return (
   <>
    <div className="contactfooter">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-12 col-lg-4">
            <div className="content">
              <h5>Get To know us</h5>
              <h2>
                Have a project in <br /> mind? Let’s talk
              </h2>
              <p id="leo" >
                Leo duis ut diam quam nulla porttitor massa id. <br /> Cursus
                turpis massa tincidunt dui ut ornare <br /> lectus
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="content">
              <h3>Email</h3>
              <p  id="email" >
                <span>Support email:  </span>
                 customerservice@100percent.com
              </p>
              <p id="email" >
                <span>General email:  </span>
                info@100percent.com

              </p>

              <h3>Headquaters</h3>
              <p id="ca">9630 Aero Drive San Diego, CA 92123 United States</p>

            </div>
          </div>

          <div className="col-12 col-lg-4">
<div className="content">
<h3>Customer Service hours</h3>
            <p id="open" >Open: 8:00 AM – Close: 18:00 PM <br />
Saturday – Sunday: Close</p>

<h3>Follow:</h3>
<div className="icons">
<div className="facebook">
<i class="fa-brands fa-facebook"></i>
</div>
<div className="pinterest">
<i class="fa-brands fa-pinterest"></i>
</div>
<div className="twit">
<i class="fa-brands fa-twitter"></i>
</div>
</div>
</div>


          </div>
        </div>
      </div>
    </div>
    <hr />
   </>
   
  );
};

export default Contactfooter;
