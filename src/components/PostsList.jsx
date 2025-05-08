import { useState } from 'react';

import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css"
import Modal from './Modal';

function PostsList(){
    const [enteredBody, setEnteredBody] = useState("React.js is awsome!");
    const [enteredAuthor, setEnteredAuthor] = useState("Andrea");
    const [modalIsVisible, setModaliIsVisible] = useState(true)


    function changeBodyHandler(event){
        setEnteredBody(event.target.value)
    }

    function changeAuthorHandler(event){
        setEnteredAuthor(event.target.value)
    }

    function hideModalContent(){
        setModaliIsVisible(false) 
    }
    

    return (
        <>  
            {modalIsVisible && (
                <Modal onClose={hideModalContent}>
                    <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Maximilian" body="Check out the full course!"/>
            </ul>
        </>
    )
}

export default PostsList;