import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent implements OnInit {
  isMetroPassengerFlowVisible = false;
  isMetroMapVisible = false;
  isPudongT1MapVisible = false;
  isPudongT2MapVisible = false;
  isHongqiaoT1MapVisible = false;
  isHongqiaoT2MapVisible = false;

  constructor() {
  }

  ngOnInit() {
  }

  showMetroPassengerFlow() {
    this.isMetroPassengerFlowVisible = true;
  }

  closeMetroPassengerFlow() {
    this.isMetroPassengerFlowVisible = false;
  }

  showMetroMap() {
    this.isMetroMapVisible = true;
  }

  closeMetroMap() {
    this.isMetroMapVisible = false;
  }

  showPudongT1Map() {
    this.isPudongT1MapVisible = true;
  }

  closePudongT1Map() {
    this.isPudongT1MapVisible = false;
  }

  showPudongT2Map() {
    this.isPudongT2MapVisible = true;
  }

  closePudongT2Map() {
    this.isPudongT2MapVisible = false;
  }

  showHongqiaoT1Map() {
    this.isHongqiaoT1MapVisible = true;
  }

  closeHongqiaoT1Map() {
    this.isHongqiaoT1MapVisible = false;
  }

  showHongqiaoT2Map() {
    this.isHongqiaoT2MapVisible = true;
  }

  closeHongqiaoT2Map() {
    this.isHongqiaoT2MapVisible = false;
  }
}
