import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message='hi' likesCount='0'/>
                <Post message='hola' likesCount='23'/>

            </div>

        </div>
    )
}
export default MyPosts;