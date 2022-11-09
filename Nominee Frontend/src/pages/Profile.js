import React from "react";
import coverimg from "../assets/images/coverfornominee.png";
import "../styles/profile.scss";
import Navbar from "../components/Navbar";
import defaultprofileimage from "../assets/images/defaultprofileimage.png";
import AllNfts from "../components/AllNfts";
import { useState } from "react";
import Tokens from "../components/Tokens";

function Profile() {
  const [showAllNfts, setShowAllNfts] = useState(true);
  const [showAllTokens, setShowAllTokens] = useState(false);
  const [showAllNominees, setShowAllNominees] = useState(false);

  return (
    <>
      <Navbar />
      <section className="profile-main">
        <div className="profile-first-section">
          <div className="profile-cover-section">
            <div className="inside-cover-section">
              <img className="profile-cover-img" src={coverimg} alt="" />
            </div>
          </div>
          <div className="profile-card">
            <div className="profile-card-inside">
              <div className="image-parent">
                <div className="image-child">
                  <img
                    src={defaultprofileimage}
                    width="176px"
                    height="176px"
                    alt="profileimage"
                  />
                </div>
              </div>
              <div className="user-profile">
                <h1>Jaydip Patel</h1>
                <p>owner@google.com</p>
                <p>0x054ae6107cAadC187c304de87365bc52F8c2ADB9</p>
              </div>
              <button className="profile-edit-button">Edit Profile</button>
            </div>
          </div>
        </div>
        <div className="profile-second-section">
          <div className="profile-navbar">
            <button
              className={showAllNfts ? "active" : ""}
              onClick={() => {
                setShowAllNfts(true);
                setShowAllTokens(false);
                setShowAllNominees(false);
              }}
            >
              Collectibles
            </button>
            <button
              className={showAllTokens ? "active" : ""}
              onClick={() => {
                setShowAllNfts(false);
                setShowAllTokens(true);
                setShowAllNominees(false);
              }}
            >
              Tokens
            </button>
            <button
              className={showAllNominees ? "active" : ""}
              onClick={() => {
                setShowAllNfts(false);
                setShowAllTokens(false);
                setShowAllNominees(true);
              }}
            >
              Nominees
            </button>
            {/* <button></button> */}
          </div>
          {showAllNfts ? <AllNfts /> : null}
          {showAllTokens ? <Tokens /> : null}
          {showAllNominees ? <AllNfts /> : null}
        </div>
      </section>
    </>
  );
}

export default Profile;
