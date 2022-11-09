import React from "react";
import "../styles/token.scss";

function Tokens() {
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];

  return (
    <div className="token-main">
      Tokens
      <div className="token-table" id="token-table">
        <div className="token-parent">
          {/* <div className="token-header">
            <ul className="token-header-ul">
              <li className="token-header-li">Token</li>
              <li className="token-header-li">Balance</li>
              <li className="token-header-li">Price</li>
              <li className="token-header-li">Nominated</li>
              <li className="token-header-li">Available</li>
            </ul>
          </div> */}
          <table>
            <tr>
              <th>Token</th>
              <th>Balance</th>
              <th>Price</th>
              <th>Nominated</th>
              <th>Avaliable</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                </tr>
              );
            })}
          </table>
          <div className="token-child"></div>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
