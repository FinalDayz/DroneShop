import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingcartService} from "../app/shared/shopping-cart.service";
import {AccountService} from "../shared/account.service";
import {Role} from "../modals/Role";
import {Router, RouterModule, Routes} from '@angular/router';
import {LocalStorageService} from "../app/shared/local-storage.service";
import {FeedbackMessageService} from "../feedback-message.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private feedbackService: FeedbackMessageService,
    public shoppingcartService: ShoppingcartService, public accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.feedbackService.showInfoMessage("Succesvol uitgelogd");
    this.accountService.logout();
    this.router.navigate(["/home"]);
  }
}
