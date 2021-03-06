import React from "react";
// import faker from "faker";
const CommentDetail = (props) => {
  console.log(props);
  return (
    <div className="comments">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.fakerLink} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date"> {props.date}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};
export default CommentDetail;
