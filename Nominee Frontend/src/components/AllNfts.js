import React from 'react'
import { dummy } from './dummyNfts';
import "../styles/allnft.scss"

function AllNfts() {
    return (
        <>
            <div className='all-nft-main'>
                <div className='nft-image-parent'>
                    {dummy.map((item, key) => {
                        return (
                            <div className='nft-image-child'>
                                <img src={item.nft} key={key} alt="nftimage" />
                                <h2>Nft Name</h2>
                                <button>Nominated</button>
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default AllNfts