//import logo from './logo.svg';
import './App.css';
import React from 'react';


// function App() {
//   let firstVar=5
//   console.log("first Var:",firstVar)
//   function myFunction()
//   {
//     console.log("This is my function")
//     return true
//   }
//   function myFunction1(variable)
//   {
//     console.log("This is my Function 1")
  
//      if(variable()){
//       console.log("The condition id true")
//      }
//      else{
//       console.log("The condition is false")
//      }
//   }


//   myFunction1(myFunction)
//   class Student{
//     id 
//     name
//     rollnumber
//     constructor(tempId,tempName,tempRoll){
//      this.id=tempId
//      this.name=tempName
//      this.rollnumber=tempRoll
//     }
//     print(){
//       console.log("Id",this.id)
//       console.log("name",this.name)
//       console.log("rollnumber",this.rollnumber)
//     }
//   }
//   class Moniter extends Student{
//     batch
//     constructor(batchtemp,tempId,tempName,tempRoll){
//       super(tempId,tempName,tempRoll)
//       this.batch=batchtemp
//     }
//     print(){
//       super.print()
//       console.log("Batch",this.batch)
//     }
//   }
//    //const  student1= new Student(121,"Priya",235465)
//   // student1.print()
//    let ravi=new Moniter("2-3pm",101,"Priyanshi",1234)
//    console.log(ravi)
//    ravi.print()
//   let a=<div>Jay shree Ram</div>
//   return (
    
//     <div> Hello! Priya {firstVar}<br/>{a}</div>
//   );
// }
// class App extends React.Component
// {
//   buttonClick=()=>{
//     console.log("Clicked the Button")
//     console.log(this.buttonClick)
//   }
//   render()
//   {
//     return  <div>
//     <p>
//       <ol>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//       </ol>
//       <button onClick={this.buttonClick}>Click me!</button>
   
//     </p>
//     </div>

  
    // React.createElement(
    //   "div",
    //   null,
    //  React.createElement("p",null,"This is simple react element"),
    //  React.createElement("ol",null, 
    //    React.createElement("li",null,"list item 1"),
     
    //    React.createElement("li",null,"list item 2")
    //  )

    //   )


//   }

// }
// const App=(props)=>
// {
//   console.log(props)
//   console.log(props.color)
//   console.log(props.clickEvent)
//   return <div style={{backgroundColor:props.color}}>
//     This is App Component<br></br>
//     <button onClick={props.clickEvent}>Click me</button></div>
// }


class App extends React.Component{
  state={
    counter:0,
    component:<ChildComponent/>
}
  constructor(props)
 
    {
      super(props)
      console.log("Constructer of App component")
    }
    static getDerivedStateFromProps(){
      console.log("Get Derived state from props")
    }
    
    increamentCounter = () =>{
     this.setState({counter:this.state.counter+1})
    }
    componentDidMount(){
      console.log("Component did mount")
    }
    shouldComponentUpdate(){
      console.log("shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(" getSnapshotBeforeUpdate")
        return true
    }
    componentDidUpdate(){
       console.log("componentDidUpdat")
    }
    unMountChild =() => {
      this.setState({
        counter:this.state.counter,
        component:"The child component is gone/ Unmount"
      })
    }
    render()
    { 
      console.log("Inside the render ")
      console.log(this.props.color)
       return <div style={{background:this.props.color}}>Hello
       <button  onClick={this.props.clickEvent}> Click me</button>
       Counter:{this.state.counter}
       <button onClick={this.increamentCounter}>Increament Counter</button>
       <br></br>
       Mounting Child Component
       <br></br>
       {/* <ChildComponent></ChildComponent> */}
       {this.state.component}
       <br></br>
       <button onClick={this.unMountChild}>UnMount Child</button>
       <br></br>
       </div>
    }
}
class ChildComponent extends React.Component
{
    componentWillUnmount(){
      console.log("Unmounting Child component")
    }
  render(){
    return <div> This is my Child Component</div>
  }
}
export default App;
