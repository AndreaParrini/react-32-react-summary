import { useState } from 'react';

import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css"
import Modal from './Modal';

function PostsList({hideModal, modalIsVisible}){
    const [posts, setPosts] = useState([]);
    function addPost(postData){
        setPosts(prevPosts => [postData, ...prevPosts])
    }

    return (
        <>  
            {modalIsVisible && (
                <Modal onClose={hideModal}>
                    <NewPost onCancel={hideModal} onAddPost={addPost}/>
                </Modal>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color:'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map(post => (
                    <Post key={post.id} body={post.body} author={post.author}/>
                ))}
            </ul>
            )} 
        </>
    )
}

export default PostsList;