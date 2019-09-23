import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl} 
      alt={props.user.name}
    />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
    </div>
  );
}
function Testo(props) {
  return (
    <div className="Comment-text">
      {props.text}
    </div>
  );
}
function Day(props) {
  return (
    <div className="Comment-date">
      {formatDate(props.date)}
    </div>
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <Testo text={props.text} />
      <Day date={props.date} />
    </div>
  );
}
const comment = {
  date: new Date(),
  text: 'Mettere assieme i Pezzi di React!',
  author: {
    name: 'Gatto Pinguino - User',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}
ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root')
);