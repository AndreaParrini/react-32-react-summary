import Post from "./Post";

import classes from "./PostsList.module.css"

function PostsList(){
    return (
        <ul className={classes.posts}>
            <Post author="Andrea" body="React.js is awsome!"/>
            <Post author="Maximilian" body="Check out the full course!"/>
        </ul>
    )
}

export default PostsList;