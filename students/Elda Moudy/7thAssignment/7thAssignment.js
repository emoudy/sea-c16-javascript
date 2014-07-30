$.getJSON('http://rs.hankyates.com:3000/content', function(data) {

	var output = '<ul class="accordion">';
	$.each(data, function(key, val) {
			output += '<li>';
			output += '<button class="accordion-control">' + val.name + '</button>';
			//output += '<h2>'+ val.name +'</h2>';
			output += '<div class="accordion-panel">'+ val.content +'</div>';
			output += '</li>';
		});
	output += '</ul>';

	$('#update').html(output);

	$('.accordion').on('click', '.accordion-control', function(e){
		e.preventDefault();
		$(this).next('.accordion-panel').not(':animated').slideToggle();
	});

});
