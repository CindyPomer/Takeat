import { FinishOrderComponent } from './../Pages/finish-order/finish-order.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { OrderPageComponent } from "../pages/order-page/order-page.component";
import { LoginComponent } from "./../Pages/login/login.component";
import { KitchenPageComponent } from "../pages/kitchen-page/kitchen-page.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "order", component: OrderPageComponent },
  { path: "kitchen", component: KitchenPageComponent },
  { path: "finish", component: FinishOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [LoginComponent, OrderPageComponent,FinishOrderComponent];
