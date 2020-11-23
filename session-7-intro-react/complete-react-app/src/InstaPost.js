import React, { useState } from 'react';
import './InstaPost.css';

import heart from './images/heart.png';
import comment from './images/comment.png';
import share from './images/share.png';

function Comment(props) {
  return <div>
    <strong>eug.lo </strong>{props.text}
  </div>
}

function Icon(props) {
  return <img className='icon' alt={props.icon + " icon"} src={props.image} />
}

function InstaPost(props) {
  
  const [ likeCount, setLikeCount ] = useState(0);
  const [ inputText, setInputText ] = useState('');
  const [ comments, setComments ] = useState([]);

  const incrementLikeCount = () => {
    console.log("Incrementing like count!")
    setLikeCount(likeCount + 1)
  }

  const updateInputBox = (event) => {
    setInputText(event.target.value)
  }

  const addComment = () => {
    if (inputText.trim() !== '') {
      setComments([...comments, <Comment key={inputText} text={inputText}/>]);
    }
    setInputText('');
  }

  return <div className='post'>
    <div className='account-line'>
      <strong>{props.accountName}</strong>
    </div>
    <img 
      className='post-img'
      src={props.image}
      alt={props.altDescription}
      onClick={incrementLikeCount}
    />
    <div className='post-info'>
      <div className='icons'>
        <Icon icon='heart' image={heart} />
        <Icon icon='comment' image={comment} />
        <Icon icon='share' image={share} />
      </div>
      <div>
        {likeCount} likes
      </div>
      <div>
        <strong>{props.accountName}</strong> {props.caption}
      </div>
      <div className='comments'>
        {comments}
      </div>
      <input type='text' value={inputText} onChange={updateInputBox}/>
      <button onClick={addComment}>Comment</button>
    </div>
  </div>
}

export default InstaPost;