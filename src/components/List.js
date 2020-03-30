import React from 'react';
import Series from './Series';
import Button from './Button';
import Provider from './Provider';
import Notes from './Notes';
import UpdateNotes from './UpdateNotes';
import "../App.css"
//import { render } from '@testing-library/react';
import CurrentEpisode from './currentEpisode';


export default function List(props) {

    
    const mappedSeries = props.seriesS.map(elem => {
        
        return <div className="seriesReturn" key={elem.id}>
            <div className="series">
            <Series series={elem.series}/>
            </div>
            <div className="provider">
            <Provider provider ={elem.provider}/>
            </div>
            <div className="episode">
            <h3>Current Season</h3>
            <CurrentEpisode/>
            <h3>Current Episode</h3>
            <CurrentEpisode/>
            </div>
            <div className="notes">
            <Notes notes={elem.notes}/>
            <UpdateNotes UpdateNotes= {props.UpdateNotes} notes ={elem.notes} id = {elem.id}/>
            </div>
            <div className="delete">
            <Button value={"delete"} id={elem.id} function ={props.deleteSeries}/>
            </div>
        </div>
    })
    return <div>
        <h1 className="title">Coronapocalypse Series Binge List</h1>
        {mappedSeries}
    </div>
    
}
