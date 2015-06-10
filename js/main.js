// A $( document ).ready() block.
$( document ).ready(function() {
    
    //fire off Page View Product
    // _bvapiq.push(['PageViewProduct', {
    //     clientID: 'testClient',
    //     environment: 'staging',
    //     dc: "custom_DC",
    //     productId: '1234567-bunnyhat',
    //     brand: 'Test Brand',
    //     categoryId: 'hats',
    //     rootCategoryId: 'garments',
    //     numReviews: 1,
    //     numQuestions: 0,
    //     numAnswers: 0,
    //     avgRating: 5.0,
    //     percentRecommended: 100
    // } ]);



    // write a review btn
    $( "#WMItemWriteReviewLnk" ).click(function() {
        alert( "Write a review clicked" );
    });

    $( ".ellipsis-read-more" ).click(function() {
        $('.ellipsis-content.module').css("max-height", "360px");
        // also change to read less. 
    });



    // show filters
    // write a review
    // sort by
    // badge (verified purchaser, top 100 contributor)
    // review helpful
        // yes 
        // no
    // read more
    // report
    // pagination
    // see all > 

});

