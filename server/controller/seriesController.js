const seriesS = require('../../db.json');
let num = 26;

module.exports ={
    getSeriesS: (req, res, next) => {
        res.status(200).send(seriesS)
    },
    addSeries: (req, res, next) => {
        const newSeries = {
            id: num,
            series: req.body.series,
            provider: req.body.provider,
            completed: false
            //notes: ''
        }
        seriesS.push(newSeries)
        num++
        res.status(200).send(seriesS)
    },
    updateNotes: (req, res, next) => {
        const index = seriesS.findIndex((elem) => {
            return elem.id == req.params.id
        })
        seriesS[index].notes = req.body.notes
        res.status(200).send(seriesS)
    },
    deleteSeries: (req, res, next) => {
        const index = seriesS.findIndex((elem) => {
            return elem.id == req.params.id
    })
    seriesS.splice(index, 1)
    res.status(200).send(seriesS)
}
}
