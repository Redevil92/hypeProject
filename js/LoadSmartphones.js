$(document).ready(function(){
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
            for(var i = 0; i < 3; i++) {
                sent += '<br><div class = "row text-center">';
                for(var j = i*3; j < 3*(i+1); j++) {
                    sent += '<div class="col-sm-4"><h2 class="title_brand">'+ smartphones[j].Marca + '</h2><p class="title_paragraph">'+ smartphones[j].Nome +'</p><div class="col-sm-6"><img src="images/'+smartphones[j].img_path+'" class="imglist img-responsive"></div><div class="col-sm-6"><p>' + smartphones[j].InformazioniVeloci +'</p><a href = "Tim_Device_Detail.html?id='+smartphones[j].ID+'#smartphone"><button class="btn btn-primary myButton">Dettagli</button></a></div></div>';
                }
            sent += '</div><br>';
            }
            $("#content_device_smartphone").html(sent);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });
}