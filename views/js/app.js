// @uthor Mohamed Mahrous <m.mahrous.94@gmail.com>

$(document).ready(function() {
	$('.formurl').submit(function( event ) {
		event.preventDefault();
	  	var url = $('.url').val();
		$.ajax({
		  type: "POST",
		  url: '/checkurl',
		  data: "url="+url,
		  success: function(res){
		  	if (res) {
		  		$('#reDirect').foundation('reveal', 'open');
		  	};
		  }
		});
	});

	$('.next').click(function( event ) {
		event.preventDefault();
	  	var reurl = $('.reurl').val();
		$.ajax({
		  type: "POST",
		  url: '/checkreurl',
		  data: "reurl="+reurl,
		  success: function(res){
		  	if (res) {
		  		alert("done");
		  	};
		  }
		});
	});
	
});