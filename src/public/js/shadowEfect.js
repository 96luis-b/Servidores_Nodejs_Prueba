$(document).ready(function(){
    let paret = $("#header").children();
    $("#header").css("visibility", "visible");
   	//firstChildren.addClass("box_line_1");
   	//firstChildren.children().addClass("line_1");
 
    for (var i = 1; i < $("#header").children().length - 1; i++) {
    	paret[i-1].classList.add(`box_line_${i}`);
    	paret[i-1].childNodes[1].classList.add(`line_${i}`);
    	//paret[i].children() = `line_${i}`;
    }
    setTimeout(function(){$('#logo_B').addClass('latido_logo');}, 500);
    setTimeout(function(){$('#logo_S').addClass('latido_logo');}, 550);
    setTimeout(function(){$('#logo_T').addClass('latido_logo');}, 600);
    setTimeout(function(){$('#logo_u').addClass('latido_logo');}, 650);
    setTimeout(function(){$('#logo_b').addClass('latido_logo');}, 700);
    setTimeout(function(){$('#logo_e').addClass('latido_logo');}, 750);
    setTimeout(function(){$('#triangulo').addClass('triangulo');}, 750);
});

/*
(()=>{

})();
*/