$(function() {
        $("#goNext").click(function() {
            var original = $(".box-a");
            var clone = original.clone();
            original.parent().append(clone);
            original.css({
                position: "absolute",
                left: original.offset().left+"px",
                top: (original.offset().top-50)+"px",

            })
            original.removeClass('box-a');
            original.addClass('box-b');
            animate(".box-b", 'slideOutLeft', function(){
                original.remove();
            });
            animate(".box-a", 'slideInRight', function(){
                console.log (clone);
            });
            advance(clone.find("#currentCard"));
            return false;
        });

$("#goBack").click(function() {
            var original = $(".box-a");
            var clone = original.clone();
            original.parent().append(clone);
            original.css({
                position: "absolute",
                left: (original.offset().left+34.5)+"px",
                top: (original.offset().top-50)+"px",

            })
            original.removeClass('box-a');
            original.addClass('box-b');
            animate(".box-b", 'slideOutRight', function(){
                original.remove();
            });
            animate(".box-a", 'slideInLeft', function(){
                console.log (clone);
            });
            devance(clone.find("#currentCard"));
            return false;
        });
    
    function animate(element_ID, animation, callback) {
        $(element_ID).addClass(animation);
        var wait = window.setTimeout( function(){
            $(element_ID).removeClass(animation)
            callback();
        }, 1000
        );
    }

    $(document).on("click", ".flip", function(){
        $(this).find('.card').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });
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
        $(".brand").html(quizletData.title);
        var card = $("#currentCard");
        var firstcard = quizletData.terms[currentCardNumber];
        card.children(".front").html(firstcard.definition)
        card.children(".back").html(firstcard.term)
    }

    var advance = function(card){
        if(currentCardNumber < quizletData.terms.length - 1){
            currentCardNumber ++;
            var firstcard = quizletData.terms[currentCardNumber];
            card.children(".front").html(firstcard.definition)
            card.children(".back").html(firstcard.term)

        }
    }
    var devance = function(card){
        if(currentCardNumber > 0){
            currentCardNumber --;
            var firstcard = quizletData.terms[currentCardNumber];
            card.children(".front").html(firstcard.definition)
            card.children(".back").html(firstcard.term)

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
    // var forwardButton = $("#goNext");
    // forwardButton.on("click", advance);
    // var flipButton = $("#flip");
    // flipButton.on("click", turnOver);
    // var backButton = $("#goBack");
    // backButton.on("click", devance);
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
});
