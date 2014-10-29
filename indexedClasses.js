// loop through all <tr class="q"> tags and add indexed class to each, ex.: <tr class="q_1">
$(function () { 
	for(var index = 0; index < $('tr').length; index++){
		$('tr.q').eq(index).addClass('q_' + index);
	}
});
