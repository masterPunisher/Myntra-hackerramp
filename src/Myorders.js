// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1  from './components/Navbar1';
import Order from './components/Order';

function Myorders() {
  return (
    <div style={{backgroundColor:'#dedede',height:'100vh'}}>
    <Navbar1/>
   
    <Order/>
    </div>
  );
}

export default Myorders;
