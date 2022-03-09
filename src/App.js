import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import News from "./components/News";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("react");
  const [page, setPage] = useState(5);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getapi = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${searchQuery}&tags=story&page=${page}`
        );
        console.log(response.data);
        setNews(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    };
    getapi();
  }, [searchQuery, page]);

  return (
    <div>
      <Search setPage={setPage} setSearchQuery={setSearchQuery} />
      <News news={news} />
      <button onClick={() => setPage((prev) => (prev === 0 ? prev : prev - 1))}>
        -
      </button>
      Page: {page + 1}
      <button onClick={() => setPage((prev) => prev + 1)}>+</button>
    </div>
  );
};
export default App;
