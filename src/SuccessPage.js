import 'bootstrap/dist/css/bootstrap.min.css';
import './SuccessPage.css';

function Success(){
    return (
        <div className="bodi">
        <div className="card">
        <div style={{borderRadius:'200px', height:'200px', width:'200px', background: '#F8FAF5', margin:'0 auto'}}>
          <i className="checkmark">✓</i>
        </div>
          <h1>Success</h1> 
          <p>We received your Post.  <br/>
          It will be uploaded after verification by our Executive.
          ;<br/></p>
          <p><a href="/">Click </a>here to go to Home Page.</p>
        </div>
        </div>
    )
}
export default Success;