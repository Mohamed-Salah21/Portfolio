import "./phone-gmail-ar.scss";
import React from "react";
const PhoneGmailAr = () => {
  return (
    <div className="phone-gmail-ar">
      <div className="container">
        <div className="row">
          <div className="phone col-md text-center text-md-left  ">
            <span>
              <i className="fas fa-phone-alt"></i>
            </span>
            <span>
              <i className="fab fa-whatsapp"></i>
            </span>{" "}
            : <span> 01275681100 </span>
          </div>
          <div className="gmail col-md text-center text-md-right ">
            <span>
              <i className="fas fa-envelope"></i>
            </span>{" "}
            :<span> moh.salah790@gmail.com </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhoneGmailAr;
