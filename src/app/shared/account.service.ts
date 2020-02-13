import { Injectable } from '@angular/core';
import {Account} from "../modals/Account";
import {LocalStorageService} from "../app/shared/local-storage.service";
import {ApiService} from "./api.service";
import {Role} from "../modals/Role";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private JWT: string = null;
  private account: Account = null;

  constructor(private api: ApiService,
              private localStorageService: LocalStorageService,
              ) {
    console.log("New accountService");
    if (this.localStorageService.hasItem('JWT')) {
      this.JWT = this.localStorageService.getItem('JWT');
    }
  }

  init() {
    console.log(this.JWT);
    if(this.JWT !== null) {
      this.requestAccountInfo(this.JWT);
    }
  }

  public getJWT(): string {
    return this.JWT;
  }

  public isLoggedIn(): boolean {
    return this.account !== null;
  }

  public setLoggedIn(account: Account) {
    this.localStorageService.setItem("JWT", account.jwt);
    this.JWT = account.jwt;
    this.account = account;
  }

  public getRole(): Role {
    if(!this.isLoggedIn()) {
      return Role.UNDEFINED;
    }
    return this.account.accountRole;
  }

  hasRole(role: Role) {

    var rolesAllowed: Role[] = [];

    switch(this.getRole()) {
      case Role.ADMIN:
        rolesAllowed.push(Role.ADMIN);
      case Role.USER:
        rolesAllowed.push(Role.USER);
      case Role.UNDEFINED:
        rolesAllowed.push(Role.UNDEFINED);
        break;
    }

    for(var allowedRole in rolesAllowed) {

      if(rolesAllowed[allowedRole] === role) {
        return true;
      }
    }

    return false;
  }

  private requestAccountInfo(jwt: string) {
    this.api.get<Account>('/account/validateJWT/' + jwt).subscribe(account => {
      this.setLoggedIn(account);
    });
  }

  logout() {
    this.localStorageService.removeItem("JWT");
    this.JWT = null;
    this.account = null;
  }

  getAccountId() {
    return this.account.accountId;
  }

  isAdmin() {
    return this.hasRole(Role.ADMIN);
  }
}
