$(document).ready(function(){
    $("#header").load("TimHeader.html");
    $("#footer").load("TimFooter.html");
    $("#jumbotron_heading").load("Assistenza_Heading.html");
    getHighlights();
});

function getHighlights(){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getHighlights.php", //Relative or absolute path to file.php file
        success: function(response){
            var assistance = JSON.parse(response);
            var output = "<hr>";

            for(var i=0; i<assistance.length; i++){
                output+="<div class='row'><div class='col-sm-6 hl_left'><span class="+assistance[i].Logo+"></span></div><div class='col-sm-6 hl_right'><a>"+assistance[i].Descrizione+"</a></div></div><hr>";
            }

            $("#p_subtitle").html("Assistenza immediata");
            $("#my_breadcrumb").html("<li><a href='#'>Home</a></li><li><a href='#' id='current_path'>Highlights</a></li>");
            $("#assistenza_category").html(output);

        },

        error: function(request,error) {
            console.log("Error");
        }

    });
}
