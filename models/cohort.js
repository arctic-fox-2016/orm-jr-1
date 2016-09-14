"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name) {
    this._name = name;
  }

  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

  static create(db, object) {
    if (object instanceof Cohort) {
      let stmt = 'insert into cohorts (name) values (?)'
      db.run(stmt, object.name, (err) => {
        if (err) console.log(err)
      })
    }
  }

  static where(db, wherestmt, callback) {
    let stmt = `select * from cohorts where ${wherestmt}`
    let data = [];
    db.all(stmt, (err, rows) => {
      rows.forEach(function (row) {
        data.push(row.name)
      })
      if (callback) callback(data, false);
      else console.log(data);
    });
  }
}

export default Cohort
