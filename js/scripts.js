$(document).ready(function(){
  $("#survey").submit(function(event) {

    var q1 = parseInt($("input:radio[name=question1]:checked").val());
    var q2 = parseInt($("input:radio[name=question2]:checked").val());
    var q3 = parseInt($("input:radio[name=question3]:checked").val());
    var q4 = parseInt($("input:radio[name=question4]:checked").val());
    var q5 = parseInt($("input:radio[name=question5]:checked").val());
    var q6 = parseInt($("input:radio[name=question6]:checked").val());

    event.preventDefault();
  });
});