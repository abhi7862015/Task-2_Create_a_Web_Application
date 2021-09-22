import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Useritem from './Component/Useritem';

function App() {
 
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/useritem" component={Useritem} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;