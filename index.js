"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";
const repl = require('repl'); // optional
const sqlite = require('sqlite3').verbose();
let dbModel = new DBModel('./db/studentCohort.db', sqlite)



DBModel.init(dbModel.connection)
const r = repl.start('~>');
r.context.createStudent = Student.create
r.context.findStudent = Student.find
r.context.deleteStudent = Student.delete
r.context.editStudent = Student.edit
r.context.createCohort = Cohort.create
r.context.findCohort = Cohort.find
r.context.deleteCohort = Cohort.delete
r.context.editCohort = Cohort.edit



// function test(value){
//   console.log($value{$value:value});
// }
// test('jakarta')
