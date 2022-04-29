
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dev from './components/Dev';
import Reacttable from './components/Reacttable';
import Med from './components/Med';
import Home from './components/Home';



function App() {
  return (
    <div className="App">

      
      
      <BrowserRouter>
      <Switch>
        
        
        
        <Route exact path='/'><Med /></Route>
       
      </Switch>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
