import React from 'react';

export default class AddSeries extends React.Component{
    
    render(){
        return(
            <div>
                <input
                type="text"
                className="seriesInput"
                name="newSeries"
                value={this.props.newSeries}
                onChange={(e)=> this.props.changeHandler(e)}
                placeholder="Add new series..."
                />
                
                 <input
                type="text"
                className="providerInput"
                name="newProvider"
                value={this.props.newProvider}
                onChange={(e)=> this.props.providerHandler(e)}
                placeholder="Provider..."
                />
                
            
                <button className="myButton" onClick={this.props.AddSeries}>Add Series</button>
            </div>
        )
    }
}