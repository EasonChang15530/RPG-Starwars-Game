$(document).ready(function () {

  var hansoloInfo = {
    HP: 120,
    ATK: 8,
    img: "<img src='assets/images/Hansolo.gif' />",
    name: "Hansolo"
  }

  var threepoInfo = {
    HP: 100,
    ATK: 5,
    img: "<img src='assets/images/3PO.gif' />",
    name: "Threepo"
  }

  var stormtrooperInfo = {
    HP: 150,
    ATK: 20,
    img: "<img src='assets/images/Stormtrooper.gif' />",
    name: "Stormtrooper"
  }

  var darthInfo = {
    HP: 180,
    ATK: 25,
    img: "<img src='assets/images/Darth.gif' />",
    name: "Darth"
  }


  $("#choiceposition1").html(hansoloInfo.img);
  $("#choiceposition2").html(threepoInfo.img);
  $("#choiceposition3").html(stormtrooperInfo.img);
  $("#choiceposition4").html(darthInfo.img);

  var chooseHreo = false;

  $(".choiceposition").on("click", function () {

    if (chooseHreo === false) {
      var yourhero = $("#yourHero").html(this);
      var enemies = $("#enemyp1").html($(".choiceposition").not(this));
      chooseHreo = true;
    }
    else {
      var defender = $("#Defender").html(this)
    };


  });

});




// $(document).ready(function () {

//   // each Hero's image
//   var hansolo = "<img src='assets/images/Hansolo.gif' />";
//   var threepo = "<img src='assets/images/3PO.gif' />";
//   var stormtrooper = "<img src='assets/images/Stormtrooper.gif' />";
//   var darth = "<img src='assets/images/Darth.gif' />";

//   // each Hero's HP
//   var hansoloHP = 120;
//   var threepoHP = 100;
//   var stormtrooperHP = 150;
//   var darthHP = 180;

//   // each Hero's ATK
//   var hansoloATK = 8;
//   var threepoATK = 5;
//   var stormtrooperATK = 20;
//   var darthATK = 25;
//   var yourHeroATK = 0;

//   $("#choicep1").html(hansolo);
//   $("#choicep2").html(threepo);
//   $("#choicep3").html(stormtrooper);
//   $("#choicep4").html(darth);


//   $("#choicep1").on("click", function () {
//     $("#chooseHero").hide();
//     $("#yourHero").html(this);

//     $("#enemyp1").html(threepo);
//     $("#enemyp2").html(stormtrooper);
//     $("#enemyp3").html(darth);

//     $("#enemyp1").on("click", function () {
//       $("#defender").html(this);
//     });
//     $("#enemyp2").on("click", function () {
//       $("#defender").html(this);
//     });
//     $("#enemyp3").on("click", function () {
//       $("#defender").html(this);
//     });


//     $("#attack").on("click", function () {
//       yourHeroATK += hansoloATK;

//       hansoloHP -= threepoATK;
//       threepoHP -= yourHeroATK;

//       $("#YHcurrentHP").html("Your Hero's current HP " + hansoloHP);
//       $("#DcurrentHP").html("Defender's current HP " + threepoHP);
//       $("#note").html("You attacked threepo for " + yourHeroATK + "<br>" + "threepo attacked you for " + threepoATK);

//       if (threepoHP < 0) {
//         $("#enemyp1").hide();
//       }

//     });

//   });

// });


