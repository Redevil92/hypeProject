

$(document).ready(readyPromotion);

function readyPromotion(){

    getFromPhone();


}

function getFromPhone(){

    $.ajax({
        method: "POST",
        //dataType: "json", //type of dat4
        crossDomain: true, //localhost purposes
        url: "php/getPromotionPhone.php", //Relative or absolute path to file.php file

        success: function(response){

            var result = "";
            var promotion = JSON.parse(response);
            //assistance is an array where there are all the lines of the db, in assistance there are all the istance of my db; ex: assistance[i].categoria
            for(var i = 0; i < promotion.length; i++ ){
                result += promotion[i].NomePromozione;
            }
            //a1 is the id where i want to show my istance
            $("#test").html(response);

        },
        error: function(request,error) {
            console.log("Error");

    });
}