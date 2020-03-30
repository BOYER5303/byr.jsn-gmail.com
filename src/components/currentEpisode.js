import React from 'react';

export default class CurrentEpisode extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            clicks: 1,
         }
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
      }
      
    render() { 
        return <div>
            <div>{this.state.clicks}</div>
        <button className= "myButton" onClick={this.IncrementItem}>Up</button>
        <button className="myButton" onClick={this.DecreaseItem}>Down</button>
      </div>
    
  }
}
//export default currentEpisode;