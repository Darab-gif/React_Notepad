import React, { useEffect } from "react";

function Test() {
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=18sparkline=false"
    )
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }, []);
  return <></>;
}

export default Test;
