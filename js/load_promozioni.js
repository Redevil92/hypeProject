$(document).ready(ready);

function ready(){

    getPromozioneFisso();
    getPromMobile();
    getPromMobileFisso();
    getSmartProm();


}


function getPromozioneFisso() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/load_promozioni.php", //Relative or absolute path to file.php file
        success: function (response) {
            var promozioni = JSON.parse(response);
            var output = "";
            var prom_fisso = new Array();
            var j = 0;

            for(var i = 0; i < promozioni.length; i++){
                if(promozioni[i].Pagina == ("Fisso"))
                    prom_fisso[j++] = promozioni[i];
            }

            /*console.log(prom_fisso);
            for(var i = 0; i < prom_fisso.lenght; i++){
                output += "<div class='row'><div class='col-sm-6'><div class='row'><div class='col-sm-1'></div>";
                output += "<div class='col-sm-6'><img src="+ prom_fisso[i].Immagine + "></div>" +
                    "<div class='col-sm-4'><h3 style='color: lightblue'>" + prom_fisso[i].NomePromozione + "</h3><h4>" + prom_fisso[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_fisso[i].Prezzo + "</h4></div><div class = 'col-sm-1'></div></div></div>";
                i++;
                output += "<div class='col-sm-6'><div class='row'><div class='col-sm-1'></div><div class='col-sm-6'><img src="+ prom_fisso[i].Immagine + "></div>" +
                    "<div class='col-sm-4'><h3 style='color: lightblue'>"+ prom_fisso[i].NomePromozione +"</h3><h4>" + prom_fisso[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_fisso[i].Prezzo + "</h4></div><div class='col-sm-1'></div></div>";
               output += "</div></div>";
                console.log(response);
            }
*/

            for(var i = 0; i < prom_fisso.length; i++){
                if(i == 0)
                    output +="<h3 style='margin-left: 5%; margin-top: 5%; color: lightblue'>Scopri tutte le promozioni" +
                        " offerte da TIM per il tuo telefono fisso e la rete di casa</h3>";
                else
                    output +="<h3 style='margin-left: 5%; margin-top: 5%; color: lightblue'>Scopri tutte le promozioni" +
                        " offerte da TIM per la tua rete di casa</h3>";

                output += "<div style='margin: 5%'><div class='row'><div class ='col-sm-6'><div class = 'row'><div class='col-sm-1'></div>" +
                    "<div class='col-sm-6'><img src=" + prom_fisso[i].Immagine + "></div><div class='col-sm-4'>" +
                    "<h3 style='color: lightblue'>" + prom_fisso[i].NomePromozione + "</h3><h4>" + prom_fisso[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_fisso[i].Prezzo + "</h4><button type='button' class='btn btn-primary'>SCOPRI</button></div>" +
                    "<div class='col-sm-1'></div> </div></div>"; //end of the first part
                i++;
                output += "<div class ='col-sm-6'><div class = 'row'><div class='col-sm-1'></div>" +
                    "<div class='col-sm-6'><img src=" + prom_fisso[i].Immagine + "></div><div class='col-sm-4'>" +
                    "<h3 style='color: lightblue'>" + prom_fisso[i].NomePromozione + "</h3><h4>" + prom_fisso[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_fisso[i].Prezzo + "</h4><button type='button' class='btn btn-primary'>SCOPRI</button></div></div></div></div>"
            }


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
        url: "php/load_promozioni.php", //Relative or absolute path to file.php file
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
                    output += "<h2 style='color: lightblue; margin: 5%'>VOCE E INTERNET</h2>>"
                output += "<div  style='margin-top: 20px;  margin: 1%;'>" +
                    "<div class='row'>" +
                    "<div class='col-sm-1'></div>" +
                    "<div class='col-sm-5'>" +
                    "<h3 style='color: lightblue; align-content: center'>" + prom_mobile[i].NomePromozione + "</h3>" +
                    "<h4>" + prom_mobile[i].Descrizione + "</h4>" +
                    "<h4 style='color: red'>" + prom_mobile[i].Prezzo + "</h4>";
                output += "</div><div class = 'col-sm-5'>" +
                    "<img src=" + prom_mobile[i].Immagine + "></div><div class='col-sm-1'></div></div>" +
                    "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI L'OFFERTA</button>" +
                    "</div>";

            }

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
        url: "php/load_promozioni.php", //Relative or absolute path to file.php file
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
        url: "php/load_promozioni.php", //Relative or absolute path to file.php file
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

            $("#prom_smart").html(output);


        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}