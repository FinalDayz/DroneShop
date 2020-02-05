import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingcartService} from "../app/shared/shopping-cart.service";
import {AccountService} from "../shared/account.service";
import {Role} from "../modals/Role";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public page: string = 'login';
  @Output() pageChanged = new EventEmitter();

  constructor(public shoppingcartService: ShoppingcartService, public accountService: AccountService) { }

  clickNavigation(page: string) {
    this.page = page;
    this.pageChanged.emit(page);
  }

  public isAdmin(): boolean {
    return this.accountService.hasRole(Role.ADMIN);
  }

  ngOnInit() {
  }

}
