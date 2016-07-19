$(document).ready(URLParser());

/*
* Function that parse URL and retrieve data for php file
* in order to display every device following the same
* pattern
*/

function URLParser() {
    
    var ref = window.location.href;
    
    var page = window.location.pathname;
    
    var data = ref.split('?')[1]; //target id is here
    
    var value = data.split('=')[1]; //this is the correct value
    
                                // debug purpose
    console.log(data);
                                // debug purpose
    console.log(value);
    
    getSingleDevice(value);
}

function getSingleDevice(value) {
    
    var id = value.split('#')[0];       //id in the DB
    var table = value.split('#')[1];    //table passed to .php file
    
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        data:{id : id, table : table},
        url: "php/GetSingleDevice.php", //Relative or absolute path to file.php file
        success: function(response) {
            
            var device = JSON.parse(response);
            
            var carousel = '';
            
            var rightDesc = '';
            
            if(device[0].Prezzo == 0) { //devices not implemented in the DB
                carousel = '<div class="container"><div class="jumbotron text-center"><h1>'+device[0].Marca+' '+device[0].Nome +'</h1></div><div class="row"><div class="col-sm-6"><img src="images/'+device[0].img_path+'" alt="path"></div>';
                
                rightDesc = '<div class="col-sm-6"><div class="well text-center"><h1>Dati per questo dispositivo non disponibili. Consultare il link evidenziato sulla pagina che elenca i prodotti</h1></div></div></div>';
            }
            else { //devices with full description in DB
                
                // bootstrap carousel initialization
                carousel = '<div class="container"><div class="jumbotron text-center"><h1>'+device[0].Marca+' '+device[0].Nome +'</h1></div><div class="row"><div class="col-sm-6"><div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin-top:80px"><!-- Indicators --><ol class="carousel-indicators"><li data-target="#myCarousel" data-slide-to="0" class="active"></li><li data-target="#myCarousel" data-slide-to="1"></li><li data-target="#myCarousel" data-slide-to="2"></li><li data-target="#myCarousel" data-slide-to="3"></li></ol><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/'+device[0].small_img1+'" class="center-block big-img" alt="front"></div><div class="item"> <img src="images/'+device[0].small_img2+'" class="center-block big-img"></div><div class="item"><img src="images/'+device[0].small_img3+'" class="center-block big-img"></div><div class="item"><img src="images/'+device[0].small_img4+'" class="center-block big-img"></div><a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="icon-prev" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="icon-next" aria-hidden="true"></span><span class="sr-only">Next</span></a></div></div></div>';
            
                //right column
                if(device[0].PrezzoAbbonamento == 0) {
                    rightDesc = '<div class="col-sm-6"><h1>Descrizione</h1><p>'+device[0].DescrizioneVeloce+'</p><div class="well text-center"><h3><b>Acquistalo a prezzo pieno</b></h3><h1 class="price">'+device[0].Prezzo+'€</h1><button type="button" class="btn btn-primary"><h4><b>Aggiungi al carrello</b></h4></button></div>';
                }
                else {
                    rightDesc = '<div class="col-sm-6"><h1>Descrizione</h1><p>'+device[0].DescrizioneVeloce+'</p><div class="well text-center"><h3><b>Acquistalo a prezzo pieno</b></h3><h1 class="price">'+device[0].Prezzo+'€</h1><button type="button" class="btn btn-primary"><h4><b>Aggiungi al carrello</b></h4></button></div><div class="well text-center"><h4>Scegli una delle offerte TIM e ricevi questo device a soli</h4><h1 class="price">'+device[0].PrezzoAbbonamento+'€/mese</h1><button type="button" class="btn btn-primary"><h4><b>Abbina alla&#769;offerta</b></h4></button></div></div>';
                }
            }

            var technical ='';
            
            technical = '<div class="row"><ul class="nav nav-tabs bottomtabs"><li class="active"><a data-toggle="tab" href="#home">Scheda Tecnica</a></li><li><a data-toggle="tab" href="#menu1">Consegna</a></li><li><a data-toggle="tab" href="#menu2">Recesso e garanzia</a></li></ul><div class="tab-content"><div id="home" class="tab-pane fade in active"><pre style="margin-left:10px">'+device[0].Descrizione+'</pre></div><div id="menu1" class="tab-pane fade"><pre style="margin-left:10px">I prodotti richiesti sono consegnati esclusivamente via corriere espresso, è prevista sempre la consegna fronte strada.<br><br>TIM si impegna a rispettare come tempo massimo di consegna un periodo non superiore a 10 giorni lavorativi, salvo casi di forza maggiore che possano per esempio ascriversi alla richiesta, da parte dello stesso Cliente tramite contatto telefonico, di slittamento della consegna secondo un determinato appuntamento.</pre></div><div id="menu2" class="tab-pane fade"><pre style="margin-left:10px">Le vendite di prodotti via Internet sono disciplinate dal D.Lgs n. 206/05 che regola la materia dei contratti a distanza, cioè effettuati al di fuori dei locali commerciali. Tale normativa sancisce il diritto di recesso, ovvero la possibilità per il consumatore di restituire il prodotto acquistato e di ottenere il rimborso della spesa sostenuta.<br><br>Questo diritto è riservato esclusivamente alle persone fisiche (consumatori), quindi non può essere esercitato dalle persone giuridiche e dalle persone fisiche che agiscono per scopi riferibili alla&#769;attività imprenditoriale, commerciale, artigianale o professionale eventualmente svolta.<br><br>Per esercitare il diritto di recesso è necessario inviare, entro 14 giorni dal ricevimento della merce, una comunicazione nella quale viene chiaramente manifestata la volontà di recedere dal contratto.</pre></div></div></div>';
            
            var topString = carousel + rightDesc +'</div><hr>';
            
            $("#product_overview").html(topString);
            
            $("#technical_tab").html(technical);
        
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}