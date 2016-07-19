$(document).ready(function(){
    $("#header").load("TimHeader.html", function () {
        $("#assistenza").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    $("#heading").load("TimHeading.html", function () {
        $("#heading_col_left").html("<img class='img-responsive' src='images/intro_famiglia.png'>");
        $("#p_title").html("Casa e Famiglia");
        $("#p_subtitle").html("Smart Life vuol dire anche una vita più semplice e sicura <br> anche per la tua casa e i tuoi cari.");
        $("#my_breadcrumb").html("<li><a href='SmartLife.html'>Servizi Smart Life</a></li><li><a href='#' id='current_path'>Casa e Famiglia</a></li>");
    });
    getCasaFamiglia();
    getCasaFamiglia2();
});



function getCasaFamiglia() {

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

function getCasaFamiglia2() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCasa&Famiglia.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";


            console.log(response);

            var i = 0;
            output += "<div style='margin-top: 20px; border: solid 1px gray; margin: 10%;'>" +
                    "<div class='row'>" +
                    "<div class='col-sm-2'></div>" +
                    "<div class='col-sm-4'>" +
                    "<h3 style='color: lightblue; align-content: center'>" + smartLife[i].TitoloArg + "</h3>" +
                    "<p style='font-size: 20px'>" + smartLife[i].DescrizioneVeloce + "</p>" +
                    "<p style='font-size: 18; margin-top: 10px'>" + smartLife[i].Descrizione + "</p>";


            output += "</div><div class = 'col-sm-4'>" +
                    "<img style='height: 30vw; width: 38vw' src=" + smartLife[i].Immagine + "></div><div class='col-sm-2'></div></div>" +
                    "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button>" +
                    "</div>";
            i++;
            output += "<div style='margin-top: 20px; margin: 10%;'>" +
                "<div class='row'>" +
                "<div class='col-sm-2'></div>" +
                "<div class='col-sm-4'>" +
                "<h3 style='color: lightblue; align-content: center'>" + smartLife[i].TitoloArg + "</h3>" +
                "<p style='font-size: 20px'>" + smartLife[i].DescrizioneVeloce + "</p>" +
                "<p style='font-size: 18; margin-top: 10px'>" + smartLife[i].Descrizione + "</p>" +
                "<p style='font-size: 17px; color: lightblue'>" + smartLife[i+1].DescrizioneVeloce + "</p>" +
                "<p style='font-size: 18; margin-top: 10px'>" + smartLife[i+1].Descrizione + "</p>";


            output += "</div><div class = 'col-sm-4'>" +
                "<img style='height: 26vw; width: 35vw' src=" + smartLife[i+1].Immagine + "></div><div class='col-sm-2'></div></div>" +
                "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button>" +
                "</div>";


            $("#casa_all").html(output);

        },


        error: function (request, error) {
            console.log("Error");
        }

    });
}