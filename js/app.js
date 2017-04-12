// App

$(document).ready(function() {
	var formRate = rateSelect();
	var formTerm = termSelect();
	$('.loan-rate').append(formRate);
	$('.loan-term').append(formTerm);
	$('.btn-loan-go').on('click', function(event) {
		event.preventDefault();
		var cost = $('.loan-cost').val();
		var down = $('.loan-down').val();
		var rate = $('.loan-rate').val();
		var term = $('.loan-term').val();
		var taxe = $('.loan-taxe').val();
		var insu = $('.loan-insu').val();
		loan(cost, down, rate, term, taxe, insu);
	});
	$('.btn-loan-reset').on('click', function() {
		$(this).reset();
	});
});