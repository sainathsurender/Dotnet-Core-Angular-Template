import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tiles',
  templateUrl: './dashboard-tiles.component.html',
  styleUrls: ['./dashboard-tiles.component.css']
})
export class DashboardTilesComponent implements OnInit {
  _testId: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
