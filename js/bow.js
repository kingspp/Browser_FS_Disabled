$(document).ready(function() { /* code here */ });
$(function() {		
 var changeHandler = function(){                                                 
      var fs = window.fullScreenApi.isFullScreen();
      console.log("f" + (fs ? 'yes' : 'no' ));                               
      if (fs) {                                                              
        //alert("In fullscreen, I should do something here");  
		
		//Disable right click
		$(this).bind("contextmenu", function(e) { e.preventDefault(); });	
		
		//Disable F12	
		document.onkeydown = function (event) {
        event = (event || window.event);
			if (event.keyCode == 123) {
				//alert('No F-keys');
				return false;
			}
		}
		
		document.onmousedown = function (event) {
        event = (event || window.event);
			if (event.keyCode == 123) {
				//alert('No F-keys');
				return false;
			}
		}
		document.onkeydown = function (event) {
			event = (event || window.event);
			if (event.keyCode == 123) {
					//alert('No F-keys');
					return false;
			}
		}
		
		//Disable Shift key
		$(this).keydown(function(event) {
			if(event.shiftKey)
			{
				//alert('You have pressed Shift Key.');
				event.preventDefault();
			}
		});
		//window.location. = "/online-test.php"
		//window.history.pushState("object or string", "Title", "/online-test.php");
		window.History.pushState({urlPath:'/online-test.php'},"",'/online-test.php')
      }                                                                      
      else {                                                                 
        alert("NOT In fullscreen, Cheating!!"); 
		//window.location="http://www.google.com"
      }                                                                      
   }                                                                         
   document.addEventListener("fullscreenchange", changeHandler, false);      
   document.addEventListener("webkitfullscreenchange", changeHandler, false);
   document.addEventListener("mozfullscreenchange", changeHandler, false);
});

function fullscreen(){	

	$('#digital_download').html('Downloading...'); // Show "Downloading..."
	// Do an ajax request
	$.ajax({
	  url: "/online-registration.php"
	}).done(function(data) { // data what is sent back by the php page
	  $('#digital_download').html(data); // display data
	});
	
	var docElm = document.documentElement;
	if (docElm.requestFullscreen) {
		docElm.requestFullscreen();		
	}
	else if (docElm.mozRequestFullScreen) {
		docElm.mozRequestFullScreen();	
	}
	else if (docElm.webkitRequestFullScreen) {
		docElm.webkitRequestFullScreen();		
	}	
}
