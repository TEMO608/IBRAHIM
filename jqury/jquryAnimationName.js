$(document).ready(()=> {
    let lName =  $('#Main__Body__Left__Box__DateName__Name sup');
    let fName =  $('#Main__Body__Left__Box__DateName__Name sub');

    lName.animate({
        rotate:"360deg" ,
        translate:"-250px"
    },2000).animate({
        rotate:"-360deg" ,
        translate:"+=250px"
    },2000)

    fName.animate({
        rotate:"360deg",
        translate:"250px"
    },2000).animate({
        rotate:"-=360deg" ,
        translate:"-=250px"
    },2000)

});  