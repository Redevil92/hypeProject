$(document).ready(ready);

function ready(){

    getLineaServizi();
    getLineaServizi2();

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
        url: "php/getCasa&Famiglia.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var title = "";
            var description = "";
            var description2 = "";

            console.log(response);
            
            title = smartLife[0].TitoloArg;
            description = smartLife[0].DescrizioneVeloce;
            description2 = smartLife[0].Descrizione;
           // img = smartLife[i].Immagine;
           

            $("#casa_tit").html(title);
            $("#casa_des_vel").html(description);
            $("#casa_des").html(description2);
            //$("#casa_foto").html(img);

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
        url: "php/getCasa&Famiglia.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";
            

            console.log(response);

            for (var i = 1; i < smartLife.length; i++) {
                output += "<div style='margin-top: 20px'>" +
                            "<div class='row'>" +
                                "<div class='col-sm-2'></div>" +
                                    "<div class='col-sm-4'>" +
                                        "<h3 style='color: lightblue; align-content: center'>"+smartLife[i].TitoloArg+"</h3>"+
                                            "<h4>"+ smartLife[i].DescrizioneVeloce +"</h4>"+
                                                "<h5>"+ smartLife[i].Descrizione +"</h5>";
                output += "</div><div class = 'col-sm-4'>" +
                              "<img src=" + smartLife[i].Immagine + "></div><div class='col-sm-2'></div></div>" +
                                "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button>" +
                                    "</div>"
               
            }

            $("#casa_all").html(output);
          

        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}