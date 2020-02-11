import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './products/product/product.component';
import {ShoppingcartComponent} from './shopping-cart/shopping-cart.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {LoginService} from "./shared/login.service";
import {ApiService} from "./shared/api.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShoppingProductComponent} from './shopping-cart/shopping-product/shopping-product.component';
import {AuthInterceptor} from "./interceptor/AuthInterceptor";
import {AccountService} from "./shared/account.service";
import {LocalStorageService} from "./app/shared/local-storage.service";
import {RouterModule, Routes} from "@angular/router";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { EditProductComponent } from './products/edit-product/edit-product.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";

export function init_app(accountService: AccountService) {
  return () => accountService.init();
}

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cart', component: ShoppingcartComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
  }
];

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
    EditProductComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatDialogModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,
      deps: [AccountService]
    },
    {provide: APP_INITIALIZER, useFactory: init_app, deps: [AccountService], multi: true},
  ],
  entryComponents: [
    EditProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
