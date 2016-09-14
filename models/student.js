"use strict"

class Student {
  constructor(id, firstname, lastname, cohortId ){
    this._id = id,
    this._firstname = firstname,
    this._lastname = lastname,
    this._cohortId = cohortId
  }

  static getAll(connection){
    connection.all('select * from students', function(err, result){
      console.log(result)
    })
  }
}

export default Student
