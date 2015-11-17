/*GLOBAL VARS*/
var clientId = 'ts-sandbox',
    env = 'staging',
    displayCode = '19301',
    name = '',
    brand = '',
    productId = 'theme-3',
    categoryId = '',
    rootCategoryId ='',
    numReviews = 1,
    numQuestions = 0,
    numAnswers = 0,
    avgRating = 5.0,
    percentRecommended = 100;
/*END GLOBAL VARS*/

var featureObject= {
        clientID: clientId,
        environment: env,
        dc: displayCode,
        name: '',
        brand: '',
        productId: '',
        categoryId: '',
        detail1: '',
        detail2: ''
    };

$( document ).ready(function() {
    //fire off Page View Product
     _bvapiq.push(['PageViewProduct', {
        bvProduct: 'RatingsAndReviews',
        clientID: clientId,
        environment: env,
        dc: displayCode,
        productId: productId,
        brand: brand,
        categoryId: categoryId,
        rootCategoryId: rootCategoryId,
        numReviews: numReviews,
        numQuestions: numQuestions,
        numAnswers: numAnswers,
        avgRating: avgRating,
        percentRecommended: percentRecommended
    } ]);


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
    $(".block-list.module li input").on('click', function(e) {
       subFilterClick($(this));
    });


    // sort by
    $( ".chooser-option-current.js-chooser-option-current" ).on('click', function(e) {
        //do some css trickery
        $( ".chooser-option-current.js-chooser-option-current" ).addClass('hidden');
        $( ".chooser.js-chooser.chooser-fixed-width.chooser-alt" ).addClass('active');
        sortClick($(this));
    });
    //sort by sub filter
    $(" .chooser-option.js-chooser-option").on('click', function(e) {
        subSortClick($(this));
        $( ".chooser-option-current.js-chooser-option-current" ).removeClass('hidden');
        $( ".chooser.js-chooser.chooser-fixed-width.chooser-alt" ).removeClass('active');
    });

    // write a review
    $( "#WMItemWriteReviewLnk" ).on('click', function(e) {
        writeReviewClick($(this));
    });
    // review helpful
        // yes
        $( ".btn-vote.js-btn-vote-yes" ).on('click', function(e) {
            helpfulYesClick($(this));
        });
        // no
        $( ".btn-vote.js-btn-vote-no" ).on('click', function(e) {
            helpfulNoClick($(this));
        });

    // read more
    $( ".js-ellipsis-read-more.ellipsis-read-more a").on('click', function(e) {
        e.preventDefault();
        // start some css trickery
        $( ".ellipsis-read-more a" ).text('Read Less');
        $( ".ellipsis-content.module" ).toggleClass('expanded');
        // end css trickery

        // readLessClick($(this));
        readMoreClick($(this));
    
    });

    // report
    $( ".customer-review-report-btn" ).on('click', function(e) {
        reportClick($(this));
    });
    // badge (e.g. verified purchaser, top 100 contributor)
    $( ".review-badge" ).on('click', function(e) {
        badgeClick($(this));
    }); 
    // see all > 
    $( ".js-reviews-see-all.arrow-link" ).on('click', function(e) {
        seeAllClick($(this));
    });
    // pagination
    $( ".paginator-list ul li a" ).on('click', function(e) {
        paginationClick($(this));
    });
    // stars Histogram
    $( ".js-rating-filter.rating-filter" ).on('click', function(e) {
        starsHistogramClick($(this));
    });

});
    

//we need to have a controlled vocabulary for the details values
//that is used to construct the feature object. What has been 
//suggested is:
//1. filter
//2. sort
//3. paginate

//?? should the the details2 value be the ID of the control? What does 
//that get us?


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
    constructFeatureUsed('btn', 'helpful-yes');
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
    constructFeatureUsed('link', "see_all");
}
function paginationClick(item){
    console.log('pagination');
    //get the actual page value they clicked on. 
    constructFeatureUsed('pagination', $(item).text());
}
function seeAllClick(item){
    console.log('seeAll');
    constructFeatureUsed('link', "see_all");
}
function badgeClick(item){
    console.log('badge');
    constructFeatureUsed('link', "badge");
}
function starsHistogramClick(item){
    console.log('starsHistogramClick');
    constructFeatureUsed('link', "stars");
}


/*CONSTRUCT THE OBJECT*/
function constructFeatureUsed(detail1, detail2){
    featureObject.detail1 = detail1;
    featureObject.detail2 = detail2;
}
