import React from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import './comment.css';
import Avatar from '../Avatar/avatar';

const Comment = (props) => {
  const { comment } = props;
  return (
    <div className="comment">
      <div className="comment-metadata">
        <Avatar name={comment.author} />
        <p className="comment-author">{comment.author}</p>
        <p className="comment-created-time">
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>
      <ReactMarkdown children={comment.body} />
    </div>
  );
};

export default Comment;
