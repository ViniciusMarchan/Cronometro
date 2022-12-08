import React, { Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
     this.state = {
      numero: 0,
      btn: 'Iniciar'
     };
     this.timer = null;
     this.init = this.init.bind(this);
     this.fin = this.fin.bind(this);
  }

  init(){
       let state = this.state


      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null
        state.btn = 'Iniciar'
      }

      else{
        this.timer = setInterval(()=>{
      let state = this.state;
      state.numero += 0.1;
      this.setState(state)
      
    },100);

    state.btn = 'Pause'
      }
      this.setState(state)
  }

  fin(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null
    }
   
      let state = this.state;

      state.numero = 0;
      state.btn = 'Iniciar';
      this.setState(state)
  }

   render(){
    return(
      <div className='container'>
            <img src={require('./assets/cronometro.png')} className='img'/>
            <a className='timer'>{this.state.numero.toFixed(1)}</a>
            <div className='areaBtn'>
              <a className='btn' onClick={this.init}>{this.state.btn}</a>
              <a className='btn' onClick={this.fin}>Finalizar</a>
            </div>
      </div>
    );
   }
}

export default App;