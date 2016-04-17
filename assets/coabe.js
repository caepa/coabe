// START JQUERY MOBILE SCRIPTS /////////////////////
// Helper Functions /////////////////////
$(document).on("pageinit", function () {
    // Loads External Header, Footer, Panel --> ALL Pages + Popups/////////////////////
    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header'], [data-role='footer']" ).toolbar({theme:'b',position:'fixed'});
    $( "body>[data-role='panel']" ).panel({theme:'b', display:'overlay'});
    $( "#popupNewsletter, #popupContact" ).enhanceWithin().popup();
    // Panel Loads Open + ui-responsive-panel Keeps Reveal Panal Open /////////////////////
    //$(document).on('pagecontainerchange', function() {
    //    $('#nav-panel').panel('open');
    //});
    $.mobile.resetActivePageHeight();
});
// Updates Header to Match Page Name and Active Class to Nav /////////////////////
$( document ).on( "pagecontainerchange", function() {
    // Each of the four pages in this demo has a data-title attribute
    // which value is equal to the text of the nav button
    // For example, on first page: <div data-role="page" data-title="Info">
    var current = $( ".ui-page-active" ).jqmData( "title" );
    // Change the heading text
    //$( "[data-role='header'] h1" ).text( current );
    // Remove active class from nav buttons
    $( "[data-role='navbar'] a.ui-btn-active, [data-role='panel'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
    // Add active class to current nav button
    $( "[data-role='navbar'] a, [data-role='panel'] a" ).each(function() {
    if ( $( this ).text() === current ) {
    $( this ).addClass( "ui-btn-active" );
    }
    });
});
// Sizes Panel to fit Below Header /////////////////////
//$(window).load(function(){
//var header = $('[data-role=header]').outerHeight();
//var panel = $('.ui-panel').height();
//var panelheight = panel - header;
//    $('.ui-panel').css({
//        'top': header,
//        'min-height': panelheight
//    });
//});
// Finds Height of ui-content /////////////////////
function ScaleContentToDevice(){
    scroll(0, 0);
    var screen            = $.mobile.getScreenHeight(),
        headOffset        = parseInt($(".ui-header").css("top")) || 0,
        bottomOffset      = parseInt($(".ui-footer").css("bottom")) || 0,
        // 
        header            = $(".ui-header").outerHeight() + headOffset,
        footer            = $(".ui-footer").outerHeight() + bottomOffset,
        //
        contentCurrent    = $(".ui-content").outerHeight() - $(".ui-content").height(),
        content           = screen - header - footer - contentCurrent;
        //
    $(".ui-content").height(content);
};
// Calls Function ScaleContentToDevice /////////////////////
$( document ).on( "pagecontainerbeforeshow", function(){
    ScaleContentToDevice();
});
// Finds Height of ui-content on Re-Size /////////////////////
$( window ).on("resize orientationchange", function(){
    ScaleContentToDevice();
});

//Swipe Event Transitions		/////////////////////////////////
$(document).off('swipeleft').on('swipeleft', 'section', function(event){    
    if(event.handled !== true) // This will prevent event triggering more then once
    {    
        var nextpage = $.mobile.activePage.next('section[data-role="page"]');
        // swipe using id of next page if exists
        if (nextpage.length > 0) {
            $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
        }
        event.handled = true;
    }
    return false;         
});
/////
$(document).off('swiperight').on('swiperight', 'section', function(event){   
    if(event.handled !== true) // This will prevent event triggering more then once
    {      
        var prevpage = $(this).prev('section[data-role="page"]');
        if (prevpage.length > 0) {
            $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
        }
        event.handled = true;
    }
    return false;            
});
//END JQUERY MOBILE SCRIPTS /////////////////////
 /////////////////////