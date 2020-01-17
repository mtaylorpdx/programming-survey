$(document).ready(function(){
  $("form#survey").submit(function(event) {


    var q1 = parseInt($("input:radio[name=question1]:checked").val());
    var q2 = parseInt($("input:radio[name=question2]:checked").val());
    var q3 = parseInt($("input:radio[name=question3]:checked").val());
    var q4 = parseInt($("input:radio[name=question4]:checked").val());
    var q5 = parseInt($("input:radio[name=question5]:checked").val());
    var q6 = parseInt($("input:radio[name=question6]:checked").val());

    var response = (q1+q2+q3+q4+q5+q6)

    if (response) {
      if (response <= 9) {
        alert ("tier 1");
      } else if (10 <= response && response <= 13) {
        alert ("tier2");
      } else {
        alert ("tier3");
      }
    } else {
      alert ("One or more questions were missed! Please try again.");
    }


    alert(response)

    event.preventDefault();
  });
});