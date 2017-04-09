function loan() {
  // Variables
  var cost = $('.loan-cost').val();
  var down = $('.loan-down').val();
  var rate = $('.loan-rate').val();
  var term = $('.loan-term').val();

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
  var amount = P * ( J / ( 1 - Q ));
  var payment = ((Math.round(payment * 100)) / 100);
  
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
   return ($('#loan-results').html(HTML));
};