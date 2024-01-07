import React from "react";

const capitaliseFirstLetter = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

const Post = ({ title, body, date }) => {
  return (
    <>
      <div className="mb-4">
        <div className="alert alert-info d-flex flex-column">
          <div className="text-center fw-bold">{capitaliseFirstLetter(title)}</div>
          <br />
          <p>{body}</p>
          <small style={{ width: "100%" }} className="text-right text-accept">
            {date}
          </small>
        </div>
      </div>
    </>
  );
};

export default Post;
