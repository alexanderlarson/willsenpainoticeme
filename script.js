$(document).ready(function(){
  $('h1').css({ 'width':'100%', 'text-align':'center' });
  var h1 = $('h1').height();
  var h = h1/2;
  var w1 = $(window).height();
  var w = w1/2;
  var m = w - h;
  $('h1').css("margin-top",m + "px");

});