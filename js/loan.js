function annualToDollar(num) {
	// Convert annual amount to monthly dollars
	var numMonthly = (num / 12);
	var numRounded = ((Math.round(numMonthly * 100)) / 100).toFixed(2);
	var numToString = toString(numRounded);
	return ("$" + numRounded);
}

function numberToDollar(num) {
	// Convert fixed amount to dollars
	var numRounded = ((Math.round(num * 100)) / 100).toFixed(2);
	var numToString = toString(numRounded);
	return ("$" + numRounded);
}

function loan(cost, down, rate, term, taxe, insu) {
/* Formula: M = P * ( J / (1 - (1 + J)-N))
 * M = payment amount
 * P = principal
 * J = effective interest rate divided by # yearly payments
 * N = total number of payments
 */
	
  var principal = cost - down;
  var J = ((rate / 100) / 12);
	var N = - (term);
  var K = (1 + J);
  var Q = Math.pow(K,N);
	var R = (1 - Q);
	var S = (J / R);
  var M = (principal * S);
	var piti = ((taxe / 12) + (insu / 12) + M);
	
  var payment = numberToDollar(M);
	
	var taxeMonthly = annualToDollar(taxe);
	var insuMonthly = annualToDollar(insu);
	var pitiMonthly = numberToDollar(piti);
	var downDollar = numberToDollar(down);
	
	var ratePercentage = (rate + "%");
	var termMonths = (term + " Months");
  
  var HTML = ('<table class="table table-striped">' +
                '<tr>' +
                  '<td>Principal, Interest, Taxes, & Insurance</td>' +
                  '<td>' + pitiMonthly + '</td>' +
                '</tr>' +
								'<tr>' +
                  '<td>Principal & Interest only</td>' +
                  '<td>' + payment + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Down payment</td>' +
                  '<td>' + downDollar + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Rate</td>' +
                  '<td>' + ratePercentage + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Term</td>' +
                  '<td>' + termMonths + '</td>' +
                '</tr>' +
								'<tr>' +
                  '<td>Taxes</td>' +
                  '<td>' + taxeMonthly + '</td>' +
                '</tr>' +
								'<tr>' +
                  '<td>Insurance</td>' +
                  '<td>' + insuMonthly + '</td>' +
                '</tr>' +
              '</table>');
   return ($('#loan-results').html(HTML));
};