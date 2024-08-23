import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";

const Watchlist = () => {
  const watchlistdata = useSelector((store) => store.watchlist);

  console.log(watchlistdata);

  return watchlistdata.length === 0 ? (
    <div>No data in watchlist</div>
  ) : (
    <div>
      <Cards data={watchlistdata} />
    </div>
  );
};

export default Watchlist;
