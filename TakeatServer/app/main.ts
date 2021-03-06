import * as express from "express";
import { getMenuIngredients, submitOrder, orderDone } from "./dal";
import { json } from "body-parser";
var bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get(
  "/api/getMenuIngredients/",
  wrap(async function() {
    return await getMenuIngredients();
  })
);

app.post(
  "/api/submitOrder/",
  wrap(async function(req, res) {
    return await submitOrder(JSON.parse(req.body.order));
  })
);

app.post(
  "/api/orderDone/",
  wrap(async function(req, res) {
    try {
      return await orderDone(req.body.id);
    } catch (err) {
      console.log(err.message);
    }
  })
);

function wrap(fn) {
  return function(req, res) {
    try {
      const retVal = fn(req, res);

      if (retVal && retVal.then) {
        retVal
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.json({ error: err.message });
          });
      }
    } catch (err) {
      res.json({ error: err.message });
    }
  };
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
app.listen(3000, function() {
  console.log("Server is running ABC");
});
