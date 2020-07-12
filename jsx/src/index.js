import React from 'react'
import ReactDOM from 'react-dom'

const App = function(){
    var valueToBeDisplayed = 'Click me';
    return (
    <div>
    <label htmlFor="name"> Enter your name </label>
      <input type="text" id="name" /> &nbsp;
      <button type="submit" style={{backgroundColor: 'black', color: 'white'}}> {valueToBeDisplayed} </button>
    </div>);
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)