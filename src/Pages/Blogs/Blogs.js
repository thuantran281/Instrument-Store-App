import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Post from "./BlogPost/Post";
import axios from "axios";
// import { Button, Card } from "react-bootstrap";
// import guitarPhoto from "../../Assets/Images/28694736822_e6c1b710a6_b.jpg";
import "../Blogs/Blogs.css";

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <div className="text-center my-xl-3">Blog Posts</div>
        <ul>
          {posts.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              date={new Date().toDateString()}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
