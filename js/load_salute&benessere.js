$(document).ready(ready);

function ready(){

    getLineaServizi2();
    getLineaServizi();

}

/**
 function getMaxCategory() {
    var id = '';
    var check = document.location.pathname.toString();
    switch(check){
        case "Assistenza_GestioneLineaServizi.html":
            id = 'Gestione linea e servizi';
            break;
        default:
            break;
    }
    return id;
}**/

function getLineaServizi() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getSalute&Benessere.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";

            console.log(response);

            output += "<div  style='margin-top: 20px; margin: 10%;'>" +
                "<div class='row'>" +
                "<div class='col-sm-1'></div>" +
                "<div class='col-sm-5'>" +
                "<h3 style='color: lightblue; align-content: center'>"+smartLife[2].TitoloArg+"</h3>"+
                "<h4>"+ smartLife[2].DescrizioneVeloce +"</h4>"+
                "<h5>"+ smartLife[2].Descrizione +"</h5>";
            output += "</div><div class = 'col-sm-5'>" +
                "<img src=" + smartLife[2].Immagine + "></div><div class='col-sm-1'></div></div>" +
                "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button>" +
                "</div>";

            $("#salute_last").html(output);

        },

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