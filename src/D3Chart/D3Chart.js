import React, { createRef, Component } from "react";
import * as d3 from "d3";

class D3Chart extends Component {
  
  componentDidMount() {
    this.createSvg();
    this.createColors();
    setTimeout(() => {
      this.createChart();
      this.drawChart();
    }, 50);
   
  }

 
  // Using D3
  createSvg() {
    this.svg = d3
      .select('figure#pie')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 2 + ',' + this.height / 2 + ')'
      );
  }
  createColors() {
    this.colors = d3
      .scaleOrdinal()
      .domain(this.dataService.data.map((d) => d.value))
      .range([
        '#98abc5',
        '#8a89a6',
        '#7b6888',
        '#6b486b',
        '#a05d56',
        '#d0743c',
        '#ff8c00',
      ]);
  }
  drawChart() {
   const pie = d3.pie().value(d=>d.value).sort(null);
    this.svg
      .selectAll('pieces')
      .data(pie(this.dataService.data))
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(0).outerRadius(this.radius))
      .attr('fill', (d, i) => this.colors(i))
      .attr('stroke', '#121926')
      .style('stroke-width', '1px');

    const labelLocation = d3.arc().innerRadius(100).outerRadius(this.radius);

    this.svg
      .selectAll('pieces')
      .data(pie(this.dataService.data))
      .enter()
      .append('text')
      .text((d) => d.data.labels)
      .attr('transform', (d) => 'translate(' + labelLocation.centroid(d) + ')')
      .style('text-anchor', 'middle')
      .style('font-size', 10);
  }

  render() {
    return (<div id={"#" + this.props.id}></div>);
  }
}

export default D3Chart;