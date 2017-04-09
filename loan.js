var Loan = function(container) {

  // Variables
  this.container = container;
  var cost = $('.loan-cost').val();
  var down = $('.loan-down').val();
  var rate = $('.loan-rate').val();
  var term = $('.loan-term').val();

  // Submit mortgage calculator request
  this.calculate = calculate.bind(this);

  // Determine monthly mortgage payments
  this.principalInterest = principalInterest.bind(this);

  // Build results display with HTML
  this.buildResults = buildResults.bind(this);
 
  // Return final loan results
  this.loanResults = loanResults.bind(this);
	
  // When the reset button is clicked, reset all values
  // this.loanReset = loanReset.bind(this);
};

function calculate() {
	  this.container.on('click', '.btn-loan-go', this.loanResults);
};

function principalInterest(cost, down, rate, term) { // Monthly

/* Formula: M = P * ( J / (1 - (1 + J)-N))
 * M = payment amount
 * P = principal
 * J = effective interest rate divided by # yearly payments
 * N = total number of payments
 */
		var P = cost - down;
		var J = ((rate / 100) / 12);
		var K = (1 + J);
		var N = - (term);
		var Q = Math.pow(K,N);
		var payment = P * ( J / ( 1 - Q ));
		// return (Math.round(mortgage * 100)) / 100;
		return payment;
	};
	
	// var mpi = (Math.round(m_pay() * 100)) / 100;
	
	function buildResults(payment, down, rate, term) {
  var HTML = ('<table class="table table-striped">' +
                '<tr>' +
                  '<td>Principal & Interest</td>' +
                  '<td>' + payment + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Down payment</td>' +
                  '<td>' + down + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Rate</td>' +
                  '<td>' + rate + '</td>' +
                '</tr>' +
                '<tr>' +
                  '<td>Term</td>' +
                  '<td>' + term + '</td>' +
                '</tr>' +
              '</table>');
   return HTML;
};

function loanResults() {
  var payment = this.principalInterest(cost, down, rate, term);
  var HTML = this.buildResults(payment);
  return $('.loan-results').append(HTML);
};
