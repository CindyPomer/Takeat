import { FoodItem } from "./food-item.model";
import { User } from "./user.model";

export class Order {

    user : User;
    bread: FoodItem;
    salads: FoodItem[];
    mainCourse: FoodItem;
    orderSubmitTime : Date;
}