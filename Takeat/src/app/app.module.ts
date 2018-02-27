import { IngredientsSumsPageComponent } from './Pages/kitchen-page/ingredients-sums/ingredients-sums.component';
import { HttpClientModule } from '@angular/common/http';
import { Inject,NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material";
import {MatChipsModule} from '@angular/material/chips';


import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { FoodSelectorComponent } from './pages/order-page/food-selector/food-selector.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { AppRoutingModule, routingComponents } from './routes/app.routes';
import { ServerAccessService } from './services/server-access/server-access.service';
import { KitchenPageComponent } from './pages/kitchen-page/kitchen-page.component';
import { OrderIdDialogComponent} from './pages/order-page/order-id-dialog/order-id-dialog.component';
import { CurrentOrderComponent } from './pages/kitchen-page/current-order/current-order.component';
import { FinishOrderComponent } from './pages/finish-order/finish-order.component';
import { FinishKitchenComponent } from './pages/finish-kitchen/finish-kitchen.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodSelectorComponent,
    OrderPageComponent,
    LoginComponent,
    routingComponents,
    KitchenPageComponent,
    OrderIdDialogComponent,
    IngredientsSumsPageComponent,
    CurrentOrderComponent,
    FinishOrderComponent,
    FinishKitchenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [ServerAccessService,FormBuilder],
  bootstrap: [AppComponent],
  entryComponents: [OrderIdDialogComponent]
})
export class AppModule {}
