import * as express from "express";
import {getMenuIngredients, submitOrder} from "./dal";

import { mongodb } from "mongodb";
const bodyParser = require('body-parser')

const app = express();
// const connect = promisify(mongodb.MongoClient.connect);

// mongodb.Cursor.prototype.toArrayAsync = promisify(mongodb.Cursor.prototype.toArray);

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get("/api/getMenuIngredients/", wrap(async function() {
    // console.log("in server");
    return await getMenuIngredients();
}));

app.post("/api/submitOrder/", wrap(async function(req, res) {
    // console.log("in server");
    // console.log(req.body);
    // return ;
    return await submitOrder(req.body);
}));

function wrap(fn){
    return function(req, res) {
        try {
            const retVal = fn(req, res);

            if (retVal && retVal.then) {
                retVal.then(data => {
                    res.json(data);
                }).catch(err => {
                    res.json({error: err.message});
                });
            }
        }
        catch(err){
            res.json({error: err.message});
        }
    }
}

function promisify(fn){
    return function(){
        const args = Array.from(arguments);
        const me = this;

        return new Promise(function(resolve, reject){
            function callback(err, retVal){
                if(err){
                    reject(err);
                    return;
                }

                resolve(retVal);
            }

            args.push(callback);

            fn.apply(me, args);
        });
    }
}

// app.get("/api/contact", function(req, res){
//     getAllContacts().then(contacts => {
//         res.json(contacts);
//     }).catch(err => {
//         res.status(500);
//         //res.statusMessage = err.message;
//         res.json({error: err.message})
//         res.end();
//     });
// });
app.listen(3000, function(){
    console.log("Server is running ABC");
});