Bazaarvoice API Analytics starter kit
================

Bazaarvoice API Analytics is a sample that demonstrates how API users should implement the required analytics tags when using the Bazaarvoice API. 

Before Using:
----------------
Read the documentation on the [Bazaarvoice Developer Portal](https://developer.bazaarvoice.com/legal/terms_of_use) to ensure you understand the benefits of analtics as well as what is required. Documenation includes the [API Terms of Use](https://developer.bazaarvoice.com/legal/terms_of_use).  NOTE: The code here is meant as a sample and by no means is optomized for speed and scale. The code is provided as a means to help API users better understand API analytics. 

How to Use:
----------------

1. Download the code
2. Host the code on a server (e.g. MAMP, NodeJs)
3. Interact with the code - open in mock Product Details page (index.html) as well as the conversion page in the browser with the developer console open. Watch the diffent console logging occur. 
4. Investigate the js files associated the different HTML pages.

Purpose of sample 
----------------

This sample is used show clients using the Bazzarvoice API solition how to implement the required API analytics. The following API calls are supported as part of the sample: 

1. Page View - product details page
2. Featured Used - consumer generated content
3. Feature Used in View - consumer generated content
4. Conversion - conversion page
5. Conversion Transaction - conversion page
6. PIIConversionTransaction - conversion page

Things to Note 
----------------
This sample does not make API calls. Values that should be obtained from the API are hard coded in the js files. Comments have been added where the values should be obtained from the API. 

The sample works in conjunction with the [Bazzarvoice Analytics Inspector](https://github.com/bazaarvoice/magpie-inspector/) to aid clients in making sure the implementation is complete. 

It is required to have an Bazzarvoice staff member to agree that an implementation has been completed.  

