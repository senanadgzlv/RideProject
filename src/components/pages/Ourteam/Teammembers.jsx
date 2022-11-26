import React from 'react'
import member1 from "../../../assets/img/team-box-img-1.jpg";
import member2 from "../../../assets/img/team-box-img-2.jpg";
import member3 from "../../../assets/img/team-box-img-3.jpg";
import member4 from "../../../assets/img/team-box-img-4.jpg";
import member5 from "../../../assets/img/team-box-img-5.jpg";
import member6 from "../../../assets/img/team-box-img-6.jpg";


const Teammembers = () => {
  return (
<>
<div className="col-12 col-md-4 col-lg-4 ">
<div className="commonbox">
    <img src={member1} alt="" />
    <div className="qutu text-center">
        <div className="agqutu">
            <h3>John Smith</h3>
        </div>
        <div className="qaraqutu">
            <p>Founder</p>
        </div>
    </div>
</div>
</div>
<div className="col-12 col-md-4 col-lg-4">
<div className="commonbox">
    <img src={member2} alt="" />
    <div className="qutu text-center">
        <div className="agqutu">
            <h3>Megan Ballar</h3>
        </div>
        <div className="qaraqutu">
            <p>Excutive Manager</p>
        </div>
    </div>
</div>
</div>
<div className="col-12 col-md-4 col-lg-4">
<div className="commonbox">
    <img src={member3} alt="" />
    <div className="qutu text-center">
        <div className="agqutu">
            <h3>Craig Wade</h3>
        </div>
        <div className="qaraqutu">
            <p>Designer</p>
        </div>
    </div>
</div>
</div>
<div className="col-12 col-md-4 col-lg-4 mt-5">
<div className="commonbox">
    <img src={member4} alt="" />
    <div className="qutu text-center">
        <div className="agqutu">
            <h3>Bob Conner </h3>
        </div>
        <div className="qaraqutu">
            <p>Logistic</p>
        </div>
    </div>
</div>
</div>
<div className="col-12 col-md-4 col-lg-4 mt-5">
<div className="commonbox">
    <img src={member5} alt="" />
    <div className="qutu text-center">
        <div className="agqutu">
            <h3>Kevin Collon</h3>
        </div>
        <div className="qaraqutu">
            <p>Support</p>
        </div>
    </div>
</div>
</div>
<div className="col-12 col-md-4 col-lg-4 mt-5">
<div className="commonbox">
    <img src={member6} alt="" />
    <div className="qutu text-center">
        <div className="agqutu">
            <h3>Debra Poole</h3>
        </div>
        <div className="qaraqutu">
            <p>Front end developer</p>
        </div>
    </div>
</div>
</div>



</>

  )
}

export default Teammembers