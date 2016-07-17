$(document).ready(ready);

function ready(){

    getPromozioneFisso();

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

            console.log(response);

            for(var i = 0; promozioni.lenght; i++){
                output += "<div class='row><div class='col-sm-6'><div class='row'><div class='col-sm-1'></div>";

                while( promozioni[i].Pagina == ("Fisso")){
                 i++;
                }
                output += "<div class='col-sm-6'><img src='"+ promozioni[i].Immagine + "'>" +
                    "<div class='col-sm-4'><h3 style='color: lightblue'>promozioni[i].NomePromozione</h3><h4>promozioni[i].Descrizione</h4>" +
                    "<h4 style='color: red'>promozioni[i].Prezzo</h4></div></div>";
                while( promozioni[i].Pagina == ("Fisso")){
                    i++
                }
                output += "<div class='col-sm-6'><img src='"+ promozioni[i].Immagine + "'>" +
                    "<div class='col-sm-4'><h3 style='color: lightblue'>promozioni[i].NomePromozione</h3><h4>promozioni[i].Descrizione</h4>" +
                    "<h4 style='color: red'>promozioni[i].Prezzo</h4></div></div>";
                output += "</div>";
            }


            $("#promozione_fisso").html(output);


        },

        console.log(output);

        error: function (request, error) {
            console.log("Error");
        }

    });
}

function getLineaServizi2() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getSalute&Benessere.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";


            console.log(response);

            for (var i = 0; i < smartLife.length-1; i++) {
                output += "<div class ='jumbotron' style='margin-top: 20px; border: solid 1px gray; margin: 10%;'>" +
                    "<div class='row'>" +
                    "<div class='col-sm-2'></div>" +
                    "<div class='col-sm-4'>" +
                    "<h3 style='color: lightblue; align-content: center'>"+smartLife[i].TitoloArg+"</h3>"+
                    "<h5>"+ smartLife[i].Descrizione +"</h5>";
                output += "</div><div class = 'col-sm-4'>" +
                    "<img src=" + smartLife[i].Immagine + "></div><div class='col-sm-2'></div></div>" +
                    "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button>" +
                    "</div>";

            }

            $("#salute_all").html(output);


        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}