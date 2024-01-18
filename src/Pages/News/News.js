import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import axios from "axios";
import "./News.css";

const redirectUrl = (url) => {
  window.open(url, "_blank");
};

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
      <div className="news-container">
        {news.map((article) => (
          <div key={article.url} className="news-card card-width">
            <img
              src={article.urlToImage}
              alt={article.title}
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-title">{article.title}</h3>
              <p className="card-description">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => redirectUrl(article.url)}
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default News;
