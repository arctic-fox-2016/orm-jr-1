"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require('repl')
const sqlite = require('sqlite3').verbose()





let dbModel = new DBModel("./db/student.db", sqlite)
// Student.list(dbModel.connection)
// Cohort.list(dbModel.connection)
// Cohort.update(dbModel.connection, 2, new Cohort('ada'))
// Cohort.update(dbModel.connection, 1, new Cohort('ada-ada'))
// Cohort.list(dbModel.connection)
// DBModel.init(dbModel.connection)
//  Student.list(dbModel.connection)
//  Student.create(dbModel.connection, new Student('imam', 'nugraha', 1))
//  Student.create(dbModel.connection, new Student('sahbana', 'gold', 2))
//  Student.create(dbModel.connection, new Student('ari', 'ger', 1))
 // Student.create(dbModel.connection, new Student('tevin', 'gold', 2))
 // Cohort.create(dbModel.connection, new Cohort('arctic'))
 // Cohort.create(dbModel.connection, new Cohort('tesla'))
//   Cohort.create(dbModel.connection, new Cohort('hacktiv8'))

if (process.argv.length > 2) {
  if (process.argv[2] == "playtime") {
    let replServer = repl.start({
      prompt: "playtime > "
      })

    replServer.context.dbModel = dbModel
    replServer.context.Student = Student
    replServer.context.Cohort = Cohort
  }
}
