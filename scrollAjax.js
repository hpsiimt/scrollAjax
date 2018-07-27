/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(window).scroll(function() {
    if ($(window).scrollTop() >= ($(document).height() - $(window).height())*0.8){
        // ajax call get data from server and append to the div
        makeAsyncCall(1,2,3,4);
    }
});
$(document).ready(function(){
    var text = '';
    for(var i=0;i<2;i++){
        text +='<div class="row">'+
            '<div class="column">'+
              '<img src="img_snow.jpg" alt="Snow" style="width:100%">'+
            '</div>'+
            '<div class="column">'+
              '<img src="img_forest.jpg" alt="Forest" style="width:100%">'+
            '</div>'+
            '<div class="column">'+
              '<img src="img_mountains.jpg" alt="Mountains" style="width:100%">'+
            '</div>'+
          '</div>';
    }
    $('#containerDiv').append(text);
});

function makeAsyncCall(url,data,type,async){
    on();
    var text = '';
    for(var i=0;i<2;i++){
        text +='<div class="row">'+
            '<div class="column">'+
              '<img src="img_snow.jpg" alt="Snow" style="width:100%">'+
            '</div>'+
            '<div class="column">'+
              '<img src="img_forest.jpg" alt="Forest" style="width:100%">'+
            '</div>'+
            '<div class="column">'+
              '<img src="img_mountains.jpg" alt="Mountains" style="width:100%">'+
            '</div>'+
          '</div>';
    }
    $('#containerDiv').append(text);
    setTimeout(function(){
        off();
    },2000);
//    return $.ajax({
//        url:url,
//        data:data,
//        type:type,
//        async:async
//    });
}
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
} 