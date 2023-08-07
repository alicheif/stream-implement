const pool = require("../utils/db_connection")
const { stringify } = require('csv-stringify');
const Stream = require("stream");
let stream = new Stream;
//var stringifier = stringify();

class userService {
    static async getAllUsers(){
        try{
            let userObj = await this.queryReturn("SELECT * FROM users");
            // console.log(pool)
            // const data = pool.query("SELECT * FROM users", function(err, result){
            //     console.log("Came inside");
            //     if(err) {
            //         console.log("error persisted")
            //         userObj = {
            //             "ResponseCode":"2",
            //             "ResponseMessage":"Failure",
            //             "data":""
            //         }
            //         throw err}
            //     else {
            //         userObj = {
            //             "ResponseCode":"1",
            //             "ResponseMessage":"Success",
            //             "data": result
            //         }
            //         console.log("Rows: ", result)
            //     }
            // })
            //const data = pool.query("SELECT * FROM users WHERE userid=1");
            //userObj.data = data;           
                            
            // console.log("UserObject is: ", data)
            return userObj;
        }
        catch(error){
            throw error;
        }
    }
    static async getUserByCity(){
        try{
            let userObj = await this.queryReturn('SELECT * from department');
            // const data = pool.query('SELECT * from department', function(err, result){
            //     console.log("came inside: ", result)
            //     if(err){
            //         userObj = {
            //             "responseCode": 2,
            //             "ResponseMessage":"Failure",
            //             "data": null
            //         }
            //     }
            //     else {
            //         userObj = {
            //             "responseCode": 1,
            //             "ResponseMessage":"Success",
            //             "data": data
            //         }
            //     }
            // })
            
            console.log(userObj)
            return userObj;
        }
        catch(error){
            throw error
        }
    }
    static async queryReturn(sql){
        return new Promise((resolve, reject) => {
            pool.query(sql, (err, result) => {
                if(err){
                    reject({
                        "responseCode": 1,
                         "ResponseMessage":err,
                         "data": null
                    });
                }
                else{
                    resolve({
                        "responseCode": 1,
                         "ResponseMessage":"Success",
                         "data": result
                    });
                }
            })
            .stream({ highWaterMark: 32000000 })
            .pipe(process.stdout);
        })
    }
}
module.exports = userService