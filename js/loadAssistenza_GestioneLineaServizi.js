$(document).ready(ready);

function ready(){

    getLineaServizi();

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

function getLineaServizi(){

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getAssistenza_GestioneLineaServizi.php", //Relative or absolute path to file.php file
        success: function(response){
            var assistance = JSON.parse(response);
            var output = "";

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

                            output+="<a>" + assistance[i].Descrizione + "</a><br>";  //Print 'Descrizione'

                        }
                    }
                }
                output+="<hr>";
            }

            $("#assistenza_category").html(output);

        },

        error: function(request,error) {
            console.log("Error");
        }

    });
}