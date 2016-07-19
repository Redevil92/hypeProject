$(document).ready(function(){
    //load the TimHeader
    $("#header").load("TimHeader.html", function () {
        $("#prodotti").addClass("active");
    });
    
    //load dinamic heading

    //load the TimFooter
    $("#footer").load("TimFooter.html");
    getNetworking();
    
}) 

function getNetworking() {
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://polifamily.altervista.org/php/GetNetworking.php", //Relative or absolute path to file.php file
         success: function(response) {
            var devices = JSON.parse(response);
            var sent = '';
            for(var i = 0; i < devices.length/3; i++) {
                sent += '<br><div class = "row text-center">';
                for(var j = i*3; j < 3*(i+1); j++) {
                    sent += '<div class="col-sm-4"><h2 class="title_brand">'+ devices[j].Marca + '</h2><p class="title_paragraph">'+ devices[j].Nome +'</p><div class="col-sm-6"><img src="images/' + devices[j].img_path + '" class="imglist img-responsive"></div><div class="col-sm-6"><p>' + devices[j].DescrizioneVeloce +'</p><a href = "Device_Detail.html?id='+devices[j].ID+'#modem_networking">';

                    if(devices[j].ID == 6) {
                        sent += '<span class ="glyphicon glyphicon-hand-right" style="font-size:2vw"></span><button class="btn btn-primary myButton">Dettagli</button></a></div></div>';
                    }
                    else {
                        sent += '<button class="btn btn-primary myButton">Dettagli</button></a></div></div>';
                    }
                }
                sent += '</div><br>';
            }
            sent += '<hr><ul class="pagination" style="float:right"><li class="active"><a href="#">1</a></li><li class="disabled"><a href="#">2</a></li><li class="disabled"><a href="#">3</a></li><li class="disabled"><a href="#">4</a></li></ul>';
             
            //setting heading intestation
            var heading_img = '<img src = "images/Tim_girl_networking.jpg" alt = "devices" class = "img-responsive">';
            var p_title = 'Modem &amp; Networking';
            var p_subtitle = 'Naviga in mobilità o da casa con i dispositivi per il networking di TIM';
            var breadcrumb = '<li><a href="TimIndex.html">Home</a></li><li><a href="Devices.html">Devices</a></li><li>Modem &amp; Networking</li>';
            
            //loading heading
            $("#heading").load("TimHeading.html", function(){
                $("#heading_col_left").html(heading_img);
                $("#p_title").html(p_title);
                $("#p_subtitle").html(p_subtitle);
                $("#my_breadcrumb").html(breadcrumb);
            });
            
            $("#content_device_networking").html(sent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}