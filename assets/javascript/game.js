$(document).ready(function () {

  var hansolo = "<img src='assets/images/Hansolo.gif' />";
  var threepo = "<img src='assets/images/3PO.gif' />";
  var stormtrooper = "<img src='assets/images/Stormtrooper.gif' />";
  var darth = "<img src='assets/images/Darth.gif' />";


  $("#choicep1").html(hansolo);
  $("#choicep2").html(threepo);
  $("#choicep3").html(stormtrooper);
  $("#choicep4").html(darth);


  $("#choicep1").on("click", function () {
    $("#chooseHero").hide();
    $("#yourHero").html(this);

    $("#enemyp1").html(threepo);
    $("#enemyp2").html(stormtrooper);
    $("#enemyp3").html(darth);

    $("#enemyp1").on("click", function () {
      $("#defender").html(this);
    });
    $("#enemyp2").on("click", function () {
      $("#defender").html(this);
    });
    $("#enemyp3").on("click", function () {
      $("#defender").html(this);
    });

  

  $("#attack").on("click", function () {

    
    
  });


  

  });




});


