import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import './order.css';


class Order extends Component{
render() {
    var im="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIIe_7Nqeew_snlv8JrE3P2ss7CrrdkQ0aw&usqp=CAU";
      return (
    
    <div >
    <div ><a href="./upload">
<button type="button" className=" butn" style={{widt:'100%'}}>Post on Myntra Studio</button></a>
</div>
<div className="Order">
<img src={im} alt="John Doe" className="r pic" />
    <div className="ord">
    <p>Ingredients: Salad(1) </p>
    <p>Price: <strong>USD 5.45</strong></p> 
    </div>
  </div>
  <div className="Order">
<img src={im} alt="Ayush" className="r pic" />
    <div className="ord">
    <p>Ingredients: Burger </p>
    <p>Price: <strong>USD 2.25</strong></p> 
    </div>
  </div>
  <div className="Order">
<img src={im} alt="Ayush" className="r pic" />
    <div className="ord">
    <p>Ingredients: Burger </p>
    <p>Price: <strong>USD 2.25</strong></p> 
    </div>
  </div>
  <div className="Order">
<img src={im} alt="Ayush" className="r pic" />
    <div className="ord">
    <p>Ingredients: Burger </p>
    <p>Price: <strong>USD 2.25</strong></p> 
    </div>
  </div>
    </div>
    
  );
}
}
export default Order;
