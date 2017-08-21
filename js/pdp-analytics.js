// Global state variables.
var name = '',
  brand = 'beer & company',
  productId = 'theme-3',
  type = 'product',
  categoryId = 'canned',
  rootCategoryId ='',
  numReviews = 1,
  numQuestions = 0,
  numAnswers = 0,
  avgRating = 5.0,
  percentRecommended = 100,
  bvProduct = 'RatingsAndReviews';

// If your PDP is using BV stats for R&R, track a "RatingsAndReviews" PageView.
// Similarly, track "QuestionsAndAnswers" PageView for Q&A on the PDP.
BV.pixel.trackPageView({
  bvProduct: 'RatingsAndReviews',
  productId: productId,
  type: type,
  brand: brand,
  categoryId: categoryId,
  rootCategoryId: rootCategoryId,
  numReviews: numReviews,
  numQuestions: numQuestions,
  numAnswers: numAnswers,
  avgRating: avgRating,
  percentRecommended: percentRecommended
});

// Additionally, set up any listeners for "InView" tracking.
//
// This triggers an analytics event once 100 pixels of the 'CGC_Container'
// container is in the browser viewport and has been visible for 5000 ms.
BV.pixel.trackViewedCGC({
  productId: productId,
  bvProduct: 'RatingsAndReviews',
  brand: brand,
  categoryId: categoryId,
  rootCategoryId: rootCategoryId
}, {
  minPixels: 100,
  minTime: 5000,
  containerId: 'CGC_Container'
});

$( document ).ready(function() {
    //filters
    $(".review-filter-toggle").on('click', '.more-link', function filtersExpandClick (e) {
        e.preventDefault();
        //featuredUsed($(this), $(this).attr('bvEventType'), $(this).attr('data-value'));
        $(this).attr('data-value', 'less');
        $(".expander-content.module.age-gender-filters").css("display", "block");
        $(".review-filter-toggle .more-link").toggleClass("expanded");
        $(".review-filter-toggle .more-link").text("Hide Filters");
    });

    $(" .review-filter-toggle").on('click', '.more-link.expanded', function filtersCollapseClick(e) {
        e.preventDefault();
        //featuredUsed($(this), $(this).attr('bvEventType'), $(this).attr('data-value'));
        $(this).attr('data-value', 'more');
        $(".expander-content.module.age-gender-filters").css("display", "none");
        $(".review-filter-toggle .more-link.expanded").toggleClass("expanded");
        $(".review-filter-toggle .more-link").text("Show filters");
        // featuredUsed($(this), 'filter', 'hide');
    });

    $( ".js-ellipsis-read-more.ellipsis-read-more a").on('click', function reLessClick(e) {
        e.preventDefault();
        //featuredUsed($(this), $(this).attr('bvEventType'), $(this).attr('data-value'));
        featuredUsed($(this).attr('bvEventType'), $(this).attr('data-value'), '');

        $( ".ellipsis-read-more a" ).text('Read Less');
        if ($( ".ellipsis-read-more a" ).attr("data-value") == "expand") {
            $( ".ellipsis-read-more a" ).attr("data-value","collapse");
        }
        else{
            $( ".ellipsis-read-more a" ).attr("data-value", "expand");
            $( ".ellipsis-read-more a" ).text('Read More');
        }
        $( ".ellipsis-content.module" ).toggleClass('expanded');
    });

    $(".block-list.module li input").on('click', function subFilterClick(e) {
       featuredUsed($(this).attr('bvEventType'), $(this).attr('value'), this.checked);
    });

    $(" .chooser-option.js-chooser-option").on('click', function sortClick(e) {
        console.log('SortBy');
        featuredUsed($(this).attr('bvEventType'), $(this).attr('data-chooser-value'), '');
        //featuredUsed($(this), $(this).attr('bvEventType'), $(this).attr('data-chooser-value'));
        $( ".chooser-option-current.js-chooser-option-current" ).removeClass('hidden');
        $( ".chooser.js-chooser.chooser-fixed-width.chooser-alt" ).removeClass('active');
    });

    $( ".js-write-review" ).on('click', function writeReviewClick(e) {
        featuredUsed($(this).attr('bvEventType'), $(this).attr('data-value'), '');
    });
    $( ".btn-vote.js-btn-vote-yes, .btn-vote.js-btn-vote-no" ).on('click', function helpfulnessClick(e) {
        featuredUsed($(this).attr('bvEventType'), $(this).attr('data-value'), '');
    });
    $( ".paginator-list ul li a" ).on('click', function paginationClick(e) {
        featuredUsed($(this).attr('bvEventType'), 'next', $(this).attr('data-page'));
    });
    $( ".customer-review-report-btn" ).on('click', function reportClick(e) {
        featuredUsed($(this).attr('data-value'), '', '');
    });
    $( ".product-subhead .reviewCount" ).on('click', function reviewCount(e) {
       featuredUsed('link', $(this).attr('data-value'), 'PrimaryRatingSummary');
    });
    $( ".product-subhead .q_and_a" ).on('click', function qAndA(e) {
       featuredUsed('link', $(this).attr('data-value'), 'PrimaryRatingSummary');
    });
    $( ".review-histogram .review-histogram-wrapper .rating-filter" ).on('click', function filteredHistogram(e) {
      featuredUsed($(this).attr('bvEventType'), '', $(this).attr('data-value'));
    });

    $( ".js-reviews-see-all.arrow-link" ).on('click', function seeAllClick(e) {
        featuredUsed($(this), $(this).attr('bvEventType'), $(this).attr('data-page'));
    });

});

function featuredUsed(name, detail1, detail2){
  BV.pixel.trackEvent('Feature', {
    type: 'Used',
    name: name,
    brand: brand,
    productId: productId,
    bvProduct: bvProduct,
    categoryId: categoryId,
    detail1: detail1,
    detail2: detail2
  });
}
