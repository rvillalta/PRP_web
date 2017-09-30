
(function (){ 
    // AQUI VA EL LOGOTIPO (IMAGEN) DE LA PAGINA
    var im = document.getElementById("logo_img");
    im.src="PRP.jpg";
    
    // AQUI VA EL NOMBRE DE LA PAGINA
    document.getElementById("logo_foot").innerHTML="www.movprp.org";
    
    // AQUI VA EL NOMBRE DE LA PAGINA
    document.getElementById("web_name_1").innerHTML="Movimiento Social";
    document.getElementById("web_name_2").innerHTML="por la ";
    document.getElementById("web_name_3").innerHTML="Revolución Permanente";
    
    // AQUI VA EL LEMA
    document.getElementById("lema").innerHTML="Solamente Unidos, Haremos que la Revolución Retorne a Ocumare";
    
    // AQUI VA LA NOTICIA PRINCIPAL
    document.getElementById("main_new").innerHTML="";
    
    //AQUI VA LA NOTICIA SECUNDARIA
    /*
         var countDownDate = new Date("May 21, 2017 09:00:00").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

          // Get todays date and time
          var now = new Date().getTime();

          // Find the distance between now an the count down date
          var distance = countDownDate - now;

          // Time calculations for days, hours, minutes and seconds
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Display the result in the element with id="demo"
          document.getElementById("main_sub_new").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";

          // If the count down is finished, write some text
          if (distance < 0) {
            clearInterval(x);
            document.getElementById("main_sub_new").innerHTML = "EXPIRED";
          }
        }, 1000);
        */

})();