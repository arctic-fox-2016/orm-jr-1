"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require('repl')
const sqlite = require('sqlite3').verbose()





let dbModel = new DBModel("./db/student.db", sqlite)
// Student.list(dbModel.connection)
// Cohort.list(dbModel.connection)
// Cohort.update(dbModel.connection, 6, new Cohort('Zerro'))
// Cohort.list(dbModel.connection)

if (process.argv.length > 2) {
  if (process.argv[2] == "playtime") {
    let replServer = repl.start({
      prompt: "hello > "
      })

    replServer.context.dbModel = dbModel
    replServer.context.Student = Student
    replServer.context.Cohort = Cohort
  }
}
