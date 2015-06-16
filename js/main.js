/*GLOBAL VARS
*/
var fo={
    clientID: 'testClient',
    environment: 'staging',
    dc: 'custom_DC',
    name: '',
    brand: '',
    productId: '',
    categoryId: '',
    detail1: '',
    detail2: ''
};



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



   


    //filters
    $(" .review-filter-toggle").on('click', '.more-link', function(e) {
        e.preventDefault();
        $(".expander-content.module.age-gender-filters").css("display", "block");
        $(".review-filter-toggle .more-link").toggleClass("expanded");
        $(".review-filter-toggle .more-link").text("Hide Filters");
        filterClick($(this));
    });


    $(" .review-filter-toggle").on('click', '.more-link.expanded', function(e) {
        e.preventDefault();
        $(".expander-content.module.age-gender-filters").css("display", "none");
        $(".review-filter-toggle .more-link.expanded").toggleClass("expanded");
        $(".review-filter-toggle .more-link").text("Show filters");
        filterClick($(this));
    });


    //sub Filter
    $(".block-list.module li input").click(function(){
       subFilterClick($(this));
    });


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
        $( ".chooser-option-current.js-chooser-option-current" ).removeClass('hidden');
        $( ".chooser.js-chooser.chooser-fixed-width.chooser-alt" ).removeClass('active');
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
    // $( ".js-ellipsis-read-more.ellipsis-read-more a" ).click(function() {
    $( ".js-ellipsis-read-more.ellipsis-read-more a").on('click', function(e) {
        e.preventDefault();
        // start some css trickery
        // $('.ellipsis-content.module').css("max-height", "360px");
        $( ".ellipsis-read-more a" ).text('Read Less');
        $( ".ellipsis-content.module" ).toggleClass('expanded');
        // $( ".js-ellipsis-read-more" ).addClass('ellipsis-read-less');
        // end css trickery

        // readLessClick($(this));
        readMoreClick($(this));
    
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
    

function filterClick(item){
    console.log('filter');
}
function subFilterClick(item){
    console.log('subFilter');
}
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
    createFeatureUsed('btn', 'helpful-yes');
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
    createFeatureUsed('link', "see_all");
}
function paginationClick(item){
    console.log('pagination');
    //get the actual page value they clicked on. 
    createFeatureUsed('pagination', $(item).text());
}
function seeAllClick(item){
    console.log('seeAll'); 
    createFeatureUsed('link', "see_all");
}
function badgeClick(item){
    console.log('badge');
    createFeatureUsed('link', "badge");
}


/*CONSTRUCT THE OBJECT*/
function constructFeatureUsed(detail1, detail2){
    fo.detail1 = detail1;
    fo.detail2 = detail2;

    return fo;

}
