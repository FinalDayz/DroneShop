import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ShoppingCardService} from "../app/shared/shopping-card.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public page: string = 'login';
  @Output() pageChanged = new EventEmitter();

  constructor(public shoppingCardService: ShoppingCardService) { }

  clickNavigation(page: string) {
    this.page = page;
    this.pageChanged.emit(page);
  }

  ngOnInit() {
  }

}
