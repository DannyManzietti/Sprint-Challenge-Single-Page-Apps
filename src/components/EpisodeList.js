import React, { useEffect, useState } from "react";
import axios from "axios";

import EpisodeCard from "./EpisodeCard";
import PageMenu from "./Page";
import Loader from "react-loader-spinner";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [epList, setEpList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then(resp => setEpList(resp.data.results))
      .catch(error => console.log("Axios Episodes Error: ", error));
  }, [page]);

  const handlePageChange = number => {
    setPage(number);
  };

  return !epList ? (
    <Loader className="loader" type="Oval" color="red" height={80} width={80} />
  ) : (
    <>
      <section className="episode-list grid-view">
        {epList.map(ep => {
          return (
            <EpisodeCard
              key={ep.id}
              name={ep.name}
              episode={ep.episode}
              airdate={ep.air_date}
              characters={ep.characters.length}
            />
          );
        })}
      </section>
      <div>
        <PageMenu pages={2} handlePageChange={handlePageChange} />
      </div>
    </>
  );
}
