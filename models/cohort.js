"use strict"

import Student from "./student.js";

class Cohort {
  constructor(cohort, year) {
    this.cohort = cohort
    this.year = year
  }

  static create(db, obj) {
    db.run("INSERT INTO cohorts (cohort, year) VALUES ($cohort, $year)", {
      $cohort: obj.cohort,
      $year: obj.year,
    }, function(err, data) {
      console.log("Success create new cohort.")
    })
  }

  static read(db) {
    db.all("SELECT * FROM cohorts", function(err, data) {
      console.log(data)
    })
  }

  static updateById(db, obj) {
    db.run("UPDATE cohorts SET cohort = $cohort, year = $year WHERE cohort_id = $cohort_id;", {
      $cohort_id: obj.cohort_id,
      $cohort: obj.cohort,
      $year: obj.year
    }, function(err, data) {
      console.log("Success update cohort entry.")
    })
  }

  static deleteById(db, cohort_id) {
    db.run("DELETE FROM cohorts WHERE cohort_id = $cohort_id;", {
      $cohort_id: cohort_id
    }, function(err, data) {
      console.log("Success delete cohort entry.")
    })
    db.run("DELETE FROM students WHERE cohort_id = $cohort_id;", {
      $cohort_id: cohort_id
    }, function(err, data) {
      console.log("Success delete students with cohort entry.")
    })
  }
}

export default Cohort
