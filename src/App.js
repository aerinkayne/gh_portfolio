import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Artwork from './components/Artwork';
import GridRadio from './components/GridRadio';
import MaskRadio from './components/MaskRadio';
import JavascriptProjects from './components/JavascriptProjects';
import StyleProjects from './components/StyleProjects';



import './App.css';
import './custom_css/main.css';
import './custom_css/welcome.css';
import './custom_css/artwork.css';
import './custom_css/gridProjects.css';
import './custom_css/negativeSpace.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      navbar: '',                //stores ref to docEleId'navbar' after comp load
      gridTheme: 'abstract',     //stores 'value' for grid radio set name=gridTheme.  changed via onchange handle  
      maskTheme: ''
    }
  }
  componentDidMount(){
    this.setState({
      navbar: document.getElementById('navbar')
    })
  }

  componentDidUpdate(){
    //console.log(this.state);
  }

  handleClicks = (event)=> {
    const target = event.currentTarget;
    
    if(target.classList.contains('burger')){
      target.classList.toggle('burgX'); 
      this.state.navbar.classList.toggle('showNav');
    };
  }

  handleChange = (event)=> {
    const {name, value} = event.target
    
    this.setState({ 
      [name]: value
    });
  }

  render() {

    return (
      <div className="App">

        <Navbar handleClicks={this.handleClicks}/>

        <div className="mainContent">

          {/* this stuff hash routed */}
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/gridradio'  component={() => <GridRadio gridTheme={this.state.gridTheme} onChange={this.handleChange} />}  />
            <Route path='/maskradio'  component={() => <MaskRadio maskTheme={this.state.maskTheme} onChange={this.handleChange} />}  />
            <Route path='/javascript' component={JavascriptProjects} />
            <Route path='/css' component={StyleProjects} />
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
