import React from "react";

import { useState } from "react";

import "../styles/allnft.scss";
import { Nominees } from "./dummyNominees";
import SelectNominees from "./SelectNominees";

function AllNfts({ nftData }) {
  const [showNomineesComponent, setNomineesComponent] = useState(false);

  // useEffect(() => {
  //   if (nftData.length > 0) {
  //     setShowAllNfts2(true);
  //   }
  // }, [])

  // if (nftData.length === 0) {
  //   return (
  //     <>
  //       <div className="all-nft-main">
  //         <div className="nft-image-parent">
  //           <div className="nft-image-child">
  //             <div className="image-div">
  //               <img src="" alt="nftimage" />
  //             </div>
  //             <div className="nft-image-child-inside">
  //               <h3>You don't have any NFTs</h3>
  //               <button className="below-nft-button">Nominated</button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
  return (
    <>
      {showNomineesComponent && (
        <SelectNominees setNomineesComponent={setNomineesComponent} />
      )}
      <div className="all-nft-main">
        <div className="nft-image-parent">
          {nftData.map((item, key) => (
            <div className="nft-image-child" key={key}>
              <div className="image-div">
                <img src={item.image} alt="nftimage" />
              </div>
              <div className="nft-image-child-inside">
                <h3>{item.name}</h3>
                <button
                  className="below-nft-button"
                  onClick={() => setNomineesComponent(true)}
                >
                  Add Nominee
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllNfts;
