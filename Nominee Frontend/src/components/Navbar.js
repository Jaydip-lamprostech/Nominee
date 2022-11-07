import React from "react";
import "../styles/navbar.scss";
// import profilepic1 from "";
import profilepic1 from "../assets/images/defaultprofileimage.png";
import { useState } from "react";
import logo from "../assets/images/interitokenslogo.png";

function Navbar() {
  const [walletAdd, setWalletAdd] = useState(
    "0x054ae6107caadc187c304de87365bc52f8c2adb9"
  );
  return (
    <>
      <div className="navbar">
        <div className="navbar-inside">
          <div className="navbar-main">
            <img className="logo" src={logo} alt="logo" />
            {/* <h1 className="navbar-h1">
              <span>INHERITOKENS</span>
            </h1> */}
            <div className="profile-wallet-section">
              <div className="wallet-address">
                <span>
                  {walletAdd.substring(0, 6) +
                    "..." +
                    walletAdd.substring(walletAdd.length - 5, walletAdd.length)}
                </span>
              </div>
              <img
                className="profile-icon"
                src={profilepic1}
                alt="profileicon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
