"use strict"

import DBModel from "../models/db_model.js";
import Cohort from "../models/cohort.js";

class Student {
  constructor(property){
    this.name = property
    this.email = property
    this.class = property
    this.score = property
  }
  set name(value){this.name = value}
  get name(){return this.name}

  set email(value){this.email = value}
  get email(){return this.email}

  set class(value){this.class = value}
  get class(){return this.class}

  set score(value){this.score = value}
  get score(){return this.score}

  // Student.create(DBModel.connection, new Student('ryan', 'ryan@gmail.com', 'arcticfox',70))
  static create(db, student) {
    if (student instanceof Student) {
      let stmt = "insert into students (name, email, class, score) values(?, ?, ?, ?);";
      db.run(stmt, [student.name, student.email, student.class, student.score], (err) => {
        if (err) console.log(err);
      })
    }
  }
  static find(db, target, value) {
      let query = `select * from student where ${target} = ${value};`
      db.run(query, function(err, result) {
        if (err){
          console.log(err);
        } else {
          console.log('Data found :\n');
          console.log(result);
        }
      })
  }
  static delete(db, target, value) {
    let query = `delete from student where ${target} = ${value};`
    db.run(query, function(err, result) {
      if (err){
        console.log(err);
      } else {
        console.log(`${value} was deleted from table;`);
      }
    })
  }

  static edit(db, target, value) {
    let query = `update student set ${target} where ${value};`
    db.run(query, function(err, result) {
      if (err){
        console.log(err);
      } else {
        console.log(`${target} was updated`);
      }
    })
  }


  }


export default Student
 // {$name: name, $grade:grade, $email:email, $score:score}
 // connection.serialize(function (){
 //   connection.run('INSERT INTO student (name, grade, email, score) VALUES ($name, $grade, $email, $score);', function (err){
 //     if (err){
 //       console.log(err);
 //     } else {
 //       console.log(`new student ${name} created`);
 //     }
 //   }) });
 //   Student.makeStudent(name,grade,email,score)
