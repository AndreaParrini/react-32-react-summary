import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModaliIsVisible] = useState(false);

  function hideModalContent(){
    setModaliIsVisible(false) 
  }

  function showModalContent(){
    setModaliIsVisible(true) 
  }

  return (
    <>
      <MainHeader onCreatePost={showModalContent}/>
      <main>
        <PostsList hideModal={hideModalContent} modalIsVisible={modalIsVisible}/>
      </main>
    </>
    );
}

export default App;
