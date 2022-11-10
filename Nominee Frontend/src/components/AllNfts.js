import React, { useEffect } from "react";

import { useState } from "react";

import "../styles/allnft.scss";
import { Nominees } from "./dummyNominees";
import SelectNominees from "./SelectNominees";

function AllNfts({ nftData }) {
  console.log(nftData);
  const [showNomineesComponent, setNomineesComponent] = useState(false);
  const [nftData2, setNftData2] = useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const temp = () => {
    for (let i = 0; i < nftData.length; i++) {
      // const nft = JSON.parse(item.metadata);
      const nft = JSON.parse(nftData[i].metadata);
      console.log(nft);
      if (!nftData2.find((temp) => nft["image"] === temp["image"])) {
        nftData2.push(nft);
      }
      // nftData.push([item]);
    }
    setNftData2(nftData2);
    console.log(nftData2);

    setLoading(false);
    // nftData.map((item) => {
    //   const nft = JSON.parse(item.metadata);
    //   setNftData2((prev) => [...prev, nft]);
    //   console.log(nftData);
    //   return nftData2;
    // });
  };

  useEffect(() => {
    temp();
  }, [nftData2]);

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
  if (!isLoading)
    return (
      <>
        {showNomineesComponent && (
          <SelectNominees setNomineesComponent={setNomineesComponent} />
        )}
        <div className="all-nft-main">
          <div className="nft-image-parent">
            {nftData2.map((item, key) => (
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
                    Choose Nominee
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  else return <>Loading...</>;
}

export default AllNfts;
