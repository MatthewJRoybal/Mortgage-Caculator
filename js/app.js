// App

$(document).ready(function() {
  var cost = $('.loan-cost').val();
  var down = $('.loan-down').val();
  var rate = $('.loan-rate').val();
  var term = $('.loan-term').val();
  loan(cost, down, rate, term);
});