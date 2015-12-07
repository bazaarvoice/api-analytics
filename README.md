Bazaarvoice API Analytics starter kit
================

The Bazaarvoice API Analytics starter kit is a sample consisting of static HTML, CSS, and js that demonstrates how API users should implement the required analytics tags when using the Bazaarvoice API. 

Before Downloading:
-------------
1. Read the documentation on the [API Analytics tutorial](https://developer.bazaarvoice.com/apis/conversations/tutorials/Analytics) to ensure you understand the benefits of analytics as well as the requirements. Developers should also be familiar with the [API Terms of Use](https://developer.bazaarvoice.com/legal/terms_of_use).
2. Download and install the [Bazaarvoice Analytics Inspector for Chrome](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/aepeegmfgianehembekeaamchabhfnng/related).
3. Visit the [hosted sample pages](https://github.com/bazaarvoice/api-analytics/blob/master/README.md#hosted-sample). Both the [product description page](https://s3.amazonaws.com/api-analytics/index.html) and the [conversion page](https://s3.amazonaws.com/api-analytics/conversion.html) can be considered working samples of the API Analytics starter kit.
4. Realize that the starter kit is meant as a sample. It is static and by no means optimized for speed and scale. There are no calls made to the Conversations API to get product data. The key/value are hard coded in the js file. The code is provided as a means to help API users better understand API analytics.

Hosted Sample:
---------------
In addition to providing the starter kit for download, the tutorial is hosted for client interaction.

First, download and install the [Bazaarvoice Analytics Inspector for Chrome](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/aepeegmfgianehembekeaamchabhfnng/related).  Once install you will see the Analytics Inspector icon in the Chrome browser. 

<img width=30% alt="Bazaarvoice Analytics Inspector browser extenstion" src="https://cloud.githubusercontent.com/assets/2584258/11514761/c7948e42-983f-11e5-8b90-a3f724da7475.jpg">

Next, visit the product description page [hosted API Analytics solutions](https://s3.amazonaws.com/api-analytics/index.html). Open the [Bazaarvoice Analytics Inspector](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/aepeegmfgianehembekeaamchabhfnng/related) and interact with the page. The tool documents each time an analytic event is captured and send the Bazzarvoice.  Notice the red counter on the icon.

<img width=30% alt="Bazaarvoice Analytics Inspector browser extenstion" src="https://cloud.githubusercontent.com/assets/2584258/11639298/b2339294-9cf1-11e5-8e5a-2cd59183dd44.jpg">

Scroll and click different HTML inputs. Notice Feature events being populated. Event handlers are attached to several HTML inputs which in-turn queue the analytics code.

<img width=40% alt="product details page, api analytics inspector" src="https://cloud.githubusercontent.com/assets/2584258/11515432/7e035c6e-9843-11e5-917b-f607973a2297.png">

Also available within the hosted site is a sample [conversion](https://s3.amazonaws.com/api-analytics/conversion.html) page. Again open the page in a browser with the [Bazaarvoice Analytics Inspector](https://chrome.google.com/webstore/detail/bazaarvoice-analytics-ins/aepeegmfgianehembekeaamchabhfnng/related) open. The analytics on this page are executed on page load. There are several options available for defining and capturing conversion events. Conversion is described in detail in the [conversion analytics tags](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#conversion-analytics-tags) section. 

<img width=40% alt="conversion page, api analytics inspector" src="https://cloud.githubusercontent.com/assets/2584258/11515431/7e01aaa4-9843-11e5-9b76-3ac6934dbc8a.png">

<REMOVE??>
Console logs are displayed because within the [hosted API Analytics solutions](https://s3.amazonaws.com/api-analytics/index.html) the 'environment' variable is set to ['staging'](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L3). This flag is used in the js code to enable console.logs. When the 'environment' flag is set to anything else (including the other accepted value 'production') logging will not occur. 
</REMOVE??>

What is the sample doing?
-------------------------
#### Sample Product Details Page

The javascript on the [sample product description page](https://s3.amazonaws.com/api-analytics/index.html) listens for different events. The API Analytics code executes when they occur.

##### [Page View Product](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#page-view-product)

Each time a products detail page is rendered, the transaction analytics tag '[page view product](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#page-view-product)' is executed. In this sample, the '[page view product](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L51-L53)' is associated with the page load event.  When page load is complete, the analytics code is called and passes an object. The object's key/values pairs are [hard coded](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L2-L14) and are not obtained from a Conversations API call.

___


##### [Feature Used in View](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#feature-used-in-view)

Not all Product Details Pages have Consumer Generated Content (CGC) within the browser's viewable area when the page is rendered.  Often, users must scroll to view the CGC. As part of the API Analytics requirements, when the CGC comes in view, must also be captured. This is done by calling the transactional analytics tag '[feature used in view](https://github.com/bazaarvoice/api-analytics/blob/master/js/main.js#L46)'.  This object's key/value pairs differs slightly from the previous 'page view product' by: 
1. having additional keys that identify the CGC container Id 
2. allow to specify the minimum pixel height that must be viewed before executing
3. specifying a time (milliseconds) the CGC container must be viewed before executing 

___

##### [Feature Used](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#feature-used-in-view)

Event handlers are also attached to the various CGC inputs. This aims to capture how users interact with the Conversations data. In order to complete this 

Included in the sample are:
1. Clicking "Show/Hide Filter"
2. Selecting an Age or Gender sub-filter
3. Clicking "Write a Review" 
4. Interacting with the "Sort"
5. Expanding/contracting the "Read more/less"
6. Voting if the review was helpful
7. Reporting the review
8. Clicking the pagination
9. Clicking the "See All" button
10. Clicking the "Staff" button

___


#### Conversion Page

The [conversion page](https://s3.amazonaws.com/api-analytics/conversion.html) simulates a page a user would reach upon completing a purchase. With conversion complete, the conversion analytic tags are executed. Both the '[ConversionTransaction](https://github.com/bazaarvoice/api-analytics/blob/master/js/conversion.js#L32-L33)' and the '[PIIConversionTransaction](https://github.com/bazaarvoice/api-analytics/blob/master/js/conversion.js#L32-L33)' are called in this sample. 

##### [ConversionTransaction](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#conversion-transaction)

##### [PIIConversionTransaction](https://developer.bazaarvoice.com/apis/conversations/tutorials/analytics#conversion-transaction-with-pii)


Things to Note 
----------------
This sample does not make API calls to retrieve and bind client data. Values that should be obtained from the API are hard coded in the HTML and js files. Comments have been added where the values should be obtained from the API. 

The sample works in conjunction with the [Bazzarvoice Analytics Inspector](https://github.com/bazaarvoice/magpie-inspector/) to aid clients in making sure the implementation is complete. 

It is required to have an Bazzarvoice staff member to agree that an implementation has been completed.  

