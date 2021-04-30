import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';



//const mensaje= <h1> Hello Word...</h1>

ReactDOM.render(
  <App mensaje="Hello" mensaje2="World..." mensaje3="My Friend..." mensaje4="(from changed state)"/>,

  document.getElementById('root')
  );

  // ReactDOM.render(
  //   <App mensaje2="My Friends..." />,
  
  //   document.getElementById('root')
  //   );

  



