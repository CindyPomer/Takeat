
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ServerAccessService } from './services/server-access/server-access.service';
import { AppRoutingModule, routingComponents } from './routes/app.routes';
import { LoginComponent } from './Pages/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [ServerAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
