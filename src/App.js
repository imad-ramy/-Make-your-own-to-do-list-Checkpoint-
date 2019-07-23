import React from 'react';
import './App.css';


export default class App extends React.Component {
  state ={
    text:"", 
    listoftext:[""] 
   }

   render(){

return ( 
   <div>
        <input   value={this.state.text}
        onChange={(e) =>{this.setState({text: e.target.value})}}
        placehoder="ajoute nouveau"
        />
        <button onClick={() => {
            const PreviousState=this.state.listoftext;  
            const nextState=[this.state.text];  
            this.setState({listoftext:[...PreviousState, ...nextState]}) 
            this.setState({task:''})
          }}>Add</button> 
          { this.state.listoftext.map((e,i) =><div>
              <li>{e}</li>           

              <button onClick={() => {
              let array = this.state.listoftext
              let index = i
              array.splice(i,1)
              this.setState({listoftext:array})
              }}>delete</button>
          </div>)} 
</div>
   )}}
