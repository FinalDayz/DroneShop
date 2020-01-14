import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Account} from "../modals/Account";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private reourcePath = '/account';

  constructor(private api: ApiService) { }

  validLogin(account: Account) {
    return this.api.post(this.buildURL("validate"), account);
  }

  register(account: Account) {
    return this.api.post(this.buildURL("createAccount"), account)
  }

  private buildURL(url) {
    return this.reourcePath + "/" + url;
  }
}
