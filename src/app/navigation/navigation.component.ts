import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public page: string = 'home';
  @Output() pageChanged = new EventEmitter();

  constructor() { }

  clickNavigation(page: string) {
    this.page = page;
    this.pageChanged.emit(page);
  }

  ngOnInit() {
  }

}
