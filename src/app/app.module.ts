import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';
import { ArithmeticServiceService } from './services/arithmetic-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // DataServiceService,
    // ArithmeticServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
