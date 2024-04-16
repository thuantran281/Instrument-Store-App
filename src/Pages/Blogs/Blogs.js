import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Post from "./BlogPost/Post";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./Blogs.css";

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
        <h3 className="text-center title my-3 my-sm-3 my-md-3 my-lg-3 my-xl-4">Blog Posts</h3>
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
