import React from 'react';
import Alert from './Alert.js'
import CreateComp from './CreateComp.js'
// need to create .js files for the below files
import DisplayMessage from './DisplayMessage.js'
import BorderedImageFrameProp from './BorderedImageFrameProp.js'
import SumOfTwo from './SumOfTwo.js'

function App() {
  return (
      <React.Fragment>
          <Alert message="Hello there" bgcolor="orange"/>          
          <h1>This is written in the main App()</h1>
          <p>{helloWorld()}</p>
          {returnJsx()}
          <CreateComp/>
          <DisplayMessage whatever_message="This is a prop which can be edited"/>
          <BorderedImageFrameProp image={require('./sad-pepe.png').default}/>
          <SumOfTwo int1={3} int2={4} />

      </React.Fragment>

  )
}

function helloWorld() {
  return "Hello World has NO parantheses and is named in camelCase. It needs to be called with a tag."
    
}

function returnJsx() {
  return (
      <h2>Function returnJSX has parantheses and is named in camelCase It is called without tags.</h2>
  )
    
}

function DisplayMessage(props) {
  return (
  <h1>{props.whatever_message}</h1>
  ) 
}

function BorderedImageFrameProp(props) {
    return (
        <img style={{'border':'4px solid red'}} src={props.image} alt="pepe"/>
    )
}

function SumOfTwo(props) {
  return (
      <h1>{props.int1 + props.int2}</h1>
  )
    
}

// function () {
//   return 
    
// }


export default App;
