import 'bootstrap/dist/css/bootstrap.min.css';
import { Component ,useState,useEffect} from 'react';
import './order.css';
import {db} from '../../firebase/config';

function  Order(){
  var amount=0;
  const [orders,setOrders]=useState([]);
  useEffect( ()=>{
    db.collection('Orders').onSnapshot(snapshot =>{
      setOrders(snapshot.docs.map(doc=>doc.data()));
    })
  },[])
  orders.map((vari)=>(amount+=vari.Price));
     return (
    
    <div >
    <div ><a className={(amount>10000)? "":"disabled"}  href="./upload">
<button type="button" className=" butn" style={{widt:'100%'}}>Post on Myntra Studio</button></a>
</div>
<h2 style={{marginTop:'4vh', marginLeft:'4vh'}}>Total Purchase Amount : {amount} Ruppes.</h2>


{
  orders.map(
    (im)=>(
      <div className="Order">
<img src={im.Image} alt="Cloth" className="r pic" />
    <div className="ord">
    <p>{im.Brand} </p>
    <p>Price: <strong>{im.Price}</strong></p> 
    </div>
  </div>
    )
  ) 
}

    </div>
    
  );
}

export default Order;
