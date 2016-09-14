"use strict"

class Student {
  constructor(firstname, lastname, cohort_id ){
    this.id = null,
    this.firstname = firstname,
    this.lastname = lastname,
    this.cohort_id = cohort_id
  }

  //show all data in table students
  static list(connection){
    connection.all('select * from students', function(err, result){
      console.log(result)
    })
  }

  //create new students connection --> db, data --> class Student
  static create(connection, data){
    let sqlText = `insert into students(firstname, lastname, cohort_id) values ('${data.firstname}', '${data.lastname}', ${data.cohort_id});`
    connection.run(sqlText, function(err, result){
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    })
  }

  static delete(connection, id){
    connection.run('delete from students where id = $id' , {$id: id}, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Data Deleted')
      }
    })
  }

  // update from table student. Data is class Student
  static update(connection, data){
    connection.run('update students set firstname = $firstname, lastname = $lastname, cohort_id = $cohort_id, where id = $data.id', {$firstname: data.firstname, $lastname: data.lastname, $cohort_id: data.cohort_id}, function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Data updated');
      }
    })
  }
}

export default Student
