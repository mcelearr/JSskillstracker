
  //////////////////////////////////////////////////////////////
  //////////////////////// Set-Up //////////////////////////////
  //////////////////////////////////////////////////////////////

  var margin = {top: 100, right: 100, bottom: 100, left: 100},
    width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

  //////////////////////////////////////////////////////////////
  ////////////////////////// Data //////////////////////////////
  //////////////////////////////////////////////////////////////

  var skills = ["Basic data types","Advanced data types","Operators"]

  var subskills = [
    {skill:skills[0],subskill:"Numbers",button:"button1one",status:1},
    {skill:skills[0],subskill:"Strings",button:"button1two",status:1},
    {skill:skills[0],subskill:"Booleans",button:"button1three",status:1},
    {skill:skills[1],subskill:"Arrays",button:"button2one",status:1},
    {skill:skills[1],subskill:"Objects",button:"button2two",status:1},
    {skill:skills[1],subskill:"Undefined and null",button:"button2three",status:1},
    {skill:skills[2],subskill:"Arithmetic operators",button:"button3one",status:1},
    {skill:skills[2],subskill:"Logical operators",button:"button3two",status:1},
    {skill:skills[2],subskill:"Other operators",button:"button3three",status:1},
  ]

  var data = [
        [
        {axis:skills[0],value:getAverage(skills[0])},
        {axis:skills[1],value:getAverage(skills[1])},
        {axis:skills[2],value:getAverage(skills[2])}
      ]
      ];

  function getAverage(skill){

  var filteredSkills = [];

    for (var i = 0; i < subskills.length; i++){
      if (subskills[i].skill == skill){
        filteredSkills.push(subskills[i]);
      }
    }

  var total = 0;
  var average = 0;

    for (var j = 0; j < filteredSkills.length; j++){
      total += filteredSkills[j].status;
      average = total/filteredSkills.length;
    }

  return average;
  }

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
  RadarChart(".radarChart", data, radarChartOptions);
