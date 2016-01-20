/*GLOBAL VARS*/
var clientId = 'ts-sandbox',
    env = 'staging',
    displayCode = '19301',
    name = '',
    brand = 'beer & company',
    productId = 'theme-3',
    categoryId = 'canned',
    rootCategoryId ='',
    numReviews = 1,
    numQuestions = 0,
    numAnswers = 0,
    avgRating = 5.0,
    percentRecommended = 100;

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

// populate the InViewData Object
var InViewData = {
    clientID: clientId,
    environment: 'staging',
    bvAttributes: {
        minVisiblePixels: 100,
        debouncePeriodMs: 250,
        inviewTime: 5000,
        containerId: 'CGC_Container'
    },
    dc: displayCode,
    productId: productId,
    bvProduct: 'RatingsAndReviews',
    brand: brand,
    categoryId: categoryId,
    rootCategoryId: rootCategoryId
};

$( window ).on('resize, scroll', function(event) {
    featuredUsedInView(InViewData);
});

$( document ).ready(function() {
    //fire off Page View Product when ever the page is loaded
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
        featuredUsed($(this), 'filter', 'display');
    });

    $(" .review-filter-toggle").on('click', '.more-link.expanded', function(e) {
        e.preventDefault();
        $(".expander-content.module.age-gender-filters").css("display", "none");
        $(".review-filter-toggle .more-link.expanded").toggleClass("expanded");
        $(".review-filter-toggle .more-link").text("Show filters");
        featuredUsed($(this), 'filter', 'hide');
    });


    //sub Filter
    $(".block-list.module li input").on('click', function(e) {
       featuredUsed($(this), 'subFilter', '');
    });


    // sort by
    $( ".chooser-option-current.js-chooser-option-current" ).on('click', function(e) {
        $( ".chooser-option-current.js-chooser-option-current" ).addClass('hidden');
        $( ".chooser.js-chooser.chooser-fixed-width.chooser-alt" ).addClass('active');
        
        
    });
    //sort by sub filter
    $(" .chooser-option.js-chooser-option").on('click', function(e) {
        featuredUsed($(this), 'subSortClick', '');
        $( ".chooser-option-current.js-chooser-option-current" ).removeClass('hidden');
        $( ".chooser.js-chooser.chooser-fixed-width.chooser-alt" ).removeClass('active');
    });

    // write a review
    $( "#WMItemWriteReviewLnk" ).on('click', function(e) {
        featuredUsed($(this), 'writeReview', '');
    });
    
    // review helpful - yes
    $( ".btn-vote.js-btn-vote-yes" ).on('click', function(e) {
        featuredUsed($(this), 'helpfulness', 'yes');
    });
    
    // review helpful - no
    $( ".btn-vote.js-btn-vote-no" ).on('click', function(e) {
        featuredUsed($(this), 'helpfulness', 'no');
    });

    // read more
    $( ".js-ellipsis-read-more.ellipsis-read-more a").on('click', function(e) {
        e.preventDefault();
        featuredUsed($(this), 'expand review', $(this)[0].innerHTML);
        $( ".ellipsis-read-more a" ).text('Read Less');
        $( ".ellipsis-content.module" ).toggleClass('expanded');
    });

    // report
    $( ".customer-review-report-btn" ).on('click', function(e) {
        featuredUsed($(this), 'report', '');
    });
    
    // badge (i.e. verified purchaser, top 100 contributor)
    $( ".review-badge" ).on('click', function(e) {
        featuredUsed($(this), 'badge', '');
    });
    // see all 
    $( ".js-reviews-see-all.arrow-link" ).on('click', function(e) {
        featuredUsed($(this), 'see all', '');
    });

    // pagination
    $( ".paginator-list ul li a" ).on('click', function(e) {
        featuredUsed($(this), 'pagination', $(this.innerHTML));

    });
    // stars Histogram
    $( ".js-rating-filter.rating-filter" ).on('click', function(e) {
        featuredUsed($(this), 'starHistogram', $(this.getElementsByClassName('meter-inline')[0]).text());
    });
});
    

//we need to have a controlled vocabulary for the details values
//that is used to construct the feature object. 
    //suggestions:
    //1. filter
    //2. sort
    //3. paginate

function featuredUsedInView(item){
    _bvapiq.push(['FeatureUsedInView', item]);
}

function featuredUsed(item, detail1, detail2){
    var name ='';

    if ((item[0].id == null ) || (item[0].id == '')) {
        console.log('get another ID..look at the child');
        if (item.hasClass('rating-filter')){ //this is the histogram
            name = item[0].children[1].className;
        }
        else if (item.hasClass('chooser-option')){ //this is the subsort
            name = item[0].className.substring(0, item[0].className.indexOf(' '));
            detail2 = item[0].innerHTML;
        }
        else if (item.hasClass('js-pagination')){ //this is Pagination
            name = item[0].className.substring(0, item[0].className.indexOf(' '));
            detail2 = item[0].innerHTML;
        }
    }
    else{
        //hack for ID check when using Labels
        if(item[0].getAttribute('type') == 'checkbox'){ //used for SubFilters
            name = item[0].getAttribute('type');
            detail2 = item[0].getAttribute('value');
        }
        else{
            name = item[0].id;
        }
    }

    _bvapiq.push(['FeatureUsed', {
        clientID: featureObject.clientID,
        environment: featureObject.environment,
        dc: featureObject.dc,
        name: name,
        brand: featureObject.brand,
        productId: featureObject.productId,
        bvProduct: null,
        categoryId: featureObject.categoryId,
        detail1: detail1,
        detail2: detail2
    }]);
}