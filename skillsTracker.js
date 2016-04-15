//Initialization
setCookie();
var user = new User();
//JQuery plugins
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});

//////////////////////////////////////////////////////////////
//////////////////////// Set-Up //////////////////////////////
//////////////////////////////////////////////////////////////

var margin = {top: 100, right: 100, bottom: 100, left: 100},
  width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
  height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

//////////////////////////////////////////////////////////////
////////////////////////// Data //////////////////////////////
//////////////////////////////////////////////////////////////


function data(){
  return [
          [
            {axis: user.basicDataTypes.title, value: user.getAverage(user.basicDataTypes)},
            {axis: user.advancedDataTypes.title, value: user.getAverage(user.advancedDataTypes)},
            {axis: user.operators.title, value: user.getAverage(user.operators)}
          ]
        ];
  };

//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var color = d3.scale.ordinal()
  .range(["#EDC951","#CC333F","#00A0B0"]);

var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 1,
  levels: 5,
  roundStrokes: true,
  color: color
};
//Call function to draw the Radar chart
RadarChart(".radarChart", data(), radarChartOptions);


//Update graph when button is pressed

$('.sbtn').click(function(){
  var id = $(this).attr('id').split('=');
  user.toggleValue(id[0], id[1]);
  RadarChart(".radarChart", data(), radarChartOptions);
});
