import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Loadingui from "../components/Loadingui";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [data, setData] = useState([]);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === "") {
      navigate("/");
    } else {
      const url =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  if (data.length === 0) {
    return <Loadingui />;
  } else {
    return (
      <div className="container w-full mx-auto">
        <Cards data={data} />
      </div>
    );
  }
};

export default Trending;
