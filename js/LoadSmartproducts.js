$(document).ready(function(){
    //load the TimHeader
    $("#header").load("TimHeader.html", function () {
        $("#prodotti").addClass("active");
    });
    
    //load dinamic heading

    //load the TimFooter
    $("#footer").load("TimFooter.html");
    getSmartproducts();
    
}) 

function getSmartproducts() {
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/GetSmartproducts.php", //Relative or absolute path to file.php file
        success: function(response) {
            var smarts = JSON.parse(response);
            var sent = '';
            for(var i = 0; i < smarts.length/3; i++) {
                sent += '<br><div class = "row text-center">';
                for(var j = i*3; j < 3*(i+1); j++) {
                    sent += '<div class="col-sm-4"><h2 class="title_brand">'+ smarts[j].Marca + '</h2><p class="title_paragraph">'+ smarts[j].Nome +'</p><div class="col-sm-6"><img src="images/' + smarts[j].img_path + '" class="imglist img-responsive"></div><div class="col-sm-6"><p>' + smarts[j].DescrizioneVeloce +'</p><a href = "Device_Detail.html?id='+smarts[j].ID+'#tv_smartliving">';

                    if(smarts[j].ID == 2) {
                        sent += '<span class ="glyphicon glyphicon-hand-right" style="font-size:2vw"></span><button class="btn btn-primary myButton">Dettagli</button></a></div></div>';
                    }
                    else {
                        sent += '<button class="btn btn-primary myButton">Dettagli</button></a></div></div>';
                    }
                }
                sent += '</div><br>';
            }
            // final pagination
            sent += '<hr><ul class="pagination" style="float:right"><li class="active"><a href="#">1</a></li><li class="disabled"><a href="#">2</a></li><li class="disabled"><a href="#">3</a></li><li class="disabled"><a href="#">4</a></li></ul>';
            
            //setting heading intestation
            var heading_img = ' <img src = "images/TIM_children_tv.jpg" alt = "devices" class = "img-responsive">';
            var p_title = 'TV &amp; Smartliving';
            var p_subtitle = 'Acquista televisori, video e audio con TIM';
            var breadcrumb = '<li><a href="TimIndex.html">Home</a></li><li><a href="Devices.html">Devices</a></li><li>TV &amp; Smartliving</li>';
            
            //loading heading
            $("#heading").load("TimHeading.html", function(){
                $("#heading_col_left").html(heading_img);
                $("#p_title").html(p_title);
                $("#p_subtitle").html(p_subtitle);
                $("#my_breadcrumb").html(breadcrumb);
            });
            
            $("#content_device_smartliving").html(sent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}