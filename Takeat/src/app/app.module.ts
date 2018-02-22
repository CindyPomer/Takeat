import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';


import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServerAccessService } from './services/server-access/server-access.service';
import { FoodSelectorComponent } from './pages/order-page/food-selector/food-selector.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodSelectorComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [ServerAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
