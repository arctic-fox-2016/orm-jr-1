"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name){
    this.name = name
  }

  static list(connection){
    connection.all('SELECT * FROM cohorts', (err, result)=>{
      console.log(result)
    })
  }

  static create(connection, data){
    let statement = `INSERT INTO cohorts(name) VALUES ('${data.name}');`
    connection.run(statement, (err, result)=>{
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    })
  }

static delete(connection, id){
  connection.run(`DELETE FROM cohorts WHERE id = ${id}`, (err)=> {
    if (err) {
      console.log(err)
    } else {
      console.log('cohort Deleted')
    }
  })
}

static update(connection, id, data){
  connection.run(`UPDATE cohorts SET name = '${data.name}' WHERE id = ${id}`, (err)=> {
    if (err) {
      console.log(err)
    } else {
      console.log('cohort updated');
    }
  })
}

}

export default Cohort
