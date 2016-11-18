/*
 * @fileOverview main.js - Styling code.
 */
$( document ).ready(function() {
    // CSS hover styling
    $(".chooser-option.js-chooser-option").hover(
        function() {
            $( this ).addClass( "active" );
        }, function() {
            $( this ).removeClass( "active" );
        }
    );

    // Additional CSS
    $(".chooser-option-current.js-chooser-option-current" ).on('click', function (e) {
        $( ".chooser-option-current.js-chooser-option-current" ).addClass('hidden');
        $( ".chooser.js-chooser.chooser-fixed-width.chooser-alt" ).addClass('active');
    });
});