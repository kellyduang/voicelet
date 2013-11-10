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
      var firstChild = feedbackContainer.children().first();
      if(firstChild.html() === "Good job!"){
        return;
      }
      feedbackContainer.empty();
      var feedbackthing = $("<div></div>");
      feedbackContainer.append(feedbackthing);

      
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        var tr = event.results[i][0].transcript;
        tr = tr.toLowerCase();
        console.log(tr);
        var card = $("#currentCard");
        var value = card.children(".back").html();
        value = value.toLowerCase();
        if(stringDistance(tr, value) < 3){
          console.log("yes");
          var forwardButton = $("#goNext");
          forwardButton.click();
          feedbackthing.css({"color": "#006633"});
          feedbackthing.html("Good job!");
        }
        else{
          feedbackthing.css({"color": "#CC333F"});
          feedbackthing.html("Try again.  You said " + tr + ".");
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
  
