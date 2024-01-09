import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Post from "./BlogPost/Post";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
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
      <Container className="h-100">
        <div className="text-center my-xl-3">Blog Posts</div>
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md={4}>
              <Post
                title={post.title}
                body={post.body}
                date={new Date().toDateString()}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Blogs;
