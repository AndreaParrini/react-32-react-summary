import { useState } from 'react';

import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css"

function PostsList(){
    const [enteredBody, setEnteredBody] = useState("React.js is awsome!");
    const [enteredAuthor, setEnteredAuthor] = useState("Andrea");


    function changeBodyHandler(event){
        setEnteredBody(event.target.value)
    }

     function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value)
    }

    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Maximilian" body="Check out the full course!"/>
            </ul>
        </>
    )
}

export default PostsList;