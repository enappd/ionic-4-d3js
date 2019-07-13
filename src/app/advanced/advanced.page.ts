import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { dataSet } from '../jsonData.js';
import { CodeFlower } from '../CodeFlower.js';

@Component({
  selector: 'app-advanced',
  templateUrl: 'advanced.page.html',
  styleUrls: ['advanced.page.scss'],
})
export class AdvancedPage {
  chart = '01';
  constructor() {

  }

  ionViewDidEnter() {
    this.init();
    console.log(dataSet)
  }

  init() {
    var myFlower = new CodeFlower("#visualization", 300, 300);
    myFlower.update(dataSet[parseInt(this.chart) - 1]);
  }

  changeChart() {
    this.init()
  }
}
