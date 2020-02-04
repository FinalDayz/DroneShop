import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  curLocation = 'shopping-card';

  constructor() { }

  ngOnInit() {
  }

  navigator(location: string) {
    return this.curLocation === location;
  }
}
