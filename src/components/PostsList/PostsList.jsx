import React from 'react';
import {useSelector} from "react-redux";
import Post from "../Post/Post";

const PostsList = () => {

    const posts = useSelector(state => state.user.posts)

    const postsList = posts.map(post => <Post key={post.id} userName={'Игорь Килецкий'} text={post.text}/>)

    return (
        <div>
            {postsList}
        </div>
    );
};

export default PostsList;