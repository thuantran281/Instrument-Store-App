import React, { useState, useEffect } from "react";
import Layouts from "../Layouts";
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
      <Layouts>
        <Container className="h-100">
          <h3 className="text-center title my-3 my-sm-3 my-md-3 my-lg-3 my-xl-4">
            Blog Posts
          </h3>
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
      </Layouts>
    </>
  );
};

export default Blogs;
