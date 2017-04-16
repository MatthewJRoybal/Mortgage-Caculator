// App
$(document).ready(function() {
	var loanCost = $('.loan-cost').closest('form-group').attr("id");
	console.log(loanCost);
	// Allow user to select a term of months or years
	$('.input-group-addon-btn').on('click', function() {
		var activeBtn = $(this).hasClass('active');
		if (!activeBtn) {
			$(this).toggleClass('active').siblings().toggleClass('active');
		}
	});
	// Submit the form for a return
	$('.btn-loan-go').on('click', function(event) {
		event.preventDefault();
		// Get the values from the form
		var cost = $('.loan-cost').val();
		var down = $('.loan-down').val();
		var rate = $('.loan-rate').val();
		var term = $('.loan-term').val();
		var taxe = $('.loan-taxe').val();
		var insu = $('.loan-insu').val();
		var dues = $('.loan-dues').val();
		// If the values are empty, reject the form submission
//		validateForm(cost, down, rate, term, taxe, insu, dues);
		// Get a result
		loan(cost, down, rate, term, taxe, insu, dues);
	});
	// Reset the form to a blank slate
	$('.btn-loan-reset').on('click', function() {
		$(this).reset();
	});
});