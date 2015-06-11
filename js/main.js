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

    
    // CSS hover styling
    $( ".chooser-option.js-chooser-option").hover(
        function() {
            $( this ).addClass( "active" );
        }, function() {
            $( this ).removeClass( "active" );
        }
    );



    $( ".ellipsis-read-less a" ).click(function() {
        alert('aa');
        // $('.ellipsis-content.module').css("max-height", "180px");
        // $( ".ellipsis-read-less a" ).text('Read More');
        // $( ".js-ellipsis-read-more" ).removeClass('ellipsis-read-less');
        // $( ".js-ellipsis-read-more" ).addClass('ellipsis-read-more');
        // $( ".ellipsis-read-more" ).addClass('less');
    });


    // show filters

    // sort by
    $( ".chooser-option-current.js-chooser-option-current" ).click(function() {
        //do some css trickery
        $( ".chooser-option-current.js-chooser-option-current" ).addClass('hidden');
        $( ".chooser.js-chooser.chooser-fixed-width.chooser-alt" ).addClass('active');

        sortClick($(this));
    });
    //sort by sub filter
    $(" .chooser-option.js-chooser-option").click(function(){
        subSortClick($(this));
    });

    // write a review
    $( "#WMItemWriteReviewLnk" ).click(function() {
        writeReviewClick($(this));
    });
    // review helpful
        // yes
        $( ".btn-vote.js-btn-vote-yes" ).click(function() {
            helpfulYesClick($(this));
        });
        // no
        $( ".btn-vote.js-btn-vote-no" ).click(function() {
            helpfulNoClick($(this));
        });

    // read more
    $( ".js-ellipsis-read-more.ellipsis-read-more a" ).click(function() {
        // start some css trickery
        $('.ellipsis-content.module').css("max-height", "360px");
        $( ".ellipsis-read-more a" ).text('Read Less');
        $( ".js-ellipsis-read-more" ).removeClass('ellipsis-read-more');
        $( ".js-ellipsis-read-more" ).addClass('ellipsis-read-less');
        // end css trickery
        readMoreClick($(this));
    });
    // read less
    $( ".js-ellipsis-read-more.ellipsis-read-less a" ).click(function() {
        readLessClick($(this));
    });
    // report
    $( ".customer-review-report-btn" ).click(function() {
        reportClick($(this));
    });
    // badge (e.g. verified purchaser, top 100 contributor)
    $( ".review-badge" ).click(function() {
        badgeClick($(this));
    }); 
    // see all > 
    $( ".js-reviews-see-all.arrow-link" ).click(function() {
        seeAllClick($(this));
    });
    // pagination
    $( ".paginator-list ul li a" ).click(function() {
        paginationClick($(this));
    });
});
function sortClick(item){
    console.log('sort');
}
function subSortClick(item){
    console.log('subSort');
}
function helpfulNoClick(item){
    console.log('Helpful - no');
}
function helpfulYesClick(item){
    console.log('Helpful - yes');
}
function writeReviewClick(item){
    console.log('write Review');
}
function readMoreClick(item){
    console.log('read More');
}
function readLessClick(item){
    console.log('read Less');
}
function reportClick(item){
    console.log('report');
}
function paginationClick(item){
    console.log('pagination');
}
function seeAllClick(item){
    console.log('seeAll');
}
function badgeClick(item){
    console.log('badge');
}
