const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getAllOffenders()
  .then(offenders => {
    const offendersObj = {
      offenders: offenders
    }
    res.render('index', offendersObj)
  })
})

router.get('/report', (req, res) => {
    res.render('report')
})

router.get('/reports', (req, res) => {
  db.displayViolations()
  .then(reports => {
    const reportsObj = {
      reports: reports
    }
    res.render('reports', reportsObj)
  })
})

router.post('/report', (req, res) => {
    const { image, offenderName, comment, location, date, violation } = req.body
    console.log(offenderName)
    db.getOffenderByName(offenderName)
      .then ((result) => {
        if (result.length > 0) {
          offender_id = result[0].id
          db.addNewReport({ image, offender_id, comment, location, date, violation })
            .then(res.redirect('/'))
        } else {
          db.addNewOffender(offenderName)
          .then(id => {
            offender_id = id[0]
            db.addNewReport({ image, offender_id, comment, location, date, violation })
            .then(res.redirect('/'))
          })
        }
    })
})

router.get('/rules', (req, res) => {
  db.displayViolations()
  .then(data => {
    const dataObj = {data: data}
    res.render('rules', dataObj)
  })
})

router.get('/violations/:id', (req, res) => {
  const id = req.params.id
  db.getViolationById(id)                  
  .then(result => {
    res.render('violations', result)
  })
})

router.post('violations/:id', (req, res) => {
  const id = req.params.id
  db.get
})

module.exports = router

// const getError = res => err => {
//   console.log(err.message)
//   res.status(500).send('Something went wrong')
// }
