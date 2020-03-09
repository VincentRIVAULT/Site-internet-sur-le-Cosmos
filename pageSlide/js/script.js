$(document).ready(function () {
    
    /*===Accordéon===*/
    $("#contenu li").click(function(){//quand je clique sur le li, je lance une fonction
        var texte=$(this).children('p');//je crée une variable : récupérer le paragraphe enfant de li
        var signe=$(this).children('span');
        $('#contenu li p').slideUp();//je ferme les paragraphes ouverts
        $('#contenu li span').text('+');
        if (texte.is(':hidden')){//si le texte est caché
            texte.slideDown(500);//alors le faire descendre en 500millisec
            signe.text('-');// recupere le span enfant de ce li et transforme le + en -
        }
    });

    /*====CLIC SUR PLANETE====*/
    
    $(".quatuor").click(function(){
        //opacité
        var transp = $("#container").css("opacity");
        if(transp=="1"){
            $("#container").css('opacity','0.4');
        }
        else{
            $("#container").css('opacity','1');
        }

        var source = $(this).children("img").attr("src");
        var titre = $(this).children("img").attr("alt");
        $("#popup img").attr("src", source);
        $("#popup h2").text(titre);

        //ouverture-fermeture popup
        $("#popup").fadeIn();
    });	

            
    /*====CLIC SUR CROIX====*/
    $('#popup span').click(function(){								
        $("#container").css('opacity','1');
        $("#popup").slideUp();
    });


    /*=====Animation planètes intérieures=====*/
    // $("#mercure").css("animation", "rotation 1s linear infinite");
    
    $("#mercure").click(function() {
        $("#merc").addClass("merc");
    });

    $("#venus").click(function() {
        $("#ven").addClass("ven");
    });

    $("#terre").click(function() {
        $("#ter").addClass("ter");
    });

    $("#mars").click(function() {
        $("#mar").addClass("mar");
    });

    $("#animation").click(function() {
        $("#merc").addClass("merc");
        $("#ven").addClass("ven");
        $("#ter").addClass("ter");
        $("#mar").addClass("mar");
    });

    $("#reset").click(function() {
        $("#merc").removeClass("merc");
        $("#ven").removeClass("ven");
        $("#ter").removeClass("ter");
        $("#mar").removeClass("mar");
    });


});