"use strict"


class DBModel {
  constructor(file, sqlite){
    this._file = file || './db/student.db'
    this.connection = new sqlite.Database(file)
  }

  static init(connection){
    let statement = 'CREATE TABLE IF NOT EXISTS students(id INT PRIMARY KEY AUTINCREMENT, firstname TEXT, lastname TEXT, cohort_id INT);'
    connection.run(statement, (err)=>{
      if (err) {
        console.log(err)
      } else {
        console.log('table students created');
      }
    })

    statement = 'CREATE TABLE IF NOT EXISTS cohorts (id INT PRIMARY KEY AUTINCREMENT, name TEXT);'
    connection.run(statement, (err)=>{
      if (err) {
        console.log(err)
      } else {
        console.log('table cohorts created');
      }
    })
  }

}

export default DBModel
