
$("#about-res").on('click', function(){
    $('#mwkrierInfo').css("display", "block");
    $('#portfolio').css("display", "none");
    $('#blogBox').css("display", "none");
    $("contactBox").css("display", "none");
});

$("#portfolioButton").on('click', function(){
    $('#portfolio').css("display", "block");
    $('#mwkrierInfo').css("display", "none");
    $('#blogBox').css("display", "none");
    $("#contactBox").css("display", "none");
    
});

$("#contactButton").on('click', function(){
    $("#contactBox").css("display", "block");
    $('#mwkrierInfo').css("display", "none");
    $('#portfolio').css("display", "none");
    $('#blogBox').css("display", "none");

});

