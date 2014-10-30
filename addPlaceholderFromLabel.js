$('input[type="text"], input[type="email"], textarea').each( function(){ // set previous label text as placeholder for current input value
	if ( $(this).prev('label') ){
		var name = $(this).prev('label').text();
		if(!$(this).val()) { // kill the placeholder once input value is defined
			$(this).prev('label').hide();
			$(this).attr('placeholder', name);
		}
	}
});
