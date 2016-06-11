//Initialization

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
            {axis: user.skill0.title, value: user.getAverage(user.skill0)},
            {axis: user.skill1.title, value: user.getAverage(user.skill1)},
            {axis: user.skill2.title, value: user.getAverage(user.skill2)},
            {axis: user.skill3.title, value: user.getAverage(user.skill3)},
            {axis: user.skill4.title, value: user.getAverage(user.skill4)},
            {axis: user.skill5.title, value: user.getAverage(user.skill5)},
            {axis: user.skill6.title, value: user.getAverage(user.skill6)},
            {axis: user.skill7.title, value: user.getAverage(user.skill7)},
            {axis: user.skill8.title, value: user.getAverage(user.skill8)},
            {axis: user.skill9.title, value: user.getAverage(user.skill9)},
            {axis: user.skill10.title, value: user.getAverage(user.skill10)},
            {axis: user.skill11.title, value: user.getAverage(user.skill11)},
            {axis: user.skill12.title, value: user.getAverage(user.skill12)},
            {axis: user.skill13.title, value: user.getAverage(user.skill13)},
            {axis: user.skill14.title, value: user.getAverage(user.skill14)},
            {axis: user.skill15.title, value: user.getAverage(user.skill15)}
          ],
          [
            {axis: user.skill0.title, value: 1},
            {axis: user.skill1.title, value: 1},
            {axis: user.skill2.title, value: 1},
            {axis: user.skill3.title, value: 1},
            {axis: user.skill4.title, value: 1},
            {axis: user.skill5.title, value: 1},
            {axis: user.skill6.title, value: 2/3},
            {axis: user.skill7.title, value: 1},
            {axis: user.skill8.title, value: 1},
            {axis: user.skill9.title, value: 1/3},
            {axis: user.skill10.title, value: 2/3},
            {axis: user.skill11.title, value: 2/3},
            {axis: user.skill12.title, value: 1/5},
            {axis: user.skill13.title, value: 1/3},
            {axis: user.skill14.title, value: 1},
            {axis: user.skill15.title, value: 0}
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
  var id = $(this).attr('id').firstEqualSplit();
  user.toggleValue(id[0], id[1]);
  $(this).toggleClass("red");
  var done = document.getElementById(this.id+'check');
  this.childNodes[0].textContent = this.childNodes[0].textContent == 'Incomplete' ? 'Complete' : 'Incomplete';
  done.innerHTML = done.innerHTML == '' ? 'done' : '';
  RadarChart(".radarChart", data(), radarChartOptions);
});

//Toggle state of 'Complete' button
function toggleButton(button){
  console.log(button.childNodes[1]);
}
