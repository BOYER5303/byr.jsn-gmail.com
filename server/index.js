const express = require ('express');
const {getSeriesS, addSeries, updateNotes, deleteSeries} = require('./controller/seriesController');

const app = express();

app.use(express.json());

app.get('/api/seriesS', getSeriesS)
app.post('/api/add_series', addSeries)
app.put('/api/update_notes/:id', updateNotes)
app.delete('/api/delete_series/:id', deleteSeries)




const port = 4000;

app.listen(port, () => console.log(`listening on port ${port}`))