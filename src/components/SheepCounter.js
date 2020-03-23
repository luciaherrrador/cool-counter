import React from "react";

window.addEventListener('load', () => {
    document.querySelector('#audio').play()
  });

class SheepCounter extends React.Component{
  constructor(props){
      super(props);
      this.arrayOfSheeps = [];
      this.state = {
          counter: 0,
          sheeps: ''
      }
      this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
      this.arrayOfSheeps.push(<div className="sheep"></div>);
      this.setState({
          counter: this.state.counter + 1,
          sheeps: this.arrayOfSheeps.map(sheep => sheep)
      })
  }

  render(){
      return(
          <div>
              <audio id="audio" src="./BerBernard Herrmann - I Still Can't Sleep"></audio>
              <span className="sheep-counter-number">{this.state.counter}</span>
              <div className="sheeps">
                  {this.state.sheeps}
              </div>
              <button className="count-sheeps" type="button" onClick={this.clickHandler}>Bhee!</button>
          </div>
      )
  }
}

export default SheepCounter;