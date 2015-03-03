$(document).ready(function() {


	var gridSize = 16;

	var grid = function(){
		
		for(i = 0; i < gridSize; i++) {
			$("table").append("<tr></tr>");
		};
		for(i = 0; i < $("tr").length; i++) {
			$("tr").append("<td class='defaultColor'></td>");

		$(".defaultColor").hover(function(){
			$(this).addClass("hoverColor");
		}, function(){
			$(this).removeClass("hoverColor");
		});
		};
	};

	
	$(grid);


	$("#newGrid").click(function(){
		$("table").empty();
		gridSize = parseInt(prompt("How much squares per side(max 64)?", 16), 10);
		if (gridSize > 64) {
			gridSize = 64;
		};
		$(grid)
	});


	
});