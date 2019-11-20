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
      screen: []
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


  equalsOrOpp =  (event) => {
    console.log("equals running");
    if (event.target.innerText === "=") {
      this.setState({
        num2 : this.state.temp.join(''),
        screen: [],
      })



      
      // switch (this.state.opp) {
      //   case 1:
      //       console.log(this.state.opp);
      //       console.log("state num1 is " + this.state.num1)
      //       console.log("state num2 is " + this.state.num2)
      //     this.setState({
      //       screen:this.state.num1 + this.state.num2
      //     }) 
      //     break
      //   case 2:
      //       this.setState({
      //         screen:this.state.num1 / this.state.num2
      //       }) 
      //     break
      //   case 3:
      //       this.setState({
      //         screen:this.state.num1 - this.state.num2
      //       }) 
      //     break
      //   case 4:
      //       this.setState({
      //         screen:this.state.num1 * this.state.num2
      //       }) 
      //       break
      //   default:
      //     break;
      // }
    } else {
      this.operator(event);
    }
  
  

  }

  

  render(){
    
    console.log("My num1 is: " + this.state.num1);
    console.log("My opp is: " + this.state.opp);
    
    console.log("My num2 is: " + this.state.num2);

    let result = 0;


    switch (this.state.opp) {
      case 1:
          console.log(this.state.opp);
          console.log("state num1 is " + this.state.num1)
          console.log("state num2 is " + this.state.num2)
        if (this.state.num2 != "") {
          result = parseInt(this.state.num1) + parseInt(this.state.num2)
        }
        
        console.log("My result is", result);  

        break

      case 2:
        if (this.state.num2 != "") {
          result = parseInt(this.state.num1) / parseInt(this.state.num2)
        }
        console.log("My result is", result);

        break

      case 3:
        if (this.state.num2 != "") {
          result = parseInt(this.state.num1) - parseInt(this.state.num2)
        }
        console.log("My result is", result);

        break

      case 4:
        if (this.state.num2 != "") {
          result = parseInt(this.state.num1) * parseInt(this.state.num2)
        }
        console.log("My result is", result);

        break

      default:
        break;
    }


    return (
      <div className="App">
        <div className="calculator">
          <div className ="screen">
            <Screen clName ="screenDiv" display = {this.state.screen}/>
            <Screen display = {result} clName ="resultDiv" />
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
