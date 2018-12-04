// Write your Pizza Builder JavaScript in this file.

var btnPepperonni = $(".btn-pepperonni");
var btnMushrooms = $(".btn-mushrooms");
var btnGreenPeppers = $(".btn-green-peppers");
var btnWhiteSauce = $(".btn-sauce");
var btnCrust = $(".btn-crust");



btnWhiteSauce.removeClass("active");
$( ".sauce" ).toggle();
$(".panel ul li:contains('$3 white sauce')").hide();
btnCrust.removeClass("active");
$(".crust").toggleClass("crust-gluten-free");
$(".panel ul li:contains('$5 gluten-free')").hide();



btnPepperonni.click(function() {
    btnPepperonni.toggleClass("active");
    $( ".pep" ).toggle();
    $(".panel ul li:contains('$1 pepperonni')").toggle();
    updatePrice (classStatus)
});
btnPepperonni.click(function(){});

btnMushrooms.click(function() {
    btnMushrooms.toggleClass("active");
    $( ".mushroom" ).toggle();
    $(".panel ul li:contains('$1 mushrooms')").toggle();
    updatePrice (classStatus)
});
btnMushrooms.click(function(){});

btnGreenPeppers.click(function() {
    btnGreenPeppers.toggleClass("active");
    $( ".green-pepper" ).toggle();
    $(".panel ul li:contains('$1 green peppers')").toggle();
    updatePrice (classStatus)
});
btnGreenPeppers.click(function(){});

btnWhiteSauce.click(function() {
    btnWhiteSauce.toggleClass("active");
    $( ".sauce" ).toggle();
    $(".panel ul li:contains('$3 white sauce')").toggle();
    updatePrice (classStatus)
});
btnWhiteSauce.click(function(){});
   
btnCrust.click(function() {
    btnCrust.toggleClass("active");
    $(".crust").toggleClass("crust-gluten-free");
    $(".panel ul li:contains('$5 gluten-free')").toggle();
    updatePrice (classStatus)
});
btnCrust.click(function(){});


var classStatus = [
    {name: btnPepperonni, price: 1},
    {name: btnMushrooms, price: 1},
    {name: btnGreenPeppers, price: 1},
    {name: btnWhiteSauce, price: 3},
    {name: btnCrust, price: 5},
]

function updatePrice (classStatus) {
    var total = 10;
    for (var i=0 ; i<classStatus.length ; i++){
        if (classStatus[i].name.hasClass("active")) {
            total += classStatus[i].price ;
        }
    }
    var displayedTotalPrice = $("#total").text(total + "$")
    return displayedTotalPrice;
}