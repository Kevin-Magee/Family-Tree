
//each person needs a node
//AND each family needs a node

var nodes = [
	{"type":'family',"id":'f1',"name":'Beta', "image":""},
	{"type":'family',"id":'f2',"name":'Name', "image":""},
	{"type":'family',"id":'f3',"name":'Name', "image":""},
	{"type":'family',"id":'f4',"name":'Name', "image":""},
	{"type":'person',"id":'p1',"name":'Name',"image": ""},
	{"type":'person',"id":'p2',"name":'Name',"image": ""},
	{"type":'person',"id":'p3',"name":'Name',"image": ""},
	{"type":'person',"id":'p4',"name":'Name',"image": ""},
	{"type":'person',"id":'p5',"name":'Name',"image": ""},
	{"type":'person',"id":'p6',"name":'Name',"image": ""},
	{"type":'person',"id":'p7',"name":'Name',"image": ""},
	{"type":'person',"id":'p8',"name":'Name',"image": ""},
	{"type":'person',"id":'p9',"name":'Name',"image": ""},
	{"type":'person',"id":'p10',"name":'Name',"image": ""},
	{"type":'person',"id":'p11',"name":'Name',"image": ""},
	{"type":'person',"id":'p12',"name":'Name',"image": ""},
	{"type":'person',"id":'p13',"name":'Name',"image": ""},
	{"type":'person',"id":'p14',"name":'Name',"image": ""},
	{"type":'person',"id":'p15',"name":'Name',"image": ""},
	{"type":'person',"id":'p16',"name":'Name',"image": ""},
	{"type":'person',"id":'p17',"name":'Name',"image": ""},
	{"type":'person',"id":'p18',"name":'Name',"image": ""},
	{"type":'person',"id":'p19',"name":'Name',"image": ""},
	{"type":'person',"id":'p20',"name":'Name',"image": ""},
	{"type":'person',"id":'p21',"name":'Name',"image": ""},
	{"type":'person',"id":'p22',"name":'Name',"image": ""},
	{"type":'person',"id":'p23',"name":'Name',"image": ""},
	{"type":'person',"id":'p24',"name":'Name',"image": ""},
	{"type":'person',"id":'p25',"name":'Name',"image": ""},
	{"type":'person',"id":'p26',"name":'Name',"image": ""},
	{"type":'person',"id":'p27',"name":'Name',"image": ""},
	{"type":'person',"id":'p28',"name":'Name',"image": ""},
	{"type":'person',"id":'p29',"name":'Name',"image": ""},
	{"type":'person',"id":'p30',"name":'Name',"image": ""},
	{"type":'person',"id":'p31',"name":'Name',"image": ""},
	{"type":'person',"id":'p32',"name":'Name',"image": ""},
	{"type":'person',"id":'p41',"name":'Name',"image": ""},
	{"type":'person',"id":'p42',"name":'Name',"image": ""},
	{"type":'person',"id":'p43',"name":'Name',"image": ""},
	{"type":'person',"id":'p44',"name":'Name',"image": ""},
	{"type":'person',"id":'p45',"name":'Name',"image": ""},
	{"type":'person',"id":'p46',"name":'Name',"image": ""},
	{"type":'person',"id":'p47',"name":'Name',"image": ""},
	{"type":'person',"id":'p48',"name":'Name',"image": ""},
	{"type":'person',"id":'p49',"name":'Name',"image": ""},
]


var edges = [
	
	{id:1,source:'f1',target:'p1'},
	
	{id:2,source:'f1',target:'p2'},
	{id:2,source:'p2',target:'p21'},
	{id:2,source:'p2',target:'p22'},	
	{id:2,source:'p22',target:'p23'},
		
		{id:2,source:'p22',target:'p24'},
		{id:2,source:'p24',target:'p26'},
		{id:2,source:'p24',target:'p27'},
		{id:2,source:'p27',target:'p28'},
		{id:2,source:'p28',target:'p29'},
		{id:2,source:'p24',target:'p30'},
		{id:2,source:'p30',target:'p31'},
		{id:2,source:'p30',target:'p32'},
		
		{id:2,source:'p22',target:'p25'},
		{id:2,source:'p25',target:'p41'},
		{id:2,source:'p41',target:'p42'},
		{id:2,source:'p41',target:'p43'},
		{id:2,source:'p41',target:'p44'},
		{id:2,source:'p42',target:'p45'},
		{id:2,source:'p42',target:'p47'},
		{id:2,source:'p45',target:'p46'},
		{id:2,source:'p47',target:'p48'},
		{id:2,source:'p43',target:'p49'},
	
	{id:3,source:'f1',target:'p3'},
	{id:3,source:'p3',target:'p16'},
	{id:3,source:'p16',target:'p17'},
	{id:3,source:'p17',target:'p18'},
	{id:3,source:'p17',target:'p19'},
	{id:3,source:'p19',target:'p20'},
	
	{id:4,source:'f1',target:'p4'},
	{id:4,source:'p4',target:'p14'},
	{id:4,source:'p14',target:'p15'},
	
	{id:5,source:'f1',target:'p5'},
	{id:5,source:'p5',target:'p12'},
	{id:5,source:'p12',target:'p13'},
	
	{id:6,source:'f1',target:'p6'},
	{id:6,source:'p6',target:'p10'},
	{id:6,source:'p10',target:'p11'},
	
	{id:7,source:'f1',target:'p7'},
	{id:7,source:'p7',target:'p8'},
	{id:7,source:'p7',target:'p9'},
	
]


//defining the chart
var myChart = familyChart().nodes(nodes)
                           .links(edges);

//defining the width and height of the svg
var width = window.innerWidth, // default width
   height = window.innerHeight;

//drawing the svg and calling the familyChart opject.

var svg = d3.select('#forces').append("svg")
            .attr("width", "100%"/*width*/)
            .attr("height", "100%"/*height*/)
            .attr("background-color","yellow")
			.attr("viewBox", "0 -75 1500 900")
            .call(myChart);
function familyChart() {


  var nodes = [],
      links = [] // default height

  function my(svg) {

    //set the radius of the family nodes
    var family_radius = 15;

    //set the repel force - may need to be tweaked for multiple data
    //the lower the strength the more they will repel away from each other
    //the larger the distance, the more apart they will be
    var repelForce = d3.forceManyBody().strength(-3000).distanceMax(450)
                       .distanceMin(85);

    //start the simulation
    //alpha decay - if less, force takes longer but is better positioned
    //center just keeps everything in the svg - otherwise you won't see it however much you pan or zoom
    //repel force see above
    //link distance - repel takes precidence - try upping or lowering the strength and changing the distances
    //collide - this is on maximum strength and is higher for family (bigger radius) than others so should keep
    //families further apart than people
    var simulation = d3.forceSimulation()
                  //     .alphaDecay(0.04)
                  //     .velocityDecay(0.4)
                  //     .force("center", d3.forceCenter(width / 2, height / 2))
                       .force("xAxis",d3.forceX(width/2).strength(0.4))
                       .force("yAxis",d3.forceY(height/2).strength(0.6))
                       .force("repelForce",repelForce)
                       .force("link", d3.forceLink().id(function(d) { return d.id }).distance(dist).strength(1.5))
                       .force("collide",d3.forceCollide().radius(function(d) { return d.r * 20; }).iterations(10).strength(1))

    function dist(d){
      //used by link force
      return 100

    }

    //define the links
    var links = svg.selectAll("foo")
        .data(edges)
        .enter()
        .append("line")
        .attr("stroke-width","4px")
		.attr("stroke", "gold")

    //define tooltip
    var tooltip = d3.select("body")
      .append("div")
      .attr("class", "tooltip")
      .html("");

    //draw the nodes with drag functionality
    var node = svg.selectAll("foo")
        .data(nodes)
        .enter()
        .append("g")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    //define defs and patterns - for the images
    var defs = node.append("defs");


    defs.append('pattern')
        .attr("id", function(d,i){return "my_image" + i})
        .attr("width", 1)
        .attr("height", 1)
        .append("svg:image")
        .attr("xlink:href", function(d) {return d.image})
        .attr("height", "80")
        .attr("width", "80")
        .attr("x", 0)
        .attr("y", 0);

        //append deceased arc - only visible if "dead" is defined
        node.append('path')
            .attr('class',"semi-circle")
            .attr('fill','none')
            .attr('stroke','grey')
            .attr('stroke-width', function(d){
              if(d.dead == undefined){return "0px"
              }else{return "4px"}})
            .attr('d',describeArc(0, -2.5, 12.5, -90, 90))

    //append circles
    var circles = node.append("circle")
                      .attr("class","circle")
                      .attr("r", function(d){ //radius - bigger if family
                          if (d.type == "family"){
                            return family_radius;
                          } else{return 35;}})
                       .attr("fill",function(d,i){ //white if family, otherwise image
                         if(d.type == "family"){return "white"}
                         else{return "url(#my_image" + i + ")"}})
                        .attr("stroke", function(d){
                          //different borders for family, male and female
                          if (d.type == "family"){return "gold";
                          } else { return "red"}})
                          .attr("stroke-width","2px")
                          .on("mouseover", function(d){
                            if(d.type !== "family"){
                              //sets tooltip.  t_text = content in html
							  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                              t_text = "<strong>" + titleCase(d.name) + "</strong><br><br>Home town: " + d.Hometown + "</strong><br>Class: " + d.clas + "</strong><br>Fraternity name: " + d.Fraternityname + "</strong><br>Email: " + d.email + "</strong><br>Phone Number: " + d.number
                              if(d.profession !== undefined){
                                //only add profession if it is defined
                                t_text += "<br>Profession: " + d.profession}
                              tooltip.html(t_text)
                              return tooltip.style("visibility", "visible");
                            }  })
                           .on("mousemove", function(){return tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px");})
                           .on("mouseout", function(){return tooltip.style("visibility", "hidden");});


    //title case function used by tooltip and labels
    function titleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    //append labels
    var texts = node.append("text")
        .style("fill", "black")
        .attr("dx", 0)
        .attr("dy", 50)
        .attr("text-anchor","middle")
        .text(function(d) {
            return titleCase(d.name);
        });

    //finally - attach the nodes and the links to the simulation
    simulation.nodes(nodes);
    simulation.force("link")
              .links(edges);

    //and define tick functionality
   simulation.on("tick", function() {

        links.attr("x1", function(d) {return d.source.x;})
             .attr("y1", function(d) {return d.source.y;})
             .attr("x2", function(d) {return d.target.x;})
             .attr("y2", function(d) {return d.target.y;})

        node.attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")"})
    });


    function dragstarted(d) {

       if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      if(d.type == 'family'){
        //stickiness - toggles the class to fixed/not-fixed to trigger CSS
        var my_circle = d3.select(this).selectAll('circle')
        if(my_circle.attr('class') == 'fixed'){
          my_circle.attr("class","not-fixed")
        }else{
          my_circle.attr("class","fixed")
        }
      }
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
       if (!d3.event.active) simulation.alphaTarget(0);
       //stickiness - unfixes the node if not-fixed or a person
       var my_circle = d3.select(this).selectAll('circle')
       if(my_circle.attr('class') == 'not-fixed'  || d.type !== 'family'){
         d.fx = null;
         d.fy = null;
       }

    }

    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      //for arcs - from excellent link - http://jsbin.com/quhujowota/1/edit?html,js,output
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    }

    function describeArc(x, y, radius, startAngle, endAngle){
      //for arcs - from excellent link - http://jsbin.com/quhujowota/1/edit?html,js,output

        var start = polarToCartesian(x, y, radius, endAngle);
        var end = polarToCartesian(x, y, radius, startAngle);

        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");

        return d;
    }


  }

  my.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return my;
  };

  my.nodes = function(value) {
    if (!arguments.length) return nodes;
    nodes = value;
    return my;
  };

  my.links = function(value) {
    if (!arguments.length) return links;
    links = value;
    return my;
  };

  my.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    return my;
  };

  return my;
}
