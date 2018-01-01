/*
##  AUTHOR      :   Robert James Patterson
##  DATE        :   11/03/2017
##  FILENAME    :   http://www.casadebobo.com/src/casadebobo.css
##  SYNOPSIS    :   A MEAN stack website built on AWS services.
##
*/

// This function is to show the hidden text on the index.html
function showWhyText (event)
{
    $(this).closest('.why-panel').find('.hidden-text').slideToggle();
}

// This is the event handler for the onclick on th #tourpanel in bobotour.html
function showMoreInfo(event)
{
    $(this).closest('#tour-panel').find('.hidden-text').slideToggle();
}

$(document).ready(function () 
{
    // hide '.hidden-text' on 'document.ready'
    $('.hidden-text').slideUp();
    
    /*
    ** Setup event handlers
    */

    // this is for the 'mouseenter' & 'mouseleace' on the '.why-panel' class on 'index.html' 
    $('.why-panel').on('mouseenter mouseleave', showWhyText);

    // This is the event handler for the onclick on th #tourpanel in bobotour.html
    $('#tour-panel').on('click', showMoreInfo);

});