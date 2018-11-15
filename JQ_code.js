function ShowHideInstructions(){
    par = document.getElementById("Instructions");
    if(par.style.display == 'inline' ){
        par.style.display = 'none';
    }
    else par.style.display = 'inline';
	
	par2 = document.getElementById("list-item");
    if(par2.style.display == 'inline' ){
        par2.style.display = 'none';
    }
    else par2.style.display = 'inline';
    
	par3 = document.getElementById("item");
    if(par3.style.display == 'inline' ){
        par3.style.display = 'none';
    }
    else par3.style.display = 'inline';
	
	
	};
$(document).keypress(
  function(event) {if (event.which == '13') {
     event.preventDefault();
  }
});
      
$(document).ready(function () {
	$(this).bind('copy paste',function(e) {
         e.preventDefault(); return false; 
      });
 
addEventListener('DOMSubtreeModified', function (e) {
	if(e.target.tagName.match( "HTML") ){	
		if(e.target.classList[1] =='translated-ltr' || e.target.classList[1]=='translated-rtl' || e.target.className=="translated-ltr" || e.target.className=="translated-rtl || e.target.className=='gr__requester_mturk_com translated-ltr' || e.target.className=='gr__requester_mturk_com translated-rtl'") {
			not_eng_worker =1
			alert("page has been translated and translation was canceled");
			console.log(not_eng_worker)
         };
     }
}, true);
  $('#demo-form').parsley().on('form:submit', function(formInstance) {
    try {
      window.parent.postMessage($('#demo-form').serialize(), '*');
	 
	  console.log("message sent");
  } catch(err) {
    console.log(err);
}
    return false;
  });
}); 
