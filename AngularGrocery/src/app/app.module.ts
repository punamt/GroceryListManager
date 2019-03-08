import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroceryAppComponent } from './grocery-app.component';

@NgModule({
  declarations: [
    AppComponent,
    GroceryAppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [GroceryAppComponent]
})
export class AppModule { }
