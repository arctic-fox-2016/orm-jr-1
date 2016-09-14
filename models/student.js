"use strict"

class Student {
  constructor(property = {}) {
    this._firstname = property["firstname"];
    this._lastname = property["lastname"];
    this._cohort_id = property["cohort_id"];
  }

  set firstname(value) {
    this._firstname = value;
  }
  get firstname() {
    return this._firstname;
  }
  set lastname(value) {
    this._lastname = value;
  }
  get lastname() {
    return this._lastname;
  }
  set cohort_id(value) {
    this._cohort_id = value;
  }
  get cohort_id() {
    return this._cohort_id;
  }

  static create(db, student) {
    if (student instanceof Student) {
      let stmt = "insert into students (firstname, lastname, cohort_id) values(?, ?, ?)";
      db.run(stmt, [student.firstname, student.lastname, student.cohort_id], (err) => {
        if (err) console.log(err);
      })
    }
  }

}

export default Student
