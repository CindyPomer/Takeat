import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { FoodSelectorComponent } from './pages/order-page/food-selector/food-selector.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { AppRoutingModule, routingComponents } from './routes/app.routes';
import { ServerAccessService } from './services/server-access/server-access.service';

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
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServerAccessService],
  bootstrap: [AppComponent]
})
export class AppModule {}
