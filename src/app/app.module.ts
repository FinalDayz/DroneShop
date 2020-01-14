import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {LoginService} from "./shared/login.service";
import {ApiService} from "./shared/api.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ProductsComponent,
    ProductComponent,
    ShoppingCardComponent,
    LoginComponent,
    MainComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [HttpClient, ApiService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
