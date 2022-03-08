import React, { useState, useEffect } from "react";
import axios from "axios";
import Api_URL from "./components/ApiUrl";

const App = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getapi = async () => {
      try {
        const response = await axios.get(Api_URL);
        setNews(response.data.hits);
        console.log(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    };
    getapi();
  }, []);
  return (
    <div>
      {news &&
       news.map((el) => {
          return (
              el.author, el.comment_text)
        })}
    </div>
  );
};
export default App;

