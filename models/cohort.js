"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name){
    this.name = name
  }

  //show all data in table cohorts
  static list(connection){
    connection.all('select * from cohorts', function(err, result){
      console.log(result)
    })
  }

  //create new cohort. connection --> db, data --> class Student
  static create(connection, data){
    let sqlText = `insert into cohorts(name) values ('${data.name}');`
    connection.run(sqlText, function(err, result){
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    })
  }

}

export default Cohort
