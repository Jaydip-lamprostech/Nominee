import React from "react";
import axios from "axios";
import { useAccount } from "wagmi";


import coverimg from "../assets/images/coverfornominee.png";
import "../styles/profile.scss";
import Navbar from "../components/Navbar";
import defaultprofileimage from "../assets/images/defaultprofileimage.png";
import AllNfts from "../components/AllNfts";
import { useState } from "react";
import Tokens from "../components/Tokens";
import EditProfile from "./EditProfile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NomineesList from "../components/NomineesList";
import { useReducer } from "react";

function Profile() {


  const [nftData, setNftData] = useState([]);
  const { address, isConnected } = useAccount();
  const navigate = useNavigate();
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
  const [showProfileComponent, setProfileComponent] = useState(false);
  const [showAllNfts, setShowAllNfts] = useState(true);
  const [showAllTokens, setShowAllTokens] = useState(false);
  const [showAllNominees, setShowAllNominees] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);

  const toggleEditProfile = () => {
    setShowEditProfile(!showEditProfile);
  };

  useEffect(() => {

    const Nftpush = (props) => {
      props.map((item) => {
        const nft = JSON.parse(item.metadata);
        console.log(nft)

        setNftData(prev => [...prev, nft]);
        console.log(nftData)
        return nftData;
      })

      console.log(nftData);
    }
    // get nft from wallet address
    // Moralis get nft api
    const fetchNfts = () => {
      const options = {
        method: 'GET',
        url: 'https://deep-index.moralis.io/api/v2/0xeB88DDaEdA2261298F1b740137B2ae35aA42A975/nft',
        params: { chain: 'mumbai', format: 'decimal', normalizeMetadata: 'false' },
        headers: { accept: 'application/json', 'X-API-Key': 'sNXC9N5fpBJzWtV0sNHUAOfAyeQDGjfZ01RBZebMLmW2YAOoLgr2ItMow7rVj5Xb' }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.result);
          if (nftData.length < (response.data.result).length)
            Nftpush(response.data.result);
          setShowAllNfts(true);
        })
        .catch(function (error) {
          console.error(error);
        });
      // get nft api ends
    }
    fetchNfts();


    if (address) {
      setProfileComponent(true);
    } else {
      navigate("/");
    }

    return () => { setNftData([]) }
  }, []);

  if (showProfileComponent) {
    if (showEditProfile) {
      return <EditProfile setShowEditProfile={setShowEditProfile} />;
    } else {
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
                  <button
                    className="profile-edit-button"
                    onClick={toggleEditProfile}
                  >
                    Edit Profile
                  </button>
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
              {showAllNfts ? <AllNfts nftData={nftData} /> : null}
              {showAllTokens ? <Tokens /> : null}
              {showAllNominees ? <NomineesList /> : null}
            </div>
          </section>
        </>
      );
    }
  }
}

export default Profile;
