const config = require('./knexfile')
const connection = require('knex')(config)

module.exports = {
  getAllOffenderNames,
  getAllReports,
  addNewOffender,
  addNewReport
}

function getAllOffenderNames(db = connection) {
  return db('names').select()
}

function getAllReports(db = connection) {
  return db('reports').select()
}

function addNewReport(reportData, db = connection) {
  const { image, reportOffenderId, comment, location, date, violation } = reportData;
  return db('reports').insert({ comment: comment, location: location, image: image, date: date, violation: violation, offender_id: reportOffenderId })
}


function addNewOffender(reportData, db = connection) {
  const { offenderName, offenderImage } = reportData;
  return db('offenders').insert({ name: offenderName, image: offenderImage })
}

// function updateReport(db = connection) {

// }