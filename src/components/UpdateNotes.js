import React from 'react';

 class UpdateNotes extends React.Component {
    constructor(){
        super()
        this.state = {
            newNotes: ''
        }
        this.notesHandler =this.notesHandler.bind(this)
    }
    
    notesHandler(event){
        this.setState({
            newNotes: event.target.value
        })
    }
    render(){ 
        console.log(this.props)
    return <div>

              <input
                type="text"
                className="noteInput"
                name="newNotes"
                value={this.state.newNotes}
                onChange={(event)=> this.notesHandler(event)}
                placeholder="Add new notes..."
                />     

            <button className="myButton" onClick={() => {
                this.setState({ newNotes: ''})
                this.props.UpdateNotes(this.props.id, this.state.newNotes)}}>Add Notes</button>
    </div>
    
}
}

export default UpdateNotes;