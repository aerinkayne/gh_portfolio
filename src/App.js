import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Artwork from './components/Artwork';
import Radiotest from './components/Radiotest';
import JavascriptProjects from './components/JavascriptProjects';


import './App.css';
import './custom_css/main.css';
import './custom_css/welcome.css';
import './custom_css/artwork.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      navbar: ''  //stores ref to docEleId'navbar' after comp load
    }
  }
  componentDidMount(){
    this.setState({
      navbar: document.getElementById('navbar')
    })
  }
  handleClicks = (event)=> {
    const target = event.currentTarget;
    
    if(target.classList.contains('burger')){
      target.classList.toggle('burgX');
      //is this technically a state change?  
      this.state.navbar.classList.toggle('showNav');
    };



  }

  render() {
    return (
      <div className="App">

        <Navbar handleClicks={this.handleClicks}/>

        <div className="mainContent">

          {/* this stuff hash routed */}
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/radioTest' component={Radiotest} />
            <Route path='/javascript' component={JavascriptProjects} />
            <Route path='/artwork' component={Artwork} />
            <Route component={ ()=>{ return (<div>404 - Page not Found</div>) }} />
          </Switch>

        </div>

        <Footer />

      </div>
    );
  }

}


export default App;
