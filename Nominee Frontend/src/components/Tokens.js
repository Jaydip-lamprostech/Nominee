import React from "react";
import axios from "axios";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import "../styles/token.scss";

function Tokens() {
  const { address } = useAccount();
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];
  const fetchTokens = async () => {
    const options = {
      method: "GET",
      url: `https://deep-index.moralis.io/api/v2/${address}/balance`,
      params: { chain: "mumbai" },
      headers: { accept: "application/json", "X-API-Key": "test" },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchTokens();
  }, []);
  return (
    <div className="token-main">
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
              <th>Nominee</th>
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
