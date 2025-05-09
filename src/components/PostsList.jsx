import { useEffect, useState } from 'react';

import NewPost from "./NewPost";
import Post from "./Post";

import classes from "./PostsList.module.css"
import Modal from './Modal';

function PostsList({hideModal, modalIsVisible}){
    const [isFetching, setIsFetching] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts(){
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    },[]);

    function addPost(postData){
        fetch('http://localhost:8080/posts',{
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        setPosts(prevPosts => [postData, ...prevPosts])
    }

    return (
        <>  
            {modalIsVisible && (
                <Modal onClose={hideModal}>
                    <NewPost onCancel={hideModal} onAddPost={addPost}/>
                </Modal>
            )}
            {!isFetching && posts.length === 0 && (
                <div style={{textAlign: 'center', color:'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            {!isFetching && posts.length > 0 && (
            <ul className={classes.posts}>
                {posts.map(post => (
                    <Post key={post.id} body={post.body} author={post.author}/>
                ))}
            </ul>
            )}
            {isFetching && <p style={{textAlign: 'center', color:'white'}}>Loading post...</p>}
        </>
    )
}

export default PostsList;