window.getQuestions = function() {
    return [
{
  "question": "A business requires that every parent record must have a child record. A developer writes an Apex method with two DML statements to insert a parent record and a child record.\n\nA validation rule blocks child records from being created. The method uses a try/catch block to handle the DML exception.\n\nWhat should the developer do to ensure the parent always has a child record?",
  "type": "single",
  "options": {
    "A": "Use Database.insert() and set the allOrNone parameter to true.",
    "B": "Use addError() on the parent record if an error occurs on the child record.",
    "C": "Set a database savepoint to rollback if there are errors.",
    "D": "Delete the parent record in the catch statement when an error occurs on the child record DML operation."
  },
  "answer": "C"
},

{
  "question": "Consider the Apex class above that defines a RemoteAction used on a Visualforce search page.\n\nWhich code snippet will assert that the remote action returned the correct Account?",
  "type": "single",
  "options": {
    "A": "MyRemoter remote = new MyRemoter(); Account a = remote.getAccount({'TestAccount'); System.assertEquals, ‘TestAcccunt', a.Name -;",
    "B": "Account a = MyRemoter.getAccount('TestAccount'); System.assertEquals('TestAccount', a.Name);",
    "C": "MyRemoter remote = new MyRemoter('TestAccount'); Account a = remote.getAccount(); System.assertEquals('TestAccount', a.Name);",
    "D": "Account a = controller.getAccount('TestAccount'); System.assertEquals('TestAccount', a.Name);"
  },
  "answer": "B"
},

{
  "question": "A developer is trying to decide between creating a Visualforce component or a Lightning component for a custom screen.\n\nWhich functionality consideration impacts the final decision?",
  "type": "single",
  "options": {
    "A": "Does the screen need to be accessible from the Lightning Experience UI?",
    "B": "Will the screen make use of a JavaScript framework?",
    "C": "Does the screen need to be rendered as a PDF without using a third-party application?",
    "D": "Will the screen be accessed via a mobile app?"
  },
  "answer": "C"
},


{
  "question": "A developer is tasked with ensuring that email addresses entered into the system for Contacts and for a Custom Object called Survey_Response__c do not belong to a list of blacklisted domains. The list of blacklisted domains will be stored in a custom object for ease of maintenance by users. Note that the Survey_Response__c object is populated via a custom Visualforce page.\n\nWhat is the optimal way to implement this?",
  "type": "single",
  "options": {
    "A": "Implement the logic in an Apex trigger on Contact and also implement the logic within the Custom Visualforce page controller.",
    "B": "Implement the logic in the Custom Visualforce page controller and call that method from an Apex trigger on Contact.",
    "C": "Implement the logic in a helper class that is called by an Apex trigger on Contact and from the Custom Visualforce page controller.",
    "D": "Implement the logic in a Validation Rule on the Contact and a validation Rule on the Survey_Response__c object."
  },
  "answer": "C"
},

{
  "question": "A developer is creating a Lightning web component that contains a child component. The property stage is being passed from the parent to the child. The public property is changing, but the setOppList function is not being invoked.\n\nWhat should the developer change to allow this?{{pd2_8.jpg}}",
  "type": "single",
  "options": {
    "A": "Move the logic from connectedCalIback() to constructor(),",
    "B": "Create a custom event from the parent component to set the property,",
    "C": "Move the logic from connectedCallback() into renderedCallback(),",
    "D": "Move the logic to a getter/setter pair,"
  },
  "answer": "D"
},

{
  "question": "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes. Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so.\n\nWhich two statements are true regarding these issues and resolution?",
  "type": "multiple",
  "options": {
    "A": "A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
    "B": "Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
    "C": "The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
    "D": "The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production"
  },
  "answer": ["A", "D"]
},

{
  "question": "A developer created a Lightning web component that uses a lightning-record-edit-form to collect information about Leads. Users complain that they only see one error message at a time about their input when trying to save a Lead record. What is the recommended approach to perform validations on more than one field, and display multiple error messages simultaneously with minimal JavaScript intervention?",
  "type": "single",
  "options": {
    "A": "Try/catch/finally block",
    "B": "Apex trigger",
    "C": "Validation rules",
    "D": "External JavaScript library"
  },
  "answer": "D"
},

{
  "question": "A company uses a custom-built enterprise resource planning (ERP) system to handle order management. The company wants Sales Reps to know the status of orders so that if a customer calls to ask about their shipment, the Sales Rep can advise the customer about the order's status and tracking number if it is already shipped.\n\nWhich two methods can make this ERP order data visible in Salesforce?",
  "type": "multiple",
  "options": {
    "A": "Ensure real-time order data is in Salesforce using the Streaming API.",
    "B": "Write a cron job in Salesforce to poll the ERP system for order updates.",
    "C": "Have the ERP system push the data into Salesforce using the SOAP API.",
    "D": "Use Salesforce Connect to view real-time Order data in the ERP system."
  },
  "answer": ["C", "D"]
},

{
  "question": "As part of a new integration, a developer is asked to implement a new custom search functionality that is capable of performing unrestricted queries and can account for all values within a custom picklist field, Type__c, on the Opportunity object. The search feature must also account for NULL values.\n\nThe organization-wide default for the Opportunity object is set to Public Read-Only, and a new custom index has been created for the Type__c field. There are more than 5 million Opportunity records within the environment, and a considerable amount of the existing records have NULL values for the picklist.\n\nWhich technique should the developer implement to maximize performance when querying NULL values?",
  "type": "single",
  "options": {
    "A": "Create a formula field that substitutes Null values for a string of text, create an index for the formula field, then use the formula within the WHERE clause.",
    "B": "Perform two SOQL queries; one to query Opportunities where Type__c != NULL, and another to query where Type__c = NULL, then join the result set using Apex.",
    "C": "Use a SOSL query to return ALL Opportunities that have a value of NULL in any field.",
    "D": "Use the OR operator to combine WHERE clauses to strictly search for each value within the picklist, including Type__c = NULL."
  },
  "answer": "A"
},


{
  "question": "As part of a custom interface, a developer team creates various new Lightning web components. Each of the components handles errors using toast messages. When the development is complete, all the components are added to the same Lightning page.\n\nDuring acceptance testing, users complain about the long chain of toast messages that display when errors occur loading the component.\n\nWhich two techniques should the developer implement to improve the user experience?",
  "type": "multiple",
  "options": {
    "A": "Use a <template> tag to display in-place error messages.",
    "B": "Use a Lightning web component to aggregate and display all errors.",
    "C": "Use the window.alert() method to display the error messages.",
    "D": "Use public properties on each component to display the error messages."
  },
  "answer": ["A", "B"]
},


{
  "question": "A developer created the code to perform an HTTP GET request to an external system.\n\n{{pd2_6.jpg}}When the code is executed, the callout is unsuccessful and the following error appears within the Developer Console: System.CalloutException: Unauthorized endpoint\n\nWhich recommended approach should the developer implement to fix the callout exception?",
  "type": "single",
  "options": {
    "A": "Create a Remote Site Setting configuration that includes the endpoint.",
    "B": "Annotate the getERPCatalogContents method with @Future(callout=true).",
    "C": "Use the setHeader() method to specify Basic Authentication.",
    "D": "Change the access modifier for ERPCatelog from public to global."
  },
  "answer": "A"
},


{
  "question": "A developer wrote a test class that successfully asserts a trigger on Account. It fires and updates data correctly in a sandbox environment.\n\nA Salesforce admin with a custom profile attempts to deploy this trigger via a change set into the production environment, but the test class fails with an insufficient privileges error.\n\nWhat should a developer do to fix the problem?",
  "type": "single",
  "options": {
    "A": "Add System.runAs() to the test class to execute the trigger as a user with the correct object permissions.",
    "B": "Configure the production environment to enable 'Run All Tests as Admin User.'",
    "C": "Verify that Test.startTest() is not inside a For loop in the test class.",
    "D": "Add seeAllData=true to the test class to work within the sharing model for the production environment."
  },
  "answer": "A"
},

{
  "question": "Universal Containers allows customers to log into a Salesforce Community and update their orders via a custom Visualforce page. Universal Containers' sales representatives can edit the orders on the same Visualforce page.<br><br>What should a developer use in an Apex test class to test that record sharing is enforced on the Visualforce page?",
  "type": "single",
  "options": {
    "A": "Use System.profileIs() to test as an administrator and a community user.",
    "B": "Use System.profileIs() to test as a sales rep and a community user.",
    "C": "Use System.runAs() to test as a sales rep and a community user.",
    "D": "Use System.runAs() to test as an administrator and a community user."
  },
  "answer": "C"
},

{
  "question": "The Account object has a field, Audit_Code__c, that specifies the type of auditing needed, and a Lookup to User, Auditor__c, for the assigned auditor. Each User has a unique text field, Rudi, used to automatically assign the correct User to the Account's Auditor__c field when the Account is created.<br><br>What should be changed to most optimize the code’s efficiency? {{pd2_5.jpg}}Choose 2 answers.",
  "type": "multiple",
  "options": {
    "A": "Build a Map<String, List<Account>> of audit code to accounts.",
    "B": "Add an initial SOQL query to get all distinct audit codes.",
    "C": "Build a Map<Id, List<String>> of Account Id to audit codes.",
    "D": "Add a WHERE clause to the SOQL query to filter on audit codes."
  },
  "answer": ["A", "D"]
},

{
  "question": "Which technique can run custom logic when a Lightning web component is loaded?",
  "type": "single",
  "options": {
    "A": "Call $A.enqueueAction and pass in the method to call.",
    "B": "Use the renderedCallback() method.",
    "C": "Use an <aura:handler> init event to call a function.",
    "D": "Use the connectedCallback() method."
  },
  "answer": "D"
},


{
  "question": "A developer has a Batch Apex process, Batch_Account_Sales, that updates the sales amount for 10,000 Accounts on a nightly basis. The Batch Apex works as designed in the sandbox. However, the developer cannot get code coverage on the Batch Apex class.<br><br>What is causing the code coverage problem?<br>{{pd2_4.jpg}}",
  "type": "single",
  "options": {
    "A": "The batch process will not recognize new accounts created in the same session.",
    "B": "The account creation already sets the sales amount to 0.",
    "C": "The executeBatch must fall within Test.startTest() and Test.stopTest().",
    "D": "The batch needs more than one account record created."
  },
  "answer": "A"
},

{
  "question": "A company has code to update a Request and Request Lines and make a callout to their external ERP system’s REST endpoint with the updated records.<br>{{pd2_3.jpg}}<br>What should be done to address the problem?",
  "type": "single",
  "options": {
    "A": "Move the CalloutUtil.makeRestCallout method call below the catch block.",
    "B": "Remove the Database.setSavepoint and Database.rollback.",
    "C": "Change the CalloutUtil.makeRestCallout to an @InvocableMethod method.",
    "D": "Change the CalloutUtil.makeRestCallout to an @future method."
  },
  "answer": "D"
},

{
  "question": "The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Accounts are simultaneously updated to be customers.<br><br>The test method fails at Line 20 because of too many SOQL queries.<br>{{pd2_2.jpg}}<br><br>What is the correct way to fix this?",
  "type": "single",
  "options": {
    "A": "Add Test.startTest() before and Test.stopTest() after both Line 7 of the code and Line 20 of the code.",
    "B": "Change the DataFactory class to create fewer Accounts so that the number of queries in the trigger is reduced.",
    "C": "Add Test.startTest() before Line 18 of the code and add Test.stopTest() after line 18 of the code.",
    "D": "Replace most of the Apex Trigger with Process Builder processes to reduce the number of queries in the trigger."
  },
  "answer": "C",
},

{
  "question": "Which two best practices should the developer implement to optimize this code? Choose 2 answers",
  "type": "multiple",
  "options": {
    "A": "Use a collection for the DML statement.",
    "B": "Query the Pricing_structure__c records outside of the loop.",
    "C": "Change the trigger context to after update, after insert.",
    "D": "Remove the DML statement."
  },
  "answer": ["B", "D"],
},

{
  "question": "Universal Containers needs to integrate with a Heroku service that resizes product images submitted by users.<br><br>What are two alternatives to implement the integration and protect against malicious calls to Heroku app's endpoint? Choose 2 answers",
  "type": "multiple",
  "options": {
    "A": "Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data and some form of pre-shared secret key, so that the Heroku app can authenticate requests and store the resized images in Salesforce.",
    "B": "Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data; therefore the Heroku app can automatically reply back to the callout with the resized images in Salesforce.",
    "C": "Create a Workflow Rule with an Outbound Message and select Send Session ID so that the Heroku app can use it to send the resized images back to Salesforce.",
    "D": "Create a Workflow Rule with an Outbound Message allowing the Heroku app to automatically store the resized images in Salesforce."
  },
  "answer": ["A", "C"],
},

{
  "question": "A developer is asked to develop a new AppExchange application. A feature of the program creates Survey records when a Case reaches a certain stage and is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers.<br><br>What should the developer use to store and package the custom configuration settings for the app?",
  "type": "single",
  "options": {
    "A": "Custom Settings",
    "B": "Custom Metadata",
    "C": "Custom Objects",
    "D": "Process Builder"
  },
  "answer": "B",
},

{
  "question": "The Salesforce admin at Cloud Kicks created a custom object called Region__c to store all postal zip codes in the United States and the Cloud Kicks sales region the zip code belongs to.<br><br>Cloud Kicks wants a trigger on the Lead to populate the Region based on the Lead's zip code.<br><br>Which code segment is the most efficient way to fulfill this request?{{pd21_a.jpg}}{{pd21_b.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C"
  },
  "answer": "C",
},

{
  "question": "A developer created a Lightning web component that uses a lightning-record-edit-form to collect information about Leads. Users complain that they only see one error message at a time when they save a Lead record.<br><br>What can the developer use to perform the validations, and allow multiple error messages to be displayed simultaneously?",
  "type": "single",
  "options": {
    "A": "Apex REST",
    "B": "External JavaScript Library",
    "C": "Apex Trigger",
    "D": "Process Builder"
  },
  "answer": "B",
},


{
  "question": "A developer creates an application event that has triggered an infinite loop.<br><br>What may have caused this problem?",
  "type": "single",
  "options": {
    "A": "The event is fired from a custom renderer.",
    "B": "An event is fired ‘ontouchend’ and is unhandled.",
    "C": "The event has multiple registered in the project.",
    "D": "The event handler calls a trigger."
  },
  "answer": "A",
},

{
  "question": "Universal Containers (UC) calculates commissions on their Opportunities in different ways based on complex rules that vary depending on the line of business of the Opportunity.<br><br>Whenever a new line of business is added to Salesforce at UC, it is likely that a different calculation will need to be added too. When an Opportunity’s stage is changed to Closed/Won, its commission should be calculated in real time.<br><br>What should a developer use so that different implementations of the commission calculation can be invoked on the stage change? ",
  "type": "single",
  "options": {
    "A": "A final class with multiple methods",
    "B": "Apex Describe Schema methods",
    "C": "An Apex class with @custom enum",
    "D": "An Interface and implementing classes"
  },
  "answer": "D",
},

{
  "question": "How should a developer reference a third-party JavaScript library from a Lightning component?",
  "type": "single",
  "options": {
    "A": "From an asset file",
    "B": "From a document",
    "C": "From a static resource",
    "D": "From a third-party URL"
  },
  "answer": "C",
},

{
  "question": "A developer writes a Lightning web component that displays a dropdown list of all custom objects in the org, from which a user will select. An Apex method prepares and returns data to the component.<br><br>What should the developer do to determine which objects to include in the response?",
  "type": "single",
  "options": {
    "A": "Check the isCustom() value on the sObject describe result.",
    "B": "Use the getCustomObject() method from the Schema class.",
    "C": "Import the list of all custom objects from @salesforce/schema.",
    "D": "Check the getObjectType() value for 'Custom' or 'Standard' on the sObject describe result."
  },
  "answer": "B",
},

{
  "question": "A developer is trying to access org data from within a test class.<br><br>Which sObject type requires the test class to have the (seeAllData=true) annotation?",
  "type": "single",
  "options": {
    "A": "RecordType",
    "B": "Profile",
    "C": "User",
    "D": "Report"
  },
  "answer": "D",
},

{
  "question": "The Lightning Component allows users to click a button to save their changes and then redirects them to a different page. Currently when the user hits the Save button, the records are getting saved, but they are not redirected.<br><br>Which three techniques can a developer use to debug the JavaScript? Choose 3 answers",
  "type": "multiple",
  "options": {
    "A": "Use the browser's dev tools to debug the JavaScript.",
    "B": "Enable Debug Mode for Lightning components for the user.",
    "C": "Use Developer Console to view checkpoints.",
    "D": "Use console.log() messages in the JavaScript.",
    "E": "Use Developer Console to view the debug log."
  },
  "answer": ["A", "B", "D"],
},

{
  "question": "In a previous data audit, it was determined that close to 5 million Opportunity records are stored within the Salesforce environment. The organization-wide default for the object is set to Public Read-Only and most opportunities are related to an external case.<br><br>The method is called from a Lightning web component. Some end users do not provide a caseId value and experience low performance while running the query.<br><br>Which two techniques should the developer implement to avoid low performance queries from executing? Choose 2 answers",
  "type": "multiple",
  "options": {
    "A": "Implement a LIMIT clause within the SOQL query to restrict the result set.",
    "B": "Ensure the user-provided input is not null before executing the SOQL query.",
    "C": "Implement the with sharing keyword on the Apex class.",
    "D": "Use SOSL instead of SOQL queries to perform text-based searches."
  },
  "answer": ["A", "B"],
},

{
  "question": "There are user complaints about slow render times of a custom data table within a Visualforce page that loads thousands of Account records at once.<br><br>What can a developer do to help alleviate such issues?",
  "type": "single",
  "options": {
    "A": "Upload a third-party data table library as a static resource.",
    "B": "Use JavaScript remoting to query the accounts.",
    "C": "Use the standard Account List controller and implement pagination.",
    "D": "Use the transient keyword in the Apex code when querying the Account records."
  },
  "answer": "C",
},

{
  "question": "A developer is asked to create a Lightning web component that will be invoked via a button on a record page. The component must be displayed in a modal dialog.<br><br>Which three steps should the developer take to achieve this? Choose 3 answers",
  "type": "multiple",
  "options": {
    "A": "Add a targetConfig and set targets to lightning__RecordAction.",
    "B": "In targetConfigs, add Lightning_AppPage as a target.",
    "C": "Set actionType to ScreenAction.",
    "D": "In target, add lightning__RecordAction as a target.",
    "E": "Set eventType to action."
  },
  "answer": ["A", "C", "D"],
},


{
  "question": "A developer creates a Lightning web component to allow a Contact to be quickly entered. However, error messages are not displayed.<br><br>{{pd2_10.jpg}}Which component should the developer add to the form to display error messages?",
  "type": "single",
  "options": {
    "A": "apex:messages",
    "B": "aura:messages",
    "C": "lightning-messages",
    "D": "lightning-error"
  },
  "answer": "C",
},

{
  "question": "Just prior to a new deployment, the Salesforce Administrator who configured a new order fulfillment process in a developer sandbox suddenly left the company. The users had fully tested all of the changes in the sandbox and signed off on them.<br><br>Unfortunately, although a Change Set was started, it was not complete. A developer is brought in to help finish the deployment.<br><br>What should the developer do to identify the configuration changes that need to be moved into production?",
  "type": "single",
  "options": {
    "A": "Leverage the Setup Audit Trail to review the changes made by the departed Administrator and identify which changes should be added to the Change Set.",
    "B": "Use the Metadata API and a supported development IDE to push all of the configuration from the sandbox into production to ensure no changes are lost.",
    "C": "Set up Continuous Integration and a Git repository to automatically merge all changes from the sandbox metadata with the production metadata.",
    "D": "In Salesforce setup, look at the last modified date for every object to determine which should be added to the Change Set."
  },
  "answer": "A",
},

{
  "question": "A developer wrote the following method to find all the test accounts in the org:{{pd2_11.jpg}}What should be used to fix this failing test?",
  "type": "single",
  "options": {
    "A": "Test.loaddata to set up expected data",
    "B": "Test.fixedSearchResults() method to set up expected data",
    "C": "@isTest(SeeAllData=true) to access org data for the test",
    "D": "@testSetup method to set up expected data"
  },
  "answer": "B",
},


{
  "question": "A developer created a Lightning web component for the Account record page that displays the five most recently contacted Contacts for an Account. The Apex method, getRecentContacts, returns a list of Contacts and will be wired to a property in the component.{{pd2_12.jpg}}Which two lines must change in the above code to make the Apex method able to be wired? Choose 2 answers",
"type": "multiple",
  "options": {
    "A": "Add @AuraEnabled(cacheable=true) to line 08",
    "B": "Remove private from line 09",
    "C": "Add @AuraEnabled(cacheable=true) to line 03",
    "D": "Add public to line 04"
  },
  "answer": ["C", "D"],
},


{
  "question": "A developer is tasked with creating an application-centric feature on which end-users can access and update information. This feature must be available in Lightning Experience while working seamlessly in multiple device form factors, such as desktops, phones, and tablets. Additionally, the feature must support Addressable URL Tabs and interact with the Salesforce Console APIs.<br><br>What are two approaches a developer can take to build the application and support the business requirements? Choose 2 answers",
  "type": "multiple",
  "options": {
    "A": "Create the application using Aura Components wrapped in Lightning Web Components.",
    "B": "Create the application using Lightning Web Components wrapped in Aura Components.",
    "C": "Create the application using Aura Components.",
    "D": "Create the application using Lightning Experience Builder."
  },
  "answer": ["B", "C"],
},

	
{
  "question": "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?{{pd2_13.jpg}}",
  "type": "single",
  "options": {
    "A": "AccountControllerExt extension = new AccountControllerExt(acct);",
    "B": "AccountControllerExt extension = new AccountControllerExt(acct.Id);",
    "C": "ApexPages.StandardController sc = new ApexPages.StandardController(acct.Id);<br>AccountControllerExt extension = new AccountControllerExt(sc);",
    "D": "ApexPages.StandardController sc = new ApexPages.StandardController(acct);<br>AccountControllerExt extension = new AccountControllerExt(sc);"
  },
  "answer": "D",
},

	
{
  "question": "A Salesforce org has more than 50,000 contacts. A new business process requires a calculation that aggregates data from all of these contact records. This calculation needs to run once a day after business hours.<br><br>Which two steps should a developer take to accomplish this? Choose 2 answers",
  "type": "multiple",
  "options": {
    "A": "Use the @future annotation on the method that performs the aggregate calculation.",
    "B": "Implement the Schedulable interface in the class that contains the aggregate calculation method.",
    "C": "Use the @readOnly annotation on the method that performs the aggregate calculation.",
    "D": "Implement the Queueable interface in the class that contains the aggregate calculation method."
  },
  "answer": ["B", "D"],
},


{
  "question": "Assuming the CreateOneAccount class creates one Account and implements the Queueable interface, which syntax tests the Apex code?",
  "type": "single",
  "options": {
    "A": "List<Account> accts;\nSystem.enqueueJob(new CreateOneAccount());\nTest.getFlexQueueOrder();\nSystem.assertEquals(1, accts.size());",
    "B": "List<Account> accts;\nTest.startTest();\nSystem.enqueueJob(new CreateOneAccount());\nTest.stopTest();\naccts = [SELECT Id FROM Account];\nSystem.assertEquals(1, accts.size());",
    "C": "List<Account> accts;\nSystem.enqueueJob(new CreateOneAccount());\nTest.startTest();\nSystem.assertEquals(1, accts.size());\nTest.stopTest();",
    "D": "List<Account> accts;\nSystem.enqueueJob(new CreateOneAccount());\nTest.startTest();\nSystem.assertEquals(1, accts.size());\nTest.stopTest();"
  },
  "answer": "B",
},

{
  "question": "As part of an integration development effort, a developer is tasked to create an Apex method that solely relies on the use of foreign identifiers in order to relate new Contact records to existing Accounts in Salesforce. The Account object contains a field marked as an external ID, the API Name of this field is Legacy_Id__c.<br><br>{{pd2_14.jpg}}What is the most efficient way to instantiate the parentAccount variable on line 02 to ensure the newly created Contact is properly related to the Account?",
  "type": "single",
  "options": {
    "A": "Account parentAccount = [SELECT Id FROM Account WHERE Legacy_Id__c = :externalIdentifier].Id;",
    "B": "Account parentAccount = new Account(Legacy_Id__c = externalIdentifier);",
    "C": "Account parentAccount = [SELECT Id FROM Account WHERE Legacy_Id__c = :externalIdentifier];",
    "D": "Account parentAccount = new Account(); parentAccount.Id = externalIdentifier;"
  },
  "answer": "B",
},

{
  "question": "Which two scenarios require an Apex method to be called imperatively from a Lightning web component? Choose 2 answers",
  "type": "multiple",
  "options": {
    "A": "Calling a method that makes a web service callout",
    "B": "Calling a method that is not annotated with cacheable=true",
    "C": "Calling a method with the click of a button",
    "D": "Calling a method that is external to the main controller for the Lightning web component"
  },
  "answer": ["A", "B"],
},

{
  "question": "As part of point-to-point integration, a developer must call an external web service which, due to high demand, takes a long time to provide a response. As part of the request, the developer must collect key inputs from the end user before making the callout.<br><br>Which two elements should the developer use to implement these business requirements? Choose 2 answers",
  "type": "multiple",
  "options": {
    "A": "Apex method that returns a Continuation object",
    "B": "Screen flow",
    "C": "Process Builder",
    "D": "Lightning web component"
  },
  "answer": ["A", "D"],
},

{
  "question": "Universal Containers (UC) has custom Order and Order Line objects that represent orders placed by its customers.<br><br>A developer has a new requirement that UC's external enterprise resource planning (ERP) system integrate with Salesforce to create orders for existing customers in Salesforce whenever an ERP system.<br><br>What should the developer use to create the orders in Salesforce?",
  "type": "single",
  "options": {
    "A": "Connect API",
    "B": "Change Data Capture API",
    "C": "SObject Tree API",
    "D": "Event Monitoring API"
  },
  "answer": "A",
},

{
  "question": "A developer has working business logic code, but sees the following error in the test class:<br><br>You have uncommitted work pending. Please commit or rollback before calling out.<br><br>What is a possible solution?",
  "type": "single",
  "options": {
    "A": "Rewrite the business logic and test classes with ©TestVisible set on the callout.",
    "B": "Set seeAIIData to \"true\" at the top of the test class, since the code does not fail in practice.",
    "C": "Call support for help with the target endpoint, as it is likely an external code error.",
    "D": "Use test.IsRunningTest() before making the callout to bypass it in test execution."
  },
  "answer": "D",
},

{
  "question": "A developer wants to write a generic Apex method that will compare the Salesforce Name field between any two object records, for example to compare the Name field of an Account and an Opportunity; or the name of an Account and a Contact.<br><br>How should the developer do this?",
  "type": "single",
  "options": {
    "A": "Use a String.replace() method to parse the contents of each Name field.",
    "B": "Invoke a Schema.describe() function to compare the values of each Name field.",
    "C": "Cast each object into an sObject and use sObject.get('Name') to compare the Name fields.",
    "D": "Use the Salesforce Metadata API to extract the value of each object and compare the name fields."
  },
  "answer": "C",
},

{
  "question": "The Contact object in an org is configured with workflow rules that trigger field updates.\n\nThe fields are not updating, even though the end user expects them to. The developer creates a debug log to troubleshoot the problem.\n\nWhat should the developer specify in the debug log to see the values of the workflow rule conditions and debug the problem?",
  "type": "single",
  "options": {
    "A": "INFO level for the Database log category",
    "B": "ERROR level for the Workflow log category",
    "C": "ERROR level for the Database log category",
    "D": "INFO level for the Workflow log category"
  },
  "answer": "D"
},

{
    "question": "When the sales team views an individual customer record, they need to see recent interactions for the customer. These interactions can be sales orders, phone calls, or Cases. The date range for recent interactions will be the same for every customer record type.\n\nHow can this be accomplished?",
    "type": "single",
    "options": {
        "A": "Use Lightning Flow to read the customer's record type, and then do a dynamic query for recent interactions and display on the View page.",
        "B": "Use a Lightning component to query and display interactions based on record type that is passed in using a design: attribute from the Lightning page.",
        "C": "Use batch Apex to query for the most recent interactions when the customer view screen is loaded.",
        "D": "Use a dynamic form on the customer record page to display recent interactions."
    },
    "answer": ["A"]
},

{
    "question": "A developer is writing a Jest test for a Lightning web component that conditionally displays child components based on a user’s checkbox selections. What should the developer do to properly test that the correct components display and hide for each scenario?",
    "type": "single",
    "options": {
        "A": "Reset the DOM after each test with the afterEach method.",
        "B": "Add a teardown block to reset the DOM after each test.",
        "C": "Create a new describe block for each test",
        "D": "Create a new jsdom instance for each test"
    },
    "answer": ["C"]
},


{
    "question": "What should a developer use to query all Account fields for the Acme account in their sandbox?",
    "type": "single",
    "options": {
        "A": "SELECT FROM ACCOUNT WHERE Name = ‘Acme’ LIMIT 1",
        "B": "SELECT ALL FROM Account WHERE Name = ‘Acme’ LIMIT 1",
        "C": "SELECT FIELDS FROM Account WHERE Name = ‘Acme’ LIMIT 1",
        "D": "SELECT FIELDS (ALL) FROM Account WHERE Name = ‘Acme’ LIMIT 1"
    },
    "answer": ["D"]
},

{
    "question": "Which use case can only be performed by using asynchronous Apex?",
    "type": "single",
    "options": {
        "A": "Scheduling a batch process to complete in the future",
        "B": "Processing high volumes of records",
        "C": "Updating a record after the completion of an insert",
        "D": "Calling a web service from an Apex trigger"
    },
    "answer": ["D"]
},


{
    "question": "A company represents their customers as Accounts in Salesforce. All customers have a unique <code>Customer_Number__c</code> that is unique across all systems. They also have a custom <code>Invoice__c</code> object with a Lookup to Account, to represent invoices from their external system. The company wants to integrate invoice data back into Salesforce so Sales Reps can see when a customer is paying their bills on time.<br><br>What is the optimal way to implement this?",
    "type": "single",
    "options": {
        "A": "Use Salesforce Connect and external data objects to seamlessly import the invoice data into Salesforce without custom code.",
        "B": "Ensure Customer_Number__c is an External ID and that a custom field Invoice_Number__c is an External ID and Upsert invoice data nightly.",
        "C": "Create a cross-reference table in the custom invoicing system with the Salesforce Account ID of each Customer and insert invoice data nightly.",
        "D": "Query the Account Object upon each call to insert invoice data to fetch the Salesforce ID corresponding to the Customer Number on the invoice."
    },
    "answer": ["B"]
},


{
    "question": "Consider the controller code below that is called from a Lightning component and returns data wrapped in a class.<br><br><pre><code>public class myServerSideController {<br>    @AuraEnabled<br>    public static MyDataWrapper getSomeData(String theType) {<br>        Some_Object__c someObj = [<br>            SELECT Id, Name<br>            FROM Some_Object__c<br>            WHERE Type = :theType<br>            LIMIT 1<br>        ];<br><br>        Another_Object__c anotherObj = [<br>            SELECT Id, Option__c<br>            FROM Another_Object__c<br>            WHERE Some_Object__c = :someObj.Name<br>            LIMIT 1<br>        ];<br><br>        MyDataWrapper theData = new MyDataWrapper();<br>        theData.Name = someObj.Name;<br>        theData.Option = anotherObj.Option__c;<br>        return theData;<br>    }<br><br>    public class MyDataWrapper {<br>        public String Name { get; set; }<br>        public String Option { get; set; }<br>        public MyDataWrapper() {}<br>    }<br>}</code></pre><br>Despite the queries returning a single record each and the component having error handling, it receives no data from <code>getSomeData()</code>.<br><br>What is the issue?",
    "type": "single",
    "options": {
        "A": "The member's Name and Option of the class MyDataWrapper should be annotated with @AuraEnabled also.",
        "B": "The member's Name and Option should not be declared public.",
        "C": "The member's Name and Option should not have getter and setter.",
        "D": "Instances of Apex classes such as MyDataWrapper cannot be returned to a Lightning component."
    },
    "answer": ["A"]
},


{
    "question": "An external system updates Account information and sets the Account's <b>Integration_Updated__c</b> checkbox to <b>True</b> when it completes.<br><br>Given the test code:<br><pre><code>@isTest<br>static void testAccountUpdate() {<br>    Account acct = new Account(Name = 'Test');<br>    acct.Integration_Updated__c = false;<br>    insert acct;<br><br>    CalloutUtil.sendAccountUpdate(acct.Id);<br><br>    Account acctAfter = [SELECT Id, Integration_Updated__c FROM Account WHERE Id = :acct.Id][0];<br>    System.assert(true, acctAfter.Integration_Updated__c);<br>}</code></pre><br>The test fails with the error: <b>\"Methods defined as TestMethod do not support Web service callouts.\"</b><br><br>What is the optimal way to fix this?",
    "type": "single",
    "options": {
        "A": "Add if ('Test.isRunningTest()) around calloutUtil.sendAccountUpdate.",
        "B": "Add Test.startTest() before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "C": "Add Test.startTest before and Test.setMock and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "D": "Add Test.startTest() and Test.setMock before and Test.stopTest() after CalloutUtil.sendAccountUpdate."
    },
    "answer": ["D"]
},


{
    "question": "Part of a custom Lightning Component displays the total number of Opportunities in the org, which is in the millions. The Lightning Component uses an Apex Controller to get the data it needs.<br><br>What is the optimal way for a developer to get the total number of Opportunities for the Lightning Component?",
    "type": "single",
    "options": {
        "A": "SUM() SOQL aggregate query on the Opportunity object",
        "B": "SOQL for loop that counts the number of Opportunities records",
        "C": "COUNT() SOQL aggregate query on the Opportunity object",
        "D": "Apex Batch job that counts the number of Opportunity records"
    },
    "answer": ["C"]
},


{
    "question": "A developer is experiencing issues with a Lightning web component. The component must surface information about Opportunities owned by the currently logged-in user.<br><br>When the component is rendered, the following message is displayed: <b>\"Error retrieving data\"</b>.<br><br>Given the code:<br><br><b>MyOpportunities.js</b><br><pre><code>import LightningElement, api, wire from 'lwc';<br>import getOpportunities from '@salesforce/apex/OpportunityController.findMyOpportunities';<br><br>export default class MyOpportunities extends LightningElement {<br>    @api userId;<br><br>    @wire(getOpportunities, { oppOwner: '$userId' })<br>    opportunities;<br>}</code></pre><br><b>OpportunityController.cls</b><br><pre><code>public with sharing class OpportunityController {<br>    @AuraEnabled<br>    public static List&lt;Opportunity&gt; findMyOpportunities(Id oppOwner) {<br>        return [<br>            SELECT Id, Name, Amount<br>            FROM Opportunity<br>            WHERE OwnerId = :oppOwner<br>            WITH SECURITY_ENFORCED<br>            LIMIT 10<br>        ];<br>    }<br>}</code></pre><br>Which modification should be implemented to the Apex class to overcome the issue?",
    "type": "single",
    "options": {
        "A": "Ensure the OWD for the Opportunity object is Public.",
        "B": "Use the Cacheable=true attribute in the Apex method.",
        "C": "Edit the code to use the without sharing keyword in the Apex class.",
        "D": "Use the continuation=true attribute in the Apex method."
    },
    "answer": ["B"]
},


{
    "question": "2. A developer created a JavaScript library that simplifies the development of repetitive tasks and features and uploaded the library as a static resource called <b>jsutils</b> in Salesforce. Another developer is coding a new Lightning web component (LWC) and wants to leverage the library.<br><br>Which statement properly loads the static resource within the LWC?",
    "type": "single",
    "options": {
        "A": "import {jsUtilities} from '@salesforce/reaourceUrljsUtila’;",
        "B": "import jsUtilities from '@salesforce/resourceUrl/jsutils';",
        "C": "<lightning-require scripts=\"{!$Resource.jsUtils}\"/>",
        "D": "const jsUtility = $Resource.jsUtils;"
    },
    "answer": ["B"]
},

{
    "question": "A developer created a Lightning web component that allows users to input a text value that is used to search for Accounts by calling an Apex method. The Apex method returns a list of AccountWrappers and is called imperatively from a JavaScript event handler.{{pd2_15.jpg}}Which two changes should the developer make so the Apex method functions correctly? Choose 2 answers.",
    "type": "multiple",
    "options": {
        "A": "Add @AuraEnabled to line 03.",
        "B": "Add @AuraEnabled to lines 11 and 12.",
        "C": "Add @AuraEnabled to line 09.",
        "D": "Add @AuraEnabled to line 01."
    },
    "answer": ["A", "B"]
},

	
{
    "question": "A Visualforce page loads slowly due to the large amount of data it displays. Which strategy can a developer use to improve the performance?",
    "type": "single",
    "options": {
        "A": "Use Javascript to move data processing to the browser instead of the controller.",
        "B": "Use the transient keywords for the List variables used in the custom controller.",
        "C": "Use lazy loading to load the data on demand, instead of the controller's constructor.",
        "D": "Use an <apex:actionPoller> in the page to load all of the data asynchronously."
    },
    "answer": ["C"]
},

{
    "question": "Universal Containers wants to use a Customer Community with Customer Community Plus licenses so their customers can track how many containers they are renting and when they are due back. Many of their customers are global companies with complex Account hierarchies, representing various departments within the same organization. One of the requirements is that certain community users within the same Account hierarchy be able to see several departments' containers, based on a junction object that relates the Contact to the various Account records that represent the departments. Which solution solves these requirements?",
    "type": "single",
    "options": {
        "A": "A Visualforce page that uses a Custom Controller that specifies without sharing to expose the records",
        "B": "A Custom List View on the junction object with filters that will show the proper records based on owner",
        "C": "A Custom Report Type and a report Lightning Component on the Community Home Page",
        "D": "An Apex Trigger that creates Apex Managed Sharing records based on the junction object's relationships"
    },
    "answer": ["D"]
},

{
    "question": "Universal Containers wants to use an external Web Service provided by a third-party vendor to validate that shipping and billing addresses are correct. The current vendor uses basic password authentication, but Universal Containers might switch to a different vendor who uses OAuth. What would allow Universal Containers to switch vendors without updating the code to handle authentication?",
    "type": "single",
    "options": {
        "A": "Custom Metadata",
        "B": "Custom Setting (List)",
        "C": "Dynamic Endpoint",
        "D": "Named Credential"
    },
    "answer": ["D"]
},

{
    "question": "A company has a Lightning Page with many Lightning Components, some that cache reference data. It is reported that the page does not always show the most current reference data. What can a developer use to analyze and diagnose the problem in the Lightning Page?",
    "type": "single",
    "options": {
        "A": "Salesforce Lightning Inspector Actions Tab",
        "B": "Salesforce Lightning Inspector Event Log Tab",
        "C": "Salesforce Lightning Inspector Transactions Tab",
        "D": "Salesforce Lightning Inspector Storage Tab"
    },
    "answer": ["D"]
},

{
    "question": "A company has code to update a Request and Request Lines and make a callout to their external ERP system's REST endpoint with the updated records. The CalloutUtil.makeRestCallout fails with a 'You have uncommitted work pending. Please commit or rollback before calling out' error. What should be done to address the problem?",
    "type": "single",
    "options": {
        "A": "Remove the Database.setSavepoint and Database.rollback.",
        "B": "Change the CalloutUtil.makeRestCallout to an @InvocableMethod method.",
        "C": "Change the CalloutUtil.makeRestCallout to an @future method.",
        "D": "Move the CalloutUtil.makeRestCallout method call below the catch block."
    },
    "answer": ["C"]
},

{
    "question": "A Visualforce page contains an industry select list and displays a table of Accounts that have a matching value in their Industry field.\n<apex:selectList value=\"{!selectedIndustry}\">\n<apex:selectOptions values=\"{!industries}\"/>\n</apex:selectList>\nWhen a user changes the value in the industry select list, the table of Accounts should be automatically updated to show the Accounts associated with the selected industry. What is the optimal way to implement this?",
    "type": "single",
    "options": {
        "A": "Add an <apex:actionFunction> within the <apex:selectOptions>.",
        "B": "Add an <apex:actionFunction> within the <apex:selectList>.",
        "C": "Add an <apex:actionSupport> within the <apex:selectList>.",
        "D": "Add an <apex:actionSupport> within the <apex:selectOptions>."
    },
    "answer": ["C"]
},

{
    "question": "The test method above calls a web service that updates an external system with Account information and sets the Account's Integration_Updated__c checkbox to True when it completes. The test fails to execute and exits with an error: \"Methods defined as TestMethod do not support Web service callouts.\" What is the optimal way to fix this?",
    "type": "single",
    "options": {
        "A": "Add Test.startTest() before and Test.setMock and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "B": "Add Test.startTest() and Test.setMock before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "C": "Add if (!Test.isRunningTest()) around CalloutUtil.sendAccountUpdate.",
        "D": "Add Test.startTest() before and Test.stopTest() after CalloutUtil.sendAccountUpdate."
    },
    "answer": ["B"]
},

{
    "question": "A developer created and tested a Visualforce page in their developer sandbox, but now receives reports that users are encountering ViewState errors when using it in Production. What should the developer ensure to correct these errors?",
    "type": "single",
    "options": {
        "A": "Ensure queries do not exceed governor limits.",
        "B": "Ensure properties are marked as Transient.",
        "C": "Ensure properties are marked as private.",
        "D": "Ensure profiles have access to the Visualforce page."
    },
    "answer": ["B"]
},

{
    "question": "The information displays as expected (in three rows) on a mobile device. However, the information is not displaying as desired (in a single row) on a desktop or tablet. Which option has the correct component changes to display correctly on desktops and tablets?",
    "type": "single",
    "options": {
        "A": "<lightning:layout multipleRows=\"true\"> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"6\" largeDeviceSize=\"4\">{!v.account.Name} </lightning:layoutItem> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"6\" largeDeviceSize=\"4\">{!v.account.AccountNumber} </lightning:layoutItem> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"6\" largeDeviceSize=\"4\">{!v.account.Industry} </lightning:layoutItem> </lightning:layout>",
        "B": "<lightning:layout multipleRows=\"true\"> <lightning:layoutItem size=\"12\" largeDeviceSize=\"4\">{!v.account.Name} </lightning:layoutItem> <lightning:layoutItem size=\"12\" largeDeviceSize=\"4\">{!v.account.AccountNumber} </lightning:layoutItem> <lightning:layoutItem size=\"12\" largeDeviceSize=\"4\">{!v.account.Industry} </lightning:layoutItem> </lightning:layout>",
        "C": "<lightning:layout multipleRows=\"true\"> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"4\">{!v.account.Name} </lightning:layoutItem> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"4\">{!v.account.AccountNumber} </lightning:layoutItem> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"4\">{!v.account.Industry} </lightning:layoutItem> </lightning:layout>",
        "D": "<lightning:layout multipleRows=\"true\"> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"6\">{!v.account.Name} </lightning:layoutItem> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"6\">{!v.account.AccountNumber} </lightning:layoutItem> <lightning:layoutItem size=\"12\" mediumDeviceSize=\"6\">{!v.account.Industry} </lightning:layoutItem> </lightning:layout>"
    },
    "answer": ["C"]
},

{
    "question": "A company's support process dictates that any time a Case is closed with a Status of 'Could not fix', an Engineering Review custom object record should be created and populated with information from the Case, the Contact, and any of the Products associated with the Case. What is the correct way to automate this using an Apex trigger?",
    "type": "single",
    "options": {
        "A": "An after update trigger that creates the Engineering Review record and inserts it",
        "B": "A before update trigger that creates the Engineering Review record and inserts it",
        "C": "An after upsert trigger that creates the Engineering Review record and inserts it",
        "D": "A before upsert trigger that creates the Engineering Review record and inserts it"
    },
    "answer": ["A"]
},

{
    "question": "A developer created a Lightning web component that allows users to input a text value that is used to search for Accounts by calling an Apex method. The Apex method returns a list of AccountWrappers and is called imperatively from a JavaScript event handler.<br><br>Given the code:<br><pre><code>public class AccountSearcher {\n\n    public static List&lt;AccountWrapper&gt; search(String term) {\n        List&lt;AccountWrapper&gt; wrappers = getMatchingAccountWrappers(term);\n        return wrappers;\n    }\n\n    public class AccountWrapper {\n        public Account account { get; set; }\n        public Decimal matchProbability { get; set; }\n    }\n    // ...other methods, including getMatchingAccountWrappers implementation...\n}</code></pre><br>Which two changes should the developer make so the Apex method functions correctly? Choose 2 answers.",
    "type": "multiple",
    "options": {
        "A": "Add @AuraEnabled to line 03.",
        "B": "Add @AuraEnabled to lines 11 and 12.",
        "C": "Add @AuraEnabled to line 09.",
        "D": "Add @AuraEnabled to line 01."
    },
    "answer": ["A", "B"]
},





	
];
};
