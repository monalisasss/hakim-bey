$(window).scroll(function(){
    $(".titulo").css("opacity", 1 - $(window).scrollTop() / 500);
});

var btnInfo = document.querySelector('.btnInfo');
var modal = document.querySelector('.modal');
var lightbox = document.querySelector('.lightbox');
var btnClose = document.querySelector('.close');

btnInfo.onclick = function(){
    $('.lightbox').addClass("visible");
    $("html").css("overflow", "hidden");
    // return false;
};
lightbox.onclick = function(e){
    if(e.target==lightbox){
        $(this).removeClass("visible");
        $("html").attr("overflow", "auto");
    }
};

var btnEbook = document.querySelector('#btnEbook');
var formEbook = document.querySelector('#formEbook');
var email = document.querySelector('#email');

btnEbook.onclick = function(e){
    if(email.value.indexOf("@")!=-1){

        formEbook.attr('action',
                       'mailto:monalisasss@gmail.com?subject=' +
                       $('#email').val() + '&body=' + 'Manual da Miséria Sustentável' + $('#email').val());
        formEbook.submit();

        $('.ebook .cadastro').addClass("hide");
        $('.ebook .link').removeClass("hide");
    }else{
        alert("Por favor preencha um e-mail válido.");
    }
}

