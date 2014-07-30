$(function tabs() {
	//Default State
	$(".tab-content").hide(); //hide content of all divs with class=tabContent
	$(".tab-content#tab1").show(); //show content of div

	// On Click
	$("li").click(function() {
    	
    	$("li").removeClass("active"); //remove "selected" class from all li items
    	$(this).addClass("active");  //add "selected" class to selected li item
    	$(".tab-content").hide(); //hide content of all divs with class=tab-content
    	var selectedTab = $("a",this).attr("href"); // return href
    	$(selectedTab).fadeIn(); // show content 
	});
});
