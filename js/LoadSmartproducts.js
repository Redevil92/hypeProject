$(document).ready(getSmartproducts);

function getSmartproducts() {
    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "php/GetSmartproducts.php", //Relative or absolute path to file.php file
        success: function(response) {
            var smarts = JSON.parse(response);
            var sent = '';
            for(var i = 0; i < 3; i++) {
                sent += '<br><div class = "row text-center">';
                for(var j = i*3; j < 3*(i+1); j++) {
                    sent += '<div class="col-sm-4"><h2 class="title_brand">'+ smarts[j].Marca + '</h2><p class="title_paragraph">'+ smarts[j].Nome +'</p><div class="col-sm-6"><img src="images/' + smarts[j].img_path + '" class="imglist img-responsive"></div><div class="col-sm-6"><p>' + smarts[j].DescrizioneVeloce +'</p><button class="btn btn-primary">Dettagli</button></div></div>';
                }
            sent += '</div><br>';
            }
            $("#content_device_smartliving").html(sent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}