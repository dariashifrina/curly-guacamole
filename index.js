/**
   D3 demo: transition basics

   Clyde "Thluffy" Sinclair
   SoftDev2 pd0
   2099-12-31
 **/

//build horiz bar chart...
var data = [[2.6, "Donald Trump 19"], [[2.3, "Donald Trump 18"], 2.6, 3.3, 2.5, 2.8, 4.1, 6.8, 8.5, 8.7];
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");


/*
   USAGE: reload index.html before executing each from the console...

//instant transition:
barEnter.style("width", function(d) {
  return d * 10 + "px"; });
*/
//5s transition:
barEnter.transition().duration(5000).style("width", function(d) {
  return d * 10 + "px"; });
/*
//trans time prop to bar width
barEnter.transition().duration( function(d){ return d*1000; } )
  .style("width", function(d) {
    return d * 10 + "px"; });
 */

barEnter.text(function(d) { return d; });
