$('document').ready(function(){ 
    $(window).resize(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b11,#b12,#b13,#b14,#b15,#b16,#b17').stop();
    });
    
    $(window).on('load', function(){
        $('.loading').fadeOut('fast');
        if (true || new Date() > new Date(2018,10,15)){
            start(); 
        } else {
            window.location.href = './countdown.html';                
        }
    });
    
    $('#turn_on').click(function(){
        turnOnMusicLights();
    });
    
    function turnOnMusicLights() {
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color','#FFF');
    }
    
    function loopBallon(ballonId) {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $(ballonId).animate({left:randleft,bottom:randtop},10000,function(){
            loopBallon(ballonId);
        });
    }
    
    function playMusic() {
        var audio = $('.song')[0];
        audio.play();
    }
    
    function turnOnLights() {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
    }
    
    function flyBallons() {
        $('.balloon-border').animate({top:-100}, 8000, showMessageTitle);
    }
    
    function start() {
        $('#countdown-div').hide();
        $('.container').fadeIn('fast');
        turnOnLights();
        flyBallons();
    }

    function showMessageTitle() {
        $('.messageTitle').fadeIn('fast', moveBallons);
    }

    function moveBallons() {
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        $('#b11,#b14,#b15,#b17').addClass('balloons-rotate-behaviour-two');
        $('#b12,#b13,#b16').addClass('balloons-rotate-behaviour-one');
        loopBallon("#b1");
        loopBallon("#b2");
        loopBallon("#b3");
        loopBallon("#b4");
        loopBallon("#b5");
        loopBallon("#b6");
        loopBallon("#b7");
        loopBallon("#b11");
        loopBallon("#b12");
        loopBallon("#b13");
        loopBallon("#b14");
        loopBallon("#b15");
        loopBallon("#b16");
        loopBallon("#b17");
        turnOnMusicLights();
    }

    $('#story').click(function(){
		var i;
		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(800);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});