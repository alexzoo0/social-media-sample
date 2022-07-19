import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './style';

const Posts = () => {
    const Posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(Posts);

    return(
        <>
            <h1>Posts ddddd</h1>

            <Post />
            <Post />
        </>
    );
}

export default Posts;