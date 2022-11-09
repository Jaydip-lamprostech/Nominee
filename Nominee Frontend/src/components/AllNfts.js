import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { dummy } from "./dummyNfts";
import "../styles/allnft.scss";

function AllNfts({ nftData }) {

  const [showThisComponent, setShowThisComponent] = useState(false);

  // useEffect(() => {
  //   if (nftData.length > 0) {
  //     setShowAllNfts2(true);
  //   }
  // }, [])

  return <>
    <div className="all-nft-main" >
      <div className="nft-image-parent">
        {nftData.map((item, key) =>
          <div className="nft-image-child" key={key}>
            <div className="image-div">
              <img src={item.image} alt="nftimage" />
            </div>
            <div className="nft-image-child-inside">
              <h3>{item.name}</h3>
              <button className="below-nft-button">Nominated</button>
            </div>
          </div>)}
      </div>
    </div></>


}



export default AllNfts;
