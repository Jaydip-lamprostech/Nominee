import React from "react";
import { dummy } from "./dummyNfts";
import "../styles/allnft.scss";

function AllNfts() {
  return (
    <>
      <div className="all-nft-main">
        <div className="nft-image-parent">
          {dummy.map((item, key) => {
            return (
              <div className="nft-image-child">
                <div className="image-div">
                  <img src={item.nft} key={key} alt="nftimage" />
                </div>
                <div className="nft-image-child-inside">
                  <h2>Nft Name</h2>
                  <button className="below-nft-button">Nominated</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllNfts;
