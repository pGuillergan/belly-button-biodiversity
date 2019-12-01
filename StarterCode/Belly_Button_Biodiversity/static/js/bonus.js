function buildGauge(wfreq){
	console.log("inside build gauge")
    
    
 //    var data = [
	// {
	// 	domain: { x: [0, 1], y: [0, 1] },
	// 	value: 270,
	// 	title: { text: "Speed" },
	// 	type: "indicator",
	// 	mode: "gauge+number"
	// }
	// ];

	// var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
	
	var level = parseFloat(wfreq) * 20;

	var deg = 180 - level;
	var rad = 0.5;
	var rads = (deg * Math.PI)/180;
	var x = rad * Math.cos(rads);
	var y = rad * Math.sin(rads);

	var main_path = "M -.0 -0.05 L .0 0.05 L ";
	var path_x = String(x);
	var path_y = String(y);
	var space = " ";
	var path_end = " Z";
	var path = main_path.concat(path_x, space, path_y, path_end)

	var data = [
		{
			type: "scatter",
			x: [0],
			y: [0],
			marker: {size:12, color:"850000"},
			showlegend: false,
			name: "Freq",
			text: level,
			hoverinfo: "text+name"
		},
		{
			values: [ 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50 ],
			rotation: 90,
			text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
			textinfo: "text",
			textposition: "inside",
			marker:{
				colors:["rgba(0, 50, 100)", 
				"rgba(0, 0, 100)", 
				"rgba(0, 25, 100)", 
				"rgba(0, 50, 100)", 
				"rgba(0, 75, 100)", 
				"rgba(0, 100, 100)", 
				"rgba(0, 125, 100)", 
				"rgba(0, 150, 100)", 
				"rgba(0, 175, 100)", 
				"rgba(0, 200, 100)"]
			},
			labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
			hoverinfo: "label",
			hole: 0.5,
			type: "pie",
			showlegend:false
		}
	];

	var layout = {
		shapes: [
			{
				type: "path",
				path: path,
				fillcolor: "850000",
				line: {
					color: "850000"
				}
			}
		],
		title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
		height: 500,
		width: 500,
		xaxis:{
			zeroline: false,
			showticklabels: false,
			showgrid: false,
			range: [-1, 1]
		},
		yaxis:{
			zeroline: false,
			showticklabels: false,
			showgrid: false,
			range: [-1, 1]
		}
	};

	var gauge = document.getElementById("gauge");
	Plotly.newPlot(gauge, data, layout);
}
