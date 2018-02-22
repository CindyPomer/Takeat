import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";

import { MatButtonModule } from "@angular/material/button";
import {
  HttpClientModule,
  HttpClient,
  HttpHandler
} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ServerAccessService } from "./services/server-access/server-access.service";
import { FoodSelectorComponent } from "./pages/order-page/food-selector/food-selector.component";
import { OrderPageComponent } from "./pages/order-page/order-page.component";
import { AppRoutingModule, routingComponents } from "./routes/app.routes";
import { LoginComponent } from "./Pages/login/login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FoodSelectorComponent,
    OrderPageComponent,
    LoginComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServerAccessService],
  bootstrap: [AppComponent]
})
export class AppModule {}
