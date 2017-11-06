var preenchidas;
var divResultado;
var titResultado = '';
var imgResultado = '';

$( ".quiz ul li" ).click(function() {
    $(this).removeClass("unselected");
  	$(this).addClass("selected");
    $(this).siblings().not(this).removeClass("selected");
  	$(this).siblings().not(this).addClass("unselected");
  
  	if ($(".selected").length == $(".pergunta").length){
  		console.log("Escolheu todas as opções");
  		resultado();
  	}
});

$(".btnResultado").click(function() {
	resultado();
});

// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 500);
// });

function resultado(){
	
	var n1 = $(".a.selected").length;
  var n2 = $(".b.selected").length;
 	var n3 = $(".c.selected").length;
 	var n4 = $(".d.selected").length;


  preenchidas = n1 + n2 + n3 + n4;

  if(preenchidas==5){
    	if ((n1 >= n2)&&(n1 >= n3)&&(n1 >= n4)) {
      	titResultado = "Niilismo";
        imgResultado = 'https://monalisasss.github.io/hakim-bey/assets/imgs/quiz_r1.jpg';
        divResultado = $(".resultado .a");
      }
      if ((n2 > n1)&&(n2 >= n3)&&(n2 >= n4)) {
        titResultado = "Capitalismo";
        imgResultado = 'https://monalisasss.github.io/hakim-bey/assets/imgs/quiz_r2.jpg';
        divResultado = $(".resultado .b");
      }
      if ((n3 > n1)&&(n3 > n2)&&(n3 >= n4)) {
        titResultado = "Marxismo";
        imgResultado = 'https://monalisasss.github.io/hakim-bey/assets/imgs/quiz_r3.jpg';
        divResultado = $(".resultado .c");
      }
      if ((n4 > n1)&&(n4 > n2)&&(n4 > n3)) {
        titResultado = "Anarquismo";
        imgResultado = 'https://monalisasss.github.io/hakim-bey/assets/imgs/quiz_r4.jpg';
  			divResultado = $(".resultado .d");
    	}

      divResultado.removeClass("hide");
      $(".btnResultado").addClass("hide");

        $('html, body').animate({
          scrollTop: $("#resultado").offset().top-30
        }, 500);

  } else{
    alert("Por favor preencha todas as respostas.")
  }

}

$(".btnRefazerQuiz").click(function() {
	btnRefazerQuiz();
});

function btnRefazerQuiz(){
  $('html, body').animate({
        scrollTop: $("#quiz").offset().top-30
  }, 500);

	preenchidas = 0;
	$(".quiz ul li").siblings().removeClass("selected");
	$(".quiz ul li").siblings().removeClass("unselected");
	$(".btnResultado").removeClass("hide");
	divResultado.addClass("hide");
}




$(document).ready(function()
{
    $.getScript("https://connect.facebook.net/en_US/all.js#xfbml=1", function () {
        FB.init({ appId: '1877133342301417', status: true, cookie: true, xfbml: true });
    });
});

$(".facebook").click(function() {


    FB.ui({
    method: 'share_open_graph',
    action_type: 'matchadviceuk:share',
    action_properties: JSON.stringify({
      'quiz': {
         'og:type': 'matchadviceuk:quiz',
         'og:url': 'https://monalisasss.github.io/hakim-bey/quiz.html',
         'og:title': 'Eu tirei "+titResultado+"! Qual a ideologia dos seus memes?',
         'og:description': 'O que será que seu gosto popular diz sobre seu pensamento ideológico?',
         'og:image': imgResultado,
    }
  })
    // console.log("COMPARTILHAR FB");
    // FB.ui({
    //     display: 'popup',
    //     method: 'share',
    //     title: 'Eu tirei ' + titResultado + '! E você?',
    //     description: 'Qual a ideologia dos seus memes? O que será que seu gosto popular diz sobre seu pensamento ideológico?',
    // link: 'https://monalisasss.github.io/hakim-bey/quiz.html',
    // picture: imgResultado,
    // href: 'https://monalisasss.github.io/hakim-bey/',

  },

function(response) {
    if (response && !response.error_message) {
      alert('Posting completed.');
    } else {
      alert('Error while posting.');
    }
    });
});

