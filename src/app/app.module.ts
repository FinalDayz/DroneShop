import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ShoppingcartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import {LoginService} from "./shared/login.service";
import {ApiService} from "./shared/api.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppingProductComponent } from './shopping-cart/shopping-product/shopping-product.component';
import {AuthInterceptor} from "./interceptor/AuthInterceptor";
import {AccountService} from "./shared/account.service";
import {LocalStorageService} from "./app/shared/local-storage.service";


export function init_app(accountService: AccountService) {
  return () => accountService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ProductsComponent,
    ProductComponent,
    ShoppingcartComponent,
    LoginComponent,
    MainComponent,
    ShoppingProductComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true,
      deps: [AccountService]
    },
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AccountService], multi: true },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
