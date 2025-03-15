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

	
 ];
};
