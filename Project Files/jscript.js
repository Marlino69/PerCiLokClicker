

$(document).ready(function(){
    var clickValue = 1;
    var money = 0;
    var upValue = [2, 4, 7];

    var upCost1 = [10, 80, 150];
    var upCost2 = [60, 170, 280];
    var upCost3 = [150, 300, 450];
    var upCount1 = 0;
    var upCount2 = 0;
    var upCount3 = 0;

    var mutiplier = 1;
    var multiCost = 1000;

    var autoClick = 0;
    var autoCost = 10000;


    
    $("#money").text(money);
    $("#upCost1").text(upCost1[upCount1]);
    $("#upCost2").text(upCost2[upCount2]);
    $("#upCost3").text(upCost3[upCount3]);

    $("#multiCount").text((mutiplier-1));
    $("#multiCost").text(multiCost);

    $("#autoCount").text(autoClick);
    $("#autoCost").text(autoCost);




    $("#gameNav").click(function(){
        $("#mainGame").show();
        $("#aboutUs").hide();
    });

    $("#aboutNav").click(function(){
        $("#mainGame").hide();
        $("#aboutUs").show();
    });

    $("#before")
    .mousedown(function(){
        $("#before").hide();
        $("#after").show();
        money += (clickValue * mutiplier);
        $("#money").text(money);
    });
    $("#after")
    .mouseup(function(){
        $("#after").hide();
        $("#before").show();
    });
    
    $("#upgrade1").click(function(){
        if (upCount1 < 3) {
            if (money >= upCost1[upCount1]) {
                clickValue += upValue[upCount1];
                money -= upCost1[upCount1];
                upCount1 ++;
                $("#upCost1").text(upCost1[upCount1]);
                $("#money").text(money);
                if (upCount1 === 3){
                    $("#upCost1").text("MAX");
                    $("#upgrade1").attr("disabled", true);
                }
            }
            else{
                alert("Not Enough Money !!!");
            }
        }
    });

    $("#upgrade2").click(function(){
        if (upCount2 < 3) {
            if (money >= upCost2[upCount2]) {
                clickValue += upValue[upCount2];
                money -= upCost2[upCount2];
                upCount2 ++;
                $("#upCost2").text(upCost2[upCount2]);
                $("#money").text(money);
                if (upCount2 === 3){
                    $("#upCost2").text("MAX");
                    $("#upgrade2").attr("disabled", true);
                }
            }
            else{
                alert("Not Enough Money !!!");
            }
        }
    });

    $("#upgrade3").click(function(){
        if (upCount3 < 3) {
            if (money >= upCost1[upCount3]) {
                clickValue += upValue[upCount3];
                money -= upCost3[upCount3];
                upCount3 ++;
                $("#upCost3").text(upCost3[upCount3]);
                $("#money").text(money);
                if (upCount3 === 3){
                    $("#upCost3").text("MAX");
                    $("#upgrade3").attr("disabled", true);
                }
            }
            else{
                alert("Not Enough Money !!!");
            }
        }
    });

    $("#multiplier").click(function(){
        if (money >= multiCost) {
            money -= multiCost;
            mutiplier++;
            multiCost *= 100;
            $("#multiCount").text((mutiplier-1));
            $("#multiCost").text(multiCost);
            $("#money").text(money);
        }
        else{
            alert("Not Enough Money !!!");
        }
            
    });

    $("#autoClick").click(function(){
        if (money >= autoCost) {
            money -= autoCost;
            autoCost *= 10;
            autoClick++;
            $("#autoCount").text(autoClick);
            $("#autoCost").text(autoCost);
            $("#money").text(money);
            
        }
        else{
            alert("Not Enough Money !!!");
        }
    })
    setInterval(function(){
        for (let i = 0; i < autoClick; i++) {
            money += (clickValue * mutiplier);
        }
        $("#money").text(money);
    },1000);


})

            