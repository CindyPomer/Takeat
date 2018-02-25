import { HttpClientModule } from '@angular/common/http';
import { Inject,NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material";

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { FoodSelectorComponent } from './pages/order-page/food-selector/food-selector.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { AppRoutingModule, routingComponents } from './routes/app.routes';
import { ServerAccessService } from './services/server-access/server-access.service';
import { KitchenPageComponent } from './pages/kitchen-page/kitchen-page.component';
import { OrderIdDialogComponent} from './pages/order-page/order-id-dialog/order-id-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodSelectorComponent,
    OrderPageComponent,
    LoginComponent,
    routingComponents,
    KitchenPageComponent,
    OrderIdDialogComponent
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
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [ServerAccessService,FormBuilder],
  bootstrap: [AppComponent],
  entryComponents: [OrderIdDialogComponent]
})
export class AppModule {}
