import React from "react";
import { useNavigate } from "react-router-dom";

import { Nominees } from "./dummyNominees";

import "../styles/nomineeslist.scss";

function SelectNominees(props) {
  const navigate = useNavigate();
  const walletAdd = "0x054ae6107caadc187c304de87365bc52f8c2adb9";

  if (Nominees.length > 0) {
    return (
      <>
        <div className="select-nominee-main">
          <div className="nominees-main">
            <div className="add-nominee">
              <button
                className="add-nominee-btn"
                onClick={() => {
                  props.setNomineesComponent(false);
                }}
              >
                Close
              </button>
            </div>
            {Nominees.map((item, key) => {
              return (
                <div className="nominees-container" key={key}>
                  <div className="nominees-profile">
                    <img
                      src={item.image}
                      alt="nominee_profile_image"
                      width="64px"
                    />
                  </div>
                  <div className="nominees-details">
                    <h2>{item.name}</h2>
                    <p>{item.email}</p>
                    <p>
                      {item.walletAdd.substring(0, 6) +
                        "..." +
                        item.walletAdd.substring(
                          walletAdd.length - 5,
                          walletAdd.length
                        )}
                    </p>
                  </div>
                  <div className="nominees-last">
                    <button onClick={() => {}}>Select</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="select-nominee-main">
          <div className="nominees-main">
            <div className="nominees-container">
              <div className="nominees-details">
                <h2>You have 0 nominees added.</h2>
                <p>Please add nominee to display here.</p>
              </div>
              <div className="nominees-last">
                <button>Add Nominee</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SelectNominees;
