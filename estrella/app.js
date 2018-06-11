/*este script hace que cuando clickes la estrella se mueva hacia arriva,
 cuando clickas otra vez se mueve hacia la derecha,
  cuando clickas otra vez se mueve hacia abajo, 
  cuando clickas otra vez se mueve hacia la izquierda,
   y para terminar clickas denuevo vuelve hacia el centro.*/
$('.star').click(function(){
    //este "if" busca la classe "centrar" la quita y añade la classe "arriva"
    if ($('.star').hasClass('centrar')){
        $('.star').removeClass('centrar')
        $('.star').addClass('arriva')
    }
    //este "else if" busca la classe "arriva" la quita y añade la classe "derecha"
    else if ($('.star').hasClass('arriva')){
        $('.star').removeClass('arriva')
        $('.star').addClass('derecha')
    }
    //este "else if" busca la classe "derecha" la quita y añade la classe "abajo"
    else if ($('.star').hasClass('derecha')){
        $('.star').removeClass('derecha')
        $('.star').addClass('abajo')
    }
    //este "else if" busca la classe "abajo" la quita y añade la classe "izquierda"
    else if ($('.star').hasClass('abajo')){
        $('.star').removeClass('abajo')
        $('.star').addClass('izquierda')
    }
    //este "else if" busca la classe "izquierda" la quita y añade la classe "centrar"
    else if ($('.star').hasClass('izquierda')){
        $('.star').removeClass('izquierda')
        $('.star').addClass('centrar')
    };
    

});