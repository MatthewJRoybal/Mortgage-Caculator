function validateForm(inputValue) {
	var loanCost = $('.loan-cost').attr("class");
	var loanCost = $('.loan-cost');
	var loanDown = $('.loan-down');
	var loanRate = $('.loan-rate');
	var loanTerm = $('.loan-term');
	var loanTaxe = $('.loan-taxe');
	var loanInsu = $('.loan-insu');
	var loanDues - $('.loan-dues');
	
	var cost = $('.loan-cost').val();
	var down = $('.loan-down').val();
	var rate = $('.loan-rate').val();
	var term = $('.loan-term').val();
	var taxe = $('.loan-taxe').val();
	var insu = $('.loan-insu').val();
	var dues - $('.loan-dues').val();
	.forEach(function(item) {
		if (inputValue == "") {
			$('.loan-' + inputName).closest('form-group').addClass('has-error');
			return false;
		} else {
			$('').closest('form-group').addClass('has-success');
		}
	})
}

function dollars(num) {
	// Convert fixed amount to dollars
	var numRounded = ((Math.round(num * 100)) / 100).toFixed(2);
	var numToString = toString(numRounded);
	return ("$" + numRounded);
}

function loan(cost, down, rate, term, taxe, insu) {
	
	validateForm(cost);
	
	// Term changed to months if years selected. 
	// If not, no changes and label is months.
	var termID = $('.input-group-addon-btn.active').attr('id');
	var termLength = (term * 12);
 	var termLabel = " years";
	if (termID === 'input-group-addon-months') {
		termLength = term;
		termLabel = " months";
	}

/* Formula: M = P * ( J / (1 - (1 + J)-N))
 * M = payment amount
 * P = principal
 * J = effective interest rate divided by # yearly payments
 * N = total number of payments
 */

	var taxeMonthly = (taxe / 12);
	var insuMonthly = (insu / 12);
	
  var P = cost - down;
  var J = ((rate / 100) / 12);
	var N = - (termLength);
  var K = (1 + J);
  var Q = Math.pow(K,N);
	var R = (1 - Q);
	var S = (J / R);
  var mortgageMonthly = (P * S);
	var pitiMonthly = (taxeMonthly + insuMonthly + mortgageMonthly);
	
	var pitiLoan = dollars(pitiMonthly);
  var mortLoan = dollars(mortgageMonthly);
  var downLoan = dollars(down);
  var rateLoan = (rate + "%");
	var termLoan = (termLength + termLabel);
	var taxeLoan = dollars(taxeMonthly);
	var insuLoan = dollars(insuMonthly);
  
  var HTML = ('<table class="table table-striped">' +
                '<tr>' +
                  '<td>Principal, Interest, Taxes, & Insurance</td>' +
                  '<td>' + pitiLoan + '</td>' +
                '</tr>' +
								'<tr>' +
                  '<td>Principal & Interest only</td>' +
                  '<td>' + mortLoan + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Down payment</td>' +
                  '<td>' + downLoan + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Rate</td>' +
                  '<td>' + rateLoan + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Term</td>' +
                  '<td>' + termLoan + '</td>' +
                '</tr>' +
								'<tr>' +
                  '<td>Taxes</td>' +
                  '<td>' + taxeLoan + '</td>' +
                '</tr>' +
								'<tr>' +
                  '<td>Insurance</td>' +
                  '<td>' + insuLoan + '</td>' +
                '</tr>' +
              '</table>');
   return ($('#loan-results').html(HTML));
};