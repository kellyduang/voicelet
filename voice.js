var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
   
  recognition.onresult = function(event) {
    if (typeof(event.results) == 'undefined') {
      console.log("no results");
      return;
    }
    
    var complete = ""
    
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      var tr = event.results[i][0].transcript;
      complete += tr;
    }
    
    console.log(complete);
    
    log = $("#log")[0];
    log.innerHTML += "<p>"+ complete +"</p>"

  };
  
  recognition.onend = function(){
    console.log("ended");
    recognition.start();
  };
  
  $("#start").on("click", function(){
    recognition.start();
  });
