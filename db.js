const knex = require('knex')
const config = require('./knexfile').development
const connection = knex(config)

module.exports = {
  getAllOffenders,
  getAllReports,
  addNewOffender,
  addNewReport,
  updateReport,
  getTopOffenders,
  displayViolations,
  getOffenderByName
}

function getAllOffenders(db = connection) {
  return db('offenders').select()
}

function getAllReports(db = connection) {
  return db('offenders')
  .join('reports', 'offenders.id', 'reports.offender_id')
  .select('reports.id as reportsId', 'reports.image as reportsImage', 'reports.comment', 'reports.offender_id as reports.offenderId', 'reports.location', 'reports.violation', 'reports.date', 'offenders.id', 'offenders.image', 'offenders.name')
}

function displayViolations(db = connection) {
  return db('reports')
  .select()
}

function addNewReport(reportData, db = connection) {
  return db('reports').insert(reportData)
}

function getTopOffenders(db = connection) {
  return db('reports')
     .select('reports.offender_id')
}

// create an offendersCountObj
// loop through all the ooffender_ids
// for each id, check to see if the offender id KEY already exists in the offerdersCountObj,addNewOffender
// if it does, increment the offendersCountObj[offerndID] value
// else, set the offendersCountObj[offernderID] = 1

// const topOffenderID = 1002;

// offendersCountObj = {

// 1001: 2
// 1002: 1

// https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript

//}

function addNewOffender(reportData, db = connection) {
  const { offenderName } = reportData;
  return db('offenders').insert({ name: offenderName})
}

function getOffenderByName(reportName, db = connection) {
    return db('offenders')
        .where('name', 'like', `${reportName}`)
        .select()
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