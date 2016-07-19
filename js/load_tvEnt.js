$(document).ready(function(){
    $("#header").load("TimHeader.html", function () {
        $("#assistenza").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    $("#heading").load("TimHeading.html", function () {
        $("#heading_col_left").html("<img class='img-responsive' src='images/smart_tv_intro.png'>");
        $("#p_title").html("TV e Entertainement");
        $("#p_subtitle").html("SERIE TV, FILM, MUSICA, GIOCHI E CALCIO. <br>Scopri il tipo di intrattenimento che preferisci. Il divertimento comincia subito! Quando vuoi e come vuoi.");
        $("#my_breadcrumb").html("<li><a href='TimIndex.html'>Home</a></li><li><a href=''>Servizi Smart Life</a></li><li><a href='#' id='current_path'>TV e Entertainemnet</a></li>");
    });
    getTvEnt();
    getTvSerieAInfo();
});



function getTvEnt() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getTvEnt.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";


            console.log(response);

            for (var i = 0; i < smartLife.length; i++) {
                output += "<div  style='margin-top: 20px;  margin: 1%;'>" +
                    "<div class='row'>" +
                    "<div class='col-sm-1'></div>" +
                    "<div class='col-sm-5'>" +
                    "<h3 style='color: lightblue; align-content: center'>" + smartLife[i].TitoloArg + "</h3>" +
                    "<p style='font-size: 25px'>" + smartLife[i].DescrizioneVeloce + "</p>" +
                    "<p style='font-size: 20px'>" + smartLife[i].Descrizione + "</p><button type='button' class='btn btn-primary' style='margin-left: 30%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button>";
                output += "</div><div class = 'col-sm-5'>" +
                    "<img style='width: 40vw ;height: 30vw' src=" + smartLife[i].Immagine + "></div><div class='col-sm-1'></div></div>" +
                    "</div>";

            }

            $("#tvEnt_all").html(output);


        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}

function getTvSerieAInfo() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getTvEnt.php", //Relative or absolute path to file.php file
        success: function (response) {
            var smartLife = JSON.parse(response);
            var output = "";


            console.log(response);


            output += "<div><h4 style='margin-left: 4%; margin-right: 4%'>"+smartLife[1].Info+"</h4>></div>";

            $("#SerieATimInfo").html(output);


        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}