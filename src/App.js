import React from 'react';
import axios from 'axios';
import List from './components/List';
import AddSeries from './components/AddSeries';
//import Series from './components/Series'
//import UpdateNotes from './components/UpdateNotes'
import './App.css';
import './reset.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      seriesS:[],
      newSeries: '',
      newProvider: ''
      
    }
    this.deleteSeries = this.deleteSeries.bind(this)
    this.AddSeries = this.AddSeries.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.UpdateNotes = this.UpdateNotes.bind(this)
    this.providerHandler= this.providerHandler.bind(this)
  }

  componentDidMount(){
axios.get('/api/seriesS').then(res => {
  this.setState({
    seriesS: res.data
  })
})
  }
  
  deleteSeries(id) {
    axios.delete(`/api/delete_series/${id}`).then(res => {
      this.setState({
        seriesS: res.data
      })
    })
}
AddSeries(){
  axios.post('/api/add_series', {
  series: this.state.newSeries, 
  provider: this.state.newProvider,
    }).then(res => {
    this.setState({
      seriesS: res.data,
      newSeries: '',
      newProvider: ''
    })
  })
}

UpdateNotes(id, newNotes){
  axios.put(`/api/update_notes/${id}`, {
    notes: newNotes}).then(res => {
    this.setState({
      seriesS: res.data,
    })
  })
}

changeHandler(event){
  this.setState({
    newSeries: event.target.value
  })
}
providerHandler(event){
  this.setState({
    newProvider: event.target.value
  })
}
  render(){
    console.log(this.state)
  return (
    <div className="App">
      <AddSeries newSeries={this.state.newSeries} providerHandler={this.providerHandler} 
      changeHandler={this.changeHandler} AddSeries={this.AddSeries}/>
      <List 
      deleteSeries ={this.deleteSeries} 
      seriesS={this.state.seriesS}
      UpdateNotes={this.UpdateNotes}/>
    </div>
  );
}
}
export default App;
