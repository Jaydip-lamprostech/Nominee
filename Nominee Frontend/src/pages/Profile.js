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
import { useRef } from "react";
import { ethers } from "ethers";
import contract from "../artifacts/Main.json";
export const CONTRACT_ADDRESS = "0x930C70C11A08764A94D6dC3469eC7b66c6e8E0Df";

function Profile() {
  const dataFetchedRef = useRef(false);
  const [nftData, setNftData] = useState([]);
  const { address, isConnected } = useAccount("");
  const navigate = useNavigate();
  // const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [showProfileComponent, setProfileComponent] = useState(false);
  const [showAllNfts, setShowAllNfts] = useState(true);
  const [showAllTokens, setShowAllTokens] = useState(false);
  const [showAllNominees, setShowAllNominees] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = useState([]);

  const showProfile = async () => {
    //contract code starts here...............................
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const { chainId } = await provider.getNetwork();
        console.log("switch case for this case is: " + chainId);
        if (chainId === 80001) {
          const con = new ethers.Contract(CONTRACT_ADDRESS, contract, signer);
          const owner_details = await con.getOwnerDetails(address);
          console.log(owner_details);
          const url = "https://ipfs.io/ipfs/" + owner_details[2];
          data.push([owner_details[0], owner_details[1], url]);
          setData(data);
          console.log(data);
          setLoading(false);
        } else {
          alert("Please connect to the mumbai test network!");
        }
      }
    } catch (error) {
      console.log(error);
    }
    //contract code ends here.................................
  };

  useEffect(() => {
    showProfile();
  }, []);

  const toggleEditProfile = () => {
    setShowEditProfile(!showEditProfile);
  };

  const Nftpush = (props) => {
    props.map((item) => {
      const nft = JSON.parse(item.metadata);
      console.log(nft);
      if (nftData.length > 0) return nftData;
      setNftData((prev) => [...prev, nft]);

      console.log(nftData);
      return nftData;
    });

    console.log(nftData);
  };
  const fetchNfts = async () => {
    let url =
      "https://deep-index.moralis.io/api/v2/" +
      "0xeB88DDaEdA2261298F1b740137B2ae35aA42A975" +
      "/nft";
    const options = {
      method: "GET",
      url: url,
      params: {
        chain: "mumbai",
        format: "decimal",
        normalizeMetadata: "false",
      },
      headers: {
        accept: "application/json",
        "X-API-Key":
          "sNXC9N5fpBJzWtV0sNHUAOfAyeQDGjfZ01RBZebMLmW2YAOoLgr2ItMow7rVj5Xb",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data.result);
        Nftpush(response.data.result);
        setShowAllNfts(true);
      })
      .catch(function (error) {
        console.error(error);
      });
    // get nft api ends
  };

  useEffect(() => {
    // get nft from wallet address
    // Moralis get nft api
    // if (dataFetchedRef) return;

    fetchNfts();

    if (address) {
      setProfileComponent(true);
    } else {
      navigate("/");
    }
    // return () => {
    //   dataFetchedRef.current = true;
    // };
  }, []);

  if (showProfileComponent && !isLoading) {
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
                        src={data[0][2]}
                        width="176px"
                        height="176px"
                        alt="profileimage"
                      />
                    </div>
                  </div>
                  <div className="user-profile">
                    <h1>{data[0][0]}</h1>
                    <p>{data[0][1]}</p>
                    <p>{address}</p>
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
