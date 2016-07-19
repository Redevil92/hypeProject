$(document).ready(function () {
    $("#header").load("TimHeader.html", function () {
        $("#promozioni").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    ready();
})



function ready(){

    var url = window.location.pathname;
    console.log(url);
    switch(url){
        case '/hypeProject/Promozioni_fisso.html':
            getPromozioneFisso();
            break;
        case '/hypeProject/Promozioni_mobile.html':
            getPromMobile();
            break;
        case '/hypeProject/Promozioni_fisso&mobile.html':
            getPromMobileFisso();
            break;
        case '/hypeProject/Promozione_smartLife.html':
            getSmartProm();
            break;
        default:
            break;
    }





}


function getPromozioneFisso() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/get_promozioni.php", //Relative or absolute path to file.php file
        success: function (response) {
            var promozioni = JSON.parse(response);
            var output = "";
            var prom_fisso = new Array();
            var j = 0;

            for(var i = 0; i < promozioni.length; i++){
                if(promozioni[i].Pagina == ("Fisso"))
                    prom_fisso[j++] = promozioni[i];
            }



            for(var i = 0; i < prom_fisso.length; i++){
                if(i == 0)
                    output +="<h3 style='margin-left: 5%; margin-top: 5%; color: lightblue'>Scopri tutte le promozioni" +
                        " offerte da TIM per il tuo telefono fisso e la rete di casa</h3>";
                else
                    output +="<h3 style='margin-left: 5%; margin-top: 5%; color: lightblue'>Scopri tutte le promozioni" +
                        " offerte da TIM per la tua rete di casa</h3>";

                output += "<div style='margin: 5%'><div class='row'><div class ='col-sm-6'><div class = 'row'><div class='col-sm-1'></div>" +
                    "<div class='col-sm-6'><img style='width: ' src=" + prom_fisso[i].Immagine + "></div><div class='col-sm-4'>" +
                    "<h3 style='color: lightblue'>" + prom_fisso[i].NomePromozione + "</h3><h4>" + prom_fisso[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_fisso[i].Prezzo + "</h4><button type='button' class='btn btn-primary'>SCOPRI</button></div>" +
                    "<div class='col-sm-1'></div> </div></div>"; //end of the first part
                i++;
                output += "<div class ='col-sm-6'><div class = 'row'><div class='col-sm-1'></div>" +
                    "<div class='col-sm-6'><img class='img-responsive' src=" + prom_fisso[i].Immagine + "></div><div class='col-sm-4'>" +
                    "<h3 style='color: lightblue'>" + prom_fisso[i].NomePromozione + "</h3><h4>" + prom_fisso[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_fisso[i].Prezzo + "</h4><button type='button' class='btn btn-primary'>SCOPRI</button></div></div></div></div>"
            }

            $("#heading").load("TimHeading.html", function () {
                $("#heading_col_left").html("<img class='img-responsive' src='images/innovazioni_intro.png'>");
                $("#p_title").html("Offerte Fisso");
                $("#p_subtitle").html("Le migliori offerte per la tua linea fissa.");
                $("#my_breadcrumb").html("<li><a href='TimIndex.html'>Home</a></li><li><a href='#'>Promozioni</a></li><li>Fisso</li>");
            });

            $("#promozione_fisso").html(output);


        },



        error: function (request, error) {
            console.log("Error");
        }

    });
}


function getPromMobile() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/get_promozioni.php", //Relative or absolute path to file.php file
        success: function (response) {
            var promozioni = JSON.parse(response);
            var output = "";

            var prom_mobile = new Array();
            var j = 0;

            for(var i = 0; i < promozioni.length; i++){
                if(promozioni[i].Pagina == ("Mobile"))
                    prom_mobile[j++] = promozioni[i];
            }


            console.log(response);
            var i = 0;

            for (; i < prom_mobile.length - 4; i++) {
                if(i == 0)
                    output += "<h2 style='color: lightblue; margin: 5%'>VOCE E INTERNET</h2>";
                output += "<div  style='margin-top: 20px;  margin: 1%;'>" +
                    "<div class='row'>" +
                    "<div class='col-sm-1'></div>" +
                    "<div class='col-sm-5'>" +
                    "<h3 style='color: lightblue; align-content: center'>" + prom_mobile[i].NomePromozione + "</h3>" +
                    "<h4>" + prom_mobile[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_mobile[i].Prezzo + "</h4>";

                if(prom_mobile[i].id==13){
                    output += "</div><div class = 'col-sm-5'>" +
                        "<img src=" + prom_mobile[i].Immagine + "></div><div class='col-sm-1'></div></div>" +
                        "<a href='Promozioni_mobile_young.html?" + prom_mobile[i].id + "'><button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI L'OFFERTA</button></a>" +
                        "</div>";
                }
                else{
                    output += "</div><div class = 'col-sm-5'>" +
                        "<img src=" + prom_mobile[i].Immagine + "></div><div class='col-sm-1'></div></div>" +
                        "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI L'OFFERTA</button>" +
                        "</div>";
                }

            }

            $("#heading").load("TimHeading.html", function () {
                $("#heading_col_left").html("<img class='img-responsive' src='images/innovazioni_intro.png'>");
                $("#p_title").html("Offerte Mobile");
                $("#p_subtitle").html("Le migliori offerte per la tua linea mobile");
                $("#my_breadcrumb").html("<li><a href='TimIndex.html'>Home</a></li><li><a href='#'>Promozioni</a></li><li><a href='#'>Mobile</a></li>");
            });

            $("#prom_mobile").html(output);

            var outputEstero = "";

            for(var k = 0; i < prom_mobile.length; i++){
                if(k++ == 0)
                    outputEstero +="<h3 style='margin-left: 5%; margin-top: 5%; color: lightblue'>ESTERO</h3>";


                outputEstero += "<div style='margin: 5%'><div class='row'><div class ='col-sm-6'><div class = 'row'><div class='col-sm-1'></div>" +
                    "<div class='col-sm-6'><img src=" + prom_mobile[i].Immagine + "></div><div class='col-sm-4'>" +
                    "<h3 style='color: lightblue'>" + prom_mobile[i].NomePromozione + "</h3><h4>" + prom_mobile[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_mobile[i].Prezzo + "</h4><button type='button' class='btn btn-primary'>SCOPRI</button></div>" +
                    "<div class='col-sm-1'></div> </div></div>"; //end of the first part
                i++;
                outputEstero += "<div class ='col-sm-6'><div class = 'row'><div class='col-sm-1'></div>" +
                    "<div class='col-sm-6'><img src=" + prom_mobile[i].Immagine + "></div><div class='col-sm-4'>" +
                    "<h3 style='color: lightblue'>" + prom_mobile[i].NomePromozione + "</h3><h4>" + prom_mobile[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_mobile[i].Prezzo + "</h4><button type='button' class='btn btn-primary'>SCOPRI</button></div></div></div></div>"
            }

            $("#prom_mobileExt").html(outputEstero);


        },
        error: function (request, error) {
            console.log("Error");
        }

    });
}


function getPromMobileFisso() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/get_promozioni.php", //Relative or absolute path to file.php file
        success: function (response) {
            var promozioni = JSON.parse(response);
            var output = "";

            var prom_fissoPiuMobile = new Array();
            var j = 0;

            for(var i = 0; i < promozioni.length; i++){
                if(promozioni[i].Pagina == ("FissoPiuMobile"))
                    prom_fissoPiuMobile[j++] = promozioni[i];
            }


            console.log(response);
            var i = 0;

            for (; i < prom_fissoPiuMobile.length; i++) {
                if(i == 0)
                    output += "<h2 style='color: lightblue; margin: 5%'>VOCE E INTERNET</h2>>"
                output += "<div  style='margin-top: 20px;  margin: 1%;'>" +
                    "<div class='row'>" +
                    "<div class='col-sm-1'></div>" +
                    "<div class='col-sm-5'>" +
                    "<h3 style='color: lightblue; align-content: center'>" + prom_fissoPiuMobile[i].NomePromozione + "</h3>" +
                    "<h4>" + prom_fissoPiuMobile[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_fissoPiuMobile[i].Prezzo + "</h4>";
                output += "</div><div class = 'col-sm-5'>" +
                    "<img src=" + prom_fissoPiuMobile[i].Immagine + "></div><div class='col-sm-1'></div></div>" +
                    "<button type='button' class='btn btn-primary' style='margin-left: 40%; margin-bottom: 10px' >SCOPRI L'OFFERTA</button><hr id = 'smartLine'>" +
                    "</div>";

            }

            $("#heading").load("TimHeading.html", function () {
                $("#heading_col_left").html("<img class='img-responsive' src='images/innovazioni_intro.png'>");
                $("#p_title").html("Offerte Mobile più fisso");
                $("#p_subtitle").html("Tutto insieme con la semplicità e convenienza di un unico conto.");
                $("#my_breadcrumb").html("<li><a href='TimIndex.html'>Home</a></li><li><a href='#'>Promozioni</a></li><li><a href='#'>Mobile più fisso</a></li>");
            });

            //$("#prom_mobile").html(output);
            $("#prom_fisso_mobile").html(output);



        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}

function getSmartProm() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getTimYoung.php", //Relative or absolute path to file.php file
        success: function (response) {
            var promozioni = JSON.parse(response);
            var output = "";

            var prom_smart = new Array();
            var j = 0;

            for(var i = 0; i < promozioni.length; i++){
                if(promozioni[i].Pagina == ("SmartLife"))
                    prom_smart[j++] = promozioni[i];
            }


            console.log(response);

            for (var i = 0; i < prom_smart.length; i++) {
                output += "<div  style='margin-top: 20px;  margin: 1%;'>" +
                    "<div class='row'>" +
                    "<div class='col-sm-1'></div>" +
                    "<div class='col-sm-5'>" +
                    "<h3 style='color: lightblue; align-content: center'>" + prom_smart[i].NomePromozione + "</h3>" +
                    "<h4>" + prom_smart[i].Descrizione + "</h4>";
                if(i == 0){
                    output += "<h4 style='margin: auto; color: lightblue'>Un Goal tira l'altro!</h4>" +
                        "<h5 style='margin: auto'>Guarda i tutti i video-goal, le video-sintesi, video-news e " +
                        "i video tg del campionato di Calcio di Serie A</h5> ";
                }
                output +="<button type='button' class='btn btn-primary' style='margin-left: 20%; margin-bottom: 10px' >SCOPRI TUTTI DETTAGLI</button>";

                output += "</div><div class = 'col-sm-5'>" +
                    "<img src=" + prom_smart[i].Immagine + "></div><div class='col-sm-1'></div></div>" +
                    "</div>";


            }
            $("#heading").load("TimHeading.html", function () {
                $("#heading_col_left").html("<img class='img-responsive' src='images/innovazioni_intro.png'>");
                $("#p_title").html("Offerte Smart Life");
                $("#p_subtitle").html("Il futuro è smart, scopri tutte le promozioni riguardanti il mondo connesso a TIM.");
                $("#my_breadcrumb").html("<li><a href='TimIndex.html'>Home</a></li><li><a href='#'>Promozioni</a></li><li><a href='#'>Smart Life</a></li>");
            });

            //$("#prom_mobile").html(output);
            $("#prom_smart").html(output);


        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}