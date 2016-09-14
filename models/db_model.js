"use strict"


class DBModel {
  constructor(file, sqlite){
    this._file = file || './db/student.db'
    this.connection = new sqlite.Database(file)
  }

  static init(connection){
    // create students table
    let sqlText = 'create table if not exists students(id integer primary key autoincrement, firstname text, lastname text, cohort_id integer);'
    connection.run(sqlText, function(err){
      if (err) {
        console.log(err)
      } else {
        console.log('students table created');
      }
    })

    // create cohorts table
    sqlText = 'create table if not exists cohorts (id integer primary key autoincrement, name text);'
    connection.run(sqlText, function(err){
      if (err) {
        console.log(err)
      } else {
        console.log('cohorts table created');
      }
    })
  }

}

export default DBModel
