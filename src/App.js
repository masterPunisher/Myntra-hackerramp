// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Myorders from './Myorders';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UploadPage from './Upload';
function App() {
  return (
   <div>
    <Router>
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/myorders">
          <Myorders/>
        </Route>
        <Route path="/upload">
          <UploadPage/>
        </Route>
      </Switch>
    </Router>

   </div>
  );
}

export default App;
