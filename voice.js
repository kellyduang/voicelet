$(function(){
  var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
     
    recognition.onresult = function(event) {
      if (typeof(event.results) == 'undefined') {
        console.log("no results");
        return;
      }
      
      var feedbackContainer = $("#feedback");
      feedbackContainer.empty();
      var feedbackthing = $("<div></div>");
      feedbackContainer.append(feedbackthing);

      
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        var tr = event.results[i][0].transcript;
        console.log(tr);
        var card = $("#currentCard");
        var value = card.children(".back").html();
        if(stringDistance(tr, value) < 3){
          console.log("yes");
          var forwardButton = $("#goNext");
          forwardButton.click();
          feedbackthing.html("yay");
        }
        else{
          feedbackthing.html("Try again.");
        }
        
      }
      setTimeout(function(){
        feedbackthing.remove()
      }, 2300);
      
    };
    
    recognition.onend = function(){
      console.log("ended");

    };
    
    
  recognition.start();
})
  
