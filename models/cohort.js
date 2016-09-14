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

static delete(connection, id){
  connection.run(`delete from cohorts where id = ${id}`, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Data Deleted')
    }
  })
}

static update(connection, id, data){
  connection.run('update cohorts set name = $a where id = $b', {$a: data.name, $b:id}, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log('Data updated');
    }
  })
}

}

export default Cohort
