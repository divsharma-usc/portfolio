document.addEventListener('DOMContentLoaded',function(event){

  var dataText = [ "developer", "traveler", "student"];



  function typeWriter(text, i, fnCallback) {
	 
	  

    if (i < (text.length)) {
     
     document.querySelector(".headline").innerHTML = text.substring(0, i+1) +'<span class="typewriter" aria-hidden="true"></span>';


      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }

    else if (typeof fnCallback == 'function') {

      setTimeout(fnCallback, 400);
    }
  }

   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
		
    
          StartTextAnimation(0);
     
     }

    if (i < dataText[i].length) {
   
     typeWriter(dataText[i], 0, function(){
		 
		 function clearText() {
			 setTimeout(function(){
			      var foo = $(".headline").html().replace('<span class="typewriter" aria-hidden="true"></span>',"");
				 if(foo.charAt(foo.length-1)===">") {
				 				      var newX= foo.substring(0,foo.length-4);
				 } else {
			      var newX= foo.substring(0,foo.length-1);						
						}
				 $(".headline").html(newX+'<span class="typewriter" aria-hidden="true"></span>')
				 if(newX.length>0) {				 
					 clearText();
				 } else {

       				  StartTextAnimation(i + 1);
				 }
		  },60);
		 }
		  setTimeout(function() {
          clearText();
        }, 400);
		 
		
     });
    } else {
	}
  }

  StartTextAnimation(0);
});


$(window).scroll(function() {
   var hT = $('#skillbar').offset().top,
       hH = $('#skillbar').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS >= (hT+hH-wH)){
        var mean = function(){
             document.querySelector(".mean").className = "mean1";
        };
        var ruby = function(){
             document.querySelector(".ruby").className = "ruby1";
        };
        var machine = function(){
             document.querySelector(".machine").className = "machine1";  
        };
        var data = function(){
             document.querySelector(".data").className = "data1";  
        };
        var lang = function(){
             document.querySelector(".lang").className = "lang1";  
        };
        var linux = function(){
             document.querySelector(".linux").className = "linux1";  
        };
        setTimeout(mean,1000);
        setTimeout(ruby,2000);
        setTimeout(machine,1000);
        setTimeout(data,3000);
        setTimeout(lang,2000);
        setTimeout(linux,3000);  
   }
});