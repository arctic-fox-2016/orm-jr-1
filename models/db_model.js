"use strict"


class DBModel {
  constructor(file, sqlite){
    this._file = file || './db/student.db'
    this.connection = new sqlite.Database(file)
  }

  static init(connection){
    let sqlText = 'create table if not exists students(id integer primary key autoincrement, firstname text, lastname text, cohortId text)';
    connection.run(sqlText, function(err){
      if (err) {
        console.log(err)
      } else {
        console.log('students table created');
      }
    })

  }

}

export default DBModel
