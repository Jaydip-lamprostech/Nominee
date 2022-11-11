import React, { useEffect, useState } from "react";
import "../styles/navbar.scss";
import { useAccount } from "wagmi";
// import profilepic1 from "";
import profilepic1 from "../assets/images/defaultprofileimage.png";
import logo from "../assets/images/interitokenslogo2.png";
import ConnectWalletNavbar from "./ConnectWalletNavbar";
import { ethers } from "ethers";
import contract from "../artifacts/Main.json";
export const CONTRACT_ADDRESS = "0x23C82960b09F192A4c6056525829BE57422FaAE9";

function Navbar({ userData }) {
  const [data, setData] = useState([]);
  const { address, isConnected } = useAccount("");
  const [isLoading, setLoading] = React.useState(true);
  // const [walletAdd, setWalletAdd] = useState(
  //   "0x054ae6107caadc187c304de87365bc52f8c2adb9"
  // );

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
          console.log(data[0][2]);
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
  if (!isLoading)
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
                  {/* <span>
                  {walletAdd.substring(0, 6) +
                    "..." +
                    walletAdd.substring(walletAdd.length - 5, walletAdd.length)}
                </span> */}
                  <ConnectWalletNavbar />
                </div>
                {data[0][2] !== "https://ipfs.io/ipfs/" ? (
                  <img
                    className="profile-icon"
                    src={data[0][2]}
                    alt="profileicon"
                  />
                ) : (
                  <img
                    className="profile-icon"
                    src={profilepic1}
                    alt="profileicon"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else
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
                  {/* <span>
            {walletAdd.substring(0, 6) +
              "..." +
              walletAdd.substring(walletAdd.length - 5, walletAdd.length)}
          </span> */}
                  <ConnectWalletNavbar />
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
