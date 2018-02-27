import { IngredientsSum } from './../../Takeat/src/app/models/ingredients-sum.model';
import { Order, Menu, Kitchen } from "../../Takeat/src/app/models";
import { delay } from "./helpers";
import * as express from "express";
import { MongoClient, Db, connect, ObjectId, Collection } from "mongodb";
import * as mongodb from "mongodb";
import { WSAEWOULDBLOCK } from "constants";

mongodb["Collection"].prototype.findOneAndUpdateAsync = promisify(mongodb["Collection"].prototype.findOneAndUpdate);

const ordersCollectionName = "Orders";
const menuCollectionName = "Menu";

const testReturn: any = "";
/*
export class IngredientsSum {
  public breads: [string, number][];
  public salads: [string, number][];
  public mainCourses: [string, number][];
}
*/
class DbClient {
  public db: Db;
  
  async connect() {
    if (!this.db) {
      try {
        const client: MongoClient = await MongoClient.connect(
          "mongodb://localhost:27017"
        );

        this.db = client.db("TakeatDB");
        console.log("Connected to db");
        return this.db;
      } catch (error) {
        console.log("Unable to connect to db");
      }
    }
    return this.db;
  }
}
 
 const dbClient = new DbClient();

// tryIt();

// async function tryIt() {
//   let db = await dbClient.connect();
//   for (let index = 0; index < 5; index++) {
//     let results = await dbClient.db.collection(ordersCollectionName).insertOne({
//       isDone: false
//     });
//   }

//     //console.log(results.insertedId);
// }

export async function getMenuIngredients() {
  // await delay(1000);

  // throw new Error("DAL");

  let db = await dbClient.connect();
  let menuColl = db.collection(menuCollectionName);
  
  let menu = await menuColl.find({}).toArray();
  return menu[0];
}

// export async function getAllContacts() {
//     return delay(1000).then(function(){
//         throw new Error("Ooops");
//
//         return [
//             {id: 1, name: "Ori"},
//             {id: 2, name: "Roni"},
//         ];
//     });
// }

export async function getNextSequenceValue(sequenceName) {
  console.log("seq1:");

  let db = await dbClient.connect();
  const counter: any = db.collection("Counter");

  let result;
  const res = await counter.findOneAndUpdateAsync({ _id: sequenceName }, { $inc: { sequence_value: 1 } });
  return res.value.sequence_value;
}

export async function submitOrder(order: any) {
  try {
    let db = await dbClient.connect();
    order.id = await getNextSequenceValue("item_id");
    const orders = db.collection(ordersCollectionName);
    const result = await orders.insertOne(order)
    //console.log(result);
    return order.id;
  }
  catch (err) {
    console.log(err.message);
  }

}

export async function orderDone(orderId: string) {
  const kitchen = new Kitchen();

  let db = await dbClient.connect();
  //update the order isDone=true
  let results = await dbClient.db
    .collection(ordersCollectionName)
    .update(
      { id: Number(orderId) },
      { $set: { isDone: true } }
    );

  // get all orders
  const orders: any[] = await dbClient.db
    .collection(ordersCollectionName)
    .find()
    .toArray();

  // filter orders for current order
  const currOrder = orders.find(item => item.isDone == false);
  kitchen.currentOrder = currOrder;
  // populate kitchen.ingredientsSum
  kitchen.ingredientsSum = new IngredientsSum();


  
  kitchen.ingredientsSum = await this.getOrdersAggregation(orders);
  return kitchen;
}
/*
let orders = {};
getOrdersAggregation(orders);

export async function getOrders() {
  let db = await dbClient.connect();
  let ordersCollection = db.collection("ORDERS");
  let orders_1 = await ordersCollection.find({"isDone":false}).toArray(); 
  
  return orders_1;
}
*/

export async function getOrdersAggregation(ordersCollection) {
  let ingredientsSum:any = await initilizeIngredientsSum(); 
  let orders:any = ordersCollection.filter(item => item.isDone === false);
  for (let order of orders) {
      setFoodType(ingredientsSum.breads, order.bread);
      setFoodType(ingredientsSum.mainCourses, order.mainCourse);
      for (let salad of order.salads){
          setFoodType(ingredientsSum.salads, salad);
      }
  }
  return ingredientsSum;
}

export async function initilizeIngredientsSum(){
  let db = await dbClient.connect();
  let menu = db.collection(menuCollectionName);
  let menuItems = await menu.find({}).toArray(); 
  let ingredientsSum = new IngredientsSum();
  ingredientsSum.breads = await getMenuIngredient(menuItems[0].breads);
  ingredientsSum.salads = await getMenuIngredient(menuItems[0].salads);
  ingredientsSum.mainCourses = await getMenuIngredient(menuItems[0].mainCourses);
  return ingredientsSum;
}

export async function getMenuIngredient(menuItems){
  let itemsArr:any=[];
  for (let item of menuItems) {
    itemsArr.push([item.name,0]);
  }
  return itemsArr;
}

 export async function setFoodType(aggregatedItems, newitem){
  aggregatedItems.forEach(function(o){if (o[0] == newitem.name) o[1]+=1} );
}


export function promisify(fn) {
  return function () {
    const args = Array.from(arguments);
    const me = this;

    return new Promise(function (resolve, reject) {
      function callback(err, retVal) {
        if (err) {
          reject(err);
          return;
        }

        resolve(retVal);
      }

      args.push(callback);

      fn.apply(me, args);
    });
  };
}
