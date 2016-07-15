$(document).ready(ready);

function ready{



}

function getLineaServizi{

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getAssistenza_LineaServizi.php", //Relative or absolute path to file.php file
        success: function(response) {

        }
    })
}