Bazaarvoice API Analytics starter kit
================

The Bazaarvoice API Analytics starter kit is a static sample consisting of HTML, CSS, and js that demonstrates how API users should implement the required analytics tags when using the Bazaarvoice API. 

Before Using:
-------------
Read the documentation on the [Bazaarvoice Developer Portal](https://developer.bazaarvoice.com/apis/conversations/tutorials/Analytics) to ensure you understand the benefits of analytics as well as the requirements. Documentation includes the [API Terms of Use](https://developer.bazaarvoice.com/legal/terms_of_use).  

Make sure the ROI beacon is turned on. This is accomplished with the help of your Bazaarvoice engineering team.

Also make sure that you have included the domain enabled to accept 3rd party cookies. This is also something the Bazaarvoice engineering team can assist with. 

The starter kit is meant as a sample. It is static and by no means optimized for speed and scale. There are no calls made to the API to get product data.  The code is provided as a means to help API users better understand API analytics. 

Hosted Sample:
---------------
Open the product description page [hosted API Analytics solutions](https://s3.amazonaws.com/api-analytics/index.html) with the Developer console open. Interact with the page, scroll to have different content in view and interact with different controls. This will cause several messages to appear in the console. JQuery event handlers are attached to several HTML inputs which in-turn queue the analytics code.

Also available from the hosted sample is a [conversion event](https://s3.amazonaws.com/api-analytics/conversion.html) page. The analytics on this page are executed on page load. There are several options available for defining and capturing conversion events. Conversion is described in detail in the [conversion analytics tags](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#conversion-analytics-tags) section. 

Console logs are captured becuase within the [hosted API Analytics solutions](https://s3.amazonaws.com/api-analytics/index.html) the 'environment' variable is set to ['staging'](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L3). This flag is used in the js code to enable console.logs. When the 'environment' flag is set to anything else (including the other accepted value 'production') logging will not occur. 

<img width=40% alt="console logging by setting environment variable" src="https://cloud.githubusercontent.com/assets/2584258/11480794/149d1d44-975f-11e5-91a2-0a5cdea59c23.png">

What is the sample doing:
-------------------------
## Sample Product Details Page

The javascript on the [sample product description page](https://s3.amazonaws.com/api-analytics/index.html) listens for different events.

#### [Page View Product](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#page-view-product)

It is required that the API Analytics capture all [product details page views](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#page-view-product). In this sample, the [API call](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L51-L53) fires on page load and passes an object. In this sample, the analytics code is execute using jQuery's document.ready(function). The key/values pairs and their priorities are documented below in the table.

| Key  | Priority | 
| :------------ |---------------:|
| *clientId*              | `required`      |
| *env*                   | `recommended`   |
| *displayCode*           | `required`      |
| *name*                  | `recommended`   |
| *brand*                 | `recommended`   |
| *productId*             | `required`      |
| *categoryId*            | `recommended`   |
| *rootCategoryId*        | `recommended`   |
| *numReviews*            | `optional`      |
| *numQuestions*          | `optional`      |
| *avgRating*             | `recommended`   |
| *percentRecommended*    | `optional`      |
___


Not all Product details pages have Consumer Generated Content (CGC) within the browser's viewable area when the page is rendered.  Often users must scroll to get to view the CGC. As part of the API Analytics requirements, this event (CGC in view) must also be captured. 


users view and/or interact with the Bazaarvoice data.  For the events that are captured, several parameters around the events and inputs are acquired and queued up to be send back to Bazaarvoice. The following lists the different keys and value priorities for each analytics call:


#### [Feature Used in View](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#feature-used-in-view)

| Key  | Priority | 
| :------------ |---------------:|
| *clientID*              | `required`      |
| *environment*           | `recommended`   |
| *displayCode*           | `required`      |
| *name*                  | `recommended`   |
| *brand*                 | `recommended`   |
| *productId*             | `required`      |
| *categoryId*            | `recommended`   |
| *rootCategoryId*        | `recommended`   |
| *numReviews*            | `optional`      |
| *numQuestions*          | `optional`      |
| *avgRating*             | `recommended`   |
| *percentRecommended*    | `optional`      |
___

#### [Feature Used](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#feature-used-in-view)

| Key  | Priority | 
| :------------ |---------------:|
| *clientID*              | `required`      |
| *environment*           | `recommended`   |
| *displayCode*           | `required`      |
| *brand*                 | `recommended`   |
| *productId*             | `required`      |
| *categoryId*            | `recommended`   |
| *rootCategoryId*        | `recommended`   |


| *minVisiblePixels*        | `optional`   |
| *debouncePeriodMs*        | `optional`   |
| *inviewTime*              | `optional`   |
| *containerId*        | `required`   |
            
___

How to Use:
----------------

1. Download the code.
2. Make sure the ROI beacon is turned on. This is accomplished with the help of your Bazaarvoice engineering team. 
3. Host the code on a server (e.g. MAMP). You will need to modify the host file so that application is accesible other than localhost.
4. Interact with the code - open the mock Product Details page (index.html) as well as the conversion page (conversion.html) in a browser with the developer console open. Watch the diffent console logging occur. The various messages alert the user if the call passed as well as if parameters are missing. 
5. Investigate the js files associated the different HTML pages.  This is just the sample implementation. You may accomplish the end result in a variety of different ways. 
6. Enable the [Bazzarvoice Analytics Inspector Chrome extension](https://github.com/bazaarvoice/magpie-inspector/) 
![](/images/inspector_icon.png). See the analytics data that is being collected. Again, various messages alert the user if the call passed as well as if parameters are missing. 

Purpose of sample 
----------------

This sample is used show clients using the Bazzarvoice API solution how to implement the required API analytics. The following API calls are inlcuded as part of the sample:

1. Page View - product details page
2. Featured Used - consumer generated content
3. Feature Used in View - consumer generated content
4. Conversion - conversion page
5. Conversion Transaction - conversion page
6. PIIConversionTransaction - conversion page

Details on the function of each analyics calls are documented on the [Bazaarvoice Developer Portal]().

Things to Note 
----------------
This sample does not make API calls to retreive and bind client data. Values that should be obtained from the API are hard coded in the HTMl and js files. Comments have been added where the values should be obtained from the API. 

The sample works in conjunction with the [Bazzarvoice Analytics Inspector](https://github.com/bazaarvoice/magpie-inspector/) to aid clients in making sure the implementation is complete. 

It is required to have an Bazzarvoice staff member to agree that an implementation has been completed.  

