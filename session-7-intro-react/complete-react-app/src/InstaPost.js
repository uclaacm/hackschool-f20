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

function InstaPost(props) {
    
    const [ likeCount, setLikeCount ] = useState(0);
    const [ comments, setComments ] = useState([]);
    const [ inputText, setInputText ] = useState('');

    const incrementLikeCount = () => {
        console.log("Incrementing like count!")
        setLikeCount( currentLikeCount => currentLikeCount + 1)
    }

    const updateInputBox = (event) => {
        setInputText(event.target.value)
    }

    const addComment = () => {
        if (inputText.trim() !== '') {
            setComments( comments => [...comments, <Comment key={inputText} text={inputText} />]);
        }
        setInputText('');
    }

    return <div className='post'>
        <div className='account-line'>
            <strong>{props.accountName}</strong>
        </div>
        <div className='img-wrapper'>
            <img 
                className='post-img'
                alt="content of instagram post" 
                src={props.image}
                onClick={incrementLikeCount}
            />
        </div>
        <div className='post-info'>
            <div className='icons'>
                <img className='icon' alt="heart icon" src={heart} />
                <img className='icon' alt="comment icon" src={comment} />
                <img className='icon' alt="share icon" src={share} />
            </div>
            <div>
                Liked by <span>{likeCount}</span> people
            </div>
            <div>
                <strong>{props.accountName}</strong> {props.caption}
            </div>
            <div className='comments'>
                {comments}
            </div>
            <label>
                <input type='text' value={inputText} onChange={updateInputBox}/>
                <button onClick={addComment}>Comment</button>
            </label>
        </div>
    </div>
}

export default InstaPost;