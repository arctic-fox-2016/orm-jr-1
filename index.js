"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require('repl')
const sqlite = require('sqlite3').verbose()


// function startRepl(){
//   let replServer = repl.start({
//     prompt: "hello > "
//     })
//   replServer.context.db = dbModel;
//   replServer.context.createStudent = Student.create
// }
//
// if (process.argv.length > 2) {
//   if (process.argv[2] == "playtime") {
//     startRepl()
//   }
// }

let dbModel = new DBModel("./db/student.db", sqlite)
//DBModel.init(dbModel.connection)
//Student.list(dbModel.connection)
// Student.create(dbModel.connection, new Student('Lilianti', 'Wibiesono', 1))
// Student.create(dbModel.connection, new Student('Tevin', 'Imut', 2))
// Student.create(dbModel.connection, new Student('Ariana', 'Grande', 1))
//
// Cohort.create(dbModel.connection, new Cohort('Alpha'))
// Cohort.create(dbModel.connection, new Cohort('Beta'))
