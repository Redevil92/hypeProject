$(document).ready(getTablets);

function getTablets() {
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/GetTablet.php", //Relative or absolute path to file.php file
        success: function(response) {
            var tablets = JSON.parse(response);
            var sent = '';
            for(var i = 0; i < 3; i++) {
                sent += '<br><div class = "row text-center">';
                for(var j = i*3; j < 3*(i+1); j++) {
                    sent += '<div class="col-sm-4"><h2 class="title_brand">'+ tablets[j].Marca + '</h2><p class="title_paragraph">'+ tablets[j].Nome +'</p><div class="col-sm-6"><img src="images/' + tablets[j].img_path + '" class="imglist img-responsive"></div><div class="col-sm-6"><p>' + tablets[j].DescrizioneVeloce +'</p><br><a href = "Tim_Device_Detail.html?id='+tablets[j].ID+'#tablet"><button class="btn btn-primary myButton">Dettagli</button></a>  </div></div>';
                }
            sent += '</div><br>';
            }
            $("#content_device_tablet").html(sent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}