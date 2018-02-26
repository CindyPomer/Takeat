import { Order, Menu, Kitchen } from "../../Takeat/src/app/models";
import { delay } from "./helpers";
import { IngredientsSum } from "../../Takeat/src/app/models/ingredients-sum.model";
import * as express from "express";
import { MongoClient, Db, connect, ObjectId } from "mongodb";

const ordersCollectionName = "Orders";
const menuCollectionName = "Menu";
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

  const menu: Menu = {
    breads: [
      {
        id: 0,
        name: "פיתה",
        img:
          "pitta.jpg",
        type: 1
      },
      {
        id: 1,
        name: "לאפה",
        img:
          "laffa.jpg",
        type: 1
      },
      {
        id: 2,
        name: "בגט",
        img:
          "bagget.jpg",
        type: 1
      }
    ],
    salads: [
      {
        id: 3,
        name: "חומוס",
        img:
          "humus.jpg",
        type: 2
      },
      {
        id: 4,
        name: "סלט קלאסי",
        img:
          "salad.jpg",
        type: 2
      },
      {
        id: 5,
        name: "ציפס",
        img:
          "chips.jpg",
        type: 2
      }
    ],
    mainCourses: [
      {
        id: 6,
        name: "שניצל",
        img:
          "shnitzel.jpg",
        type: 3
      },
      {
        id: 7,
        name: "שווארמה",
        img:
          "shawarma.jpg",
        type: 3
      },
      {
        id: 8,
        name: "קבב",
        img:
          "kabab.jpg",
        type: 3
      }
    ]
  };

  return menu;
}

export async function submitOrder(order: Order) {
  // insert Order to DB
  // console.log(order.bread);
  return 1;
}

export async function orderDone(orderId: string) {
  console.log("in submitOrder");
  const kitchen = new Kitchen();

  let db = await dbClient.connect();
  //update the order isDone=true
  let results = await dbClient.db
    .collection(ordersCollectionName)
    .update(
      { _id: new ObjectId("5a942ff32567c883fa68d3e6") },
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
  

  return kitchen;
}

export function promisify(fn) {
  return function() {
    const args = Array.from(arguments);
    const me = this;

    return new Promise(function(resolve, reject) {
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
