const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getTopOffenders()
    .then(offenders => {
      const test_offenders = [{
        name: 'don',
      }, {
        name: 'emily'
      }, {
        name: 'lane'
      }]
      res.render('index', test_offenders)
    })
    .catch(getError(res))
})

router.get('/reports', (req, res) => {
  res.render('report')
})

router.post('/reports', (req, res) => {
  const { image, offenderName, comment, location, date, violation } = req.body
  db.addNewReport({ image, offenderName, comment, location, date, violation })
    .then(res.redirect('/'))
})

router.get('/rules', (req, res) => {
  db.displayViolations()
    .then(res.render('rules'))
})

router.get('/offenders', (req, res) => {
  db.getAllOffenderNames()
    .then(res.render('offenders'))
})

module.exports = router

// const getError = res => err => {
//   console.log(err.message)
//   res.status(500).send('Something went wrong')
// }
