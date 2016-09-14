"use strict"

const sqlite = require("sqlite3").verbose();

class DBModel {
  constructor(db_file) {
    this._connection = new sqlite.Database(db_file);
    DBModel.start(this._connection);
  }

  get connection() {
    return this._connection;
  }

  static start(db) {
    //const fs = require("fs");
    //const spawn = require("child_process").spawn;
    //const child = spawn("sqlite3", [file]);
    let QUERY = ["CREATE TABLE IF NOT EXISTS students(id INTEGER PRIMARY KEY AUTOINCREMENT, firstname VARCHAR(25) NOT NULL, lastname VARCHAR(25) NOT NULL, cohort_id INTEGER NOT NULL);", "CREATE TABLE IF NOT EXISTS cohorts(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(25) NOT NULL);"];
    //let QUERY = fs.createReadStream("../db/init.sql").pipe(child.stdin);
    db.serialize(function () {
      QUERY.forEach(function (value) {
        db.run(value, function (err) {
          if (err) console.log(err);
        });
      });
    });
    return false;
  }
}

export default DBModel
