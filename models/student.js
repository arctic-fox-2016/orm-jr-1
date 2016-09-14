"use strict"

class Student {
    constructor(firstname,lastname,cohortid){
      this.first_name = firstname,
      this.last_name = lastname,
      this.cohort_id = cohortid
    }

    static create(connection, object){
     let SQLQuery = "INSERT INTO STUDENT (FIRST_NAME,LAST_NAME,COHORT_ID) VALUES ($FNAME,$LNAME,$COHORT_ID)"
      connection.run(SQLQuery, {
          $FNAME: object.first_name,
          $LNAME: object.last_name,
          $COHORT_ID: object.cohort_id
      })
      console.log(`--data is added into student--`);
    }

    static all(connection){
      let SQLQuery = "SELECT S.ID,S.FIRST_NAME,S.LAST_NAME,C.COHORT_NAME FROM STUDENT S INNER JOIN COHORT C ON S.COHORT_ID = C.ID"
      connection.all(SQLQuery, function(err, data) {
        if (err) {
          console.log(err)
        } else {
          console.log(`=======================`)
          console.log(`Daftar Student Saat Ini`)
          console.log(`=======================`)
          console.log(`ID - First Name - Last Name - Cohort Name`)
          for(let idx in data){
            console.log(`${data[idx].ID} - ${data[idx].FIRST_NAME} - ${data[idx].LAST_NAME} - - ${data[idx].COHORT_NAME}`);
          }
        }
      })
    }
}

export default Student
