import React, {Component, setState} from 'react';
import Btn from './Components/Btn'
import Screen from './Components/Screen'

import './App.css';

class App extends React.Component  {
  state = {
    tripleWidth: true,
    red: true,
    content: ["clear","+",1,2,3,"÷",4,5,6,"-",7,8,9,"x",0,"="],
    screen: [],
    screen2: "",
    num1: "",
    num2: "",
    opp: 0,
    temp:[]
  }

  dispNum = (event)=> {
      this.setState({
        screen: [...this.state.screen, event.target.innerText],
        temp: [...this.state.temp, event.target.innerText]
      })
      return this.state.screen.join('');
  }

  clear = () => {
    this.setState({
      screen: [],
      screen2: "",
      num1: "",
      num2: "",
      opp: 0,
      temp:[]
    })
  }

  updateNum1 = (num) => {
    this.setState({
      num1: this.state.temp.join(''),
      opp: num,
      temp: []
    })

  }

  operator = (event) => {
    console.log(event.target.innerText);
    
     switch(event.target.innerText) {
        case "+":
          this.updateNum1(1);
          break;
        case "÷":
          this.updateNum1(2);
          break;
        case "-":
          this.updateNum1(3);
          break;
        case "x":
          this.updateNum1(4);
          break;
  
     } 

  }

  set = (event) => {
    if (event.target.innerText === "=") {
    this.setState({
      num2 : this.state.temp.join(''),
      screen: [],
    })

  }else {
      this.operator(event);
    }
  }

  secondCheck = ()=> {
    if (this.state.screen2 != "") {
      let lastOpp = this.state.screen.pop();
    this.setState({
      num1: this.state.screen2,
      screen: [this.state.screen2, lastOpp],
      screen2: ""
    }) 
    }
  console.log("done");
  }

  check = async ()=>{
    await this.secondCheck();
  }

  equalsOrOpp =  async(event) => {
    await this.set(event);
    // console.log("num2 is now " + this.state.num2);
    
      switch (this.state.opp) {
        case 1:
          if (this.state.num2 != "") {
            this.setState({
              screen2:parseInt(this.state.num1) + parseInt(this.state.num2),
              num1: '',
              num2: ''
            }) 
          }else{

          this.check()
          }
          break
        case 2:
          if (this.state.num2 != "") {
            this.setState({
              screen2:parseInt(this.state.num1) / parseInt(this.state.num2),
              num1: '',
              num2: ''
            }) 
          }else{

            this.check()
          }
          break
        case 3:
          if (this.state.num2 != "") {
            this.setState({
              screen2:parseInt(this.state.num1) - parseInt(this.state.num2),
              num1: '',
              num2: ''
            }) 
          }
          else{

            this.check()
          }
          break
        case 4:
          if (this.state.num2 != "") {
            this.setState({
              screen2:parseInt(this.state.num1) * parseInt(this.state.num2),
              num1: '',
              num2: ''
            }) 
          }else{

            this.check()
          }
          break
        default:
            console.log("Default Triggered")
          break;
      }

    } 
  

  render(){
    



    return (
      <div className="App">
        <div className="calculator">
          <div className ="screen">
            <Screen clName ="screenDiv" display = {this.state.screen}/>
            <Screen display = {this.state.screen2} clName ="resultDiv" />
          </div>
          <Btn 
            dispNum = {this.clear}
            content = {this.state.content[0]} 
            width = {this.state.tripleWidth}
          />
          <Btn 
            dispNum = {this.dispNum}
            color = {this.state.red}  
            content = {this.state.content[1]}
            funcBtn = {this.equalsOrOpp}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[2]}            
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[3]}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[4]}
          />
          <Btn 
            dispNum = {this.dispNum}
            color = {this.state.red}
            content = {this.state.content[5]}
            funcBtn = {this.equalsOrOpp}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[6]}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[7]}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[8]}
          />
          <Btn 
            dispNum = {this.dispNum}
            color = {this.state.red}
            content = {this.state.content[9]}
            funcBtn = {this.equalsOrOpp}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[10]}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[11]}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[12]}
          />
          <Btn 
            dispNum = {this.dispNum}
            color = {this.state.red}
            content = {this.state.content[13]}
            funcBtn = {this.equalsOrOpp}
          />
          <Btn 
            dispNum = {this.dispNum}
            width = {this.state.tripleWidth}
            content = {this.state.content[14]}
          />
          <Btn 
            dispNum = {this.dispNum}
            content = {this.state.content[15]}
            color = {this.state.red}
            funcBtn = {this.equalsOrOpp}
          />
        </div>
      </div>
    );
  }
}

export default App;
