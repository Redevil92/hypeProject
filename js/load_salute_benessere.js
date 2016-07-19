

$(document).ready(function(){
    $("#header").load("TimHeader.html", function () {
        $("#smart_life").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    $("#heading").load("TimHeading.html", function () {
        $("#heading_col_left").html("<img class='img-responsive' src='images/salute&benessere_intro.png'>");
        $("#p_title").html("Salute e Benessere");
        $("#p_subtitle").html("Scopri come Salute e Benessere possono cambiare in meglio la tua vita facendoti tornare <br>la voglia di movimento.");
        $("#my_breadcrumb").html("<li><a href='SmartLife.html'>Servizi Smart Life</a></li><li><a href='#' id='current_path'>Salute e Benessere</a></li>");
    });
    getSalute2();
    getSalute();
});

function getSalute() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://polifamily.altervista.org/php/getSalute_Benessere.php", //Relative or absolute path to file.php file
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
                "<img style='width: 30vw; height: 30vw' class='squareImgMedium img-responsive' src=" + smartLife[2].Immagine + "></div><div class='col-sm-1'></div></div>" +
                "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button>" +
                "</div>";

            $("#salute_last").html(output);

        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}

function getSalute2() {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://polifamily.altervista.org/php/getSalute_Benessere.php", //Relative or absolute path to file.php file
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
                    "<img style='width: 45vw; height: 30vw' class=' img-responsive' src=" + smartLife[i].Immagine + "></div><div class='col-sm-2'></div></div>";
                    if(i == 0){
                        output += "<a href='Device_Detail.html?id=2#tv_smartliving' >"
                    }
                output += "<button type='button' class='btn btn-primary' style='margin-left: 45%; margin-bottom: 10px' >SCOPRI I DETTAGLI</button>";
                    if(i == 0){
                        output += "</a>";
                    }
                output +="</div>";

            }

            $("#salute_all").html(output);


        },

        error: function (request, error) {
            console.log("Error");
        }

    });
}