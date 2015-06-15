$( document ).ready(function() {

    var InViewData = {
        clientID: 'testClient',
        environment: 'staging',
        bvAttributes: {
            minVisiblePixels: 100,
            debouncePeriodMs: 250,
            inviewTime: 5000,
            containerId: 'CGC_Container'
        },
        dc: "custom_DC",
        productId: '1234567-bunnyhat',
        brand: 'Test Brand',
        categoryId: 'hats',
        rootCategoryId: 'garments',
        ref: 'test'
    };
    _bvapiq.push(['FeatureUsedInView', InViewData]);
    $(window).on('resize, scroll', function(event) {_bvapiq.push(['FeatureUsedInView', InViewData]); });
    $(window).on('bvViewedUGC', function(event) {_bvapiq.push(['FeatureUsedViewedUGC', InViewData]); });

});