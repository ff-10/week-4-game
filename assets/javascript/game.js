$(document).ready(function () {
    let wins = 0;
    let losses = 0;
    let targetScore = 0;
    let currentScore = 0;
    let buttons = $('.gem');
    
    function setRandomGems(){
        $.each(buttons, (idx,element) =>{
            element.value = Math.ceil(Math.random() * 12);
        });
    }
    setRandomGems();
    
    function setRandomTarget(){
        targetScore = Math.ceil(Math.random() * 120);
        if(targetScore < 19){
            setRandomTarget();
        }else{
            $('#target').html(targetScore);
            return;
        }
    }
    setRandomTarget();

    function playerLose(){
        setRandomTarget();
        setRandomGems();
        currentScore = 0;
        losses++;
        $('#losses').html(losses);
        $('.lossesDiv').animate({borderWidth: "5px"} , 300).animate({borderWidth: "0px"} , 400);
        $('.roundStatus').show(1000).html('<span style="color: #ff0000;">You LOSE!<span>').hide(2000);
        $('#collected').html('0');
    }
    function playerWin(){
        setRandomTarget();
        setRandomGems();
        currentScore = 0;
        wins++;
        $('#wins').html(wins);
        $('.winsDiv').animate({borderWidth: "5px"} , 300).animate({borderWidth: "0px"} , 450);
        $('.roundStatus').show(1000).html('<span style="color: #04AA6D;">You WIN!<span>').hide(2000);
        $('#collected').html('0');
    }

    function check(){
        if(currentScore === targetScore){
            playerWin();
        }else{
            if(currentScore > targetScore){
                playerLose();
            }
        }

    }

    buttons.on('click', function () {
        currentScore += +this.value;
        $('#collected').html(currentScore);
        check();
    });

    $('#howToPlayBtn').on('click', () => {
        $('.howToPlayContent').show(500);
    });
});