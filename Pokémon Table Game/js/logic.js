$(document).ready(function() {

    var playerChoice=null;
    var machineChoice=null;

    //PLAYER CHOICES GRASS
    $("#playerChoicesGrass").click(function() {
        playerChoice= $(this).data('type');
 
        $(this).css('opacity', '0');
        $(this).css('cursor', 'default');
        $("#playerChoice").css("background-image", "url('img/grassType.png')");

        //RESTORES FIRE AND WATER CHOICES
        $("#playerChoicesFire").css('opacity', '1').css('cursor', 'pointer');
        $("#playerChoicesWater").css('opacity', '1').css('cursor', 'pointer');
    });

    //PLAYER CHOICES FIRE
    $("#playerChoicesFire").click(function() {
        playerChoice= $(this).data('type');

        $(this).css('opacity', '0');
        $(this).css('cursor', 'default');
        $("#playerChoice").css("background-image", "url('img/fireType.png')");

        //RESTORES GRASS AND WATER CHOICES
        $("#playerChoicesGrass").css('opacity', '1').css('cursor', 'pointer');
        $("#playerChoicesWater").css('opacity', '1').css('cursor', 'pointer');

    });

    //PLAYER CHOICES WATER
    $("#playerChoicesWater").click(function() {
        playerChoice= $(this).data('type');

        $(this).css('opacity', '0').css('cursor', 'default');
        $("#playerChoice").css("background-image", "url('img/waterType.png')");

        //RESTORES GRASS AND FIRE CHOICES
        $("#playerChoicesGrass").css('opacity', '1').css('cursor', 'pointer');
        $("#playerChoicesFire").css('opacity', '1').css('cursor', 'pointer');
    });

    $("#playButton").click(function(){
        if(playerChoice===null){
            alert("¡Selecciona un tipo!")
            return;

        }else{
            $("#pokeBall").toggleClass("rotate");
            machineChoice = machineChoose();

            setTimeout(function() {
                 if (playerChoice === "grass" && machineChoice === "water") {
                    alert("VICTORIA");
                
                } else if (playerChoice === "fire" && machineChoice === "grass") {
                    alert("VICTORIA");
    
                } else if (playerChoice === "water" && machineChoice === "fire") {
                    alert("VICTORIA");
    
                } else if (playerChoice === machineChoice) {
                    alert("EMPATE");
    
                } else {
                    alert("DERROTA")
                }
            }, 3000);
        }

        restart();
           
    });
    
    //MACHINE CHOOSE
        function machineChoose() {

            let machineChoices = ["grass", "fire", "water"];
            let randomNum = Math.floor(Math.random() * 3);
            var machineChoice = machineChoices[randomNum];
            
            setTimeout(function() {
                if (machineChoice === "grass") {
                    $("#machineChoice").css("background-image", "url('img/grassType.png')");
                } else if (machineChoice === "fire") {
                    $("#machineChoice").css("background-image", "url('img/fireType.png')");
                } else if (machineChoice === "water") {
                    $("#machineChoice").css("background-image", "url('img/WaterType.png')");
                }
            }, 2800);
            
            return machineChoice;
        }

    //RESTART
    function restart(){
        setTimeout(function() {
            playerChoice = null;
            $("#playerChoice").css("background-image", "none");
            $("#machineChoice").css("background-image", "none");
            $("#playerChoicesGrass").css('opacity', '1').css('cursor', 'pointer');
            $("#playerChoicesFire").css('opacity', '1').css('cursor', 'pointer');
            $("#playerChoicesWater").css('opacity', '1').css('cursor', 'pointer');
        }, 5000);
    }
    
});