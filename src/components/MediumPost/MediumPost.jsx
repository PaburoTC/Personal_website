import React from 'react';
import './MediumPost.css'


const MediumPost = props => {
    return (
        <div className="post" onClick={()=>window.open(props.url,'')}>
            <div className="post-body">
                <h3 className="post-title">{props.title}</h3>
                <div className="post-content">{props.content}</div>
            </div>
        <img className="post-image" src={props.img} alt={props.title}/>
        </div>
    )
}

export default MediumPost;