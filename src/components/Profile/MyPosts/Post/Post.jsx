import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU" alt="" />
                    {props.message}
              <div>
        <span>Like</span> {props.likesCount}
      </div>

    </div>

   
  )
}
export default Post;