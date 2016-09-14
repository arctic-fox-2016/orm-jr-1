"use strict"

import Student from "./student.js";

class Cohort {
  constructor(property){
    this.name = property
  }

  set name(value){this.name = value}
  get name(){return this.name}

  static create(db, cohort) {
    if (student instanceof Cohort) {
      let stmt = "insert into cohorts (name) values(?);";
      db.run(stmt, [cohort.name], (err) => {
        if (err) console.log(err);
      })
    }
  }
  static find(db, target, value) {
      let query = `select * from cohort where ${target} = ${value};`
      db.run(query, function(err, result) {
        if (err){
          console.log(err);
        } else {
          console.log('Data found :\n');
          console.log(result);
        }
      })
  }
  static delete(db, target, value) {
    let query = `delete from cohort where ${target} = ${value};`
    db.run(query, function(err, result) {
      if (err){
        console.log(err);
      } else {
        console.log(`${value} was deleted from table;`);
      }
    })
  }

  static edit(db, target, value) {
    let query = `update cohort set ${target} where ${value};`
    db.run(query, function(err, result) {
      if (err){
        console.log(err);
      } else {
        console.log(`${target} was updated`);
      }
    })
  }

}

export default Cohort
