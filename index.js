"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const sqlite = require('sqlite3').verbose();
const repl = require('repl');

let db = DBModel.connect(sqlite, "db/student.db")

Student.create(db, new Student("Peter", "Raswono", 1))
Student.updateById(db, {
  student_id: 3,
  firstname: "Peter",
  lastname: "Ganteng",
  cohort_id: 1
})
Student.deleteById(db, 3)
Student.read(db)

Cohort.create(db, new Cohort("Physics", 2016))
Cohort.updateById(db, {
  cohort_id: 2,
  cohort: "Chemistry",
  year: 2017
})
Cohort.deleteById(db, 2)
Cohort.read(db)
