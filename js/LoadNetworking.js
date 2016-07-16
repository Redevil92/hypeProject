$(document).ready(getNetworking);

function getNetworking() {
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/GetNetworking.php", //Relative or absolute path to file.php file
         success: function(response) {
            var devices = JSON.parse(response);
            var sent = '';
            for(var i = 0; i < 3; i++) {
                sent += '<br><div class = "row text-center">';
                for(var j = i*3; j < 3*(i+1); j++) {
                    sent += '<div class="col-sm-4"><h2 class="title_brand">'+ devices[j].Marca + '</h2><p class="title_paragraph">'+ devices[j].Nome +'</p><div class="col-sm-6"><img src="images/' + devices[j].img_path + '" class="imglist img-responsive"></div><div class="col-sm-6"><p>' + devices[j].DescrizioneVeloce +'</p><button class="btn btn-primary">Dettagli</button></div></div>';
                }
            sent += '</div><br>';
            }
            $("#content_device_networking").html(sent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}