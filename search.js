$(function(){
	var render = function(data){
		console.log(data);
		$("#searchResults").empty();
		if (input.val() !== ""){
			for (var i = data.sets.length - 1; i >= 0; i--) {
			var set = data.sets[i];
			var newThing = $('<div class = "set btn btn-default"></div>');
			newThing.html('<a href = /set/?' + set.id + '><div class = "setTitle">'+set.title+'</div></a>');
			$("#searchResults").append(newThing);
		};
		}

	}
	var input = $("#box");
	input.on("input", function(){
		console.log(input.val())
		var value = input.val();
		if (value === ""){
			$("#searchResults").empty();
		}
		else{
			var setSource = "https://api.quizlet.com/2.0/search/sets?client_id=9FgEJUznNN&whitespace=1&q="+value
			$.ajax({
			url: setSource,
			success: render,
			dataType: "jsonp"
			});
		}
	});
})
