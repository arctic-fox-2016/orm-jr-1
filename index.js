"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require('repl')
const sqlite = require('sqlite3').verbose()

//
// function startRepl(){
//   let replServer = repl.start({
//     prompt: "hello > "
//     })
// //  replServer.context.test = test
// }
//
// if (process.argv.length > 2) {
//   if (process.argv[2] == "playtime") {
//     startRepl()
//   }
// }

let dbModel = new DBModel("./db/student.db", sqlite)
DBModel.init(dbModel.connection)
Student.getAll(dbModel.connection)
