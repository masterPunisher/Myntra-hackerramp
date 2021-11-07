import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1  from './components/Navbar1';
import './upload.css';
import { useState } from 'react';
import {storage,db} from './firebase/config';

function UploadPage() {
  const [caption,setCaption]=useState('');
  const [fileUrl,setFileUrl]=useState('');
  
 const onFileChange = async (e)=>{
   const file=e.target.files[0];
   const storageRef=storage.ref();
   const fileRef= storageRef.child(file.name);
   await fileRef.put(file)
   setFileUrl(await fileRef.getDownloadURL())
 } 
 const onSubmit =(e)=>{
   e.preventDefault();
  
   db.collection("Posts").doc(caption).set({
     Name:"Ayush Sinha",
     ImageURL:fileUrl,
     Profilepic:"kuch bhi ho",
     Caption:caption
   })
   document.location.href='./uploadSuccess';
 }
  // const upload = ()=>{
  //   if(image == null)
  //     return;
  //   storage.ref(`/images/${image.name}`).put(image)
  //   .on("state_changed" , alert("success") , alert);
  // }
    
  return (
    <div >
    <Navbar1/>
    <div className="page">
    
    <div className="box">
      <div className="imgholder">
      <h2>Add your Image </h2>
      <input type="file" onChange={onFileChange} style={{marginTop:'3vh'}}></input>
     <br/>
      <label style={{marginTop:'3vh',marginRight:'15px'}} >Caption</label>
      <input type="text" style={{border: '2px solid grey',width:'70%'}} onChange={(e)=>{setCaption(e.target.value)}}></input><br/>
     
      <button type="button" onClick={onSubmit} className="btn btn-primary btn-sm" style={{marginTop:'2vh'}}>Upload</button>
   
      </div>
    </div>
    </div>
    </div>
  );
}

export default UploadPage;
