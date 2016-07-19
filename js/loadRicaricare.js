$(document).ready(function(){
    $("#header").load("TimHeader.html", function () {
        $("#assistenza").addClass("active");
    });
    $("#footer").load("TimFooter.html");
    $("#heading").load("TimHeading.html", function () {
        $("#heading_col_left").html("<img class='img-responsive' src='images/assistenza_intro.jpg'>");
        $("#p_title").html("Metodi di ricarica");
        $("#p_subtitle").html("Scegli il tipo di ricarica che si adatta di più alle tue esigenze");
        $("#my_breadcrumb").html("<li><a href='TimIndex.html'>Home</a></li><li><a href=''>Assistenza</a></li><li><a href='Assistenza_MaxiCategorie.html?linea_servizi'>Gestione linea e servizi</a></li><li>Tutti i modi per ricaricare</li>");
    });
    getID();
});

function getID() {
    var url = window.location.href;
    var id = url.split('?')[1];
    getMetodiRicarica(id);
}

function getMetodiRicarica(id){

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/getRicaricare.php", //Relative or absolute path to file.php file
        data: {id : id},
        success: function(response){
            var ricaricare = JSON.parse(response);
            var output = "<hr>";

            //Selecting distinct values from 'Titolo'

            var lookup = {};
            var items = ricaricare;
            var result = [];

            for (var item, i = 0; item = items[i++];) {
                var name = item.Titolo;

                if (!(name in lookup)) {
                    lookup[name] = 1;
                    result.push(name);
                }
            }

            //Looping distinct 'Titolo'
            for(var j=0; j<result.length; j++){

                //Selecting distinct values from 'SottoTitolo'

                var lookup2 = {};
                var result2 = [];

                for (var item, i = 0; item = items[i++];) {
                    var name = item.SottoTitolo;

                    if (!(name in lookup2) && item.Titolo==result[j]) {
                        lookup2[name] = 1;
                        result2.push(name);
                    }
                }

                output+="<h2>" + result[j]+ "</h2>";  //Print 'Titolo'

                //Looping distinct 'SottoTitolo'
                for(var k=0; k<result2.length; k++){

                    output+="<h4>" + result2[k] + "</h4>";  //Print 'SottoTitolo'

                    //Looping 'Descrizione'
                    for(var i=0; i<ricaricare.length; i++){
                        if(result2[k]==ricaricare[i].SottoTitolo){

                            output+="<a href='#'>" + ricaricare[i].Descrizione + "</a><br>";  //Print 'Descrizione'

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
