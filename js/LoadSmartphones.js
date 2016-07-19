$(document).ready(function(){
    //load the TimHeader
    $("#header").load("TimHeader.html", function () {
        $("#prodotti").addClass("active");
    });
    
    //load dinamic heading

    //load the TimFooter
    $("#footer").load("TimFooter.html");
    getSmartphones();
    
}) 
    
function getSmartphones() {
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/GetSmartphones.php", //Relative or absolute path to file.php file
        success: function(response) {
            var smartphones = JSON.parse(response);
            var sent = '';
            for(var i = 0; i < smartphones.length/3; i++) {
                sent += '<br><div class = "row text-center">';
                for(var j = i*3; j < 3*(i+1); j++) {
                    if(smartphones[j].inPromozione == 1) {
                        sent += '<div class="col-sm-4"><h2 class="title_brand">'+ smartphones[j].Marca + '</h2><p class="title_paragraph">'+ smartphones[j].Nome +'</p><div class="col-sm-6"><img src="images/'+smartphones[j].img_path+'" class="imglist img-responsive"></div><div class="col-sm-6"><h3 class="promotion-par">IN PROMOZIONE</h3><p>' + smartphones[j].DescrizioneVeloce +'</p><a href = "Device_Detail.html?id='+smartphones[j].ID+'#smartphone"><button class="btn btn-primary myButton">Dettagli</button></a></div></div>';
                    }
                    else {
                        sent += '<div class="col-sm-4"><h2 class="title_brand">'+ smartphones[j].Marca + '</h2><p class="title_paragraph">'+ smartphones[j].Nome +'</p><div class="col-sm-6"><img src="images/'+smartphones[j].img_path+'" class="imglist img-responsive"></div><div class="col-sm-6"><p>' + smartphones[j].DescrizioneVeloce +'</p><a href = "Device_Detail.html?id='+smartphones[j].ID+'#smartphone"><button class="btn btn-primary myButton">Dettagli</button></a></div></div>';
                    }
                }
                sent += '</div><br>';
            }
            // final: pagination
            sent += '<hr><ul class="pagination" style="float:right"><li class="active"><a href="#">1</a></li><li class="disabled"><a href="#">2</a></li><li class="disabled"><a href="#">3</a></li><li class="disabled"><a href="#">4</a></li></ul>';
            
            //setting heading intestation
            var heading_img = '<img src = "images/TIM_Girl_with_smartphone.jpg" alt = "devices" class = "img-responsive">';
            var p_title = 'Smartphone &amp; Telefoni';
            var p_subtitle = 'Acquista smartphone, telefoni di casa e cellulari online con TIM';
            var breadcrumb = '<li><a href="TimIndex.html">Home</a></li><li><a href="Devices.html">Devices</a></li><li>Smartphone &amp; telefoni</li>';
            
            //loading heading
            $("#heading").load("TimHeading.html", function(){
                $("#heading_col_left").html(heading_img);
                $("#p_title").html(p_title);
                $("#p_subtitle").html(p_subtitle);
                $("#my_breadcrumb").html(breadcrumb);
            });
            
            //loading content
            $("#content_device_smartphone").html(sent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}