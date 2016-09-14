"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

const repl = require("repl");
const sqlite = require("sqlite3").verbose();

let dbModel = new DBModel("student.db");

class System {
  static clearScreen() {
    let lines = process.stdout.getWindowSize()[1];
    for (let idx = 0; idx < lines; idx++) console.log("\r\n");
    return true;
  }
  static printHead() {
    console.log("/////////  /////////   /////////     ///   ///   ///   /////////");
    console.log("/////////  /////////   //////////    ///   ///   ///   ///      ");
    console.log("      ///  ///   ///   ///     ///   ///   ///   ///   ///      ");
    console.log("      ///  ///   ///   ///    ///    ///   ///   ///   /////////");
    console.log("///   ///  /////////   /////////     /////////   ///         ///");
    console.log("/////////  ///   ///   ///    ///     ///////    ///         ///");
    console.log("/////////  ///   ///   ///     ///     /////     ///   /////////");
    console.log("\n       v.1.0. © Copyright 2016 Sahbana - Septhianto Diga");
    console.log("\n----------------------------------------------------------------\n");
    return true;
  }
  static create(type) {
    if (type.toLowerCase() == "student") {
      Student.create(dbModel.connection, new Student({
        "firstname": "Tony",
        "lastname": "Stark",
        "cohort_id": 1
      }));
    } else if (type.toLowerCase() == "cohort") {
      Cohort.create(dbModel.connection, new Cohort("Hacktiv8"));
    }
    return true;
  }
  static where(type) {
    if (type.toLowerCase() == "student") {

    } else if (type.toLowerCase() == "cohort") {
      Cohort.where(dbModel.connection, "cohorts.id = 1", (data, err) => {
        console.log(data);
      });
    }
    return true;
  }
}

if (process.argv.length > 2) {
  if (process.argv[2] == "playtime") {

    System.clearScreen();
    System.printHead();
    console.log("Welcome Tony.. Jarvis ready to serve you");

    let replServer = repl.start({
      prompt: "your command sir, "
    });

    replServer.context.db = dbModel;

    replServer.context.Cohort = Cohort;
    replServer.context.insertStudent = Student.create;
    replServer.context.whereStudent = Student.where;
    replServer.context.insertCohort = Cohort.create;
    replServer.context.whereCohort = Cohort.where;
    replServer.on("exit", () => {
      System.clearScreen();
      System.printHead();
      console.log("See you Tony!\n\n");
      process.exit();
    });
  }
}
