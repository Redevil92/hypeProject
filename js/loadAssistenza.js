$(document).ready(function(){
    $("#header").load("TimHeader.html", function () {
        $("#assistenza").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    $("#heading").load("TimHeading.html", function () {
        $("#heading_col_left").html("<img class='img-responsive' src='images/assistenza_intro.jpg'>");
        $("#p_title").html("Assistenza");
        $("#my_breadcrumb").html("<li><a href='Assistenza.html'>Assistenza</a></li><li id='current_path'></li>");
    });
    findMaxCategory();
});

function findMaxCategory() {
    var url = window.location.href;
    var test = url.split('?')[1];
    var max_cat = 'test';
    switch(test){
        case 'linea_servizi':
            max_cat = 'Gestione linea e servizi';
            break;
        case 'costi_pagamenti':
            max_cat = 'Controllo costi e pagamenti';
            break;
        case 'tecnico_configurazione':
            max_cat = 'Supporto tecnico e configurazione';
            break;
        case 'smart_life':
            max_cat = 'Smart Life';
            break;
        default:
            break;
    }
    getMaxCategory(max_cat);
}

function getMaxCategory(max_cat){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        data: {max_cat : max_cat},
        url: "php/getAssistenza.php", //Relative or absolute path to file.php file
        success: function(response){
            var assistance = JSON.parse(response);
            var output = "<hr class='my_hr'>";

            //Selecting distinct values from 'Categoria'

            var lookup = {};
            var items = assistance;
            var result = [];

            for (var item, i = 0; item = items[i++];) {
                var name = item.Categoria;

                if (!(name in lookup)) {
                    lookup[name] = 1;
                    result.push(name);
                }
            }

            //Looping distinct 'Categoria'
            for(var j=0; j<result.length; j++){

                //Selecting distinct values from 'SottoCategoria'

                var lookup2 = {};
                var result2 = [];

                for (var item, i = 0; item = items[i++];) {
                    var name = item.SottoCategoria;

                    if (!(name in lookup2) && item.Categoria==result[j]) {
                        lookup2[name] = 1;
                        result2.push(name);
                    }
                }

                output+="<h2>" + result[j]+ "</h2>";  //Print 'Categoria'

                //Looping distinct 'SottoCategoria'
                for(var k=0; k<result2.length; k++){

                    output+="<h4>" + result2[k] + "</h4>";  //Print 'SottoCategoria'

                    //Looping 'Descrizione'
                    for(var i=0; i<assistance.length; i++){
                        if(result2[k]==assistance[i].SottoCategoria){

                            if(assistance[i].id==11){
                                output+="<a href='Ricaricare.html?" + assistance[i].id + "'><span class='glyphicon glyphicon-hand-right'></span> " + assistance[i].Descrizione + "</a><br>";
                            }
                            else{
                                output+="<a>" + assistance[i].Descrizione + "</a><br>";  //Print 'Descrizione'
                            }


                        }
                    }
                }
                output+="<hr class='my_hr'>";
            }

            $("#p_subtitle").html(max_cat);
            $("#current_path").html(max_cat);
            $("#assistenza_category").html(output);

        },

        error: function(request,error) {
            console.log("Error");
        }

    });
}
