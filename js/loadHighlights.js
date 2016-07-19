$(document).ready(function(){
    $("#header").load("TimHeader.html", function () {
        $("#highlights").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    $("#heading").load("TimHeading.html", function () {
        $("#heading_col_left").html("<img class='img-responsive' src='images/assistenza_intro.jpg'>");
        $("#p_title").html("Highlights");
        $("#p_subtitle").html("Assistenza immediata");
        $("#my_breadcrumb").html("<li><a href='#'>Home</a></li><li>Highlights</li>");
    });
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

                if(assistance[i].id==3){
                    output+="<div class='row'><div class='col-sm-6 hl_left'><span class="+assistance[i].Logo+"></span></div><div class='col-sm-6 hl_right'><a href='Ricaricare.html?11'>"+assistance[i].Descrizione+"</a></div></div><hr>";
                }
                else {
                    output += "<div class='row'><div class='col-sm-6 hl_left'><span class=" + assistance[i].Logo + "></span></div><div class='col-sm-6 hl_right'><a>" + assistance[i].Descrizione + "</a></div></div><hr>";
                }
            }

            $("#assistenza_category").html(output);

        },

        error: function(request,error) {
            console.log("Error");
        }

    });
}
