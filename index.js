"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const sqlite = require ('sqlite3').verbose();
const fs = require("fs");


var filename = "db/init.sql";
var buf = fs.readFileSync(filename, "utf8");
var sqlInit = buf.split(";");
let file = 'student_cohort.db';
let connection = new sqlite.Database(file);

let dbModel = new DBModel(connection,sqlInit,sqlite,file)
Cohort.create(dbModel.connection, new Cohort("Math"));
Student.create(dbModel.connection, new Student("Ari","Adiprana",1));
Student.create(dbModel.connection, new Student("Ivan","Gerard",1));
Student.all(dbModel.connection)
Cohort.where(dbModel.connection, 'COHORT_ID=1')
