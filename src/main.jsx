import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, {loader as postsLoader}from './routes/Posts'
import './index.css'
import NewPost, {action as newPostAction} from './routes/NewPost'
import PostDetails, {loader as postaDetailLoader} from './components/PostDetails'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    { 
      path: '/', 
      element: <Posts />, 
      loader: postsLoader,
      children: [
      { path:'/create-post', element: <NewPost />, action: newPostAction},
      { path:'/:postId', element: <PostDetails />, loader: postaDetailLoader}
    ]},
]}
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
