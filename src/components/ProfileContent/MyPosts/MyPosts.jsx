import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount}/>);

    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3> Мои записи</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                  <button onClick={AddPost}>Опубликовать</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    )
}
export default MyPosts;
