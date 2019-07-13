import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';

@Component({
  selector: 'app-pie',
  templateUrl: 'pie.page.html',
  styleUrls: ['pie.page.scss'],
})
export class PiePage {
  pieData = [
    { actor: 'Arya', fanP: 15 },
    { actor: 'Jaime', fanP: 10 },
    { actor: 'Snow', fanP: 15 },
    { actor: 'Sansa', fanP: 5 },
    { actor: 'Cersei', fanP: 12 },
    { actor: 'Tyrion', fanP: 13 },
    { actor: 'Daenerys', fanP: 20 },
    { actor: 'Bran', fanP: 10 }
  ];
  margin = { top: 20, right: 20, bottom: 30, left: 50 };
  width: number;
  height: number;
  radius: number;
  subtitle = '% of viewers having favorite';
  title = 'Game of Thrones Actors';
  arc: any;
  labelArc: any;
  labelPer: any;
  pie: any;
  color: any;
  svg: any;

  constructor() {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2.5;
  }

  ionViewDidEnter() {
    this.initSvg();
    this.drawPie();
  }

  initSvg() {
    this.color = d3Scale.scaleOrdinal()
      .range(['#FFA500', '#00FF00', '#FF0000', '#6b486b', '#FF00FF', '#d0743c', '#00FA9A']);
    this.arc = d3Shape.arc()
      .outerRadius(this.radius - 10)
      .innerRadius(0);
    this.labelArc = d3Shape.arc()
      .outerRadius(this.radius - 40)
      .innerRadius(this.radius - 40);

    this.labelPer = d3Shape.arc()
      .outerRadius(this.radius - 80)
      .innerRadius(this.radius - 80);

    this.pie = d3Shape.pie()
      .sort(null)
      .value((d: any) => d.fanP);

    this.svg = d3.select('#pieChart')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
      .append('g')
      .attr('transform', 'translate(' + Math.min(this.width, this.height) / 2 + ',' + Math.min(this.width, this.height) / 2 + ')');
  }

  drawPie() {
    const g = this.svg.selectAll('.arc')
      .data(this.pie(this.pieData))
      .enter().append('g')
      .attr('class', 'arc');
    g.append('path').attr('d', this.arc)
      .style('fill', (d: any) => this.color(d.data.actor));
    g.append('text')
      .attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
      .attr('font-size', '25')
      .attr('dy', '.5em')
      .text((d: any) => d.data.actor);

    g.append('text').attr('transform', (d: any) => 'translate(' + this.labelPer.centroid(d) + ')')
  }
}
