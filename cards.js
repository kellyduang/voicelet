	var currentCardNumber = 0;
	var quizletData = null;
	var turnOver = function(){
		if($(".back").is(':hidden')){
			$(".front").hide();
			$(".back").show();
		}
		else{
			$(".front").show();
			$(".back").hide();
		}
	}
	var initiate = function(){
		var card = $("#currentCard");
		var firstcard = quizletData.terms[currentCardNumber];
		card.children(".front").html(firstcard.definition)
		card.children(".back").html(firstcard.term)
		$(".front").show();
		$(".back").hide();
	}
	var advance = function(){
		if(currentCardNumber < quizletData.terms.length){
			currentCardNumber ++;
			var card = $("#currentCard");
			var firstcard = quizletData.terms[currentCardNumber];
			card.children(".front").html(firstcard.definition)
			card.children(".back").html(firstcard.term)
			$(".front").show();
			$(".back").hide();
		}
	}
	var devance = function(){
		if(currentCardNumber > 0){
			currentCardNumber --;
			var card = $("#currentCard");
			var firstcard = quizletData.terms[currentCardNumber];
			card.children(".front").html(firstcard.definition)
			card.children(".back").html(firstcard.term)
			$(".front").show();
			$(".back").hide();
		}
	}
	var render = function(data){
		console.log(data);
		quizletData = data;
		initiate();
	}
	var quizId = location.search.substring(1);
	var setSource = "https://api.quizlet.com/2.0/sets/" + quizId + "?client_id=9FgEJUznNN&whitespace=1"
	$.ajax({
	url: setSource, 
	success: render,
	dataType: "jsonp"

	});
	var forwardButton = $("#goNext");
	forwardButton.on("click", advance);
	var flipButton = $("#flip");
	flipButton.on("click", turnOver);
	var backButton = $("#goBack");
	backButton.on("click", devance);
