"use strict"

// write your code here
var CREATE_TABLE = "CREATE TABLE IF NOT EXISTS students ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, grade TEXT, email TEXT, score INTEGER);"

// CREATE TABLE IF NOT EXISTS cohort ( id INTEGER PRIMARY KEY AUTOINCREMENT, cohort_name TEXT );"
var CREATE_TABLE_COHORT = "CREATE TABLE IF NOT EXISTS cohorts ( id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);";


class DBModel {
  constructor(filename, sqlite){
    this.connection = new sqlite.Database(filename)
    DBModel.init(this.connection)
  }

  get connection(){
    return this.connection
  }
  static init(connection){
    connection.serialize(function () {
      connection.run(CREATE_TABLE,function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log(`table student created`);
          }
      });
    });
    connection.serialize(function () {
      connection.run(CREATE_TABLE_COHORT,function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log(`table cohort created`);
          }
      });
    });
  }
}




//CREATE TABLE


export default DBModel
