$(document).ready(function(){
    $("#header").load("TimHeader.html", function () {
        $("#assistenza").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    $("#heading").load("TimHeading.html", function () {
        $("#heading_col_left").html("<img class='img-responsive' src='images/smart_servizi_intro.png'>");
        $("#p_title").html("Servizi alla Persona");
        $("#p_subtitle").html("Un nuovo approccio al mondo dell'e-payment e dell'identità digitale.");
        $("#my_breadcrumb").html("<li><a href='TimIndex.html'>Home</a></li><li><a href=''>Servizi Smart Life</a></li><li><a href='#' id='current_path'>Servizi alla Persona</a></li>");
    });
    getDescrizione();
    getServiziAllaPersona();
    getServiziAllaPersonaRounded();
    getServiziAllaPeronaInfor();
});



function getDescrizione(){
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getServiziPersona.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";

            console.log(response);

            var output = "";

            output += "<div style='margin-left: 20%; margin-right: 20%'><h3 style='color: lightblue; font-size: 35px; margin-left: 20%; margin-right: 20%'>"+smartLife[0].TitoloArg +"</h3>"
            output += "<p style='font-size: 30px'>"+smartLife[0].Descrizione+"</p></div>"

            $("#serviziPersona_descr").html(output);

        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}

function getServiziAllaPersona() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getServiziPersona.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";

            console.log(response);

            output += "<div class = 'jumbotron' style='margin-top: 20px; margin: 10%'>" +
                "<div class='row' >" +
                "<div class='col-sm-6' >" +
                "<h3 style='color: lightblue; margin-left: 5%'>"+ smartLife[1].TitoloArg +"</h3>"+
                "<p style='font-size: 25px; margin-left: 5%;'>"+ smartLife[1].Descrizione +"</p>";
            output += "</div><div class = 'col-sm-6' >" +
                "<img style='width: 35vw; height: 30vw' src=" + smartLife[1].Immagine + "></div></div>" +
                "</div>";

            $("#serviziPersona_normalBlock").html(output);

        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}

function getServiziAllaPersonaRounded() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getServiziPersona.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";


            console.log(response);

            output += "<div  style='margin-top: 20px; margin-bottom: 20px'>" +
                "<div class='row' ><div class='col-sm-1'></div> " +
                "<div class='col-sm-5' ><div class='col-md-11' style='border: solid 1px'>" +
                "<h3 style='color: lightblue; margin-left: 20%'>"+ smartLife[2].TitoloArg +"</h3>"+
                "<img style='width: 33vw; height: 35vw' src=" + smartLife[2].Immagine + ">" +
                "<p style='font-size: 20px'>"+ smartLife[2].Descrizione +"</p></div><div class ='col-md-1'></div>";
            output += "</div><div class = 'col-sm-5' ><div class ='col-md-1'></div><div class='col-md-11' style='border: solid 1px'>" +
                "<h3 style='color: lightblue; margin-left: 20%'>"+ smartLife[3].TitoloArg +"</h3>"+
                "<img style='width: 33vw; height: 35vw' src=" + smartLife[3].Immagine + ">" +
                "<p style='font-size: 20px'>"+ smartLife[3].Descrizione +"</p></div></div><div class='col-sm-1'></div></div>" +
                "</div>";

            $("#serviziPersona_double").html(output);


        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}


function getServiziAllaPeronaInfor() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getServiziPersona.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";

            console.log(response);

            output += "<div class = 'jumbotron' style='margin-top: 20px; margin: 10%'>" +
                "<div class='row' >" +
                "<div class='col-sm-6' >" +
                "<h2 style='color: lightblue; margin-left: 5%'>"+ smartLife[4].TitoloArg +"</h2>"+
                "<p style='font-size: 20px; margin-left: 5%'>"+ smartLife[4].Descrizione +"</p>";
            output += "</div><div class = 'col-sm-6' >" +
                "<img style='width: 35vw; height: 25vw' src=" + smartLife[4].Immagine + "></div></div>" +
                "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button></div>";

            $("#serviziPersona_infor").html(output);

        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}