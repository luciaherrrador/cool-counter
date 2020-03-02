import React from 'react';
import '../stylesheets/App.css';
import SheepCounter from './SheepCounter';
import Audio from './Audio';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Audio/>
        <SheepCounter />
      </div>
    );
  }
}

export default App;
