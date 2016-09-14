"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name){
    this.name=name
  }

  static create(connection, object){
   let SQLQuery = "INSERT INTO COHORT (COHORT_NAME) VALUES ($NAME)"
    connection.run(SQLQuery, {
        $NAME: object.name
    })
    console.log(`--data is added into cohort--`);
  }

  static where(connection,where){
    let SQLQuery = `SELECT * FROM STUDENT WHERE ${where}`
    connection.all(SQLQuery, function(err, data) {
      if (err) {
        console.log(err)
      } else {
        console.log(`=======================`)
        console.log(`Daftar Student Based on Cohort ID`)
        console.log(`=======================`)
        console.log(`ID - First Name - Last Name - Cohort ID`)
        for(let idx in data){
          console.log(`${data[idx].ID} - ${data[idx].FIRST_NAME} - ${data[idx].LAST_NAME} - ${data[idx].COHORT_ID}`);
        }
      }
    })

  }

}

export default Cohort
