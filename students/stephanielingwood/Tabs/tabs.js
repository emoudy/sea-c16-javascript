$(document).ready(function() {
	$('#show-tab').addClass('active-tab');
	$('#show-content').addClass('active-content');
	$('.tabs').on('click', function(e) {
		var selected = $(e.target).attr('class');
		$('.tab-text').removeClass('active-content');
		$('.tabs li').removeClass('active-tab');
		$('.tabs .' + selected).addClass('active-tab');
		$('.tab-text.' + selected).addClass('active-content');	
	});	
});