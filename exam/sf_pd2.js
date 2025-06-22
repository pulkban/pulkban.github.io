window.getQuestions = function() {
    return [



{
  "question": "Given the following containment hierarchy,{{images_pd2/pd2_59.jpg}} what is the correct way to communicate the new value of a property named 'passthrough' to my-parent-component if the property is defined within my-child-component?",
  "type": "single",
  "options": {
    "A": "let cEvent = new CustomEvent($passthrough); this.dispatchEvent(cEvent);",
    "B": "let cEvent = new CustomEvent('passthrough', { detail: this.passthrough }); this.dispatchEvent(cEvent);",
    "C": "let cEvent = new CustomEvent('passthrough'); this.dispatchEvent(cEvent);",
    "D": "let cEvent = new customEvent('passthrough', { detail: 'this.passthrough' }); this.dispatchEvent(cEvent);"
  },
  "answer": "B"
},
{
  "question": "A developer is tasked with creating a Lightning web component that allows users to create a Case for a selected product, directly from a custom Lightning page. The input fields in the component are displayed in a non-linear fashion on top of an image of the product to help the user better understand the meaning of the fields. Which two components should a developer use to implement the creation of the Case from the Lightning web component?",
  "type": "multiple",
  "options": {
    "A": "lightning-input-field",
    "B": "lightning-record-edit-form",
    "C": "lightning-record-form",
    "D": "lightning-input"
  },
  "answer": ["C", "B"]
},
{
  "question": "Universal Containers needs to integrate with their own, existing, internal custom web application. The web application accepts JSON payloads, resizes product images, and sends the resized images back to Salesforce. What should the developer use to implement this integration?",
  "type": "single",
  "options": {
    "A": "A flow that calls an @future method that allows callouts",
    "B": "A flow with an outbound message that contains a session ID",
    "C": "An Apex trigger that calls an @future method that allows callouts",
    "D": "A platform event that makes a callout to the web application"
  },
  "answer": "D"
},
{
  "question": "A developer needs to add code to a Lightning web component's configuration file so the component only renders for a desktop size form factor when on a record page. What should the developer add to the component's record page target configuration to meet this requirement?",
  "type": "single",
  "options": {
    "A": "<property name=\"formFactor\" value=\"Large\"></property>",
    "B": "<supportedFormFactors><supportedFormFactor type=\"Large\"/></supportedFormFactors>",
    "C": "<lightningLayout formFactor=\"Large\"></lightningLayout>",
    "D": "<design><designAttribute name=\"formFactor\" value=\"Large\"/></design>"
  },
  "answer": "A"
},
{
  "question": "Salesforce users consistently receive a 'Maximum trigger depth exceeded' error when saving an Account. How can a developer fix this error?",
  "type": "single",
  "options": {
    "A": "Convert the trigger to use the @future annotation, and chain any subsequent trigger invocations to the Account object.",
    "B": "Use a helper class to set a Boolean to TRUE the first time a trigger is fired, and then modify the trigger to only fire when the Boolean is FALSE.",
    "C": "Modify the trigger to use the isMultiThread=true annotation.",
    "D": "Split the trigger logic into two separate triggers."
  },
  "answer": "B"
},
{
  "question": "Universal Containers wants to notify an external system, in the event that an unhandled exception occurs, by publishing a custom event using Apex. What is the appropriate publish/subscribe logic to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Publish the error event using the `EventBus.publish()` method and have the external system subscribe to the event using CometD.",
    "B": "Publish the error event using the `addError()` method and write a trigger to subscribe to the event and notify the external system.",
    "C": "Have the external system subscribe to the event channel. No publishing is necessary.",
    "D": "Publish the error event using the `addError()` method and have the external system subscribe to the event using CometD."
  },
  "answer": "A"
},
{
  "question": "Which statement is considered a best practice for writing bulk safe Apex triggers?",
  "type": "single",
  "options": {
    "A": "Use the `Database` methods with `allOrNone` set to `false` instead of DML statements.",
    "B": "Add `LIMIT 50000` to every SOQL statement.",
    "C": "Perform all DML operations from within a future method.",
    "D": "Add records to collections and perform DML operations against these collections."
  },
  "answer": "D"
},
{
  "question": "A Lightning web component exists in the system and displays information about the record in context as a modal. Salesforce administrators need to use this component within the Lightning App Builder. Which two settings should the developer configure within the xml resource file?",
  "type": "multiple",
  "options": {
    "A": "specify the target to be lightning__AppPage.",
    "B": "specify the target to be lightning__RecordPage.",
    "C": "Set the isvisible attribute to true.",
    "D": "Set the IsExposed attribute to true."
  },
  "answer": ["B", "D"]
},
{
  "question": "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?",
  "type": "single",
  "options": {
    "A": "ApexPages.StandardController sc = new ApexPages.StandardController(acctId); AccountControllerExt extension = new AccountControllerExt(sc);",
    "B": "AccountControllerExt extension = new AccountControllerExt(acct);",
    "C": "AccountControllerExt extension = new AccountControllerExt(acct);",
    "D": "ApexPages.StandardController sc = new ApexPages.StandardController(acct); AccountControllerExt extension = new AccountControllerExt(sc);"
  },
  "answer": "D"
},
{
  "question": "An org has a requirement that an Account must always have one and only one Contact listed as Primary. So selecting one Contact will de-select any others. The client wants a checkbox on the Contact called 'Is Primary' to control this feature. The client also wants to ensure that the last name of every Contact is stored entirely in uppercase characters. What is the optimal way to implement these requirements?",
  "type": "single",
  "options": {
    "A": "Write an after update trigger on Account for the Is Primary logic and a before update trigger on Contact for the last name logic.",
    "B": "Write a Validation Rule on the Contact for the Is Primary logic and a before update trigger on Contact for the last name logic.",
    "C": "Write a single trigger on Contact for both after update and before update and callout to helper classes to handle each set of logic.",
    "D": "Write an after update trigger on Contact for the Is Primary logic and a separate before update trigger on Contact for the last name logic."
  },
  "answer": "D"
},
{
  "question": "A developer needs to send Account records to an external system for backup purposes. The process must take a snapshot of Accounts as they are saved and then make a callout to a RESTful web service. The web service can only receive, at most, one record per call. What should a developer do to implement these requirements?",
  "type": "single",
  "options": {
    "A": "Expose an Apex class as a web service.",
    "B": "Implement platform events.",
    "C": "Implement the Queueable interface.",
    "D": "Create a future method."
  },
  "answer": "C",
  "explanation": "The correct answer is C because Queueable Apex is the only option that allows: (1) Making callouts after DML operations (unlike future methods which can't chain), (2) Processing records one-by-one as required by the external API, and (3) Handling retry logic if callouts fail. Queueable also works seamlessly with triggers to capture record snapshots."
},
{
  "question": "A company needs to automatically delete sensitive information after seven years. This could delete almost a million records every day. How can this be achieved?",
  "type": "single",
  "options": {
    "A": "Schedule a batch Apex process to run every day that queries and deletes records older than seven years.",
    "B": "Schedule an @future process to query records older than seven years, and then recursively invoke itself in 1,000 record batches to delete them.",
    "C": "Perform a SOSL statement to find records older than 7 years, and then delete the entire result set.",
    "D": "Use aggregate functions to query for records older than seven years, and then delete the AggregateResult objects."
  },
  "answer": "A"
},
{
  "question": "Consider the Apex controller below, that is called from an Aura component. {{images_pd2/pd2_57.jpg}} What is wrong with this code?",
  "type": "single",
  "options": {
    "A": "Line 1: class must be global",
    "B": "Lines 1 and 6: class and method must be global",
    "C": "Line 6: method must be static",
    "D": "Line 8: method must first serialize the list to JSON before returning"
  },
  "answer": "C"
},
{
  "question": "A developer is writing a Visualforce page that queries accounts in the system and presents a data table with the results. The users want to be able to filter the results based on up to five fields. However, the users want to pick the five fields to use as filter fields when they run the page. Which Apex code feature is required to facilitate this solution?",
  "type": "single",
  "options": {
    "A": "Dynamic SOQL",
    "B": "Metadata API",
    "C": "Variable binding",
    "D": "Streaming API"
  },
  "answer": "A"
},
{
  "question": "A software company uses a custom object, `Defect__c`, to track defects in their software. `Defect__c` has organization-wide defaults set to private. Each `Defect__c` has a related list of `Reviewer__c` records, each with a lookup field to User that is used to indicate that the User will review the `Defect__c`. What should be used to give the User on the `Reviewer__c` record read only access to the `Defect__c` record on the `Reviewer__c` record?",
  "type": "single",
  "options": {
    "A": "Apex managed sharing",
    "B": "Criteria-based sharing",
    "C": "View All on `Defect__c`",
    "D": "Lightning web component"
  },
  "answer": "A"
},
{
  "question": "What are three key use cases for Jest tests in Lightning Web Components? (Choose three.)",
  "type": "multiple",
  "options": {
    "A": "To test a component's non-public properties",
    "B": "To test basic user interaction",
    "C": "To verify that events fire when expected",
    "D": "To verify the DOM output of a component",
    "E": "To test how multiple components work together"
  },
  "answer": ["B", "C", "D"]
},
{
  "question": "Refer to the Aura component below: {{images_pd2/pd2_56.jpg}}A developer created the following test class to provide the proper code coverage for the snippet above. A developer receives complaints that the component loads slowly. Which change can the developer implement to make the component perform faster?",
  "type": "single",
  "options": {
    "A": "Change the type of contactInfo to 'Map'.",
    "B": "Move the contents of <cicontactInfo> into the component.",
    "C": "Change the default for showContactInfo to 'false'.",
    "D": "Add a change event handler for showContactInfo."
  },
  "answer": "C"
},
{
  "question": "{{images_pd2/pd2_45.jpg}}<br>{{images_pd2/pd2_44.jpg}}<br>{{images_pd2/pd2_45b.jpg}}When the test class runs, the assertion fails. Which change should the developer implement in the Apex test method to ensure the test method executes successfully?",
  "type": "single",
  "options": {
    "A": "Add System.runAs(User) to line 14 and enclose line 15 within Test.startTest() and Test.stopTest().",
    "B": "Add @IsTest(seeAllData=true) to line 12 and enclose lines 15 and 16 within Test.startTest() and Test.stopTest().",
    "C": "Query the Standard User into memory and enclose lines 15 and 16 within the System.runAs(user) method.",
    "D": "Query the Administrator user into memory and enclose lines 15 and 16 within the System.runAs(user) method."
  },
  "answer": "A"
},
{
  "question": "{{images_pd2/pd2_55.jpg}}Consider the following code snippet. How should the <c-order> component communicate to the <c-selected-order> component that an order has been selected by the user?",
  "type": "single",
  "options": {
    "A": "Create and dispatch a custom event.",
    "B": "Create and fire a component event.",
    "C": "Create and fire a standard DOM event.",
    "D": "Create and fire an application event."
  },
  "answer": "A"
},
{
  "question": "{{images_pd2/pd2_54.jpg}}A company has the Lightning Component above that allows users to click a button to save their changes and redirects them to a different page. Currently, when the user hits the Save button the records are getting saved, but they are not redirected. Which three techniques can a developer use to debug the JavaScript? (Choose three.)",
  "type": "multiple",
  "options": {
    "A": "Enable Debug Mode for Lightning components for the user.",
    "B": "Use console.log() messages in the JavaScript.",
    "C": "Use Developer Console to view debug log.",
    "D": "Use the browser’s dev tools to debug the JavaScript.",
    "E": "Use Developer Console to view checkpoints."
  },
  "answer": ["B", "D", "A"]
},
{
  "question": "A developer notices the execution of all the test methods in a class takes a long time to run, due to the initial setup of all the test data that is needed to perform the tests. What should the developer do to speed up test execution?",
  "type": "single",
  "options": {
    "A": "Define a method that creates test data and annotate with @createData.",
    "B": "Define a method that creates test data and annotate with @testSetup.",
    "C": "Ensure proper usage of test data factory in all test methods.",
    "D": "Reduce the amount of test methods in the class."
  },
  "answer": "B"
},
{
  "question": "After a platform event is defined in a Salesforce org, events can be published via which mechanism?",
  "type": "multiple",
  "options": {
    "A": "External Apps use an API to publish event messages.",
    "B": "Internal Apps can use entitlement processes.",
    "C": "External Apps require the standard Streaming API.",
    "D": "Internal Apps can use outbound messages."
  },
  "answer": ["A", "B"]
},
{
  "question": "Given the code above, which two changes need to be made in the Apex Controller for the code to work?{{images_pd2/pd2_53.jpg}}",
  "type": "multiple",
  "options": {
    "A": "Remove line 06 from the Apex Controller and instead use firstName in the return on line 07.",
    "B": "Change the argument in the Apex Controller line 05 from subject to String.",
    "C": "Change the method signature to be global static, not public static.",
    "D": "Annotate the entire class as @AuraEnabled instead of just the single method."
  },
  "answer": ["A", "B"]
},
{
  "question": "An Apex trigger creates an Order__c record every time an Opportunity is won by a Sales Rep. Recently the trigger is creating two orders. What is the optimal technique for a developer to troubleshoot this?",
  "type": "single",
  "options": {
    "A": "Disable all flows, and then re-enable them one at a time to see which one causes the error.",
    "B": "Set up debug logging for every Sales Rep, then monitor the logs for errors and exceptions.",
    "C": "Add system.debug() statements to the code and use the Developer Console logs to trace the code.",
    "D": "Run the Apex Test Classes for the Apex trigger to ensure the code still has sufficient code coverage."
  },
  "answer": "C"
},
{
  "question": "A developer implemented a custom data table in a Lightning web component with filter functionality. However, users are submitting support tickets about long load times when the filters are changed. The component uses an Apex method that is called to query for records based on the selected filters. What should the developer do to improve performance of the component?",
  "type": "single",
  "options": {
    "A": "Use `setStorable()` in the Apex method to store the response in the client-side cache.",
    "B": "Use SOSL to query the records on filter change.",
    "C": "Return all records into a list when the component is created and filter the array in JavaScript.",
    "D": "Use a selective SOQL query with a custom index."
  },
  "answer": "D"
},
{
  "question": "A developer creates a Lightning web component to allow a Contact to be quickly entered. However, error messages are not displayed.<br><br>{{images_pd2/pd2_10.jpg}}Which component should the developer add to the form to display error messages?",
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
  "question": "A developer built an Aura component for guests to self-register upon arrival at a front desk kiosk. Now the developer needs to create a component for the utility tray to alert users whenever a guest arrives at the front desk. What should be used?",
  "type": "single",
  "options": {
    "A": "Application Event",
    "B": "DML Operation",
    "C": "ChangeLog",
    "D": "Component Event"
  },
  "answer": "A"
},
{
  "question": "A developer sees test failures in the sandbox but not in production. No code or metadata changes have been actively made to either environment since the sandbox was created. Which consideration should be checked to resolve the issue?",
  "type": "single",
  "options": {
    "A": "Ensure that Disable Parallel Apex Testing is unchecked.",
    "B": "Ensure test classes are using SeeAllData = true.",
    "C": "Ensure the sandbox is on the same release as production.",
    "D": "Ensure the Apex classes are on the same API version."
  },
  "answer": "C"
},
{
  "question": "Which three actions must be completed in a Lightning web component for a JavaScript file in a static resource to be loaded?",
  "type": "multiple",
  "options": {
    "A": "Append the static resource to the DOM.",
    "B": "Import a method from the `platformResourceLoader`.",
    "C": "Import the static resource.",
    "D": "Reference the static resource in a `<script>` tag.",
    "E": "Call `loadScript`."
  },
  "answer": ["B", "C", "E"]
},
{
  "question": "Consider the following code snippet. Which two steps should the developer take to add flexibility to change the endpoint and credentials without needing to modify code?{{images_pd2/pd2_52.jpg}}",
  "type": "multiple",
  "options": {
    "A": "Store the URL of the endpoint in a custom Label named endPointURL.",
    "B": "Use req.setEndpoint(Label.endPointURL);",
    "C": "Create a Named Credential, endPoint_NC, to store the endpoint and credentials.",
    "D": "Use req.setEndpoint('callout:endPoint_NC'); within the callout request."
  },
  "answer": ["C", "D"]
},
{
  "question": "A developer is building a complex commission calculation engine in Apex that is called from an Opportunity trigger. During QA it was reported that the calculations are incorrect. The developer has representative test data and passing test methods in their developer sandbox. Which three tools or techniques could the developer use to execute the code and pause it at key lines to visually inspect values of various Apex variables?",
  "type": "multiple",
  "options": {
    "A": "Breakpoints",
    "B": "Apex Interactive Debugger",
    "C": "Workbench",
    "D": "Developer Console",
    "E": "Apex Replay Debugger"
  },
  "answer": ["D", "B", "E"]
},
{
  "question": "Which code snippet processes records in the most memory efficient manner, avoiding governor limits such as 'Apex heap size too large'? {{images_pd2/pd2_51.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
	"B": "Option B",
	"C": "Option C",
	"D": "Option D"
  },
  "answer": "D"
},
{
  "question": "A developer is tasked with creating a Lightning web component that is responsive on various devices. Which two components should help accomplish this goal?",
  "type": "multiple",
  "options": {
    "A": "lightning-layout",
    "B": "lightning-layout-item",
    "C": "lightning-navigation",
    "D": "lightning-input-location"
  },
  "answer": ["A", "B"]
},
{
  "question": "Universal Containers has an Apex trigger on Account that creates an Account Plan record when an Account is marked as a Customer. Recently a record-triggered flow was added so that whenever an Account is marked as a Customer, a 'Customer Since' date field is updated with today's date. Since the addition of the flow, two Account Plan records are created whenever the Account is marked as a Customer. What might cause this to happen?{{images_pd2/pd2_50.jpg}}",
  "type": "single",
  "options": {
    "A": "The flow is configured to evaluate when a record is created and every time it is edited.",
    "B": "The Apex trigger is not bulk safe and calls insert inside of a for loop.",
    "C": "The Apex trigger does not use a static variable to ensure it only fires once.",
    "D": "The flow is configured to use an 'Update Records' element."
  },
  "answer": "C"
},
{
  "question": "An Aura component has a section that displays some information about an Account and it works well on the desktop, but users have to scroll horizontally to see the description field output on their mobile devices and tablets.<br>{{images_pd2/pd2_48.jpg}}How should a developer change the component to be responsive for mobile and tablet devices?<br>{{images_pd2/pd2_49a.jpg}}<br>{{images_pd2/pd2_49b.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
	"B": "Option B",
	"C": "Option C",
	"D": "Option D"
  },
  "answer": "B"
},
{
  "question": "{{images_pd2/pd2_47.jpg}}Consider the above trigger intended to assign the Account to the manager of the Account's region. Which two changes should a developer make in this trigger to adhere to best practices?",
  "type": "multiple",
  "options": {
    "A": "Use a Map accountMap instead of List accountList.",
    "B": "Use a Map to cache the results of the Region__c query by Id.",
    "C": "Move the Region__c query to outside the loop.",
    "D": "Remove the last line updating accountList as it is not needed."
  },
  "answer": ["C", "D"]
},
{
    "question": "A developer is experiencing issues with a Lightning web component. The component must surface information about Opportunities owned by the currently logged-in user.<br><br>When the component is rendered, the following message is displayed: <b>\"Error retrieving data\"</b>.<br><br>Given the code:<br><br>Which modification should be implemented to the Apex class to overcome the issue?{{images_pd2/pd2_46.jpg}}",
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
  "question": "A company uses Opportunities to track sales to their customers and their org has millions of Opportunities. They want to begin to track revenue over time through a related Revenue object. As part of their initial implementation, they want to perform a one-time seeding of their data by automatically creating and populating Revenue records for Opportunities, based on complex logic. They estimate that roughly 100,000 Opportunities will have Revenue records created and populated. What is the optimal way to automate this?",
  "type": "single",
  "options": {
    "A": "Use System.enqueueJob() to invoke a Queueable class.",
    "B": "Use Database.executeBatch() to invoke a Database.Batchable class.",
    "C": "Use Database.executeBatch() to invoke a Queueable class.",
    "D": "Use System.scheduleJob() to schedule a Database.Scheduleable class."
  },
  "answer": "B"
},
{
  "question": "{{images_pd2/pd2_43.jpg}}A developer created a JavaScript function as part of a Lightning web component (LWC) that surfaces information about Leads by wire calling getFetchLeadList when certain criteria are met. Which three changes should the developer implement in the Apex class above to ensure the LWC can display data efficiently while preserving security?",
  "type": "multiple",
  "options": {
    "A": "Annotate the Apex method with @AuraEnabled(Cacheable=true).",
    "B": "Use the WITH SECURITY_ENFORCED clause within the SOQL query.",
    "C": "Annotate the Apex method with @AuraEnabled.",
    "D": "Implement the with sharing keyword in the class declaration.",
    "E": "Implement the without sharing keyword in the class declaration."
  },
  "answer": ["A", "B", "D"]
},
{
  "question": "A developer is creating a Lightning web component to display a calendar. The component will be used in multiple countries. In some locales, the first day of the week is a Monday, or a Saturday, or a Sunday. What should the developer do to ensure the calendar displays accurately for users in every locale?",
  "type": "single",
  "options": {
    "A": "Use UserInfo.getLocale() in the component.",
    "B": "Import the @salesforce/il8n module and use the firstDayOfWeek internationalization property.",
    "C": "Query the FirstDayOfWeek field from the Locale for the current user.",
    "D": "Use a custom metadata type to store key/value pairs."
  },
  "answer": "A",
},
{
  "question": "Universal Containers decided to use Salesforce to manage a new hire interview process. A custom object called Candidate was created with organization-wide defaults set to Private. A lookup on the Candidate object sets an employee as an Interviewer. What should be used to automatically give Read access to the record when the lookup field is set to the Interviewer user?",
  "type": "single",
  "options": {
    "A": "The record can be shared using a sharing rule.",
    "B": "The record can be shared using a permission set.",
    "C": "The record cannot be shared with the current setup.",
    "D": "The record can be shared using an Apex class."
  },
  "answer": "D"
},
{
  "question": "A developer is building a Lightning web component that retrieves data from Salesforce and assigns it to the record property.{{images_pd2/pd2_42.jpg}} What must be done in the component to get the data from Salesforce?",
  "type": "single",
  "options": {
    "A": "Add the following code above record; @api(getRecord, { recordId: '$recordId' }) Get the fields in renderedCallback() and assign them to record.",
    "B": "Add the following code above record; @wire(getRecord, { recordId: '$recordId' }) Get the fields in renderedCallback() and assign them to record.",
    "C": "Add the following code above record; @api(getRecord, { recordId: '$recordId', fields: '$fields' })",
    "D": "Add the following code above record; @wire(getRecord, { recordId: '$recordId', fields: '$fields' })"
  },
  "answer": "D"
},
{
  "question": "A company notices that their unit tests in a test class with many methods to create many records for prerequisite reference data are slow. What can a developer do to address the issue?",
  "type": "single",
  "options": {
    "A": "Move the prerequisite reference data setup to a @testSetup method in the test class.",
    "B": "Move the prerequisite reference data setup to the constructor for the test class.",
    "C": "Turn off triggers, flows, and validations when running tests.",
    "D": "Move the prerequisite reference data setup to a TestDataFactory and call that from each test method."
  },
  "answer": "A"
},
{
  "question": "A company wants to incorporate a third-party web service to set the Address fields when an Account is inserted, if they have not already been set. What is the optimal way to achieve this?",
  "type": "single",
  "options": {
    "A": "Create an Apex class, execute a Batch Apex job from it, and make a callout from the Batch Apex job.",
    "B": "Create an Apex trigger, execute a Queueable job from it, and make a callout from the Queueable job.",
    "C": "Create an Apex class, execute a Future method from it, and make a callout from the Future method.",
    "D": "Create a Before Save Flow, execute a Queueable job from it, and make a callout from the Queueable job."
  },
  "answer": "B"
},
{
  "question": "A company recently deployed a Visualforce page with a custom controller that has a data grid of information about Opportunities in the org. Users report that they receive a 'Maximum view state size limit' error message under certain conditions. According to Visualforce best practice, which three actions should the developer take to reduce the view state?",
  "type": "multiple",
  "options": {
    "A": "Use the final keyword in the controller for variables that will not change.",
    "B": "Use the private keyword in the controller for variables.",
    "C": "Use filters and pagination to reduce the amount of data.",
    "D": "Refine any SOQL queries to return only data relevant to the page.",
    "E": "Use the transient keyword in the Apex controller for variables that do not maintain state."
  },
  "answer": ["C", "D", "E"]
},
{
  "question": "A custom object called Credit_Memo__c exists in a Salesforce environment. As part of a new feature development that retrieves and manipulates this type of record, the developer needs to ensure race conditions are prevented when a set of records are modified within an Apex transaction. In the preceding Apex code, how can the developer alter the query statement to use SOQL features to prevent race conditions within a transaction?{{images_pd2/pd2_41.jpg}}",
  "type": "single",
  "options": {
    "A": "[Select Id, Name, Amount__c FROM Credit_Memo__c WHERE Customer_Id__c = :customerId LIMIT 50 FOR VIEW]",
    "B": "[Select Id, Name, Amount__c FROM Credit_Memo__c WHERE Customer_Id__c = :customerId LIMIT 50 FOR UPDATE]",
    "C": "[Select Id, Name, Amount__c FROM Credit_Memo__c WHERE Customer_Id__c = :customerId USING SCOPE LIMIT 50]",
    "D": "[Select Id, Name, Amount__c FROM Credit_Memo__c WHERE Customer_Id__c = :customerId LIMIT 50 FOR REFERENCE]"
  },
  "answer": "B"
},
{
  "question": "Universal Containers is using a custom Salesforce application to manage customer support cases. The support team needs to collaborate with external partners to resolve certain cases. However, they want to control the visibility and access to the cases shared with the external partners. Which Salesforce feature can help achieve this requirement?",
  "type": "single",
  "options": {
    "A": "Criteria-based sharing rules",
    "B": "Sharing sets",
    "C": "Role hierarchy",
    "D": "Apex managed sharing"
  },
  "answer": "B"
},
{
  "question": "Which use case is an appropriate fit for the @future asynchronous Apex method? (Choose two.)",
  "type": "multiple",
  "options": {
    "A": "A developer has jobs that need larger query results than regular transactions allow",
    "B": "A developer needs to segregate DML operations and bypass the mixed save DML error",
    "C": "A developer has long-running methods and needs to prevent delaying an Apex transaction",
    "D": "A developer has long-running jobs with large data volumes that need to be performed in batches"
  },
  "answer": ["B", "C"]
},
{
  "question": "The head of recruiting at Universal Containers (UC) wants to provide all internal users the ability to search for open positions by role, department, and location via a new recruiting app. In addition to search, users of the app should be able to refer a friend, apply for a position, and review the status of their current submissions. The app will be surfaced to UC’s existing iOS and Android users via the standard mobile app that Salesforce provides. It has a custom user interface design and offline access is not required. Given these requirements, what is the recommended approach to develop the app?",
  "type": "single",
  "options": {
    "A": "Salesforce SDK",
    "B": "Lightning Web Components",
    "C": "Visualforce",
    "D": "Lightning Experience Builder"
  },
  "answer": "B"
},
{
  "question": "Universal Containers develops a Salesforce application that requires frequent interaction with an external REST API. To avoid duplicating code and improve maintainability, how should they implement the API integration for code reuse?",
  "type": "single",
  "options": {
    "A": "Store the API integration code as a static resource and reference it in each Apex class.",
    "B": "Include the API integration code directly in each Apex class that requires it.",
    "C": "Use a separate Apex class for each API endpoint to encapsulate the integration logic.",
    "D": "Create a reusable Apex class for the API integration and invoke it from the relevant Apex classes."
  },
  "answer": "D"
},
{
  "question": "As part of the deployment cycle, a developer creates a test class for a code snippet. When the test class runs, the assertion fails. Which change should the developer implement in the Apex test method to ensure the test method executes successfully?{{images_pd2/pd2_40.png}}",
  "type": "single",
  "options": {
    "A": "Query the Standard User into memory and enclose lines 14 and 15 within the System.runAs(user) method.",
    "B": "Add System.runAs(User) to line 14 and enclose line 14 within Test.startTest() and Test.stopTest().",
    "C": "Query the Administrator user into memory and enclose lines 14 and 15 within the System.runAs(user) method.",
    "D": "Add @IsTest(seeAllData=True) to line 12 and enclose lines 14 and 15 within Test.startTest() and Test.stopTest()."
  },
  "answer": "B"
},
{
  "question": "Universal Containers uses Salesforce to track orders in an Order__c object. The object has private OWDs. The Order__c object has a custom field, Quality_Controller__c, that is a Lookup to User and used to indicate the specified user performing quality control. What should be used to automatically give read-only access to the User set in the Quality_Controller__c field?",
  "type": "single",
  "options": {
    "A": "Record ownership",
    "B": "User managed sharing",
    "C": "Apex managed sharing",
    "D": "Criteria-based sharing"
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) processes orders in Salesforce in a custom object, Order__c. They also allow sales reps to upload CSV files with thousands of orders at a time. A developer is tasked with integrating orders placed in Salesforce with UC’s enterprise resource planning (ERP) system. After the status for an Order__c is first set to ‘Placed’, the order information must be sent to a REST endpoint in the ERP system that can process one order at a time. What should the developer implement to accomplish this?",
  "type": "single",
  "options": {
    "A": "Callout from a Queueable class called from a trigger",
    "B": "Callout from a Batchable class called from a scheduled job",
    "C": "Callout from an @future method called from a trigger",
    "D": "Flow with a callout from an invocable method"
  },
  "answer": "A"
},
{
  "question": "A company accepts orders for customers in their enterprise resource planning (ERP) system that must be integrated into Salesforce as Order__c records with a lookup field to Account. The Account object has an external ID field, ERP_Customer_ID__c. What should the integration use to create new Order__c records that will automatically be related to the correct Account?",
  "type": "single",
  "options": {
    "A": "Insert on the Order__c object followed by an update on the Order__c object.",
    "B": "Merge on the Order__c object and specify the ERP_Customer_ID__c for the Account relationship.",
    "C": "Upsert on the Order__c object and specify the ERP_Customer_ID__c for the Account relationship.",
    "D": "Upsert on the Account and specify the ERP_Customer_ID__c for the relationship."
  },
  "answer": "C"
},
{
  "question": "Which three Visualforce components can be used to initiate Ajax behavior to perform partial page updates?",
  "type": "multiple",
  "options": {
    "A": "<apex:actionSupport>",
    "B": "<apex:commandLink>",
    "C": "<apex:actionStatus>",
    "D": "<apex:commandButton>",
    "E": "<apex:form>"
  },
  "answer": ["A", "B", "D"]
},
{
  "question": "An org has a requirement that addresses on Contacts and Accounts should be normalized to a company standard by Apex code any time that they are saved. What is the optimal way to implement this?",
  "type": "single",
  "options": {
    "A": "Apex trigger on Account that normalizes the address",
    "B": "Apex trigger on Account and Contact that call a helper class to normalize the address",
    "C": "Apex trigger on Account that calls the Contact trigger to normalize the address",
    "D": "Apex trigger on Contact that calls the Account trigger to normalize the address"
  },
  "answer": "B"
},
{
  "question": "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?",
  "type": "single",
  "options": {
    "A": "Event Monitoring Log",
    "B": "Calendar Events",
    "C": "Developer Log",
    "D": "Asynchronous Data Capture Events"
  },
  "answer": "A"
},
{
  "question": "Universal Containers implements a private sharing model for the Convention_Attendee__c custom object. As part of a new quality assurance effort, the company created an Event_Reviewer__c user lookup field on the object. Management wants the event reviewer to automatically gain Read/Write access to every record they are assigned to. What is the best approach to ensure the assigned reviewer obtains Read/Write access to the record?",
  "type": "single",
  "options": {
    "A": "Create a criteria-based sharing rule on the Convention Attendee custom object to share the records to a group of Event Reviewers.",
    "B": "Create an After Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
    "C": "Create criteria-based sharing rules on the Convention Attendee custom object to share the records with the Event Reviewers.",
    "D": "Create a Before Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing."
  },
  "answer": "B"
},
{
  "question": "In an organization that has multi-currency enabled, a developer is tasked with building a Lightning Component that displays the top ten Opportunities most recently accessed by the logged-in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale. What is the most effective approach to ensure values displayed respect the user's locale settings?",
  "type": "single",
  "options": {
    "A": "Use a wrapper class to format the values retrieved via SOQL.",
    "B": "Use the FOR VIEW clause in the SOQL Query.",
    "C": "Use the FORMAT() function in the SOQL query.",
    "D": "Use REGEX expressions to format the values retrieved via SOQL."
  },
  "answer": "C"
},
{
  "question": "A developer is asked to modify a Lightning web component so that it displays in one column on phones and in two columns on tablets, desktops, and larger devices. Which should the developer add to the code to meet the requirements?{{images_pd2/pd2_39.jpg}}",
  "type": "single",
  "options": {
    "A": "Add a small-device-size=“12” to the [lightning-layout-item] elements",
    "B": "Add size=“6” and small-device-size=“12” to the [lightning-layout-item] elements",
    "C": "Add size=“12” and small-device-size=“6” to the [lightning-layout-item] elements",
    "D": "Add a medium-device-size=“6” to the [lightning-layout-item] elements"
  },
  "answer": "C"
},
{
  "question": "A developer is asked to look into an issue where a scheduled Apex is running into DML limits. Upon investigation, the developer finds that the number of records processed by the scheduled Apex has recently increased to more than 10,000. What should the developer do to eliminate the limit exception error?",
  "type": "single",
  "options": {
    "A": "Use the @future annotation.",
    "B": "Implement the Batchable interface.",
    "C": "Use platform events.",
    "D": "Implement the Queueable interface."
  },
  "answer": "B"
},
{
  "question": "Consider the following code snippet: The Apex method is executed in an environment with a large data volume count for Accounts, and the query is performing poorly. Which technique should the developer implement to ensure the query performs optimally, while preserving the entire result set?{{images_pd2/pd2_36.jpg}}<br>answer{{images_pd2/pd2_36b.jpg}}",
  "type": "single",
  "options": {
    "A": "Break down the query into two individual queries and join the two result sets",
    "B": "Annotate the method with the @Future annotation",
    "C": "Use the Database.queryLocator method to retrieve the accounts",
    "D": "Create a formula field to combine the createdDate and RecordType value, then filter based on the formula"
  },
  "answer": "A"
},
{
  "question": "There is an Apex controller and a Visualforce page in an org that displays records with a custom filter consisting of a combination of picklist values selected by the user. The page takes too long to display results for some of the input combinations, while for other input choices it throws the exception, *Maximum view state size limit exceeded.* What step should the developer take to resolve this issue?",
  "type": "single",
  "options": {
    "A": "Split the layout to filter records in one Visualforce page and display the list of records in a second page using the same Apex Controller.",
    "B": "Adjust any code that filters by picklist values since they are not indexed.",
    "C": "Use a StandardSetController or SOQL LIMIT in the Apex controller to limit the number of records displayed at a time.",
    "D": "Remove instances of the transient keyword from the Apex controller to avoid the view state error."
  },
  "answer": "C"
},
{
  "question": "A developer is debugging an Apex-based order creation process that has a requirement to have three savepoints, SP1, SP2, and SP3 (created in order), before the final execution of the process. During the final execution process, the developer has a routine to roll back to SP1 for a given condition. Once the condition is fixed, the code then calls to roll back to SP3 to continue with final execution. However, when the roll back to SP3 is called, a runtime error occurs. Why does the developer receive a runtime error?",
  "type": "single",
  "options": {
    "A": "SP3 became invalid when SP1 was rolled back.",
    "B": "The developer has too many DML statements between the savepoints.",
    "C": "The developer used too many savepoints in one trigger session.",
    "D": "The developer should have called SP2 before calling SP3."
  },
  "answer": "A"
},
{
  "question": "Which interface needs to be implemented by a Lightning Component so that it may be displayed in modal dialog by clicking a button on a Lightning Record page?",
  "type": "single",
  "options": {
    "A": "force:lightningQuickAction",
    "B": "lightning:quickAction",
    "C": "lightning:editAction",
    "D": "force:lightningEditAction"
  },
  "answer": "A"
},
{
  "question": "Which two queries are selective SOQL queries and can be used for a large data set of 200,000 Account records?",
  "type": "multiple",
  "options": {
    "A": "SELECT id FROM ACCOUNT WHERE id IN (list of Account Ids)",
    "B": "SELECT id FROM ACCOUNT WHERE Name = Null",
    "C": "SELECT id FROM ACCOUNT WHERE Name = Null AND Customer_Number__c = 'ValueA'",
    "D": "SELECT id FROM ACCOUNT WHERE Name != ' '"
  },
  "answer": ["A", "D"]
},
{
  "question": "Consider the following code snippet: A developer created the following test class to provide the proper code coverage for the snippet above. However, when the test runs, no data is returned and the assertion fails. Which edit should the developer make to ensure the test class runs successfully?",
  "type": "single",
  "options": {
    "A": "Implement the setFixedSearchResults method in the test class.",
    "B": "Enclose the method call within Test.startTest() and Test.stopTest()",
    "C": "Implement the without sharing keyword in the searchfeature Apex class.",
    "D": "Implement the seeAllData=true attribute in the @isTest annotation."
  },
  "answer": "A"
},
{
  "question": "A developer needs to implement a system audit feature that allows users, assigned to a custom profile named “Auditors”, to perform searches against the historical records in the Account object. The developer must ensure the search is able to return history records that are between 12 and 24 months old. Given the code below, which select statement should be inserted below as a valid way to retrieve the Account History records ranging from 12 to 24 month old?{{images_pd2/pd2_38.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
	"B": "Option B",
	"C": "Option C",
	"D": "Option D"
  },
  "answer": "C"
},
{
  "question": "A company uses an external system to manage its custom account territory assignments. Every quarter, millions of Accounts may be updated in Salesforce with new Owners when the territory assignments are completed in the external system. What is the optimal way to update the Accounts from the external system?",
  "type": "single",
  "options": {
    "A": "Bulk API",
    "B": "SOAP API",
    "C": "Apex REST Web Service",
    "D": "Composite REST API"
  },
  "answer": "A"
},
{
  "question": "What is the best practice to initialize a Visualforce page in a test class?",
  "type": "single",
  "options": {
    "A": "Use Test.currentpage, getParameter, put (MyTestPage);",
    "B": "Use Test.setCurrentPage(Page.MyTestPage);",
    "C": "Use controller.currentPage, setPage (MyTestPage);",
    "D": "Use Test.setCurrentpage,MyTestPage;"
  },
  "answer": "B"
},
{
  "question": "A developer created a Lightning web component that uses a lightning-record-edit-form to collect information about Leads. Users complain that they only see one error message at a time about their input when trying to save a Lead record. What is the recommended approach to perform validations on more than one field, and display multiple error messages simultaneously with minimal JavaScript intervention?",
  "type": "single",
  "options": {
    "A": "External JavaScript library",
    "B": "Apex trigger",
    "C": "Validation rules",
    "D": "Try/catch/finally block"
  },
  "answer": "C"
},
{
  "question": "Which method should be used to convert a Date to a String in the current user's locale?",
  "type": "single",
  "options": {
    "A": "Date.format",
    "B": "String.format",
    "C": "String.valueOf",
    "D": "Date.parse"
  },
  "answer": "A"
},

{
  "question": "A developer is inserting, updating, and deleting multiple lists of records in a single transaction and wants to ensure that any error prevents all execution. How should the developer implement error exception handling in their code to handle this?",
  "type": "single",
  "options": {
    "A": "Use Database.setSavepoint() and Database.rollBack() with a Try/Catch statement",
    "B": "Use a Try/Catch and use sObject.addError() on any failures",
    "C": "Use Database methods to obtain lists of Database.SaveResults",
    "D": "Use a Try/Catch statement and handle DML cleanup in the catch statement"
  },
  "answer": "A"
},
{
  "question": "Based on the code snippets, what change should be made to display the contacts' mailing addresses in the Lightning web component?{{images_pd2/pd2_37.jpg}}",
  "type": "single",
  "options": {
    "A": "Extend the lightning-datatable component in the Lightning web component to include a column for the MailingAddress field.",
    "B": "Add a new method in the Apex controller class to retrieve the mailing addresses separately and modify the Lightning web component to invoke this method.",
    "C": "Modify the SOQL query in the getAccountContacts method to include the MailingAddress field.",
    "D": "Modify the SOQL query in the getAccountContacts method to include the MailingAddress field and update the columns attribute in javascript file to add Mailing address fields."
  },
  "answer": "D"
},
{
  "question": "Which statement is true regarding savepoints?",
  "type": "single",
  "options": {
    "A": "Static variables are not reverted during a rollback",
    "B": "Reference to savepoints can cross trigger invocations",
    "C": "Savepoints are not limited by DML statement governor limits",
    "D": "You can roll back to any savepoint variable created in any order"
  },
  "answer": "A"
},
{
  "question": "A developer is asked to build a solution that will automatically send an email to the customer when an Opportunity stage changes. The solution must scale to allow for 10,000 emails per day. The criteria to send the email should be evaluated after certain conditions are met. What is the optimal way to accomplish this?",
  "type": "single",
  "options": {
    "A": "Use SingleEmailMessage() with an Apex trigger",
    "B": "Use an Email Alert with Flow Builder",
    "C": "Use MassEmailMessage() with an Apex trigger",
    "D": "Use a Workflow Email Alert"
  },
  "answer": "B"
},
{
  "question": "A company has a native iOS order placement app that needs to connect to Salesforce to retrieve consolidated information from many different objects in a JSON format. Which is the optimal method to implement this in Salesforce?",
  "type": "single",
  "options": {
    "A": "Apex REST callout",
    "B": "Apex REST web service",
    "C": "Apex SOAP callout",
    "D": "Apex SOAP web service"
  },
  "answer": "B"
},
{
  "question": "A developer is working with existing functionality that tracks how many times a stage has changed for an Opportunity. When the Opportunity's stage is changed, a workflow rule is fired to increase the value of a field by one. The developer wrote an after trigger to create a child record when the field changes from 4 to 5. A user changes the stage of an Opportunity and manually sets the count field to 4. The count field updates to 5, but the child record is not created. What is the reason this is happening?",
  "type": "single",
  "options": {
    "A": "After triggers are not fired after field updates",
    "B": "Trigger.old does not contain the updated value of the count field",
    "C": "After triggers fire before workflow rules",
    "D": "Trigger.new does not change after a field update"
  },
  "answer": "B"
},
{
  "question": "A business currently has a process to manually upload orders from its external Order Management System (OMS) into Salesforce. This is a labor intensive process since accounts must be exported out of Salesforce to get the IDs. The upload file must be updated with the correct account IDs to relate the orders to the corresponding accounts. Which two recommendations should make this process more efficient?",
  "type": "multiple",
  "options": {
    "A": "Identify unique fields on Order and Account and set them as External IDs",
    "B": "Use the upsert wizard in the Data Loader to import the data",
    "C": "Ensure the data in the file is sorted by the order ID",
    "D": "Use the insert wizard in the Data Loader to import the data"
  },
  "answer": ["A", "B"]
},
{
  "question": "Which tag should a developer use to display different text while an <apex:commandButton> is processing an action?",
  "type": "single",
  "options": {
    "A": "<apex:actionSupport>",
    "B": "<apex:pageMessages>",
    "C": "<apex:actionPoller>",
    "D": "<apex:actionStatus>"
  },
  "answer": "D"
},
{
  "question": "Given a list of Opportunity records named opportunityList, which code snippet is best for querying all Contacts of the Opportunity's Account?{{images_pd2/pd2_34.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
  },
  "answer": "C"
},
{
  "question": "A company uses Salesforce to sell products to customers. They also have an external product information management (PIM) system that is the system of record for products. A developer received these requirements: * Whenever a product is created or updated in the PIM, a product must be created or updated as a Product2 record in Salesforce and a PricebookEntry record must be created or updated automatically by Salesforce. * The PricebookEntry should be created in a Pricebook2 that is specified in a custom setting. What should the developer use to satisfy these requirements?",
  "type": "single",
  "options": {
    "A": "Custom Apex REST",
    "B": "SObject Tree REST",
    "C": "Invocable Action",
    "D": "Event Monitoring"
  },
  "answer": "A"
},
{
  "question": "A developer is responsible for formulating the deployment process for a Salesforce project. The project follows a source-driven development approach, and the developer wants to ensure efficient deployment and version control of the metadata changes. Which tool or mechanism should be utilized for managing the source-driven deployment process?",
  "type": "single",
  "options": {
    "A": "Metadata API",
    "B": "Force.com IDE",
    "C": "Salesforce CLI with Salesforce DX",
    "D": "Change Sets"
  },
  "answer": "C"
},
{
  "question": "A developer is creating a page in App Builder that will be used in the Salesforce mobile app. Which two practices should the developer follow to ensure the page operates with optimal performance?",
  "type": "multiple",
  "options": {
    "A": "Limit to 25 fields on the record detail page",
    "B": "Limit the number of Tabs and Accordion components",
    "C": "Limit to five visible components on the page",
    "D": "Analyze the page with Performance Analysis for App Builder"
  },
  "answer": ["A", "D"],
  "explanation": "For optimal mobile performance: 1) Limiting fields (A) reduces data transfer and rendering load, and 2) Using Performance Analysis (D) identifies specific bottlenecks. While limiting components (B,C) may help, these are arbitrary limits not officially recommended by Salesforce for performance tuning."
},
{
  "question": "A Lightning web component displays the Account name and two custom fields out of 275 that exist on the object. The custom fields are correctly declared and populated. However, the developer receives complaints that the component performs slowly. What can the developer do to improve the performance?{{images_pd2/pd2_33.jpg}}",
  "type": "single",
  "options": {
    "A": "Replace layout-type='Full' with fields=[fields]",
    "B": "Replace layout-type='Full' with layout-type='Partial'",
    "C": "Add cache='true' to the component",
    "D": "Add density='compat' to the component"
  },
  "answer": "A",
  "explanation": "Using explicit field lists (Option A) rather than layout types significantly improves performance when only a few fields are needed from an object with many fields. This prevents loading metadata for all 275 fields when only 2 are needed."
},
{
  "question": "A company has code to update a Request and Request Lines and make a callout to their external ERP system's REST endpoint with the updated records. The calloutUtil.makeRestCallout fails with a 'You have uncommitted work pending. Please commit or rollback before calling out' error. What should be done to address the problem?{{images_pd2/pd2_32.jpg}}",
  "type": "single",
  "options": {
    "A": "Change the calloutUtil.makeRestCallout to an @InvocableMethod method",
    "B": "Remove the Database.setSavepoint and Database.rollback",
    "C": "Change the calloutUtil.makeRestCallout to an @future method",
    "D": "Move the callout before any DML operations"
  },
  "answer": "C"
},
{
  "question": "An environment has two Apex triggers: an after-update trigger on Account and an after-update trigger on Contact. The Account after-update trigger fires whenever an Account's address is updated, and it updates every associated Contact with that address. The Contact after-update trigger fires on every edit, and it updates every Campaign Member record related to the Contact with the Contact's state. Consider the following: A mass update of 200 Account records' addresses, where each Account has 50 Contacts. Each Contact has one Campaign Member. This means there are 10,000 Contact records across the Accounts and 10,000 Campaign Member records across the contacts. What will happen when the mass update occurs?",
  "type": "single",
  "options": {
    "A": "The mass update will fail, since the two triggers fire in the same context, thus exceeding the number of records processed by DML statements.",
    "B": "There will be no error and all updates will succeed, since the limit on the number of records processed by DML statements was not exceeded.",
    "C": "There will be no error, since each trigger fires within its own context and each trigger does not exceed the limit of the number of records processed by DML statements.",
    "D": "The mass update of Account address will succeed, but the Contact address updates will fail due to exceeding number of records processed by DML statements."
  },
  "answer": "A",
  "explanation": "The mass update will fail because all DML operations occur in a single execution context. Updating 200 Accounts triggers updates to 10,000 Contacts (200 × 50), which in turn triggers updates to 10,000 Campaign Members. This exceeds Salesforce governor limits for DML operations in a single transaction (10,000 records limit)."
},
{
  "question": "A developer created the following test method:\n\nThe developer org has five accounts where the name starts with 'Test'. The developer executes this test in the Developer Console. After the test code runs, which statement is true?{{images_pd2/pd2_31.jpg}}",
  "type": "single",
  "options": {
    "A": "There will be six accounts where the name starts with 'Test'",
    "B": "There will be no accounts where the name starts with 'Test'",
    "C": "The test will fail",
    "D": "There will be five accounts where the name starts with 'Test'"
  },
  "answer": "D",
  "explanation": "Test methods automatically roll back database changes after execution, so the original five test accounts will remain unchanged."
},
{
  "question": "Which three approaches should a developer implement to obtain the best performance for data retrieval when building a Lightning web component? Choose 3 answers",
  "type": "multiple",
  "options": {
    "A": "Use layoutTypes: ['Full'] to display a set of fields",
    "B": "Use the Lightning Data Service",
    "C": "Use lazy load for occasionally accessed data",
    "D": "Use @wire(adapter, {cacheable: true}) whenever possible",
    "E": "Use getRecordUi to obtain metadata"
  },
  "answer": ["B", "C", "D"],
},
{
  "question": "A business requires that every parent record must have a child record. A developer writes an Apex method with two DML statements to insert a parent record and a child record. A validation rule blocks child records from being created. The method uses a try/catch block to handle the DML exception. What should the developer do to ensure the parent always has a child record?",
  "type": "single",
  "options": {
    "A": "Use Database.insert() and set the allOrNone parameter to true",
    "B": "Delete the parent record in the catch statement when an error occurs on the child record DML operation",
    "C": "Use addError() on the parent record if an error occurs on the child record",
    "D": "Set a database savepoint to rollback if there are errors"
  },
  "answer": "D",
  "explanation": "Using a savepoint allows rolling back both parent and child records if the child record creation fails, maintaining data consistency. This ensures the parent record only exists when it has a valid child record."
},
{
  "question": "A Salesforce developer is hired by a multi-national company to build a custom Lightning application that shows employees their employment benefits and earned commissions over time. The application must acknowledge and respect the user's locale context for dates, times, numbers, currency, and currency symbols. When using Aura components, which approach should the developer implement to ensure the Lightning application complies with the user's locale?",
  "type": "single",
  "options": {
    "A": "Use the $Label global value provider",
    "B": "Use the $User global variable to retrieve the user preferences",
    "C": "Use the $Locale value provider to retrieve the user preferences",
    "D": "Create a Hierarchical custom setting to store user preferences"
  },
  "answer": "C",
},
{
  "question": "A developer created and tested a Visualforce page in their developer sandbox, but now receives reports that users encounter view state errors when using it in production. What should the developer ensure to correct these errors?",
  "type": "single",
  "options": {
    "A": "Ensure variables are marked as transient",
    "B": "Ensure profiles have access to the Visualforce page",
    "C": "Ensure queries do not exceed governor limits",
    "D": "Ensure properties are marked as private"
  },
  "answer": "A",
},
{
  "question": "Universal Containers (UC) has an ERP system that stores customer Information. When an Account is created in Salesforce, the ERP system's REST endpoint for creating new customers must automatically be called with the Account information. If the call to the ERP system fails, the Account should still be created. Accounts in the UC org are only created, one at a time, by users in the UC customer on-boarding department. What should a developer implement to make the call to the ERP system's REST endpoint?",
  "type": "single",
  "options": {
    "A": "Call a Queueable from a Trigger",
    "B": "Headless Quick Action",
    "C": "Apex Continuation",
    "D": "REST call from JavaScript"
  },
  "answer": "A",
},

{
  "question": "Universal Containers uses a custom Lightning page to provide a mechanism to perform a step-by-step wizard search for Accounts. One of the steps in the wizard is to allow the user to input text into a text field, ERP_Number__c, that is then used in a query to find matching Accounts. Which step should be taken to optimize the search performance? {{images_pd2/pd2_29.jpg}}",
  "type": "single",
  "options": {
    "A": "Move the SOQL query to within an asynchronous process",
    "B": "Perform the SOQL query as part of a for loop",
    "C": "Mark the ERP_Number__c field as required",
    "D": "Mark the ERP_Number__c field as an external ID"
  },
  "answer": "D",
},
{
  "question": "A developer created an Opportunity trigger that updates the account rating when an associated opportunity is considered high value. Current criteria for an opportunity to be considered high value is an amount greater than or equal to $1,000,000. However, this criteria value can change over time. There is a new requirement to also display high value opportunities in a Lightning web component. Which two actions should the developer take to meet these business requirements, and also prevent the business logic that obtains the high value opportunities from being repeated in more than one place?",
  "type": "multiple",
  "options": {
    "A": "Call the trigger from the Lightning web component",
    "B": "Use custom metadata to hold the high value amount",
    "C": "Create a helper class that fetches the high value opportunities",
    "D": "Leave the business logic code inside the trigger for efficiency"
  },
  "answer": ["B", "C"],
},

{
  "question": "An Apex trigger and Apex class increment a counter, Edit __C, any time the Case is changed.{{images_pd2/pd2_28a.jpg}} A new process on the Case object was just created in production for when a Case is created or updated. Since the process was added, there are reports that the Edit_Count_c is being incremented by more than one on Case edits.Which change in the Apex code will fix the problem? <br>{{images_pd2/pd2_28b.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
  },
  "answer": "B"
},
{
  "question": "Consider the queries in the options below and the following Information: * For these queries, assume that there are more than 200,000 Account records. * These records Include soft-deleted records; that is, deleted records that are still in the Recycle Bin. * There are two fields that are marked as External Id on the Account. These fields are customer_Number_c and ERR_Key_s. Which two queries are optimized for large data volumes?",
  "type": "multiple",
  "options": {
    "A": "SELECT Id FROM Account WHERE Name != NULL",
    "B": "SELECT ID FROM Account WHERE id IN :aListVariable",
    "C": "SELECT Id FROM Account WHERE Name != '' AND Customer_Number_c = 'ValueA'",
    "D": "SELECT Id FROM Account WHERE Name != '' AND IsDeleted = false"
  },
  "answer": ["B", "C"],
},

{
  "question": "When developing a Lightning web component, which setting displays lightning-layout-items in one column on small devices, such as mobile phones, and in two columns on tablet-size and desktop-size screens?",
  "type": "single",
  "options": {
    "A": "Set size='6' mobile-device-size='12'",
    "B": "Set size='12' medium-device-size='6'",
    "C": "Set size='12' tablet-device-size='6'",
    "D": "Set size='6' small-device-size='12'"
  },
  "answer": "B",
},

{
  "question": "Instead of waiting to send emails to support personnel directly from the finish method of a batch Apex process, Universal Containers wants to notify an external system in the event that an unhandled exception occurs. What is the appropriate publish/subscribe logic to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Publish the error event using the addError method",
    "B": "Publish the error event with a Flow",
    "C": "Publish the error event using the Eventbus.publish() method",
    "D": "No publishing is necessary. Have the external system subscribe to the BatchapexErrorEvent"
  },
  "answer": "D",
},

{
  "question": "A developer wrote a class named accountRegistryManager that relies on field history tracking. The class has a static method called getAccountHistory that takes in an Account as a parameter and returns a list of associated AccountHistory object records. The following test fails: What should be done to make this test pass?{{images_pd2/pd2_27.jpg}}",
  "type": "single",
  "options": {
    "A": "Use Test.isRunningTest() in getAccountHistory() to conditionally return fake AccountHistory records.",
    "B": "The test method should be deleted since this code cannot be tested.",
    "C": "Create AccountHistory records manually in the test setup and write a query to get them.",
    "D": "Use @isTest(SeeAllData=true) to see historical data from the org and query for AccountHistory records."
  },
  "answer": "D",
},
{
  "question": "A company wants to run different logic based on an Opportunity's record type. Which code segment handles this request and follows best practices?{{images_pd2/pd2_26.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
  },
  "answer": "C"
},
{
  "question": "A developer is asked to find a way to store secret data with an ability to specify which profiles and users can access which secrets. What should be used to store this data?",
  "type": "single",
  "options": {
    "A": "Custom metadata",
    "B": "system.Cookie class",
    "C": "Custom settings",
    "D": "Static resources"
  },
  "answer": "C",
},

{
  "question": "What is a benefit of JavaScript remoting over Visualforce Remote Objects?",
  "type": "single",
  "options": {
    "A": "Supports complex server-side application logic",
    "B": "Allows for specified re-render targets",
    "C": "Does not require any Apex code",
    "D": "Does not require any JavaScript code"
  },
  "answer": "A",
},

{
  "question": "Universal Containers wants to notify an external system in the event that an unhandled exception occurs when their nightly Apex batch job runs. What is the appropriate publish/subscribe logic to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Have the external system subscribe to a custom Platform Event that gets fired with EventBus.publish().",
    "B": "Have the external system subscribe to a standard Platform Event that gets fired with EventBus.publish().",
    "C": "Have the external system subscribe to a standard Platform Event that gets fired.",
    "D": "Have the external system subscribe to a custom Platform Event that gets fired with addError()."
  },
  "answer": "A",
  "explanation": "The correct approach is to use a **custom Platform Event** published via `EventBus.publish()` when an unhandled exception occurs in the batch job. This allows the external system to subscribe to the event and react in real-time. Standard Platform Events (B, C) are not suitable for custom error notifications. Option D (`addError()`) is incorrect because it is used for validation errors, not for publishing events."
},
{
  "question": "A developer created 2 class that implements the Queueable Interface. As part of the deployment process, the developer is asked to create a corresponding test class. Which two actions should the developer take to successfully execute the test class? {{images_pd2/pd2_25.jpg}}",
  "type": "multiple",
  "options": {
    "A": "Implement seeAllData=True to ensure the Queueable job is able to run in bulk mode.",
    "B": "Enclose System.enqueueJob(new OrderQueueableJob()) within Test.startTest() and Test.stopTest().",
    "C": "Ensure the running user of the test class has, at minimum, the View All permission on the Order object.",
    "D": "Implement Test.isRunningTest() to prevent chaining jobs during test execution."
  },
  "answer": ["B", "D"]
},
{
  "question": "An Apex class does not achieve expected code coverage. The testSetup method explicitly calls a method in the Apex class. How can the developer generate the code coverage?",
  "type": "single",
  "options": {
    "A": "Call the Apex class method from a test method instead of the testSetup method.",
    "B": "Add @testvisible to the method in the class the developer is testing.",
    "C": "Use System.assert() in testSetup to verify the values are being returned.",
    "D": "Verify the user has permissions passing a user into System.runAs()."
  },
  "answer": "A",
},
{
  "question": "How can a developer efficiently incorporate multiple JavaScript libraries in an Aura component?",
  "type": "single",
  "options": {
    "A": "Join multiple assets from a static resource.",
    "B": "Use JavaScript remoting and script tags.",
    "C": "Use CDNs with script attributes.",
    "D": "Implement the libraries in separate helper files."
  },
  "answer": "A",
},

{
  "question": "A company has an Apex process that makes multiple extensive database operations and web service callouts. The database processes and web services can take a long time to run and must be run sequentially. How should the developer write this Apex code without running into governor limits and system limitations?",
  "type": "single",
  "options": {
    "A": "Use Apex Scheduler to schedule each process.",
    "B": "Use Queueable Apex to chain the jobs to run sequentially.",
    "C": "Use multiple future methods for each process and callout.",
    "D": "Use Limits class to stop entire process once governor limits are reached."
  },
  "answer": "B",
},

{
  "question": "An org records customer order information in a custom object, Order__c, that has fields for the shipping address. A developer is tasked with adding code to calculate shipping charges on an order, based on a flat percentage rate associated with the region of the shipping address. What should the developer use to store the rates by region, so that when the changes are deployed to production no additional steps are needed for the calculation to work?",
  "type": "single",
  "options": {
    "A": "Custom object",
    "B": "Custom metadata type", 
    "C": "Custom hierarchy setting",
    "D": "Custom list setting"
  },
  "answer": "B",
},

{
  "question": "A developer has a Visualforce page that automatically assigns ownership of an Account to a queue upon save. The page appears to correctly assign ownership, but an assertion validating the correct ownership fails. What can cause this problem?",
  "type": "single",
  "options": {
    "A": "The test class does not implement the Queueable interface.",
    "B": "The test class does not use the seeAllData=true annotation.",
    "C": "The test class does not retrieve the updated value from the database.",
    "D": "The test class does not use the Bulk API for loading test data."
  },
  "answer": "C",
},

{
  "question": "Universal Containers develops a Visualforce page that requires the inclusion of external JavaScript and CSS files. They want to ensure efficient loading and caching of the page. Which feature should be utilized to achieve this goal?",
  "type": "single",
  "options": {
    "A": "ActionFunction",
    "B": "RemoteAction",
    "C": "Static resources",
    "D": "PageBlockTable"
  },
  "answer": "C",
},

{
  "question": "An Apex trigger creates a Contract record every time an Opportunity record is marked as Closed and Won. This trigger is working great, except (due to a recent acquisition) historical Opportunity records need to be loaded into the Salesforce instance. When a test batch of records are loaded, the Apex trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass loading the Opportunities, but the daily users still need to have the Contract records created. What is the most extendable way to update the Apex trigger to accomplish this?",
  "type": "single",
  "options": {
    "A": "Use a hierarchy custom setting to skip executing the logic inside the trigger for the user who loads the data.",
    "B": "Add a validation rule to the Contract to prevent Contract creation by the user who loads the data.",
    "C": "Use a list custom setting to disable the trigger for the user who loads the data.",
    "D": "Add the Profile ID of the user who loads the data to the trigger, so the trigger will not fire for this user."
  },
  "answer": "A",
},

{
  "question": "A developer is creating a Lightning web component that displays a list of records in a lightning-datatable. After saving a new record to the database, the list is not updating. What should the developer change in the code above for this to happen?{{images_pd2/pd2_24.jpg}}",
  "type": "single",
  "options": {
    "A": "Call refreshApex() on this.data.",
    "B": "Add the @track decorator to the data variable.",
    "C": "Create a new variable to store the result and annotate it with @track.",
    "D": "Create a variable to store the result and call refreshApex()."
  },
  "answer": "D",
},

{
  "question": "A Visualforce page needs to make a callout to get billing information and tax information from two different REST endpoints. The information needs to be displayed to the user at the same time and the return value of the billing information contains the input for the tax callout. Each endpoint might take up to two minutes to process. How should a developer implement the callouts?",
  "type": "single",
  "options": {
    "A": "An HTTP REST callout for the billing callout and a Continuation for the tax callout",
    "B": "A Continuation for both the billing callout and the tax callout",
    "C": "An HTTP REST callout for both the billing callout and the tax callout",
    "D": "A Continuation for the billing callout and an HTTP REST callout for the tax callout"
  },
  "answer": "B",
},

{
  "question": "Universal Containers uses Big Objects to store almost a billion customer transactions called Customer_Transaction_b. These are the fields on Customer_Transaction_b: Account_c, Program_c, Points_Earned_c, Location_c, Transaction.Date_c. The following fields have been identified as Index Fields for the Customer_Transaction_b object: Account_c, Program_c, and Transaction.Date_c. Which SOQL query is valid on the Customer_Transaction_b Big Object?",
  "type": "single",
  "options": {
    "A": "SELECT Account_c, Program_c, Transaction.Date_c FROM Customer_Transaction_b WHERE Account_c = '001R000000302D3' AND Program_c = 'Shoppers' AND Transaction.Date_c=2019-05-31T00:00Z",
    "B": "SELECT Account_c, Program_c, Transaction.Date_c FROM Customer_Transaction_b WHERE Account_c = '001R000000302D3' AND Program_c LIKE 'Shop%' AND Transaction.Date_c=2019-05-31T00:00Z",
    "C": "SELECT Account_c, Program_c, Transaction.Date_c FROM Customer_Transaction_b WHERE Account_c = '001R000000302D3' AND Program_c INCLUDES ('Shoppers', 'Momens') AND Transaction.Date_c=2019-05-31T00:00Z",
    "D": "SELECT Account_c, Program_c, Transaction.Date_c FROM Customer_Transaction_b WHERE Account_c = '001R000000302D3' AND Program_c EXCLUDES ('Shoppers', 'Momens') AND Transaction.Date_c=2019-05-31T00:00Z"
  },
  "answer": "A",
  "note": "For Big Objects, SOQL queries must filter on all indexed fields (Account_c, Program_c, and Transaction.Date_c in this case) and only support the '=' operator (no LIKE, INCLUDES, or EXCLUDES). Therefore, option A is the only valid query."
},

{
  "question": "Refer to the test method below: The test method calls an @future method that increments the Number_of_Times_Viewed__c value. The assertion is failing because the Number_of_Times_Viewed__c equals 0. What is the optimal way to fix this? {{images_pd2/pd2_22.jpg}}",
  "type": "single",
  "options": {
    "A": "Add Test.startTest() before and Test.stopTest() after insert acct.",
    "B": "Add Test.startTest() before and Test.stopTest() after AuditUtil.incrementViewed.",
    "C": "Change the initialization to acct.Number_Of_Times_Viewed__c = 1.",
    "D": "Change the assertion to System.assertEquals(0, acctAfter.Number_Of_Times_Viewed__c)."
  },
  "answer": "B",
},

{
  "question": "A developer is developing a reusable Aura component that will reside on an sObject Lightning page. How can the component's controller get the context of the Lightning page that the sObject is on without requiring additional test coverage? {{images_pd2/pd2_21.jpg}}",
  "type": "single",
  "options": {
    "A": "Use the getSubjectType method in an Apex class.",
    "B": "Create a design attribute and configure via App Builder.",
    "C": "Set the sObject type as a component attribute.",
    "D": "Add force:hasSobjectName to the implements attribute."
  },
  "answer": "D"
},

{
  "question": "A developer needs to store variables to control the style and behavior of a Lightning Web Component. Which feature can be used to ensure that the variables are testable in both Production and all Sandboxes?",
  "type": "single",
  "options": {
    "A": "Custom object",
    "B": "Custom setting",
    "C": "Custom variable",
    "D": "Custom metadata"
  },
  "answer": "D"
},

{
  "question": "A developer is asked to replace the standard Case creation screen with a custom screen that takes users through a wizard before creating the Case. The org only has users running Lightning Experience. What should the developer override the Case New Action with to satisfy the requirements?",
  "type": "single",
  "options": {
    "A": "Lightning Component",
    "B": "Lightning Record Page", 
    "C": "Lightning Page",
    "D": "Lightning Flow"
  },
  "answer": "A"
},

{
  "question": "Business rules require a Contact to always be created when a new Account is created. What can be used when developing a custom screen to ensure an Account is not created if the creation of the Contact fails?",
  "type": "single",
  "options": {
    "A": "Use setSavepoint() and rollback() with a try-catch block.",
    "B": "Disable validation rules on Contacts and set default values with a trigger.",
    "C": "Use the Database.insert method with allOrNone set to false.",
    "D": "Use the Database.delete method if the Contact insertion fails."
  },
  "answer": "A"
},

{
  "question": "A developer is building a Lightning web component that searches for Contacts. The component must communicate the search results to other unrelated Lightning web components, that are in different DOM trees, when the search completes. What should the developer do to implement the communication?",
  "type": "single",
  "options": {
    "A": "Fire an application event.",
    "B": "Publish an event on an event channel.",
    "C": "Publish a message on a message channel.",
    "D": "Fire a custom component event."
  },
  "answer": "C"
},

{
  "question": "Given the following code: Assuming there were 10 Contacts and five Accounts created today, what is the expected result? {{images_pd2/pd2_20.jpg}}",
  "type": "single",
  "options": {
    "A": "System.QueryException: List has more than one row for Assignment on Account",
    "B": "System.QueryException: Too many DML Statement errors on Contact",
    "C": "System.LimitException: Too many SOQL Queries on Contact",
    "D": "System.LimitException: Too many SOQL Queries on Account"
  },
  "answer": "A"
},
{
  "question": "A developer has a requirement to query three fields (Id, Name, Type) from an Account; and first and last names for all Contacts associated with the Account. Which option is the preferred, optimized method to achieve this for the Account named 'Ozone Electronics'? {{images_pd2/pd2_19.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
    "D": "Option D"
  },
  "answer": "C"
},
{
  "question": "Universal Charities (UC) uses Salesforce to collect electronic donations in the form of credit card deductions from individuals and corporations. When a customer service agent enters the credit card information, it must be sent to a 3rd-party payment processor for the donation to be processed. UC uses one payment processor for individuals and a different one for corporations. What should a developer use to store the payment processor settings for the different payment processors, so that their system administrator can modify the settings once they are deployed, if needed?",
  "type": "single",
  "options": {
    "A": "List custom setting",
    "B": "Custom metadata",
    "C": "Custom object",
    "D": "Hierarchy custom setting"
  },
  "answer": "B"
},

{
  "question": "Assuming the CreateOneAccount class creates one account and implements the Queueable interface, which syntax properly tests the Apex code?{{images_pd2/pd2_18.jpg}}<br>{{images_pd2/pd2_18b.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
    "B": "Option B", 
    "C": "Option C",
    "D": "Option D"
  },
  "answer": "C"
},

{
  "question": "Universal Containers (UC) has enabled the translation workbench and has translated picklist values. UC has a custom multi-select picklist field, Product__c, on the Account object that allows sales reps to specify which of UC's products an Account already has. A developer is tasked with writing an Apex method that retrieves Account records, including the Product__c field. What should the developer do to ensure the value of Product__c is in the current user's language?",
  "type": "single",
  "options": {
    "A": "Use TOLABEL(Product__c) in the fields list of the SOQL query.",
    "B": "Use the Locale clause in the SOQL query.",
    "C": "Call the translate method on each record in the SOQL result list.",
    "D": "Set the locale on each record in the SOQL result list."
  },
  "answer": "A"
},

{
  "question": "A company has reference data stored in multiple custom metadata records that represent default information and delete behavior for certain geographic regions. When a contact is inserted, the default information should be set on the contact from the custom metadata records based on the contact's address information. Additionally, if a user attempts to delete a contact that belongs to a flagged region, the user must get an error message. Depending on company personnel resources, what are two ways to automate this?",
  "type": "multiple",
  "options": {
    "A": "Apex trigger",
    "B": "Apex invocable method",
    "C": "Flow Builder",
    "D": "Remote action"
  },
  "answer": ["A", "C"]
},

{
  "question": "Users of this Visualforce page complain that the page does a full refresh every time the Search button is pressed. What should the developer do to ensure that a partial refresh is made so that only the section identified with opportunityList is re-drawn on the screen?{{images_pd2/pd2_17.jpg}}",
  "type": "single",
  "options": {
    "A": "Implement the <apex:actionFunction> tag with immediate=true.",
    "B": "Implement the render attribute on the <apex:commandButton> tag.",
    "C": "Ensure the action method search returns null.",
    "D": "Enclose the data table within the <apex:actionRegion> tag."
  },
  "answer": "B"
},

{
  "question": "Which scenario requires a developer to use an Apex callout instead of Outbound Messaging?",
  "type": "single",
  "options": {
    "A": "The callout needs to be asynchronous.",
    "B": "The target system uses a REST API.",
    "C": "The callout needs to be invoked from a flow.", 
    "D": "The target system uses a SOAP API."
  },
  "answer": "B"
},

{
  "question": "Instead of waiting to send emails to support personnel directly from the finish method of a batch Apex process, Universal Containers wants to notify an external system in the event that an unhandled exception occurs. What is the appropriate publish/subscribe logic to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Publish the error event using the addError method.",
    "B": "Publish the error event with a Flow.",
    "C": "Publish the error event using the EventBus.publish() method.",
    "D": "No publishing is necessary. Have the external system subscribe to the BatchApexErrorEvent."
  },
  "answer": "D"
},

{
  "question": "A Salesforce Platform Developer is leading a team that is deploying a new application to production using source-driven development. What tool or mechanism should be used to verify that the deployment is successful?",
  "type": "single", 
  "options": {
    "A": "Salesforce Inspector",
    "B": "Apex Test Execution",
    "C": "Force.com Migration Tool",
    "D": "Salesforce DX CLI"
  },
  "answer": "D"
},

{
  "question": "A developer has a test class that creates test data before making a mock callout but now receives a 'You have uncommitted work pending. Please commit or rollback before calling out' error. Which step should be taken to resolve the error?",
  "type": "single",
  "options": {
    "A": "Ensure the records are inserted before the Test.startTest() statement and the mock callout occurs after the Test.startTest().",
    "B": "Ensure both the insertion and mock callout occur after the Test.startTest().",
    "C": "Ensure the records are inserted before the Test.startTest() statement and the mock callout occurs within a method annotated with @testSetup.",
    "D": "Ensure both the insertion and mock callout occur after the Test.stopTest()."
  },
  "answer": "A"
},

{
  "question": "A developer created an Opportunity trigger that updates the account rating when an associated opportunity is considered high value. Current criteria for an opportunity to be considered high value is an amount greater than or equal to $1,000,000. However, this criteria value can change over time. There is a new requirement to also display high value opportunities in a Lightning web component. Which two actions should the developer take to meet these business requirements, and also prevent the business logic that obtains the high value opportunities from being repeated in more than one place?",
  "type": "multiple",
  "options": {
    "A": "Call the trigger from the Lightning web component.",
    "B": "Leave the business logic code inside the trigger for efficiency.",
    "C": "Create a helper class that fetches the high value opportunities.",
    "D": "Use custom metadata to hold the high value amount."
  },
  "answer": ["C", "D"]
},

{
  "question": "How should a developer verify that a specific Account record is being tested in a test class for a Visualforce controller?",
  "type": "single",
  "options": {
    "A": "Insert the Account into Salesforce, Instantiate the page reference in the test class, then use `System.setParentRecordId().get()` to set the Account ID.",
    "B": "Insert the Account in the test class, Instantiate the page reference in the test class, then use `4.getParameters().put()` to set the Account ID.",
    "C": "Instantiate the page reference in the test class, Insert the Account in the test class, then use `System.setParentRecordId().get()` to set the Account ID.",
    "D": "Instantiate the page reference in the test class, Insert the Account in the test class, then use `scAllData=true` to view the Account."
  },
  "answer": "B",
  "explanation": "Option B is correct because: 1) You must first insert the Account to get a valid ID, 2) You need to instantiate the page reference, and 3) The standard way to pass parameters to a Visualforce controller in tests is through getParameters().put(). Options A and C reference non-existent System.setParentRecordId(), while D's scAllData is unrelated to testing specific records."
},

{
  "question": "A company has code to update a Request and Request Lines and make a callout to their external ERP system’s REST endpoint with the updated records.{{images_pd2/pd2_16.jpg}}What should be done to address the problem?",
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
  "question": "A developer is creating a Lightning web component that contains a child component. The property stage is being passed from the parent to the child. The public property is changing, but the setOppList function is not being invoked.\n\nWhat should the developer change to allow this?{{images_pd2/pd2_8.jpg}}",
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
  "answer": "C"
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
  "question": "A developer created the code to perform an HTTP GET request to an external system.\n\n{{images_pd2/pd2_6.jpg}}When the code is executed, the callout is unsuccessful and the following error appears within the Developer Console: System.CalloutException: Unauthorized endpoint\n\nWhich recommended approach should the developer implement to fix the callout exception?",
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
  "question": "The Account object has a field, Audit_Code__c, that specifies the type of auditing needed, and a Lookup to User, Auditor__c, for the assigned auditor. Each User has a unique text field, Rudi, used to automatically assign the correct User to the Account's Auditor__c field when the Account is created.<br><br>What should be changed to most optimize the code’s efficiency? {{images_pd2/pd2_5.jpg}}Choose 2 answers.",
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
  "question": "A developer has a Batch Apex process, Batch_Account_Sales, that updates the sales amount for 10,000 Accounts on a nightly basis. The Batch Apex works as designed in the sandbox. However, the developer cannot get code coverage on the Batch Apex class.<br><br>What is causing the code coverage problem?<br>{{images_pd2/pd2_4.jpg}}",
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
  "question": "The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Accounts are simultaneously updated to be customers.<br><br>The test method fails at Line 20 because of too many SOQL queries.<br>{{images_pd2/pd2_2.jpg}}<br><br>What is the correct way to fix this?",
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
  "question": "Which two best practices should the developer implement to optimize this code? {{images_pd2/pd2_60.jpg}}Choose 2 answers",
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
  "question": "The Salesforce admin at Cloud Kicks created a custom object called Region__c to store all postal zip codes in the United States and the Cloud Kicks sales region the zip code belongs to.<br><br>Cloud Kicks wants a trigger on the Lead to populate the Region based on the Lead's zip code.<br><br>Which code segment is the most efficient way to fulfill this request?{{images_pd2/pd2_61.jpg}}",
  "type": "single",
  "options": {
    "A": "Option A",
    "B": "Option B",
    "C": "Option C",
	"D": "Option D"
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
  "answer": "A",
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
  "question": "A developer wrote the following method to find all the test accounts in the org:{{images_pd2/pd2_11.jpg}}What should be used to fix this failing test?",
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
  "question": "A developer created a Lightning web component for the Account record page that displays the five most recently contacted Contacts for an Account. The Apex method, getRecentContacts, returns a list of Contacts and will be wired to a property in the component.{{images_pd2/pd2_12.jpg}}Which two lines must change in the above code to make the Apex method able to be wired? Choose 2 answers",
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
  "question": "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?{{images_pd2/pd2_13.jpg}}",
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
  "question": "As part of an integration development effort, a developer is tasked to create an Apex method that solely relies on the use of foreign identifiers in order to relate new Contact records to existing Accounts in Salesforce. The Account object contains a field marked as an external ID, the API Name of this field is Legacy_Id__c.<br><br>{{images_pd2/pd2_14.jpg}}What is the most efficient way to instantiate the parentAccount variable on line 02 to ensure the newly created Contact is properly related to the Account?",
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
    "question": "A developer is writing a Jest test for a Lightning web component that conditionally displays child components based on a user’s checkbox selections. What should the developer do to properly test that the correct components display and hide for each scenario?{{images_pd2/pd2_62.jpg}}",
    "type": "single",
    "options": {
        "A": "Reset the DOM after each test with the afterEach method.",
        "B": "Add a teardown block to reset the DOM after each test.",
        "C": "Create a new describe block for each test",
        "D": "Create a new jsdom instance for each test"
    },
    "answer": ["A"]
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
    "question": "A developer created a Lightning web component that allows users to input a text value that is used to search for Accounts by calling an Apex method. The Apex method returns a list of AccountWrappers and is called imperatively from a JavaScript event handler.{{images_pd2/pd2_15.jpg}}Which two changes should the developer make so the Apex method functions correctly? Choose 2 answers.",
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
