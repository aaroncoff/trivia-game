import React from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import routes2 from './routes2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="routes">
          {routes}
        </div>
        <div className="bodyparent">
          <div className="bodychild">
            {/* {routes2} */}
          </div>
        </div>
    
      </header>
    </div>
  );
}

export default App;
