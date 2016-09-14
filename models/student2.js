"use strict"

const repl = require('repl')
const sqlite = require('sqlite3').verbose()
let fs = require('fs')
let file = './db/contacts.db'
let db = new sqlite.Database(file)

class Students {
  constructor(firstname, lastname, cohort_id){
    this.firstname = firstname
    this.lastname = lastname
    this.cohort_id = cohort_id
  }

  save(){
    let that = this
    //If the id does not exist, create new row, If it already exists, update the row
    Students.isIdExist(this.id, function(isExist){
      if(!isExist){
        db.run("INSERT INTO students (firstname, lastname, cohort_id) VALUES ($firstname, $lastname, $cohort_id);", {$firstname: that.firstname, $lastname: that.lastname, $cohort_id: that.cohort_id}, function(err){
          if(err){
            console.log(err)
          } else {
            console.log("INSERT IS SUCCESSFUL")
          }
        })
      } else {
        db.run("UPDATE students SET firstname = $firstname, lastname = $lastname, cohort_id = $cohort_id WHERE id = $id", {$firstname: that.firstname, $lastname: that.lastname, $cohort_id: that.cohort.id, $id: that.id}, function(err){
          if(err){
            console.log(err)
          } else {
            console.log("UPDATE IS SUCESSFUL")
          }
        })
      }
    })
  }

  static isIdExist(id, callback){
    db.all("SELECT id FROM students WHERE id = $id;",{$id: id}, function(err, data){
      if(err){
        console.log(err)
      } else {
        if (data.length == 0){
          callback(false)
        } else {
          console.log("000")
          callback(true)
        }
      }
    })
  }

  static readTable(){

  }
}

let Andy = new Students(1, "Amin", "Antoni")
Andy.save()

let replServer = repl.start(">")
repl.Context.Students = Students


//Student.save(db, object)
//Student.save(dbmodel, new Students("Budi", "Antoni"))
// export default Student
