import React from "react";
import { Card } from "react-bootstrap";

const capitaliseFirstLetter = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const Post = ({ title, body, date }) => {
  return (
    <Card className="mb-4 h-90">
      <Card.Body>
        <Card.Title className="text-center fw-bold">
          {capitaliseFirstLetter(title)}
        </Card.Title>
        <Card.Text>{body}</Card.Text>
        <Card.Footer className="text-right text-accept">
          <small>{date}</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Post;
