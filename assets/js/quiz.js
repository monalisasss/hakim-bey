var preenchidas;
var divResultado;

$( ".quiz ul li" ).click(function() {
    $(this).removeClass("unselected");
  	$(this).addClass("selected");
    $(this).siblings().not(this).removeClass("selected");
  	$(this).siblings().not(this).addClass("unselected");
  
  	if ($(".selected").length == $(".pergunta").length){
  		console.log("Escolheu todas as opções");
  		resultado();
			window.location.href='#resultado';
  	}
});

$(".btnResultado").click(function() {
	resultado();
});


function resultado(){
	
	var n1 = $(".a.selected").length;
  var n2 = $(".b.selected").length;
 	var n3 = $(".c.selected").length;
 	var n4 = $(".d.selected").length;


  preenchidas = n1 + n2 + n3 + n4;

  if(preenchidas==5){
    	if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
      	msg = "Niilismo";
  		  divResultado = $(".resultado .a");
    	}
    	if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
      	msg = "Capitalismo";
      	divResultado = $(".resultado .b");
    	}
    	if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
      	msg = "Marxismo";
  			divResultado = $(".resultado .c");
    	}
      if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
      	msg = "Anarquismo";
  			divResultado = $(".resultado .d");
    	}

    	console.log(msg);
      divResultado.removeClass("hide");
      $(".btnResultado").addClass("hide");
  } else{
    alert("Por favor preencha todas as respostas.")
  }

}

$(".btnRefazerQuiz").click(function() {
	btnRefazerQuiz();
});

function btnRefazerQuiz(){
	preenchidas = 0;
	$(".quiz ul li").siblings().removeClass("selected");
	$(".quiz ul li").siblings().removeClass("unselected");
	$(".btnResultado").removeClass("hide");
	divResultado.addClass("hide");
}