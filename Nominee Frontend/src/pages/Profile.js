import React from "react";
import coverimg from "../assets/images/coverfornominee.png";
import "../styles/profile.scss";
import Navbar from "../components/Navbar";
import defaultprofileimage from "../assets/images/defaultprofileimage.png";
function Profile() {
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
                  <img src={defaultprofileimage} alt="profileimage" />
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
        <div className="profile-navbar">
          <button>All NFTs</button>
          <button>Tokens</button>
          <button>Nominees</button>
          {/* <button></button> */}
        </div>
      </section>
    </>
  );
}

export default Profile;
