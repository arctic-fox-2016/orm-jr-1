"use strict"



class DBModel {


  constructor(connection,sqlInit,sqlite,file){
    this.connection = connection
    DBModel.init(connection,sqlInit)
  }

  static init(connection,sqlInit){
    for(let idx in sqlInit){
      connection.run(sqlInit[idx], function(err){
        })
    }
    console.log('--init data successfull--');
   }
}

export default DBModel
