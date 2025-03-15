window.getQuestions = function() {
    return [
	
    { 
        "question": "What are three ways to implement custom post Order processing?", 
        "type": "multiple", 
        "options": { 
            "A": "Use a Salesforce workflow rule that executes when an Order record is created.",
            "B": "Extend cc_hk_invoice to handle custom business logic post Order processing.",
            "C": "Use cc_hk_Order.placeTarget to define a new Order Confirmation page which executes additional business logic.",
            "D": "Modify or add custom Cart formula fields to handle logic.",
            "E": "Use Process builder to implement business processes that execute when an Order record is created."
        }, 
        "answer": ["B", "C", "E"] 
    },
    { 
        "question": "Which event is invoked by any CCRZ Salesforce B2B Commerce View after the view is rendered?", 
        "type": "single", 
        "options": { 
            "A": "view:*:load",
            "B": "view:*:refresh",
            "C": "view:*:onload",
            "D": "view:*:rendered"
        }, 
        "answer": ["D"] 
    },
    { 
        "question": "How is a price group dynamically set?", 
        "type": "single", 
        "options": { 
            "A": "By overriding the ccLogicProductPrice class",
            "B": "By using contract pricing",
            "C": "By extending the ccApiPriceList API",
            "D": "By extending the cc_hk_pricing hook"
        }, 
        "answer": ["D"] 
    },
    { 
        "question": "Numerous flags when set, have a direct impact on the result set provided by the Global API’s.\n\nWhich conversion flag allows for sObjects to be returned from the Global API’s when provided as a Boolean parameter with a value of true?", 
        "type": "single", 
        "options": { 
            "A": "ccrz.ccAPISizing.SKIPTRZ",
            "B": "ccrz.ccAPISizing.SOBJECT",
            "C": "ccrz.ccAPI.SZ_SKIPTRZ",
            "D": "ccrz.ccAPI.SZ_SOBJECT"
        }, 
        "answer": ["D"] 
    },
    { 
        "question": "A user wants to have a Contact Us page in the storefront. This page will be a web-to-lead form and it should have the header and footer, essentially the same look and feel as all the pages in the application.\n\nHow can this requirement be fulfilled?", 
        "type": "single", 
        "options": { 
            "A": "Page Include",
            "B": "Subscriber Page (CC Page)",
            "C": "Subscriber Template",
            "D": "Body Include Begin"
        }, 
        "answer": ["B"] 
    },
	
	{ 
    "question": "Which cookie stores the effective account ID when effective account is enabled?", 
    "type": "single", 
    "options": { 
        "A": "apex__cclgtkn",
        "B": "apex__effacc",
        "C": "apex__currCartId",
        "D": "apex__cc_anonymous_Country"
    }, 
    "answer": ["B"] 
},
{ 
    "question": "Although Salesforce B2B Commerce and Salesforce recommend against using 'without sharing classes' whenever possible, sometimes it is unavoidable.\n\nWhich three items will open up a major security hole?", 
    "type": "multiple", 
    "options": { 
        "A": "Executing dynamic SOQL inside a without sharing class with a bind variable from PageReference.getParameters().",
        "B": "Executing dynamic SOQL inside a without sharing class with a bind variable from the UserInfo class.",
        "C": "Executing dynamic SOQL inside a without sharing class with a bind variable from PageReference.getCookies().",
        "D": "Executing dynamic SOQL inside a without sharing class with a bind variable from cc_RemoteActionContext class.",
        "E": "Executing dynamic SOQL inside a without sharing class with a bind variable from ccAPI.CURRENT_VERSION."
    }, 
    "answer": ["A", "C", "D"] 
},
{ 
    "question": "Where is the API-based record creation generally handled in Salesforce B2B Commerce?", 
    "type": "single", 
    "options": { 
        "A": "In the methods available in extension hooks",
        "B": "The service-layer responsible for the entity",
        "C": "Data creation is not allowed",
        "D": "Logic classes that implement the business logic for create operations"
    }, 
    "answer": ["B"] 
},
{ 
    "question": "How does a project implement the process to persist payment information data in the Checkout flow for Salesforce B2B Commerce version 4.2 and beyond?", 
    "type": "single", 
    "options": { 
        "A": "Trigger a remote action when the process payment button is selected to capture the payment.",
        "B": "Trigger a remote action to store the payment information in the URL query parameters.",
        "C": "Trigger the processPayment event and pass in the payment information object as an argument.",
        "D": "Trigger the externalProcessedPayment and pass in the payment information object as an argument."
    }, 
    "answer": ["C"] 
},
{ 
    "question": "How are variables bound when services use the ccServiceDao class to execute queries?", 
    "type": "single", 
    "options": { 
        "A": "Global variables",
        "B": "Apex local variables",
        "C": "String substitution",
        "D": "Apex class variables"
    }, 
    "answer": ["C"] 
},

{ 
    "question": "The ccUtil apex class in Salesforce B2B Commerce provides numerous utility functions that can be leveraged in subscriber classes.\n\nWhich command will return the value in the given Map if found or a default value in the event that the Map is null, empty, or an object is not found for that key?", 
    "type": "single", 
    "options": { 
        "A": "ccrz.ccUtil.defv (Map<String,Object> mp, String key, Object ob)",
        "B": "ccrz.ccUtil.defVal (Map<String,Object> mp, String key, Object ob)",
        "C": "ccrz.ccUtil…. (Map<String,Object> mp, String key, Object ob)",
        "D": "ccrz.ccUtil.defaultValue(Map<String,Object> mp, String key, Object ob)"
    }, 
    "answer": ["B"] 
},
{ 
    "question": "The sizing keys used in the Salesforce B2B Commerce Global APIs have five distinct operations.\n\nWhat are three of these operations?", 
    "type": "multiple", 
    "options": { 
        "A": "Refetch data (used on some Logic classes)",
        "B": "Return formats as Map<String, Object> or SObjects lists",
        "C": "Override static DAO classes and methods",
        "D": "Related Query to call (sub queries or direct queries)",
        "E": "Object type casting"
    }, 
    "answer": ["A", "D", "E"] 
},
{ 
    "question": "A user wants the pricing to reflect the price values stored in an external ERP during the checkout flow. In what way can this requirement be satisfied?", 
    "type": "single", 
    "options": { 
        "A": "Override the computePricingCart method in ccrz.cc_api_PriceAdjustment and make the callout in this method.",
        "B": "None of the above",
        "C": "Override the computePricingReview method in ccrz.cc_CartExtension and make the callout in this method.",
        "D": "Override the computePricingCart method in ccrz.cc_api_CartExtension and make the callout in this method."
    }, 
    "answer": ["D"] 
},
{ 
    "question": "A query containing a subquery is executed.\n\nWhat is appended to the subquery name as part of its transformation by default in Salesforce B2B Commerce?", 
    "type": "single", 
    "options": { 
        "A": "A subscriber-supplied token",
        "B": "\"__ccrz\"",
        "C": "The \"*\" symbol",
        "D": "The letter \"S\""
    }, 
    "answer": ["B"] 
},
{ 
    "question": "What is the recommended method for increasing the number of required autocomplete characters that are typed before autocomplete works?", 
    "type": "single", 
    "options": { 
        "A": "Override and extend the autoComplete method in cc_hk_Catalog.",
        "B": "Override the autoComplete.search_input.minLength value in the CCRZ.uiProperties file.",
        "C": "Override the autocomplete template and create and register a new handlebars helper.",
        "D": "Update the minLength property in CC Admin, then build and activate a new cache."
    }, 
    "answer": ["B"] 
},
{ 
    "question": "Salesforce B2B Commerce natively provides a robots.txt file; however, a customer can also create its own version.\n\nWhich three scenarios are valid reasons for a customer to create their own robots.txt file?", 
    "type": "multiple", 
    "options": { 
        "A": "The customer wants to reference multiple storefront sitemap indexes in a single robots.txt file.",
        "B": "The customer wants to reference a custom sitemap index.",
        "C": "The customer wants to have multiple robot.txt files in a single Salesforce Community.",
        "D": "The customer’s store is not located at the root of their domain.",
        "E": "robots.txt only works if there is one storefront in the org."
    }, 
    "answer": ["A", "B", "D"] 
},
{ 
    "question": "What are two guidelines for logging that are used within the core Salesforce B2B Commerce product?", 
    "type": "multiple", 
    "options": { 
        "A": "Items or data within computationally intensive loops should be logged.",
        "B": "The close method of ccrz.ccLog must be called at the end of the remote action.",
        "C": "No calls to ccrz.ccLog can be made before cc_CallContext.initRemoteContext is executed.",
        "D": "It is okay to log any data on the server that is already logged on the client side."
    }, 
    "answer": ["B", "C"] 
},

  {
    "question": "The ccUtil apex class in Salesforce B2B Commerce provides numerous utility functions that can be leveraged in subscriber classes.\n\nWhat are two ways to check the input or return data of the Global APIs?",
    "type": "multiple",
    "options": {
      "A": "ccrz.ccUtil.isNotEmpty(Map<String, Object>) and ccrz.ccUtil.isNotEmpty(List<Object>)",
      "B": "ccrz.ccUtil.isNotValid(Map<String, Object>) and ccrz.ccUtil.isNotValid(List<Object>)",
      "C": "ccrz.ccUtil.isValid(Map<String, Object>) and ccrz.ccUtil.isValid(List<Object>)",
      "D": "ccrz.ccUtil.isEmpty(Map<String, Object>) and ccrz.ccUtil.isEmpty(List<Object>)"
    },
    "answer": ["A", "D"]
  },
  {
    "question": "Salesforce B2B leverages global APIs for encapsulating business logic into blocks that can be extended and modified by subscribers.\n\nWhich three statements are true regarding extending ccServiceProduct and exposing custom fields on the Product Detail Page?",
    "type": "multiple",
    "options": {
      "A": "Override the getFieldsMap method and add subscriber-specific code.",
      "B": "Ensure that any helper methods are defined as private and static only.",
      "C": "Create a global with sharing class that extends ccrz.ccServiceProduct.",
      "D": "Create a public with sharing class that extends ccrz.ccServiceProduct.",
      "E": "Override the fetch method and add your subscriber-specific code here."
    },
    "answer": ["A", "C", "E"]
  },
  {
    "question": "How do the REST APIs in Salesforce B2B Commerce support pass-through parameter handling?",
    "type": "single",
    "options": {
      "A": "An exception is generated for unknown API keys.",
      "B": "Parameters are passed through the service handlers.",
      "C": "Parameters are filtered out before the request is processed.",
      "D": "Parameters are separated but unused."
    },
    "answer": ["B"]
  },
  {
    "question": "In which three different ways can a theme be enabled in Salesforce B2B Commerce?",
    "type": "multiple",
    "options": {
      "A": "A Storefront setting.",
      "B": "An Account Group field value.",
      "C": "A per-user setting.",
      "D": "Account.",
      "E": "Dynamically through a hook."
    },
    "answer": ["A", "B", "E"]
  },
  {
    "question": "What is essential for a Salesforce B2B Commerce theme to show up in the theme section in CC Admin?",
    "type": "single",
    "options": {
      "A": "The theme needs to be set as a Custom Setting in Salesforce.",
      "B": "The theme needs to be set in the Configuration Settings.",
      "C": "The theme needs to have 'theme' in the name of the Static Resource.",
      "D": "The theme needs to be referred to in the head element on the page."
    },
    "answer": ["C"]
  },
  {
    "question": "What are the templating, JavaScript, and CSS frameworks that the CloudCraze managed package leverages?",
    "type": "single",
    "options": {
      "A": "AngularJS, BackboneJS, and HandlebarsJS.",
      "B": "Bootstrap, BackboneJS, and HandlebarsJS.",
      "C": "Bootstrap, AngularJS, and BackboneJS.",
      "D": "AngularJS, ReactJS, and HandlebarsJS."
    },
    "answer": ["B"]
  },
  {
    "question": "A user wants to leverage a three-column layout on a page. The user also wants to move the mini-cart widget from the right to the center column.\n\nHow can this requirement be fulfilled?",
    "type": "single",
    "options": {
      "A": "Gross Layout Override.",
      "B": "Subscriber Template.",
      "C": "Page Include.",
      "D": "HandleBar Template Override."
    },
    "answer": ["A"]
  },

  {
    "question": "How can the display of CC Menu Items be customized for different users?",
    "type": "single",
    "options": {
      "A": "cc_hk_Category extension to pre-process which category items are cached as menu items.",
      "B": "cc_hk_Menu extension to post-process any cached menu items.",
      "C": "cc_hk_Menu extension to pre-process which menu items are cached.",
      "D": "cc_hk_Category extension to post-process any cached menu items."
    },
    "answer": ["B"]
  },
  {
    "question": "A developer is trying to troubleshoot why a field is not displaying on the Product Detail Page.\n\nWhat should be typed in the Developer Tools Console in the browser to view the fields available for the Product Detail Page?",
    "type": "single",
    "options": {
      "A": "CCRZ.productSearchView",
      "B": "CCRZ.cartView",
      "C": "CCRZ.productDetailModel",
      "D": "CCRZ.productDetailView"
    },
    "answer": ["C"]
  },
  {
    "question": "A Developer created a custom field that a project wants to expose on a given page.\n\nHow does the Developer ensure that the field is available to display on a given page?",
    "type": "single",
    "options": {
      "A": "Override the Service Class that the page uses and update the Service Management in CCAdmin for the given storefront to use this new Service Class.",
      "B": "Override the Logic Class that the page uses and update the Service Management in CCAdmin for the given storefront to use this new Service Class.",
      "C": "Create a new Service Class that the page uses and update the Service Management in CCAdmin for the given storefront to use this new Service Class.",
      "D": "Create a new Logic Class that the page uses and update the Service Management in CCAdmin for the given storefront to use this new Service Class."
    },
    "answer": ["A"]
  },
  {
    "question": "What are three ways to test the value of Page Label on any Salesforce B2B Commerce Community Page?",
    "type": "multiple",
    "options": {
      "A": "Access the source HTML for the page via the browser developer tools.",
      "B": "Execute CCRZ.pagevars.pageLabels[‘PAGE_LABEL_NAME’] in the JavaScript console.",
      "C": "Execute CCRZ.processPageLabelMap(‘PAGE_LABEL_NAME’) in the JavaScript console.",
      "D": "Enable the ‘display page label names’ in CC Admin.",
      "E": "Execute ((‘PAGE_LABEL_NAME’)) in the JavaScript console."
    },
    "answer": ["B", "C", "D"]
  },
  {
    "question": "For which two reasons is it preferable to extend the Salesforce B2B Commerce remote invocation object instead of using the standard Salesforce remote action invocation manager?",
    "type": "multiple",
    "options": {
      "A": "A standard remote action will not have access to Salesforce B2B Commerce objects.",
      "B": "The APEX method called by the remote action will be passed as a Salesforce B2B Commerce context object.",
      "C": "Salesforce B2B Commerce includes do not support standard Salesforce remote actions.",
      "D": "The Salesforce B2B Commerce logger cannot be utilized in standard remote actions."
    },
    "answer": ["B", "D"]
  },
  {
    "question": "What is a valid way of referencing the global cc_api_CartExtension apex class via subscriber code?",
    "type": "single",
    "options": {
      "A": "ccrz__cc_api_CartExtension",
      "B": "c__cc_api_CartExtension",
      "C": "cloudcraze.cc_api_CartExtension",
      "D": "ccrz.cc_api_CartExtension"
    },
    "answer": ["D"]
  },
  {
    "question": "Numerous flags have a direct impact on the result set provided by the Global APIs.\n\nWhat Global API Data-Sizing convention flag prevents an API request from propagating to further requests when provided as a Boolean parameter with a value of true?",
    "type": "single",
    "options": {
      "A": "ccrz.ccAPI.SZ_REL",
      "B": "ccrz.ccAPI.SZ_ASSC",
      "C": "ccrz.ccAPISizing.ASSC",
      "D": "ccrz.ccAPISizing.REL"
    },
    "answer": ["B"]
  },
  {
    "question": "In which three ways can Salesforce B2B Commerce API sizing blocks support multiple API sizing requests?",
    "type": "multiple",
    "options": {
      "A": "When different entities are specified in the method invocation.",
      "B": "The sizing block is not removed.",
      "C": "SZ_ASSC is used.",
      "D": "The sizing block is removed after the first handler.",
      "E": "SZ_ASSC is not used."
    },
    "answer": ["A", "C", "E"]
  },
  
  {
    "question": "What is true regarding adding more Configuration Settings to Salesforce B2B Commerce?",
    "type": "single",
    "options": {
      "A": "Metadata can be added to existing modules, but you cannot add new modules.",
      "B": "Configuration settings can only be extended through APIs.",
      "C": "Select 'New' in your storefront’s Configuration Settings and create a custom setting.",
      "D": "More modules and metadata can be added to Salesforce B2B Commerce."
    },
    "answer": ["D"]
  },
  {
    "question": "What is a valid way of referencing the CC Cart Object whose API name is E_Cart__c in a SOQL query?",
    "type": "single",
    "options": {
      "A": "_Cart__c",
      "B": "c.E_Cart__c",
      "C": "ccrz__E_Cart__c",
      "D": "cloudcraze__E_Cart__c"
    },
    "answer": ["C"]
  },
  {
    "question": "A configuration value, CO.NewOrder, is set to TRUE.\n\nWhat is one way of preventing an existing payment page from being shown on the checkout payment page?",
    "type": "single",
    "options": {
      "A": "Delete the Visualforce page from the code base.",
      "B": "Remove the value matching the page name from the pmt.whitelist configuration setting, then rebuild and activate a new Configuration cache.",
      "C": "Remove the payment type associated with the payment page from CO.pmts, then rebuild and activate a new cache.",
      "D": "Override the front-end template and modify the way the embedded payment page gets loaded from the payment list configuration."
    },
    "answer": ["C"]
  },
  {
    "question": "When a user buys 10 units of product B, the user wants 1 unit of Product A to be automatically added to the cart.\n\nHow can this requirement be fulfilled?",
    "type": "single",
    "options": {
      "A": "Override the AllowCheckout method in ccrz.cc_api_CartExtension.",
      "B": "Override the prepareForSave method in ccrz.cc_api_CartExtension.",
      "C": "Override the preprocess method in ccrz.cc_api_CartExtension.",
      "D": "Override the prepareToAdd method in ccrz.cc_api_CartExtension."
    },
    "answer": ["D"]
  },
  {
    "question": "The ccrz.cc_hk_UserInterface apex class, HTMLHead Include Begin, and HTML Head Include End Cloudcraze Page Include sections allow additional content to be added to the HTML <head> tag.\n\nWhat are two reasons that it is preferred to use the ccrz.cc_hk_UserInterface extension over the Cloudcraze Page Include sections?",
    "type": "multiple",
    "options": {
      "A": "Salesforce apex:include is wrapped in <span> tags.",
      "B": "HTML does not support <div> tags inside the <head>.",
      "C": "Salesforce apex:include is wrapped in tags.",
      "D": "HTML does not support <span> tags inside the <head>."
    },
    "answer": ["A", "D"]
  },
  {
    "question": "What is a best practice when passing query parameters from the user interface to an Apex controller?",
    "type": "single",
    "options": {
      "A": "Query parameters should be properly sanitized by using JSINHTMLENCODE within the Visualforce Page or Component.",
      "B": "String parameters should be trimmed using String.trim().",
      "C": "Query parameters should be passed only to Salesforce B2B Commerce classes that you are extending.",
      "D": "Query parameters should be stored on a backbone model prior to passing them to the server."
    },
    "answer": ["A"]
  },

  {
    "question": "A user wants to have a customized experience for adding items to the cart. The user also wants the mini cart module to reflect changes to the state of the cart afterward. How should this requirement be fulfilled?",
    "type": "single",
    "options": {
      "A": "Leverage the Add to Cart Global API which adds items to the cart and also refreshes the page with the new data.",
      "B": "Trigger the global 'cartChange' event and then trigger 'changeMiniCart' event after the Add to Cart Action on the custom button.",
      "C": "Write a custom Remote Action to refresh the Mini Cart and refresh the Cart Line item count on the Cart Link in the header.",
      "D": "Trigger the global 'cartChange' event after the Add to Cart Action on the custom button."
    },
    "answer": ["D"]
  },
  {
    "question": "A new payment type for the Checkout flow has been implemented. Which three descriptors follow best practice for possible configuration metadata needed to enable a flow?",
    "type": "multiple",
    "options": {
      "A": "*.pay",
      "B": "Cart",
      "C": "Checkout",
      "D": "*.Edit",
      "E": "*.New"
    },
    "answer": ["A", "D", "E"]
  },
  {
    "question": "Which event is triggered within Salesforce B2B Commerce whenever a cart’s state changes?",
    "type": "single",
    "options": {
      "A": "cartChange",
      "B": "cart",
      "C": "pageMessage",
      "D": "cartState"
    },
    "answer": ["A"]
  },
  {
    "question": "What two kinds of queries do the methods in Salesforce B2B Commerce services perform by default?",
    "type": "multiple",
    "options": {
      "A": "SOSL",
      "B": "SQL",
      "C": "SOQL",
      "D": "Schema-less queries"
    },
    "answer": ["C", "D"]
  },
  {
    "question": "What is the difference between Gross Layout Overrides and Subscriber Templates?",
    "type": "single",
    "options": {
      "A": "Gross Layout Overrides allow modification to CSS of a page, while Subscriber Templates allow for modification of the entire page including header and footer.",
      "B": "Subscriber Templates allow for modification of the header, the footer, and the content in between them. Gross Layout Overrides only allow for modification of the header and footer.",
      "C": "Subscriber Templates allow for modification of the header and the footer, while Gross Layout Overrides allow for modification of everything inside the header and footer.",
      "D": "Gross Layout Overrides allow for the modification of the footer, while Subscriber Templates allow for modification of everything inside the header and footer."
    },
    "answer": ["C"]
  },
  {
    "question": "Where are handlebar templates defined in the Cloudcraze managed package?",
    "type": "single",
    "options": {
      "A": "uiProperties file",
      "B": "Configuration Setting configuration",
      "C": "cc_hk_UserInterface extension",
      "D": "Page Settings configuration"
    },
    "answer": ["A"]
  },
  {
    "question": "What is a method to resolve if the current storefront customer is a Salesforce B2B Commerce guest user in an Apex class?",
    "type": "single",
    "options": {
      "A": "ccrz.cc_CallContext.currUser.isGuest",
      "B": "ccrz.cc_CallContext.isGuest",
      "C": "UserInfo.getUserType()",
      "D": "UserType"
    },
    "answer": ["B"]
  },


  {
    "question": "What are three advantages of using ccLog over the Salesforce standard System.debug class?",
    "type": "multiple",
    "options": {
      "A": "There is no need to use string concatenation to easily tag log statements with a subject.",
      "B": "ccLog can debug syntax errors found in the JavaScript.",
      "C": "There is no need to create a User Trace Flag.",
      "D": "Append #ccLog=<Logging Token Name> to the end of the storefront URL in order to get logs in the inspector console.",
      "E": "There is no need to manually set a cookie to debug with the Site Guest User."
    },
    "answer": ["A", "D", "E"]
  },
  {
    "question": "In which three ways should useful debugging information in Salesforce B2B Commerce implementation be garnered?",
    "type": "multiple",
    "options": {
      "A": "Enabling the logging token via Admin and subsequently inspecting the logs via the browser console.",
      "B": "Logging a case with Salesforce support to enable advanced debugging options.",
      "C": "Enabling debugging options for the current user and visually inspecting the Salesforce debug logs.",
      "D": "Placing a System.debug() statement anywhere in the class being debugged.",
      "E": "Logging into the community as a system administrator to identify any potential permissions or Visualforce exceptions."
    },
    "answer": ["A", "C", "E"]
  },
  {
    "question": "What is the default behavior for how the Salesforce B2B Commerce Global APIs transform Salesforce data?",
    "type": "single",
    "options": {
      "A": "Fields names are returned using the Salesforce naming convention.",
      "B": "Fields names are returned with 'c.' prepended in their name.",
      "C": "Fields names are returned with a lowercase first letter, camelcase convention.",
      "D": "Fields names can be mapped to any naming convention desired."
    },
    "answer": ["C"]
  },
  {
    "question": "Numerous flags, when set, have a direct impact on the result set provided by the Global APIs. What is the default Global API DataSizing convention flag that is used by the APIs unless otherwise specified?",
    "type": "single",
    "options": {
      "A": "CCRZ.ccPAI.SZ_XL",
      "B": "CCRZ.ccPAI.SZ_M",
      "C": "CCRZ.ccPAI.SZ_L",
      "D": "CCRZ.ccPAI.SZ_S"
    },
    "answer": ["B"]
  },
  {
    "question": "How are version-related upgrades passed on to subscriber API extensions/overrides?",
    "type": "single",
    "options": {
      "A": "APIs callback with specific versions specified; the user must know which version number to use.",
      "B": "Copy and paste of specific code is 'built-in'.",
      "C": "Extensions and overridden APIs don’t support related upgrades.",
      "D": "The 'delegate' allows inherited method calls access to the most recently specified service version."
    },
    "answer": ["D"]
  },

	//second Set

    {
        "question": "Which three pages should be enabled for the Guest user profile for a storefront to have anonymous checkout?",
        "type": "multiple",
        "options": {
            "A": "CCPaymentInfo",
            "B": "CheckoutNew",
            "C": "OrderView",
            "D": "Checkout",
            "E": "OrderConfirmation"
        },
        "answer": ["A", "B", "E"]
    },
    {
        "question": "Which three actions are applicable when extending a default Salesforce B2B Commerce page via a page include?",
        "type": "multiple",
        "options": {
            "A": "Create a Service Class override to query the new page include.",
            "B": "Create the VisualForce page you wish to include to the Salesforce B2B Commerce page.",
            "C": "Prepend 'c.' to the name of the page referenced in the configuration setting.",
            "D": "Create a configuration setting for enabling the page include and assigning the new page include via CC admin.",
            "E": "Build and activate a new configuration cache setting via CC admin."
        },
        "answer": ["B", "D", "E"]
    },
    {
        "question": "What is a method to resolve if the current storefront customer is a Salesforce B2B Commerce guest user in an apex class?",
        "type": "single",
        "options": {
            "A": "ccrz.cc_CallContext.currUser.isGuest",
            "B": "ccrz.cc_CallContext.isGuest",
            "C": "UserInfo.getUserType()",
            "D": "... UserType"
        },
        "answer": ["B"]
    },
    {
        "question": "Which two components in a B2B store template should a developer use to customize a storefront page?",
        "type": "multiple",
        "options": {
            "A": "My Lists",
            "B": "Product List",
            "C": "Order List",
            "D": "Address List"
        },
        "answer": ["A", "B"]
    },
    {
        "question": "A developer attempts to export data from an org by launching Data Loader, selecting a standard entity, clicking the 'Select All Fields' button and clicking the Finish button. The developer finds that the CustomField__c field they added to the entity has no values under the header in the CSV file output. What is the root cause?",
        "type": "single",
        "options": {
            "A": "The developer does not have the correct JDK that is recommended by Salesforce and this is known to cause issues with exporting custom attributes.",
            "B": "The developer does not have access to the object's metadata.",
            "C": "The field is not populated.",
            "D": "The user does not have rights to the custom field."
        },
        "answer": ["D"]
    },
    {
        "question": "Salesforce B2B Commerce natively provides a robots.txt file, however, a customer can also create its own version. Which three scenarios are valid reasons for a customer to create their own robots.txt file?",
        "type": "multiple",
        "options": {
            "A": "The customer wants to reference multiple storefront sitemap indexes in a single robots.txt file.",
            "B": "The customer wants to reference a custom sitemap index.",
            "C": "The customer wants to have multiple robots.txt files in a single Salesforce Community.",
            "D": "The customer's store is not located at the root of their domain.",
            "E": "robots.txt only works if there is one storefront in the org."
        },
        "answer": ["A", "B", "D"]
    },
    {
        "question": "Which two methods should a developer implement in a Lightning web component to successfully handle the subscription lifecycle of a Message Channel?",
        "type": "multiple",
        "options": {
            "A": "Subscribe()",
            "B": "stopListener()",
            "C": "startListener()",
            "D": "unsubscribe()"
        },
        "answer": ["A", "D"]
    },
    {
        "question": "For which two reasons is it preferable to extend the Salesforce B2B Commerce remote invocation object instead of using the standard Salesforce remote action invocation manager?",
        "type": "multiple",
        "options": {
            "A": "A standard remote action will not have access to Salesforce B2B Commerce objects.",
            "B": "The APEX method called by the remote action will be passed as a Salesforce B2B Commerce context object.",
            "C": "Salesforce B2B Commerce includes do not support standard Salesforce remote actions.",
            "D": "The Salesforce B2B Commerce logger cannot be utilized in standard remote actions."
        },
        "answer": ["B", "D"]
    },
    {
        "question": "A developer is trying to troubleshoot why a field is not displaying on the Product Detail Page. What should be typed in the Developer Tools Console in the browser to view the fields available for the Product Detail Page?",
        "type": "single",
        "options": {
            "A": "CCRZ.productSearchView",
            "B": "CCRZ.cartView",
            "C": "CCRZ.productDetailModel",
            "D": "CCRZ.productDetailView"
        },
        "answer": ["C"]
    },
    {
        "question": "A developer at Northern Trail Outfitters (NTO) exported Order Summary records via Data Loader, but noticed that some orders were missing. What is the most likely cause?",
        "type": "single",
        "options": {
            "A": "The export job did not fully complete.",
            "B": "Order Life Cycle Type was Managed.",
            "C": "The user does not have rights to some of the records.",
            "D": "The Status was still set to Draft."
        },
        "answer": ["D"]
    },
	

    {
        "question": "Which two behaviors does a target value of lightning__FlowScreen in metadata allow for a Lightning web component?",
        "type": "multiple",
        "options": {
            "A": "It allows the Lightning web component to replace standard functionality in flows and subflows",
            "B": "It allows the Lightning Web component to be dragged onto a page in Lightning AppBuilder",
            "C": "It allows the Lightning web component to be used in guided user experiences to gather input",
            "D": "It automatically generates configuration properties for the Lightning web component"
        },
        "answer": ["C", "D"]
    },
    {
        "question": "Which orders can a user view on Order List Component (Aura) for B2B stores?",
        "type": "single",
        "options": {
            "A": "Orders placed in the current storefront and related to the current effective account",
            "B": "Orders placed in any storefront and related to the current effective account",
            "C": "Orders placed in the current storefront and related to the current user's account",
            "D": "Orders placed in any storefront and related to the current user's account"
        },
        "answer": ["A"]
    },
    {
        "question": "A developer is working in Visual Studio Code on a previously deployed project which is rather large and deployments are time consuming. The developer wants to know if a CSS file containing small changes was actually deployed to the org. What is one way this can be accomplished?",
        "type": "single",
        "options": {
            "A": "Right-click the CSS file and choose Diff File Against Org",
            "B": "Click the Tools menu and select Diff Styles Against Org...",
            "C": "Right-click the folder for the component and choose Diff Styles Against Org",
            "D": "Right-click the folder for the component and choose Diff Files Against Org"
        },
        "answer": ["A"]
    },
    {
        "question": "What is likely to happen if a developer leaves debug mode turned on in an environment?",
        "type": "single",
        "options": {
            "A": "The performance of the org will become slower each day",
            "B": "The user will begin getting JavaScript limit exceptions",
            "C": "The org will turn off debug mode after 72 hours",
            "D": "A banner will be displayed to the user indicating that the org is in debug mode"
        },
        "answer": ["B"]
    },
    {
        "question": "What are two ways a developer should ensure that a store verifies changes by using an external service?",
        "type": "multiple",
        "options": {
            "A": "Create a flow using an action to retrieve shipping charges from an external service and update the Cart Delivery Group Methods.",
            "B": "Create an Apex class implementing the sfdc_checkout.CartShippingCharges interface to retrieve shipping charges from an external service and register it as the calculation integration in the store administration.",
            "C": "Create an Apex class to retrieve shipping charges from an external service and update the Cart Delivery Group Method.",
            "D": "Create a trigger to retrieve shipping charges from an external service and update the Cart Delivery Group Methods"
        },
        "answer": ["B", "C"]
    },
    {
        "question": "Which two log levels does a developer need to include to debug platform events?",
        "type": "multiple",
        "options": {
            "A": "Apex Code",
            "B": "Database",
            "C": "Callout",
            "D": "Workflow"
        },
        "answer": ["A", "D"]
    },
    {
        "question": "When a user buys 10 units of product B, the user wants 1 unit of Product A to be automatically added to the cart. How can this requirement be fulfilled?",
        "type": "single",
        "options": {
            "A": "Override the AllowCheckout method in ccrz.cc_api_CartExtension",
            "B": "Override the prepareForSave method in ccrz.cc_api_CartExtension",
            "C": "Override the preprocess method in ccrz.cc_api_CartExtension",
            "D": "Override the prepareToAdd method in ccrz.cc_api_CartExtension"
        },
        "answer": ["D"]
    },
    {
        "question": "In which three ways should useful debugging information in Salesforce B2B Commerce implementation be garnered?",
        "type": "multiple",
        "options": {
            "A": "Enabling the logging token via Admin and subsequently inspecting the logs via the browser console.",
            "B": "Logging a case with Salesforce support to enable advanced debugging options.",
            "C": "Enabling debugging options for the current user and visually inspecting the Salesforce debug logs.",
            "D": "Placing a System.debug() statement anywhere in the class being debugged.",
            "E": "Logging into the community as a system administrator to identify any potential permissions or Visualforce exceptions."
        },
        "answer": ["A", "C", "E"]
    },
    {
        "question": "Northern Trail Outfitters (NTO) wants to be able to reference historical data in another system from the Salesforce user experience as read-only, but does not want to import the data into the org or incur storage costs. What is one product feature that could accomplish this?",
        "type": "single",
        "options": {
            "A": "Big Objects",
            "B": "Lightning Out",
            "C": "External Objects",
            "D": "External SOQL queries in Apex code"
        },
        "answer": ["C"]
    },
    {
        "question": "Which two aspects are applicable to Page Includes?",
        "type": "multiple",
        "options": {
            "A": "Standard Visualforce controls such as apex:form should not be used within a page include",
            "B": "Page Includes must be assigned to an OOTB Page, i.e. Home, Product Detail, etc., and enabled",
            "C": "Page Includes can be configured as Body Includes Begin.",
            "D": "If a controller is used for an included page, then a merge variable must be present on the page."
        },
        "answer": ["A", "C"]
    },
    {
        "question": "What are three ways to implement custom post Order processing?",
        "type": "multiple",
        "options": {
            "A": "Use a Salesforce workflow rule that executes when an Order record is created.",
            "B": "Extend cc_hk_invoice to handle custom business logic post Order processing",
            "C": "Use cc_hk_Order.placeTarget to define a new Order Confirmation page which executes additional business logic.",
            "D": "Modify or add custom Cart formula fields to handle logic.",
            "E": "Use Process builder to implement business processes that execute when an Order record is created."
        },
        "answer": ["B", "C", "E"]
    },
	
{
  "question": "A developer needs to create a scheduled job in another system to move data into the B2B Commerce org. How can the developer do this without additional third-party tools?",
  "type": "single",
  "options": {
    "A": "Install a minimal set of dev tools on a machine such as the Command Line Interface (CLI) and create appropriate scripts to import files containing the data.",
    "B": "Set up an SFTP server as a waystation, drop the files there using the off-platform job and schedule a job in-platform to process the file.",
    "C": "Set up WebDAV with SFTP as a waystation, drop the files there using the off-platform job and schedule a job in-platform to process the file.",
    "D": "Create a job in the org (on-platform) to drop a file of existing data. Use the off-platform machine to generate a file and identify the details between the two. Push the changes to the org's 'Import' directory."
  },
  "answer": ["B"]
},
{
  "question": "A developer needs to create an event listener on a parent component programmatically. With the script below, what should replace the text <EVENT LISTENER LINE>?",
  "type": "single",
  "options": {
    "A": "this.template.addEventListener(handleNotification);",
    "B": "this.template.addEventListener(this.handleNotification);",
    "C": "this.template.addEventListener('notification', this.handleNotification);",
    "D": "addEventListener('notification', this.handleNotification);"
  },
  "answer": ["C"]
},
{
  "question": "In which three ways can Salesforce B2B Commerce API sizing blocks support multiple API sizing requests?",
  "type": "multiple",
  "options": {
    "A": "SZ_ASSC is not used.",
    "B": "SZ_ASSC is used.",
    "C": "The sizing block is removed after the first handler.",
    "D": "When different entities are specified in the method invocation.",
    "E": "The sizing block is not removed."
  },
  "answer": ["A", "B", "D"]
},
{
  "question": "A developer is trying to integrate a new shipping provider to use during checkout in a storefront. Which two steps must the developer take to make an integration available for selection?",
  "type": "multiple",
  "options": {
    "A": "Create a RegisteredExternalService record using Workbench.",
    "B": "Create an Apex class that uses the integration framework.",
    "C": "Modify the StoreIntegratedService to map to an Apex class ID using Workbench.",
    "D": "Enter the integration class name and version in the store administration."
  },
  "answer": ["A", "B"]
},
{
  "question": "What are two purposes of the Shadow DOM in a Lightning web component?",
  "type": "multiple",
  "options": {
    "A": "It encapsulates the internal document object model (DOM) structure of a web component.",
    "B": "It allows components to be shared while protecting them from being manipulated by arbitrary code.",
    "C": "It allows direct access to the document object model of the component.",
    "D": "It allows older JavaScript libraries to manipulate the tagging structure."
  },
  "answer": ["A", "B"]
},
{
  "question": "A Developer created a custom field that a project wants to expose on a given page. How does the Developer ensure that the field is available to display on a given page?",
  "type": "single",
  "options": {
    "A": "Override the Service Class that the page uses and update the Service Management in CCAdmin for the given storefront to use this new Service Class.",
    "B": "Override the Logic Class that the page uses and update the Service Management in CCAdmin for the given storefront to use this new Service Class.",
    "C": "Create a new Service Class that the page uses and update the Service Management in CCAdmin for the given storefront to use this new Service Class.",
    "D": "Create a new Logic Class that the page uses and update the Service Management in CCAdmin for the given storefront to use this new Service Class."
  },
  "answer": ["A"]
},
{
  "question": "A developer needs to make a call to a long-running web service which is critical to finalizing their checkout process. Which three items should the developer consider in their implementation?",
  "type": "multiple",
  "options": {
    "A": "A new CORS entry may need to be created in Setup. A new Named Credential may need to be created in Setup.",
    "B": "An Apex method returning a Continuation will need to be created.",
    "C": "Requests to the service should be brokered to prevent limit exceptions.",
    "D": "A new Remote Site may need to be created in Setup."
  },
  "answer": ["A", "B", "C"]
},
{
  "question": "A Northern Trail Outfitters (NTO) developer made a tile component. To expose a click event and react to user input using the markup below, what should replace <CLICK_EVENT>?",
  "type": "single",
  "options": {
    "A": "tileClick()",
    "B": "{event:tileClick}",
    "C": "javascript:void(0);tileClick();",
    "D": "{tileClick}"
  },
  "answer": ["A"]
},
{
  "question": "Why is the use of a standard Visualforce control such as apex:form discouraged in Salesforce B2B Commerce page includes and subscriber pages?",
  "type": "single",
  "options": {
    "A": "Visualforce 'scopes' controls that are present on a page and the scope of the control will be set to 'ccrz'.",
    "B": "Apex:form renders DOM components slowly.",
    "C": "The CCRZ JavaScript object is not accessible within an apex:form control.",
    "D": "JavaScript events are not supported within an apex:form control."
  },
  "answer": ["C"]
},
{
  "question": "Which wire adapter should a developer use to retrieve metadata about a specific picklist?",
  "type": "single",
  "options": {
    "A": "getPicklistMetadataValues",
    "B": "getPicklistMetadata",
    "C": "getPicklistValues",
    "D": "getPicklist"
  },
  "answer": ["C"]
},


{
    "question": "What is true about mapping custom fields from Cart to Order Summary?",
    "type": "single",
    "options": {
        "A": "A custom field must exist in the Cart and Order Summary objects only to be mapped successfully.",
        "B": "The automatic Cart to Order mapping of custom fields can be disabled.",
        "C": "All data types are supported for custom fields to be mapped from Cart to Order.",
        "D": "There is a limit of 25 custom fields on a Cart that can be mapped to Order."
    },
    "answer": "B"
},
{
    "question": "In which two ways can events fired from Lightning web components be handled?",
    "type": "multiple",
    "options": {
        "A": "Programmatically adding event listeners",
        "B": "Adding callbacks to components",
        "C": "Listening for all possible events at the document root",
        "D": "Attaching handlers to DOM elements"
    },
    "answer": ["A", "D"]
},
{
    "question": "Which event is triggered within Salesforce B2B Commerce whenever a cart's state changes?",
    "type": "single",
    "options": {
        "A": "cartChange",
        "B": "cart",
        "C": "pageMessage",
        "D": "cartState"
    },
    "answer": "A"
},
{
    "question": "A developer is building a custom component in Lightning web components (LWC) that needs to fetch data from an API. Which lifecycle hook should the developer use to make the API call?",
    "type": "single",
    "options": {
        "A": "connectedCallback",
        "B": "renderedCallback",
        "C": "errorCallback",
        "D": "disconnectedCallback"
    },
    "answer": "A"
},
{
    "question": "A developer has made some changes to the products of an existing storefront, but they are unable to see the changes in the products from the store. Which action did the developer forget to take?",
    "type": "single",
    "options": {
        "A": "Activate the product list.",
        "B": "Publish the storefront.",
        "C": "Rebuild the search index.",
        "D": "Publish the catalog"
    },
    "answer": "B"
},
{
    "question": "A configuration value, CO.NewOrder, is set to TRUE. What is one way of preventing an existing payment page from being shown on the checkout payment page?",
    "type": "single",
    "options": {
        "A": "Delete the Visualforce page from the code base.",
        "B": "Remove the value matching the page name from the pmt.whitelist configuration setting, then rebuild and activate a new Configuration cache.",
        "C": "Remove the payment type associated with the payment page from CO.pmts, then rebuild and activate a new cache.",
        "D": "Override the front end template and modify the way the embedded payment page gets loaded from the payment list configuration."
    },
    "answer": "C"
},
{
    "question": "A developer has the task to bring some historical data into an org. The data must reside in the org, but cannot be populated in standard or custom objects. The customer is fine with developers building UI components to surface this data on a case-by-case basis. Which option allows a developer to meet all of these requirements?",
    "type": "single",
    "options": {
        "A": "Big objects",
        "B": "Lightning Canvas",
        "C": "External objects",
        "D": "Lightning Out"
    },
    "answer": "A"
},
{
    "question": "Which Lightning web component path allows a developer to view or edit a record while maintaining control over specifying its layout and set of fields?",
    "type": "single",
    "options": {
        "A": "lightning-record-edit-form",
        "B": "lightning-record-imperative",
        "C": "lightning-record-view-form",
        "D": "lightning-record-form"
    },
    "answer": "A"
},
{
    "question": "Northern Trail Outfitters (NTO) exports Order Summary data from its org. A developer launches Data Loader, selects Order Summary, clicks the Select All Fields button, and clicks Finish. Custom fields are defined in the Cart and Order Summary objects and successfully mapped from Cart to Order Summary during checkout. However, all three custom fields in the Order Summary are empty in the export file. What is the most likely cause?",
    "type": "single",
    "options": {
        "A": "There was a misspelling in one of the custom fields.",
        "B": "The Cart to Order action does not support the mapping of custom fields.",
        "C": "The developer does not have access to the fields.",
        "D": "The developer can export Order Summary records only by using Data Export Service."
    },
    "answer": "C"
},

    {
        "question": "What interface must a developer implement to override Tax in Checkout?",
        "type": "single",
        "options": {
            "A": "sfdc.checkout.CartTaxCalculations",
            "B": "sfdc.commerce.TaxCalculations",
            "C": "sfdc_commerce.CartTaxCalculations",
            "D": "sfdc_checkout.TaxCalculations",
            "E": "sfdc.commerce.CheckoutTaxCalculations"
        },
        "answer": "D"
    },
    {
        "question": "A developer needs to import some new product data contained in a JSON file one time. What are two viable ways to do this?",
        "type": "multiple",
        "options": {
            "A": "Convert the JSON to an xlsx file and use Workbench to import it",
            "B": "Run a command like: sfdx force:data:tree:import -f NewProducts.json -u <your username>",
            "C": "Convert the JSON to a CSV file and use Data Loader to import it",
            "D": "Run a command like: sfdx force:data;import:bulk -f NewProducts.json -u <your username>"
        },
        "answer": ["B", "C"]
    },
    {
        "question": "What is the fastest route to establishing the data needed for checkout development when setting up a new Store?",
        "type": "single",
        "options": {
            "A": "Import a previously exported store archive",
            "B": "Use sfdx setup scripts",
            "C": "Select Add Sample Data when setting up the store",
            "D": "Import the data with data loader"
        },
        "answer": "B"
    },
    {
        "question": "What is a valid way of referencing the global cc_api_CartExtension Apex class via subscriber code?",
        "type": "single",
        "options": {
            "A": "ccrz__cc_api_CartExtension",
            "B": "c__cc_api_CartExtension",
            "C": "cloudcraze.cc_api_CartExtension",
            "D": "ccrz.cc_api_CartExtension"
        },
        "answer": "D"
    },
    {
        "question": "In checkout, what event should the developer's code listen for in order to help troubleshoot and respond to actions?",
        "type": "single",
        "options": {
            "A": "CommerceBubbleEvents",
            "B": "CommerceErrorEvents",
            "C": "CommerceActionEvents",
            "D": "CommerceDiagnosticEvents"
        },
        "answer": "D"
    },
    {
        "question": "Ursa Major is planning to implement Salesforce B2B Commerce, and a developer needs to configure taxes for their storefront. The company operates in multiple states, each with different tax rates and tax rules. What are two ways the developer should configure taxes in B2B Commerce?",
        "type": "multiple",
        "options": {
            "A": "Configure a tax engine using third-party software.",
            "B": "Configure tax rates and rules for each state in Salesforce B2B Commerce.",
            "C": "Use a different pricebook for each state.",
            "D": "Use the Salesforce out-of-the-box tax calculator."
        },
        "answer": ["A", "B"]
    },
    {
        "question": "How should data for Lightning web components be provided?",
        "type": "single",
        "options": {
            "A": "A few properties that contain sets (objects) of data",
            "B": "One property that contains all data in one set (object)",
            "C": "A single property object that contains sets (objects) of data",
            "D": "Independent properties that take simpler, primitive values (e.g., String, Number, Boolean, Array)"
        },
        "answer": "D"
    },
    {
        "question": "Which wire adapter should a developer use to retrieve metadata about a specific object?",
        "type": "single",
        "options": {
            "A": "getObjectMetadata",
            "B": "getObjectInfo",
            "C": "getObject",
            "D": "getObjectDescribe"
        },
        "answer": "B"
    },
    {
        "question": "Which two steps are necessary to enable Salesforce B2B Commerce logging in the managed package?",
        "type": "multiple",
        "options": {
            "A": "Ensure you save a value in the Logging Token input field in the Global Settings section of CC Admin.",
            "B": "Turn On the Checkbox 'Cloudcraze Logging' in CC Admin.",
            "C": "Ensure the value saved in the Logging token field is appended to the ccLog query parameter.",
            "D": "Set a cookie with the ID of the user accessing the storefront in CC Admin."
        },
        "answer": ["A", "C"]
    },

    {
        "question": "How should a developer expose delivery time estimates to NTO's customers in the storefront to reduce call volume?",
        "type": "single",
        "options": {
            "A": "Add the Expected Delivery Date field to the order confirmation email.",
            "B": "Add a Desired Delivery Date input field during the checkout flow.",
            "C": "Display the Expected Delivery Date on the order page with a Lightning web component.",
            "D": "Configure an email alert to the customer when the Expected Delivery Date changes."
        },
        "answer": "C"
    },
    {
        "question": "A developer is working in Visual Studio Code on a previously deployed project which is rather large and deployments are time consuming. The developer wants to deploy some small CSS changes without waiting for the entire project deployment. What are two ways this can be accomplished?",
        "type": "multiple",
        "options": {
            "A": "Right-click the folder for the component and choose Deploy Source to Org",
            "B": "Right-click the CSS file that was edited and select Deploy Single File",
            "C": "Right-click the CSS file and choose Deploy Source to Org",
            "D": "Click the Tools menu and select Deploy styles",
            "E": "Deploy the entire project. Only the change will be copied"
        },
        "answer": ["A", "B"]
    },
    {
        "question": "Which practice is allowed when it comes to naming a Lightning web component's folder and associated files?",
        "type": "single",
        "options": {
            "A": "Including whitespace",
            "B": "Using a single underscore",
            "C": "Using consecutive underscores",
            "D": "Using a single hyphen (dash)"
        },
        "answer": "D"
    },
    {
        "question": "A user wants the pricing to reflect the price values stored in an external ERP during the checkout flow. In what way can this requirement be satisfied?",
        "type": "single",
        "options": {
            "A": "Override the computePricingCart method in ccrz.cc_api_PriceAdjustoment and make the callout in this method.",
            "B": "None of the above",
            "C": "Override the computePricingReview method in ccrz.cc_CartExtension and make the callout in this method.",
            "D": "Override the computePricingCart method in ccrz.cc_api_CartExtension and make the callout in this method."
        },
        "answer": "D"
    },
    {
        "question": "Which two statements are true regarding the cc_CallContext class in Salesforce B2B Commerce?",
        "type": "multiple",
        "options": {
            "A": "The Salesforce session is accessible via the getSession method",
            "B": "The class can be used internally within Salesforce B2B Commerce and in subscriber code to access context level parameters",
            "C": "The userLocale variable returns the current Locale for storefront.",
            "D": "The current storefront is accessible via this class"
        },
        "answer": ["B", "D"]
    },
    {
        "question": "Although Salesforce B2B Commerce and Salesforce recommend against using 'without sharing' classes whenever possible, sometimes it is unavoidable. Which three items will open up a major security hole?",
        "type": "multiple",
        "options": {
            "A": "Executing dynamic SOQL inside a without sharing class with a bind variable from PageReference.getParameters().",
            "B": "Executing dynamic SOQL inside a without sharing class with a bind variable from the UserInfo class.",
            "C": "Executing dynamic SOQL inside a without sharing class with a bind variable from PageReference.getCookies().",
            "D": "Executing dynamic SOQL inside a without sharing class with a bind variable from cc_RemoteActionContentex class.",
            "E": "Executing dynamic SOQL inside a without sharing class with a bind variable from ccAPI.CURRENT_VERSION."
        },
        "answer": ["A", "C", "D"]
    },
    {
        "question": "In a B2B Commerce store, which three tasks must a developer complete to implement the use of a third-party service for either tax, shipping, or pricing calculation?",
        "type": "multiple",
        "options": {
            "A": "Register an Apex class as the integration in the store administration",
            "B": "Create a flow to call the external service directly",
            "C": "Create an Apex class implementing the appropriate interface.",
            "D": "Create a named credential for authentication with an external service",
            "E": "Create an Apex class with an invocable method"
        },
        "answer": ["A", "C", "D"]
    },
    {
        "question": "A developer is setting up a storefront from scratch. They need to create a storefront, push store sources, create buyer users, import products, and create and search index. Which command allows the developer to accomplish this task?",
        "type": "single",
        "options": {
            "A": "sfdx commerce:store:quickstart:create -templatename 'b2c-lite-storefront'",
            "B": "sfdx commerce:store:quickstart:setup -definitionfile store-scratch-def json",
            "C": "sfdx commerce:store:create -store-name test-store",
            "D": "sfdx commerce:store:open -store-name test-store"
        },
        "answer": "B"
    },
    {
        "question": "How should a developer get the grand total amount, including shipping and tax, for items in the cart and in the currency of the cart, when developing a new Lightning web component for an Aura storefront cart page?",
        "type": "single",
        "options": {
            "A": "{!Cart.Details.grandTotal}",
            "B": "{ICart.Totals.grand Total}",
            "C": "{ICart.Details.Fields.grandTotal}",
            "D": "{!Cart.Fields.grandTotal}"
        },
        "answer": "C"
    },
    {
        "question": "Which method is used to override when extending the Salesforce B2B Commerce logic providers?",
        "type": "single",
        "options": {
            "A": "doLogic",
            "B": "process",
            "C": "doAction",
            "D": "fetch"
        },
        "answer": "C"
    },
	
    {
        "question": "A developer is on a tight timeline and needs to implement a Lightning web component which can read, create, and modify single records. What is the recommended path forward?",
        "type": "single",
        "options": {
            "A": "Use base components",
            "B": "Write custom functions against a wire adapter",
            "C": "Create an Apex Controller",
            "D": "Use Lightning Data Service"
        },
        "answer": "D"
    },
    {
        "question": "While in the process of gathering requirements from a customer about how they would like to set up their net new storefront checkout experience, a consultant learns that the customer needs the ability to add new shipping and billing addresses during checkout. Which approach should a developer take to meet this requirement?",
        "type": "single",
        "options": {
            "A": "Create a new shipping address checkout subflow that utilizes the Buyer Managed Contact Point Addresses component.",
            "B": "Enable Buyer Managed Contact Point Addresses within the Shipping Address standard component in the Checkout subflow.",
            "C": "Enable Buyer Managed Contact Point Addresses within Commerce Administration.",
            "D": "Create a Lightning web component that enables this functionality and replaces the current shipping address screen within the Checkout subflow."
        },
        "answer": "B"
    },
    {
        "question": "What is essential for a Salesforce B2B Commerce theme to show up in the theme section in CC Admin?",
        "type": "single",
        "options": {
            "A": "The theme needs to be set as a Custom Setting in Salesforce.",
            "B": "The theme needs to be set in the Configuration Settings.",
            "C": "The theme needs to have 'theme' in the name of the Static Resource.",
            "D": "The theme needs to be referred to in the head element on the page."
        },
        "answer": "C"
    },
    {
        "question": "Which wire adapter should a developer use to retrieve metadata about a specific picklist?",
        "type": "single",
        "options": {
            "A": "getPicklistMetadata",
            "B": "getPicklist",
            "C": "getPicklistValues",
            "D": "getPicklistMetadataValues"
        },
        "answer": "C"
    },
    {
        "question": "The ccUtil apex class in Salesforce B2B Commerce provides numerous utility functions that can be leveraged in subscriber classes. Which command will return the value in the given Map if found or a default value in the event that the Map is null, empty, or an object is not found for that key?",
        "type": "single",
        "options": {
            "A": "ccrz.ccUtil.defv (Map<String.Object> mp, String key , Object ob)",
            "B": "ccrz.ccUtil.defVal (Map<String.Object> mp, String key, Object ob)",
            "C": "ccrz.ccUtil.... (Map<String.Object> mp, String key, Object ob)",
            "D": "ccrz.ccUtil.defaultValue(Map<String.Object> mp, String key , Object ob)"
        },
        "answer": "B"
    },
    {
        "question": "Which two Salesforce B2B Commerce Visualforce pages must be enabled at a Salesforce Community level to make the out-of-the-box SEO functionality available?",
        "type": "multiple",
        "options": {
            "A": "CCSizeIndex",
            "B": "SizeMap",
            "C": "CCCatSiteMap",
            "D": "ProductMap"
        },
        "answer": ["A", "C"]
    },
    {
        "question": "Which format is the custom Salesforce relationship with the API name 'My_Relationship_Name__r.My_Name__c' queried and transformed into by default in Salesforce B2B Commerce?",
        "type": "single",
        "options": {
            "A": "myrelationshipname.myname: value",
            "B": "myRelationshipName.myName: value",
            "C": "myRelationshipNameR=>(myName: value)",
            "D": "My_Relationship_Name__r.My_Name__c: value"
        },
        "answer": "C"
    },
    {
        "question": "A developer exports data from an org on a standard entity which has a custom attribute. When they launch Data Loader, select the entity, click the Select All Fields button and click Finish, the custom field they added called MyCustomField__c has no values and no column header in the CSV file. What is the root cause?",
        "type": "single",
        "options": {
            "A": "The user needs to install a specific Zulu JDK that is recommended by Salesforce.",
            "B": "A mapping file was not used when the data was loaded in.",
            "C": "The user does not have access to the field.",
            "D": "The user has rights to the field but there are no values in it."
        },
        "answer": "C"
    },
    {
        "question": "Based on error emails flowing in, a developer suspects that recent edits made to a checkout flow have created a defect. The developer has data points available to use as inputs in reproducing the scenario. What should the developer do next?",
        "type": "single",
        "options": {
            "A": "Open the flow, select Debug, provide the session ID for replay, and select Run.",
            "B": "Open the flow, select Attach to Live Session, provide the session ID, and select Attach.",
            "C": "Open the flow, select Debug, provide the Input values, and select Run.",
            "D": "Open the flow, select Debug with Inputs, provide the Input values, and select Run."
        },
        "answer": "C"
    },
    {
        "question": "Which out-of-the-box Salesforce B2B Commerce page can give instructions to web crawlers from accessing specific Salesforce B2B Commerce pages?",
        "type": "single",
        "options": {
            "A": "CCCat?SiteMap",
            "B": "cc_RobotsTxT",
            "C": "CCSiteIndex",
            "D": "CCPage"
        },
        "answer": "B"
    },
	
	
    {
        "question": "Which handlebars helper expression is used in Salesforce B2B Commerce pages and components to toggle the display of a block of markup?",
        "type": "single",
        "options": {
            "A": "{{#ifStoreSetting 'Field__c'}} ... {{/ifStoreSetting}}",
            "B": "{{#ifSetting 'Page.cfg'}} ... {{/ifSetting}}",
            "C": "{{#ifConfig 'Field__c'}} ... {{/ifConfig}}",
            "D": "{{#ifDisplay 'Page.cfg'}} ... {{/ifDisplay}}"
        },
        "answer": "C"
    },
    {
        "question": "Which two statements are true for Mass Order?",
        "type": "multiple",
        "options": {
            "A": "Mass Order pricing is done via a batch job.",
            "B": "Mass order works with the default wishlists.",
            "C": "The variation product is leveraged for SKUs.",
            "D": "Mass Order is mobile ready with the ccrz templates."
        },
        "answer": ["A", "C"]
    },
    {
        "question": "Which event should be triggered when user-facing info, warning, or error messages need to be displayed on a Visualforce page?",
        "type": "single",
        "options": {
            "A": "showMessage",
            "B": "displayPageMessage",
            "C": "displayMessage",
            "D": "pageMessage"
        },
        "answer": "D"
    },
    {
        "question": "Where are handlebar Templates defined in the Cloudcraze managed package?",
        "type": "single",
        "options": {
            "A": "uiProperties file",
            "B": "Configuration Setting configuration",
            "C": "cc_hk_UserInterface extension",
            "D": "Page Settings configuration"
        },
        "answer": "A"
    },
    {
        "question": "During checkout flow customizations, a developer receives an error on shipping cost calculation integrations with the error code: INSUFFICIENT_ACCESS_OR_READONLY. What is causing this error?",
        "type": "single",
        "options": {
            "A": "The storefront user does not have access to the Cart Delivery Method object.",
            "B": "An error has occurred during the cart shipping charge integration.",
            "C": "The storefront user does not have access to custom fields on the Order Delivery Method object.",
            "D": "The cart is no longer in a valid Checkout State."
        },
        "answer": "D"
    },
    {
        "question": "Where is the API-based record creation generally handled in Salesforce B2B Commerce?",
        "type": "single",
        "options": {
            "A": "In the methods available in extension hooks",
            "B": "The service-layer responsible for the entity",
            "C": "Data creation is not allowed",
            "D": "Logic classes that implement the business logic for create operations"
        },
        "answer": "B"
    },
    {
        "question": "What two kinds of queries do the methods in Salesforce B2B Commerce services perform by default?",
        "type": "multiple",
        "options": {
            "A": "SOSL",
            "B": "SQL",
            "C": "SOQL",
            "D": "Schema-less queries"
        },
        "answer": ["C", "D"]
    },
    {
        "question": "In which three ways can Salesforce B2B Commerce API sizing blocks support multiple API sizing requests?",
        "type": "multiple",
        "options": {
            "A": "When different entities are specified in the method invocation.",
            "B": "The sizing block is not removed.",
            "C": "SZ_ASSC is used.",
            "D": "The sizing block is removed after the first handler.",
            "E": "SZ_ASSC is not used."
        },
        "answer": ["A", "C", "E"]
    },
    {
        "question": "Numerous flags when set, have a direct impact on the result set provided by the Global API's. Which conversion flag allows for sObjects to be returned from the Global API's when provided as a Boolean parameter with a value of true?",
        "type": "single",
        "options": {
            "A": "ccrz.ccAPISizing.SKIPTRZ",
            "B": "ccrz.ccAPISizing.SOBJECT",
            "C": "ccrz.ccAPI.SZ_SKIPTRZ",
            "D": "ccrz.ccAPI.SZ_SOBJECT"
        },
        "answer": "D"
    },
	
    {
        "question": "What is true regarding adding more Configuration Settings to Salesforce B2B Commerce?",
        "type": "single",
        "options": {
            "A": "Metadata can be added to existing modules, but you cannot add new modules.",
            "B": "Configuration settings can only be extended through APIs.",
            "C": "Select 'New' in your storefront's Configuration Settings and create a custom setting.",
            "D": "More modules and metadata can be added to Salesforce B2B Commerce."
        },
        "answer": "D"
    },
    {
        "question": "A developer is creating a component to implement a custom Terms and Conditions checkbox at checkout in the Aura Commerce template. Which method should the developer implement on the Lightning web component to ensure the user accepts the terms and conditions?",
        "type": "single",
        "options": {
            "A": "ComponentValidity",
            "B": "Validate",
            "C": "SaveCheckout",
            "D": "CheckValidity"
        },
        "answer": "B"
    },
    {
        "question": "What are two guidelines for logging that are used within the core Salesforce B2B Commerce product?",
        "type": "multiple",
        "options": {
            "A": "Items or data within computationally intensive loops should be logged.",
            "B": "The close method of ccrz.ccLog must be called at the end of the remote action.",
            "C": "No calls to ccrz.ccLog can be made before cc_CallContext.initRemoteContext is executed.",
            "D": "It is okay to log any data on the server that is already logged on the client side."
        },
        "answer": ["B", "C"]
    },
    {
        "question": "Which two methods from the platformResourceLoader module are relevant for including third-party JavaScript and CSS in a Lightning web component?",
        "type": "multiple",
        "options": {
            "A": "loadClientScript",
            "B": "loadScript",
            "C": "loadCss",
            "D": "loadStyle"
        },
        "answer": ["B", "D"]
    },
    {
        "question": "Universal Containers (UC) is ready to build a tax provider class using the interfaces available in the Buyer Experience SDK. When creating a tax provider, what are three things that a developer should consider first?",
        "type": "multiple",
        "options": {
            "A": "Steps to complete in the Tax Service",
            "B": "How to handle results",
            "C": "Whether to use JSON or XML",
            "D": "What to implement",
            "E": "What events to fire in the Lightning web component"
        },
        "answer": ["A", "B", "D"]
    },
    {
        "question": "What are the templating, JavaScript, and CSS frameworks that the CloudCraze managed package leverages?",
        "type": "single",
        "options": {
            "A": "AngularJS, Backbone.js, and Handlebars.js",
            "B": "Bootstrap, Backbone.js, and Handlebars.js",
            "C": "Bootstrap, AngularJS, and Backbone.js",
            "D": "AngularJS, React.js, and Handlebars.js"
        },
        "answer": "B"
    }

	
];
};
