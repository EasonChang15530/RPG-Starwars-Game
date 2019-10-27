$(document).ready(function () {

  // each Hero's image
  var hansolo = "<img src='assets/images/Hansolo.gif' />";
  var threepo = "<img src='assets/images/3PO.gif' />";
  var stormtrooper = "<img src='assets/images/Stormtrooper.gif' />";
  var darth = "<img src='assets/images/Darth.gif' />";

  // each Hero's HP
  var hansoloHP = 120;
  var threepoHP = 100;
  var stormtrooperHP = 150;
  var darthHP = 180;

  // each Hero's ATK
  var hansoloATK = 8;
  var threepoATK = 5;
  var stormtrooperATK = 20;
  var darthATK = 25;
  var yourHeroATK = 0;

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
      yourHeroATK += hansoloATK;
      
      hansoloHP -= threepoATK;
      threepoHP -= yourHeroATK;

      $("#YHcurrentHP").html("Your Hero's current HP " + hansoloHP);
      $("#DcurrentHP").html("Defender's current HP " + threepoHP);
      $("#note").html("You attacked threepo for " + yourHeroATK + "<br>" + "threepo attacked you for " + threepoATK);

      if (threepoHP < 0) {
        $("#enemyp1").hide();
      }

    });




  });




});


