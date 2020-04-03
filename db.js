const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

module.exports = {
  getAllOffenderNames,
  getAllReports,
  addNewOffender,
  addNewReport,
  updateReport
}

function getAllOffenderNames(db = connection) {
  return db('names').select()
}

function getAllReports(db = connection) {
  return db('offenders')
  .join('reports', 'offenders.id', 'reports.offender_id')
  .select('reports.id as reportsId', 'reports.image as reportsImage', 'reports.comment', 'reports.offender_id as reports.offenderId', 'reports.location', 'reports.violation', 'reports.date', 'offenders.id', 'offenders.image', 'offenders.name')
}

function addNewReport(reportData, db = connection) {
  const { image, reportOffenderId, comment, location, date, violation } = reportData;
  return db('reports').insert({ comment: comment, location: location, image: image, date: date, violation: violation, offender_id: reportOffenderId })
}

function getTopOffenders(db = connection) {
  return db('reports')
     .select('reports.offender_id')
     .then(records => {

})
}

function addNewOffender(reportData, db = connection) {
  const { offenderName } = reportData;
  return db('offenders').insert({ name: offenderName, image: offenderImage })
}

function updateReport(reportData, db = connection) {
  const { image, reportOffenderId, comment, location, date, violation } = reportData;
return db('reports')
  .where({ 
    location: location,
    comment: comment,
    violation: violation,
    date: date
  })
    .update({ 
  comment: comment, 
  location: location, 
  image: image, 
  date: date, 
  violation: violation, 
  offender_id: reportOffenderId })
}