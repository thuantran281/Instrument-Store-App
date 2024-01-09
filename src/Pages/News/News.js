import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./News.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const apiKey = "3e74e29cbe794f04910adbb1199319f4";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );

        setNews(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <>
      <Header />
      <Navbar />
      <ul>
        {news.map((article) => (
          <li key={article.url}>
            <b>{article.title}</b>
            <p>{article.description}</p>
            {/* <p>{article.content}</p> */}
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default News;
