$("#slider-range").slider({
	  range: true,
	  min: 0,
	  max: 500,
	  values: [ 75, 300 ],
	  slide: function( event, ui ) {
    $('#left').val("" + ui.values[0]);
  	$('#right').val("" + ui.values[1]);
  }
});
	$("#left").val($('#slider-range').slider("values", 0));
	$("#right").val($('#slider-range').slider("values", 1));