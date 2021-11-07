
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Navbar1  from './components/Navbar1';
import Post from './components/Post';
import {db} from './firebase/config';

function Home() {
  const [posts,setPosts]=useState([]);
  useEffect( ()=>{
    db.collection('Posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc=>doc.data()));
    })
  },[])
  
  
  return (
    <div >
    <Navbar1/>
<div>
 {
    posts.map(
      (vari)=>(
        <div>
        <Post nickname={vari.Name} profilepicture={vari.ProfilePic} caption={vari.Caption} image={vari.ImageURL}/>
        
        </div>
      )
    )
  }
 </div>
 
   </div>
  );
}

export default Home;
