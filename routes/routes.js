const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getTopOffenders()
    .then(offenders => {
      const testOffenders = [{
        name: "don",
        id: 2,
        image: "broken"
      }]
      res.render('index', testOffenders)
    })
    .catch(getError(res))
})

router.get('/reports', (req, res) => {
  db.getAllReports()
  .then(reports => {
    res.render('report', reports)
  })
})

router.post('/reports', (req, res) => {
  const { image, offenderName, comment, location, date, violation } = req.body
  db.addNewOffender(offenderName).
  then(id => {
    db.addNewReport({ image, reportOffenderId = id, comment, location, date, violation })
    .then(res.redirect('/'))
  })
})

router.get('/rules', (req, res) => {
  db.displayViolations()
    .then(res.render('rules'))
})

router.get('/violations/:id', (req, res) => {
  const id = req.params.id
  db.getViolationById(id)
  .then(result => {
    res.render('violations', result))
  })
})

module.exports = router

// const getError = res => err => {
//   console.log(err.message)
//   res.status(500).send('Something went wrong')
// }
