"use strict"

class Student {
  constructor(firstname, lastname, cohort_id ){
    this.firstname = firstname,
    this.lastname = lastname,
    this.cohort_id = cohort_id
  }

  static list(connection){
    connection.all('SELECT * FROM students', (err, result)=>{
      console.log(result)
    })
  }

  static create(connection, data){
    let sqlText = `INSERT INTO students(firstname, lastname, cohort_id) VALUES ('${data.firstname}', '${data.lastname}', ${data.cohort_id});`
    connection.run(sqlText, (err, result)=>{
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    })
  }

  static delete(connection, id){
    connection.run(`DELETE FROM students WHERE id = ${id}`, (err)=> {
      if (err) {
        console.log(err)
      } else {
        console.log('student Deleted')
      }
    })
  }

  static update(connection, id, data){
    connection.run(`UPDATE students SET firstname = '${data.firstname}', lastname = '${data.lastname}', cohort_id = ${data.cohort} WHERE id = ${id}`, (err)=> {
      if (err) {
        console.log(err)
      } else {
        console.log('student updated');
      }
    })
  }

  static viewAll(connection){
    connection.all(`SELECT s.id, s.firstname, s.lastname, c.name FROM students s join cohorts c on s.cohort_id = c.id`, (err, result)=> {
        if (err){
          console.log(err)
        } else {
          console.log(result);
        }
    })
  }


}

export default Student
