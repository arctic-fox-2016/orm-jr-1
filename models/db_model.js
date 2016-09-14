"use strict"

class DBModel {
  static connect(sqlite, file) {
    let db = new sqlite.Database(file)
    return db
  }
}

export default DBModel
