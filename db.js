const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllOffenderNames,
  getAllReports
}

function getAllOffenderNames(db = connection) {
  return db('names').select()
}

function getAllReports(db = connection) {
  return db('reports').select()
}

//adding new report
//name
//comment
//locatioin
//date
//violation

function addNewReport(, , db = connection) {
  return db('reports').insert({ comment: reportComment, location: reportLocation })
}

function updateReport(db = connection) {

}

function addNewOffender() {

}
