const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getTopOffenders()
    .then(offenders => {
      const Toffenders = ['don', 'emily', 'lane']
      res.render('index', Toffenders)
    })
    .catch(getError(res))
})

router.get('/reports', (req, res) => {
  res.render('report')
})

router.post('/reports', (req, res) => {
  const { violationDesc, offenderId, time, location, comment } = req.body
  db.submitReport({ violationDesc, offenderId, time, location, comment })
    .then(res.redirect('/'))
})

router.get('/violations', (req, res) => {
  db.displayViolations()
    .then(res.render('violations'))
})

router.get('/offenders', (req, res) => {
  db.displayOffenders()
    .then(res.render('offenders'))
})

module.exports = router

// const getError = res => err => {
//   console.log(err.message)
//   res.status(500).send('Something went wrong')
// }
