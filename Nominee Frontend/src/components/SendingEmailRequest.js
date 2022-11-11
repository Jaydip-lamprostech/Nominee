import React from "react";
import Navbar from "./Navbar";
import "../styles/signup.scss";

function SendingEmailRequest() {
  return (
    <>
      <Navbar />
      <section className="signup-main">
        <div className="login-card">
          <h2>Sign Up</h2>
          {/* <h3>Enter your details</h3> */}
          <div action="" className="login-form">
            <div className="input-outer-div name-input">
              <h1 className="sending-email-h1">Confirm your email</h1>
              <p className="sending-email-p">We emailed a link to</p>
              <span className="sending-email">
                jaydip.lamprostech@gmail.com
              </span>
              <p className="sending-email-p">
                Click the link to verify your email
              </p>
              {/* <MailSvg /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SendingEmailRequest;
