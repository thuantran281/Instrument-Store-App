import React, { useEffect, useState } from "react";
import Layouts from "../Layouts";
import axios from "axios";
import "./News.css";

const redirectUrl = (url) => {
  window.open(url, "_blank");
};

const News = () => {
  const [news, setNews] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const apiUrl = process.env.REACT_APP_NEWS_BASE_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${apiUrl}&apiKey=${apiKey}`);

        setNews(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, [apiKey, apiUrl]);

  return (
    <>
      <Layouts>
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
      </Layouts>
    </>
  );
};

export default News;
