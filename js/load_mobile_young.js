$(document).ready(function () {
    $("#header").load("TimHeader.html", function () {
        $("#promozioni").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    $("#heading").load("TimHeading.html", function () {
        $("#heading_col_left").html("<img class='img-responsive' src='images/innovazioni_intro.png'>");
        $("#p_title").html("Offerte Smart Life");
        $("#p_subtitle").html("Le migliori offerte per la tua linea mobile.");
        $("#my_breadcrumb").html("<li></li><li><a href='Promozioni.html'>Promozioni</a></li><li><a href='Promozioni_mobile.html'>Mobile</a></li><li><a href='#'>TIM Young</a></li>");
    });
    getID();
});

function getID() {
    var url = window.location.href;
    var id = url.split('?')[1];
    getTimInfo(id);
}

function getTimInfo(id) {

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getTimYoung.php", //Relative or absolute path to file.php file
        data: {id : id},
        success: function (response) {
            var promozioni = JSON.parse(response);
            var output = "";
            console.log(response);
            var i = 0;
            output += "<div  style='margin-top: 20px;  margin: 1%;'>" +
                "<div class='row'>" +
                "<div class='col-sm-1'></div>" +
                "<div class='col-sm-5'>" +
                "<h3 style='color: lightblue; align-content: center'>" + promozioni[i].NomeOfferta + "</h3>" +
                "<h4>" + promozioni[i].DescrizioneVeloce + "</h4>" +
                "<h5>" + promozioni[i].Descrizione + "</h5>";
            output += "</div><div class = 'col-sm-5'>" +
                "<img style='width: 45vw; height: 30vw' src=" + promozioni[i].Immagine + "><a href='Promozioni_mobile_young_form.html'><button type='button' class='btn btn-danger' style='margin-left: 45%; margin-top: 5%' >ATTIVA</button></a>" +
                "<h4 style='color: red; margin-left: 45%'>" + promozioni[i].Prezzo + "</h4> </div><div class='col-sm-1'></div></div>" +
                "</div>";

            $("#prom_timInfo").html(output);

            output = "";
            output += "<div><h3 style='color: lightblue; margin:5%'>Costi e attivazione</h3>" +
                "<p style='margin: 5%'>" + promozioni[i].AttivazioneInfo + "</p><h3 style='color: lightblue;margin: 5%'>Smartphone</h3>" +
                "<div class='row'><div class='col-sm-1'></div><div class='col-sm-5'> <p style='margin: 5%'>" + promozioni[i].SmartphoneInfo + "</p>" +
                "</div><div class='col-sm-5'><img style='width: 45vw; height: 30vw' src=" + promozioni[i].ImmagineTel + "> </div><div class='col-sm-1'></div></div> </div>";



            $("#prom_timInfoDescr").html(output);

        },

        error: function (request, error) {
            console.log("Error");
        }

    });

}
