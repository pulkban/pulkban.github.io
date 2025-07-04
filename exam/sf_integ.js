window.getQuestions = function() {
    return [








{
  "question": "The URL for an external service has been changed without prior notice. The service provides up-to-date money exchange rates that are accessed several times from Salesforce and are a business-critical function for end users.<br>Which solutions should an integration architect recommend be implemented to minimize potential downtime for users in this situation?",
  "type": "single",
  "options": {
    "A": "Remote Site Settings and Named Credentials",
    "B": "Enterprise Service Bus (ESB) and Remote Site Settings",
    "C": "Named Credentials and Content Security Policies"
  },
  "answer": "A"
},
{
  "question": "A company needs to be able to send data from Salesforce to a homegrown system behind a corporate firewall. The data needs to be pushed only one way and doesn't need to be sent in real time. The average volume is 2 million records per day.<br>What should an integration architect consider when choosing the right option in building the integration between the external system and Salesforce?",
  "type": "single",
  "options": {
    "A": "Due to high volume of records, number of concurrent requests can hit the limit for the REST API call to the external system.",
    "B": "Due to high volume of records, the external system will need to use a BULK API Rest endpoint to connect to Salesforce.",
    "C": "Due to high volume of records, a third-party integration tool is required to stage records off platform."
  },
  "answer": "C"
},
{
  "question": "Northern Trail Outfitters (NTO) has recently changed its Corporate Security Guidelines. The guidelines require that all cloud applications pass through a secure firewall before accessing on-premise resources. NTO is evaluating middleware solutions to integrate cloud applications with on-premise resources and services.<br>Which consideration should an integration architect evaluate before choosing a middleware solution?",
  "type": "single",
  "options": {
    "A": "An API Gateway component is deployable behind a Demilitarized Zone (DMZ) or perimeter network.",
    "B": "The middleware solution is able to interface directly with databases via an Open Database Connectivity (ODBC) connection string.",
    "C": "The middleware solution enforces the OAuth security protocol."
  },
  "answer": "A"
},
{
  "question": "When a user clicks \"Check Preferences\" as part of a Lightning flow in Salesforce, preferences from an externally hosted RESTful service are to be checked in real time. The RESTful service has OpenAPI 2.0 JSON definitions, responding in Boolean and string values data types.<br>Which integration pattern and mechanism should be selected to meet the conditions?",
  "type": "single",
  "options": {
    "A": "Data Virtualization: Salesforce Connect maps external REST data in external objects.",
    "B": "Request and Reply: Enhanced External Services invokes a REST API.",
    "C": "Remote Call-In: Salesforce REST API with REST Composite Resources."
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters is creating a distributable Salesforce package for other Salesforce orgs within the company. The package needs to call into a custom Apex REST endpoint in the central org. The security team wants to ensure a specific integration account is used in the central org that they will authorize after installation of the package.<br>Which item should an architect recommend to secure the integration in the package?",
  "type": "single",
  "options": {
    "A": "Contact Salesforce Support and create a case to temporarily enable API access for managed packages.",
    "B": "Use an encrypted field to store the password that the security team enters, and use password management for external orgs and set the encryption method to TLS 1.2.",
    "C": "Create an authentication provider in the package and set the consumer key and consumer secret of the connected app in the central org."
  },
  "answer": "C"
},
{
  "question": "A customer is evaluating the Platform Events solution and would like help in comparing/contrasting it with Outbound Messaging for real-time/near-real time needs. They expect 3,000 customer to view messages in Salesforce.<br>What should be evaluated and highlighted when deciding between the solutions?",
  "type": "single",
  "options": {
    "A": "In both Platform Events and Outbound Messaging, the event messages are retried by and delivered in sequence, and only once. Salesforce ensures there is no duplicate message delivery.",
    "B": "Message sequence is possible in Outbound Messaging, but not guaranteed with Platform Events. Both offer very high reliability. Fault handling and recovery are fully handled by Salesforce.",
    "C": "Both Platform Events and Outbound Messaging are highly scalable. However, unlike Outbound Messaging, only Platform Events have Event Delivery and Event Publishing limits to be considered."
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) is currently managing a custom monolithic web service that runs on an on-premise server. This monolithic web service is responsible for Point-to-Point (P2P) integrations between:<br>1. Salesforce and a legacy billing application<br>2. Salesforce and a cloud-based Enterprise Resource Planning (ERP) application<br>3. Salesforce and a data lake<br>UC has found that the tight interdependencies between systems are causing integrations to fail.<br>What should an integration architect recommend to decouple the systems and improve the performance of the integrations?",
  "type": "single",
  "options": {
    "A": "Use the Salesforce Bulk API when integrating back into Salesforce.",
    "B": "Move the custom monolithic web service from on-premise to a cloud provider.",
    "C": "Leverage modular design by breaking up the web service into smaller pieces for a microservice architecture."
  },
  "answer": "C"
},
{
  "question": "Northern Trail Outfitters has recently implemented middleware for orchestration of services across platforms. The Enterprise Resource Planning (ERP) system being used requires transactions be captured near real time at a REST endpoint initiated in Salesforce when creating an Order object. Additionally, the Salesforce team has limited development resources and requires a low-code solution.<br>Which option should fulfill the use case requirements?",
  "type": "single",
  "options": {
    "A": "Use Remote Process Invocation Fire and Forget pattern on insert on the Order object using Flow Builder.",
    "B": "Implement a Workflow Rule with Outbound Messaging to send SOAP messages to the designated endpoint.",
    "C": "Implement Change Data Capture on the Order object and leverage the replay ID in the middleware solution."
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters (NTO) wants to improve the quality of callouts from Salesforce to its REST APIs. For this purpose, NTO will require all API clients/consumers to adhere to REST API Markup Language (RAML) specifications that include the field-level definition of every API request and response payload. The RAML specs serve as interface contracts that Apex REST API Clients can rely on.<br>Which design specification should the integration architect include in the integration architecture to ensure that Apex REST API Clients' unit tests confirm adherence to the RAML specs?",
  "type": "single",
  "options": {
    "A": "Require the Apex REST API Clients to implement the HttpCalloutMock.",
    "B": "Call the HttpCalloutMock implementation from the Apex REST API Clients.",
    "C": "Call the Apex REST API Clients in a test context to get the mock response."
  },
  "answer": "C"
},
{
  "question": "A customer's enterprise architect has identified requirements around caching, queuing, error handling, alerts, retries, event handling, etc. The company has asked the integration architect to help fulfill such aspects with its Salesforce program.<br>Which recommendation should the integration architect make?",
  "type": "single",
  "options": {
    "A": "Message transformation and protocol translation should be done within Salesforce. Recommend leveraging Salesforce native protocol conversion capabilities as middleware tools are NOT suited for such tasks.",
    "B": "Transform a Fire and Forget mechanism to Request and Reply, which should be handled by middleware tools (like ETL/ESB) to improve performance.",
    "C": "Provide true message queuing for integration scenarios (including orchestration, process choreography, quality of service, etc.) given that a middleware solution is required."
  },
  "answer": "C"
},
{
  "question": "A customer is migrating from an old legacy system to Salesforce. As part of the modernization effort, the customer would like to integrate all existing systems that currently work with its legacy application with Salesforce.<br>Which constraint/pain-point should an integration architect consider when choosing the integration pattern/mechanism?",
  "type": "single",
  "options": {
    "A": "System types APIs, File systems, Email",
    "B": "Reporting and usability requirements",
    "C": "Multi-language and multi-currency requirement"
  },
  "answer": "A"
},
{
  "question": "An architect decided to use Platform Events for integrating Salesforce with an external system for a company.<br>What should an architect consider when proposing this type of integration mechanism?",
  "type": "single",
  "options": {
    "A": "To publish an event, the integration user in Salesforce needs to create permissions on the event entity.",
    "B": "External system needs to have the same uptime in order to be able to keep up with Salesforce Platform Events.",
    "C": "Salesforce needs to be able to store information about the external system in order to know which event to send out."
  },
  "answer": "A"
},
{
  "question": "45 of 65. Northern Trail Outfitters has had an increase in requests from other business units to integrate opportunity information with other systems from Salesforce. The developers have started writing asynchronous @future callouts directly into the target systems. The CIO is concerned about the viability of this approach, scaling for future growth, and has requested a solution recommendation.<br>What should be done to mitigate the CIO's concerns?",
  "type": "single",
  "options": {
    "A": "Refactor the existing @future methods to use Enhanced External Services, import Open API 2.0 schemas, and update flows to use services instead of Apex.",
    "B": "Implement an Enterprise Service Bus for service orchestration, mediation, routing, and decouple dependencies across systems.",
    "C": "Implement an extract, transform, load (ETL) tool and perform nightly batch data loads to reduce network traffic using last modified dates on the Opportunity object to extract the right records."
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters (NTO) is planning to create a native employee-facing mobile app with the look and feel of Salesforce Lighting Experience. The mobile app needs to integrate with NTO's Salesforce org.<br>Which Salesforce API should be used to implement this integration?",
  "type": "single",
  "options": {
    "A": "Connect REST API",
    "B": "REST API",
    "C": "User Interface API"
  },
  "answer": "C"
},
{
  "question": "43 of 65. Northern Trail Outfitters (NTO) uses Salesforce to track leads, opportunities, and order details that convert leads to customers. However, orders are managed by an external (remote) system. Sales reps want to view and update real-time order information in Salesforce. NTO wants the data to only persist in the external system.<br>Which type of integration should an architect recommend to meet this business requirement?",
  "type": "single",
  "options": {
    "A": "Data Synchronization",
    "B": "Data Virtualization",
    "C": "Process Orchestration"
  },
  "answer": "B"
},
{
  "question": "40 of 65. A Salesforce customer is planning to roll out Salesforce for all of their sales and service staff. Senior management has requested that monitoring be in place for Operations to notify any degradation in Salesforce performance.<br>How should an integration consultant implement monitoring?",
  "type": "single",
  "options": {
    "A": "Use Salesforce API Limits to capture current API usage and configure alerts for monitoring.",
    "B": "Identify critical business processes and establish automation to monitor performance against established benchmarks.",
    "C": "Use APIEVENT to track all user initiated API calls through SOAP, REST, or Bulk APIs."
  },
  "answer": "B"
},
{
  "question": "35 of 65. Northern Trail Outfitters (NTO) uses different shipping services for each of the 34 countries it serves. Services are added and removed frequently to optimize shipping times and costs. Sales representatives serve all NTO customers globally and need to select between valid service(s) for the customer's country and request shipping estimates from that service.<br>Which solution should an architect propose?",
  "type": "single",
  "options": {
    "A": "Store shipping services in a picklist that is dependent on a country picklist.",
    "B": "Invoke middleware service to retrieve valid shipping methods.",
    "C": "Use Platform Events to construct and publish shipper-specific events."
  },
  "answer": "B"
},
{
  "question": "33 of 65. A company has an external system that processes and tracks orders. Sales reps manage their leads and opportunity pipeline in Salesforce. In the current state, the two systems are disconnected, and processing orders requires a lot of manual entry on the sales reps' part. This creates delays in processing orders and incomplete data due to manual entry.<br>As a part of modernization efforts, the company decided to integrate Salesforce and the Order Management System. The following technical requirements were identified:<br>1. Orders need to be created in real time from Salesforce.<br>2. Minimal customizations and code should be written due to a tight timeline and lack of developer resources.<br>3. Sales reps need to be able to see order history and the most up-to-date information on current order status.<br>4. Managers need to be able to run reports in Salesforce to see daily and monthly order volumes and fulfillment timelines.<br>5. The legacy system is hosted on-premise and is currently connected to the Enterprise Service Bus (ESB). The ESB is flexible enough to provide any methods and connection types needed by the Salesforce team.<br>6. There are 1,000 sales reps. Each user processes/creates on average 15 orders per shift. Most of the orders contain 20 to 30 line items.<br>How should an integration architect integrate the two systems based on the technical requirements and system constraints?",
  "type": "single",
  "options": {
    "A": "Use Salesforce standard object; REST API, and extract, transform, load (ETL).",
    "B": "Use Salesforce custom object; custom REST API, and extract, transform, load (ETL).",
    "C": "Use Salesforce external object and OData connector."
  },
  "answer": "C"
},
{
  "question": "32 of 65. Northern Trail Outfitters needs to use Shield Platform Encryption to encrypt social security numbers in order to meet a business requirement.<br>Which action should an integration architect take prior to the implementation of Shield Platform Encryption?",
  "type": "single",
  "options": {
    "A": "Encrypt all the data so that it is secure.",
    "B": "Use Shield Platform Encryption as a user authentication or authorization tool.",
    "C": "Review Shield Platform Encryption configurations."
  },
  "answer": "C"
},
{
  "question": "31 of 65. Northern Trail Outfitters needs to make synchronous callouts \"available-to-promise\" services to query product availability and reserve inventory during the customer checkout process.<br>What should an integration architect consider when building a scalable integration solution?",
  "type": "single",
  "options": {
    "A": "The maximum query cursors open per user on the service",
    "B": "The typical and worst-case historical response times",
    "C": "The number of batch jobs that can run concurrently"
  },
  "answer": "B"
},
{
  "question": "30 of 65. A new Salesforce program has the following high-level abstract requirement: Business processes executed on Salesforce require data updates between their internal systems and Salesforce.<br>Which relevant detail should an integration architect seek to specifically solve for integration architecture needs of the program?",
  "type": "single",
  "options": {
    "A": "Core functional and non-functional requirements for User Experience design, Encryption needs, Community, and license choices",
    "B": "Timing aspects, real-time/near real-time (synchronous or asynchronous), batch and update frequency",
    "C": "Integration skills, SME availability, and Program Governance details"
  },
  "answer": "B"
},
{
  "question": "28 of 65. Universal Containers (UC) is a leading provider of management training globally. UC embarked on a Salesforce transformation journey to allow students to register for courses in the Salesforce Community. UC has a learning system that masters all courses and student registration.<br>UC requested a near real-time feed of student registration from Salesforce to the learning system. The integration architect recommends using Salesforce Platform Events.<br>Which API should be used for the Salesforce platform event solution?",
  "type": "single",
  "options": {
    "A": "REST API",
    "B": "SOAP API",
    "C": "Streaming API"
  },
  "answer": "C"
},
{
  "question": "Given the diagram above, a Salesforce org, middleware, and Historical Data store exist with connectivity between them.{{images_integ/integ6.jpg}}<br>Historical records are archived from Salesforce, moved to a Historical Data store (which houses 20 million records and growing), and fine-tuned to be performant with search queries.<br>When reviewing occasional special cases, call center agents that use Salesforce have requested access to view the historical case items that relate to submitted cases.<br>Which mechanism and patterns are recommended to maximize declarative configuration?",
  "type": "single",
  "options": {
    "A": "Use an ESB tool with a Data Virtualization pattern, expose the OData endpoint, and then use Salesforce Connect to consume and display the external object alongside the Case object.",
    "B": "Use an ESB tool with a Request and Reply pattern, and then make a real-time Apex callout to the ESB endpoint to fetch and display historical data in a custom Lightning component related to the Case object.",
    "C": "Use an ESB tool with a Fire and Forget pattern, and then publish a platform event for the requested historical data."
  },
  "answer": "A"
},
{
  "question": "25 of 65. Northern Trail Outfitters wants to use Salesforce as a front end for creating accounts using the lead-to-opportunity process.<br>1. An order is created in Salesforce when the opportunity is Closed/Won, but the back-end Enterprise Resource Planning (ERP) system is the data master for order.<br>2. The customer wants to be able to see within Salesforce all the stages of order processing, like Order Created, Order Shipped, and Order Paid, that are within the retention window.<br>Which message durability consideration should an integration architect make when designing a solution to meet these business requirements?",
  "type": "single",
  "options": {
    "A": "When subscribing to Salesforce Event Bus, ReplayID is used with a value of -1 to be able to see new events.",
    "B": "High-volume event messages are stored for 24 hours (1 day).",
    "C": "When subscribing to Salesforce Event Bus, ReplayID is used with a value of -2 to be able to see old and new events."
  },
  "answer": "C"
},
{
  "question": "24 of 65. Northern Trail Outfitters is seeking to improve the performance and security of outbound integrations from Salesforce to on-premise servers.<br>What should the Integration architect consider before recommending a solution?",
  "type": "single",
  "options": {
    "A": "Default gateway restrictions",
    "B": "External gateway products in use",
    "C": "Shield Platform Encryption limitations"
  },
  "answer": "B"
},
{
  "question": "23 of 65. A large consumer goods manufacturer operating in multiple countries is planning to implement Salesforce for its sales and support operations globally. The manufacturer has the following security requirements:<br>1. Internal users from each country have to be authenticated with their local active directory.<br>2. Customers can create their own login or use Google login.<br>3. Partners have to be authenticated through a central system which is to be determined.<br>4. Internal users will have access to the central Enterprise Resource Planning (ERP) with their credentials maintained in the ERP system.<br>5. Additional internal systems will be integrated with Salesforce for sales and support business processes.<br>Which requirement should the integration architect evaluate while designing the integration needs of this project?",
  "type": "single",
  "options": {
    "A": "Evaluate Salesforce native authentication mechanism for all users including customers and partners.",
    "B": "Evaluate the build of a custom authentication mechanism for users in each country and support for customers and partners.",
    "C": "Consider a third-party single sign-on (SSO) solution supporting all user authentication including customer and partner."
  },
  "answer": "C"
},
{
  "question": "20 of 65. A subscription-based media company's system landscape forces many subscribers to maintain multiple accounts and to log in more than once. An Identity and Access Management (IAM) system, which supports SAML and OpenId, was recently implemented to improve the subscriber experience through self-registration and single sign-on (SSO). The IAM system must integrate with Salesforce to give new self-service customers instant access to Salesforce Community Cloud.<br>Which requirement should Salesforce Community Cloud support for self-registration and SSO?",
  "type": "single",
  "options": {
    "A": "OpenId Connect Authentication Provider and Just-in-Time (JIT) provisioning",
    "B": "OpenId Connect Authentication Provider and Registration Handler",
    "C": "SAML SSO and Registration Handler"
  },
  "answer": "B"
},
{
  "question": "16 of 65. Northern Trail Outfitters needs to present shipping costs and estimated delivery times to its customers. Shipping services used vary by region and have similar but distinct service request parameters.<br>Which integration component capability should be used?",
  "type": "single",
  "options": {
    "A": "Apex REST Service to implement routing logic to the various shipping service",
    "B": "Enterprise Service Bus to determine which shipping service to use and transform requests to the necessary format",
    "C": "Enterprise Service Bus user interface to collect shipper-specific form data"
  },
  "answer": "B"
},
{
  "question": "15 of 65. An enterprise architect has requested the Salesforce integration architect to review the following (see diagram and description) and provide recommendations after carefully considering all constraints of the enterprise systems and Salesforce Platform limits.{{images_integ/integ5.jpg}}<br>About 3,000 phone sales agents use a Salesforce Lightning user Interface (UI) concurrently to check eligibility of a customer for a qualifying offer.<br>There are multiple eligibility systems that provide this service and are hosted externally. However, their current response times could take up to 90 seconds to process and return (there are discussions to reduce the response times in the future, but no commitments are made).<br>These eligibility systems can be accessed through APIs orchestrated via ESB (MuleSoft).<br>All requests from Salesforce will have to traverse through the customer's API Gateway layer, and the API Gateway imposes a constraint of timing out requests after 9 seconds.<br>Which recommendation should the integration architect make?",
  "type": "single",
  "options": {
    "A": "Recommend synchronous Apex callouts from Lightning UI to External Systems via Mule and implement polling on an API Gateway timeout.",
    "B": "Implement a 'Check Update' button that passes a requestId received from ESB (user action needed).",
    "C": "Create a platform event in Salesforce via Remote Call-In and use the empAPI in the Lightning UI to serve 3,000 concurrent users when responses are received by Mule."
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters is planning to perform nightly batch loads into Salesforce from an external system with a custom Java application using the Bulk API. The CIO is curious about monitoring recommendations for the jobs from the technical architect.<br>Which recommendation should help meet the requirements?",
  "type": "single",
  "options": {
    "A": "Use the getBatchInfo method in the Java application to monitor the status of the jobs from the Java application.",
    "B": "Write the error response from the Bulk API status to a custom error logging object in Salesforce using an Apex trigger, and create reports on the object.",
    "C": "Set the Salesforce debug logs level to \"finest\", and add the user ID running the job to monitor in the \"Debug Logs\" in the setup menu."
  },
  "answer": "A"
},
{
  "question": "11 of 65. An integration architect has built a Salesforce application that integrates multiple systems and keeps them synchronized via Platform Events.<br>What is taking place if events are only being published?",
  "type": "single",
  "options": {
    "A": "The platform events are published after the Apex transaction completes.",
    "B": "The platform events are published immediately before the Apex transaction completes.",
    "C": "The platform events are being published from Apex."
  },
  "answer": "A"
},
{
  "question": "9 of 65. Universal Containers (UC) is a global financial company that sells financial products and services. There is a daily scheduled Batch Apex job that generates invoices from a given set of orders. UC requested building a resilient integration for this Batch Apex job in case the invoice generation fails.<br>What should an integration architect recommend to fulfill the requirement?",
  "type": "single",
  "options": {
    "A": "Build Batch Retry and Error Handling using BatchApexErrorEvent.",
    "B": "Build Batch Retry and Error Handling in the Batch Apex job itself.",
    "C": "Build Batch Retry and Error Handling in the middleware."
  },
  "answer": "A"
},
{
  "question": "3 of 65. An integration architect needs to build a solution that will use the Streaming API, but the data loss should be minimized, even when the client re-connects every couple of days.<br>Which two types of Streaming API events should be considered?",
  "type": "single",
  "options": {
    "A": "High Volume Platform and Generic Events",
    "B": "Change Data Capture and High Volume Platform Events",
    "C": "PushTopic and Change Data Capture Events"
  },
  "answer": "B"
},
{
  "question": "[NEW]<br>2 of 65. Northern Trail Outfitters requires an integration to be set up between one of its Salesforce orgs and an External Data Source using Salesforce Connect. The External Data Source supports Open Data Protocol.<br>Which configuration should an integration architect recommend be implemented in order to secure requests coming from Salesforce?",
  "type": "single",
  "options": {
    "A": "Configure a certificate for OData connection.",
    "B": "Configure Special Compatibility for OData connection.",
    "C": "Configure Identity Type for OData connection."
  },
  "answer": "A"
},
{
  "question": "1 of 65. Universal Containers (UC) sales representatives use Sales Cloud as their primary CRM. UC owns a legacy homegrown application that also stores a copy of customer data. Sales representatives may edit or update contact records in Salesforce if there is a change. Both Salesforce and the homegrown application should be kept synchronized for consistency. UC has the following requirements: 1. When a contact record in Salesforce is updated, the external homegrown application should also be updated. 2. The synchronization should be event-driven. 3. The integration should be asynchronous. Which option should an architect recommend to satisfy the requirements?",
  "type": "single",
  "options": {
    "A": "Leverage Platform Events to publish a custom event message containing changes to the Contact object.",
    "B": "Use an extract, transform, load (ETL) tool to keep Salesforce and the homegrown application in sync on a regular cadence.",
    "C": "Leverage Change Data Capture to track changes to the Contact object and write a CometD subscriber on the homegrown application."
  },
  "answer": "C"
},
{
  "question": "2 of 65. Northern Trail Outfitters wants to use Salesforce as a front end for creating accounts using the lead-to-opportunity process. 1. An order is created in Salesforce when the opportunity is Closed/Won, but the back-end Enterprise Resource Planning (ERP) system is the data master for order.<br>2. The customer wants to be able to see within Salesforce all the stages of order<br>processing like Order Created, Order Shipped, and Order Paid that are within the retention window.<br>Which message durability consideration should an integration architect make when<br>designing a solution to meet these business requirements?",
  "type": "single",
  "options": {
    "A": "High-volume event messages are stored for 24 hours (1 day).",
    "B": "High-volume event messages are stored for 72 hours (3 days).",
    "C": "When subscribing to Salesforce Event Bus, ReplayId is used with a value of -1 to be able to see new events."
  },
  "answer": "B"
},
{
  "question": "3 of 65. Universal Containers (UC) is a large printing company that sells advertisement banners. The company works with third-party agents on banner initial design concepts. The design files are stored in an on-premise file store that can be accessed by UC internal users and third-party agencies. UC would like to collaborate with the third-party agencies on the design files and allow them to view the design files in the community. The conceptual design files size is 2.5 GB.<br>Which solution should an integration architect recommend?",
  "type": "single",
  "options": {
    "A": "Use Salesforce Files to link the files to Salesforce records and display the record and the files in the<br>community.",
    "B": "Create a Lightning component with a Request and Reply integration pattern to allow the community<br>users to download the design files.",
    "C": "Create a custom object to store the file location URL; when a community user clicks on the file URL,<br>redirect the user to the on-premise system file location."
  },
  "answer": "C"
},
{
  "question": "4 of 65. Northern Trail Outfitters needs to secure an integration with an external Microsoft Azure API Gateway. Which integration security mechanism should be employed?",
  "type": "single",
  "options": {
    "A": "Configure a connected app with an authorization endpoint of the API Gateway and configure OAuth settings.",
    "B": "Use an API-only user profile and implement an external identity provider with federated API access.",
    "C": "Configure mutual server authentication with two-way SSL using certification authority (CA) signed certificates."
  },
  "answer": "C"
},
{
  "question": "5 of 65. A company's security assessment noted vulnerabilities on the unmanaged<br>packages in its Salesforce orgs; notably, secrets that are easily accessible and in plain<br>text, such as usernames, passwords, and OAuth tokens used in callouts from<br>Salesforce.<br>Which persistence mechanisms should an integration architect require to be used to<br>ensure that secrets are protected from deliberate or inadvertent exposure?",
  "type": "single",
  "options": {
    "A": "Protected Custom Metadata Types and Named Credentials",
    "B": "Encrypted Custom Fields and Protected Custom Settings",
    "C": "Named Credentials and Protected Custom Settings"
  },
  "answer": "B"
},
{
  "question": "6 of 65. Northern Trail Outfitters requires an integration to be set up between one of its Salesforce orgs and an External Data Source using Salesforce Connect. The External Data Source supports Open Data Protocol. Which configuration should an integration architect recommend be implemented in<br>order to secure requests coming from Salesforce?",
  "type": "single",
  "options": {
    "A": "Configure Special Compatibility for OData connection.",
    "B": "Configure Identity Type for OData connection.",
    "C": "Configure CSRF Protection for OData connection."
  },
  "answer": "B"
},
{
  "question": "7 of 65. A customer of Salesforce has used Platform Events to integrate their Salesforce instance with an external third-party artificial intelligence (AI) system. The AI system provides a prediction score for each lead that is received by Salesforce. Once the prediction score is received, the lead information is saved to Platform Events for other processes. The trigger on the Platform Events has failed ever since it was rolled out to production. Which type of monitoring should the integration consultant have considered to monitor this integration?",
  "type": "single",
  "options": {
    "A": "Validate that the Platform Event definition matches lead's definition.",
    "B": "Set up debug logs for Platform Event triggers to monitor performance.",
    "C": "Monitor Platform Events created per hour limits across the Salesforce instance."
  },
  "answer": "B"
},
{
  "question": "8 of 65. Northern Trail Outfitters needs to use Shield Platform Encryption to encrypt<br>social security numbers in order to meet a business requirement.<br>Which action should an integration architect take prior to the implementation of<br>Shield Platform Encryption?",
  "type": "single",
  "options": {
    "A": "Encrypt all the data so that it is secure.",
    "B": "Use Shield Platform Encryption as a user authentication or authorization tool.",
    "C": "Encrypt the data using the most current key."
  },
  "answer": "C"
},
{
  "question": "9 of 65. Service agents at Northern Trail Outfitters use Salesforce to manage cases<br>and B2C Commerce for ordering.<br>Which integration solution should an architect recommend in order for the service<br>agents to see order history from a business-to-consumer (B2C) Commerce system?",
  "type": "single",
  "options": {
    "A": "MuleSoft Anypoint Platform",
    "B": "Salesforce B2C Commerce to Service Cloud Connector",
    "C": "REST API offered by Commerce Platform"
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters (NTO) uses a custom mobile app to interact with its customers. One of the features of the app is Salesforce Chatter Feeds. NTO wants to automatically post a Chatter item to Twitter whenever the post includes the #thanksNTO hashtag. Which API should an integration architect use to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Streaming API to generate PushTopic",
    "B": "Connect REST API",
    "C": "REST API"
  },
  "answer": "B"
},
{
  "question": "11 of 65. A business-to-consumer (B2C) enterprise customer has the following use case that involves processing payment from an external payment gateway service in Salesforce. 1. Customer requests Customer Service Representative (CSR) for a Service<br>upgrade.<br>2. Customer provides credit card details to CSR for payment.<br>3. CSR submits payment information in Salesforce, and it is processed in an<br>external payment gateway.<br>4. CSR receives confirmation of payment.<br>5. CSR upgrades service for customer and confirms customer.<br>This use case requires the CSR to obtain confirmation of payment before upgrading the service. The integration with the payment gateway needs to be reliable and<br>monitored for audit purposes. The payment gateway service is an external RESTful service that the B2C enterprise customer has subscribed for. What should an integration architect recommend for this integration?",
  "type": "single",
  "options": {
    "A": "Use External Services feature to integrate payment gateway to Salesforce to ensure real-time updates to the CSR and support post payment processes.",
    "B": "Make a callout to the payment gateway through ESB supporting error handling and logging for audit purposes.",
    "C": "Build a custom Apex callout to external payment gateway service and provide a success message to the CSR; the details of callouts and responses are logged for audit purposes."
  },
  "answer": "B"
},
{
  "question": "12 of 65. Northern Trail Outfitters uses a custom Java application to display code<br>coverage and test results for all of its enterprise applications and plans to include<br>Salesforce as well.<br>Which Salesforce API should an integration architect use to meet the requirement?",
  "type": "single",
  "options": {
    "A": "Metadata API",
    "B": "Analytics REST API",
    "C": "Tooling API"
  },
  "answer": "C"
},
{
  "question": "13 of 65. A subscription-based media company's system landscape forces many<br>subscribers to maintain multiple accounts and to log in more than once. An Identity<br>and Access Management (IAM) system, which supports SAML and OpenId, was<br>recently implemented to improve the subscriber experience through self-registration<br>and single sign-on (SSO). The IAM system must integrate with Salesforce to give new<br>self-service customers instant access to Salesforce Community Cloud.<br>Which requirement should Salesforce Community Cloud support for self-registration<br>and SSO?",
  "type": "single",
  "options": {
    "A": "OpenId Connect Authentication Provider and JIT provisioning",
    "B": "SAML SSO and Just-in-Time (JIT) provisioning",
    "C": "SAML SSO and Registration Handler"
  },
  "answer": "B"
},
{
  "question": "14 of 65. A new Salesforce program has the following high-level abstract<br>requirement: Business processes executed on Salesforce require data updates between some internal systems and Salesforce.<br>Which relevant details should a Salesforce integration architect seek to specifically<br>solve for the integration architecture needs of the program?",
  "type": "single",
  "options": {
    "A": "Integration skills, SME availability, and Program Governance details",
    "B": "Core functional and non-functional requirements for User Experience design, Encryption needs, Community, and license choices",
    "C": "Source and Target system, Directionality, and data volume & transformation complexity, along with any middleware that can be leveraged"
  },
  "answer": "C"
},
{
  "question": "15 of 65. A large enterprise customer has decided to implement Salesforce as its<br>CRM. The current system landscape includes:<br>1. An Enterprise Resource Planning (ERP) solution that is responsible for Customer<br>invoicing and order fulfillment<br>2. A Marketing solution used for email campaigns<br>The enterprise customer needs its sales and service associates to use Salesforce to<br>view and log their interactions with customers and prospects in Salesforce.<br>Which system should be the system of record for the enterprise customer's customers<br>and prospects?",
  "type": "single",
  "options": {
    "A": "Salesforce with relevant Marketing and ERP information",
    "B": "New Custom Database for customers and prospects",
    "C": "ERP with all prospect data from Marketing and Salesforce"
  },
  "answer": "A"
},
{
  "question": "16 of 65. A company needs to integrate a legacy on-premise application that can<br>only support SOAP API. After the integration architect evaluates the requirements and<br>volume, they determine that the Fire and Forget integration pattern will be most<br>appropriate for sending data from Salesforce to the external application and getting<br>response back in a strongly-typed format.<br>Which integration capabilities should be used to integrate the two systems?",
  "type": "single",
  "options": {
    "A": "Outbound Messaging for Salesforce to Legacy System direction and SOAP API using Partner Web<br>Services Description Language (WSDL) for the communication back from legacy system to<br>Salesforce",
    "B": "Platform Events for Salesforce to Legacy System direction and SOAP API using Enterprise WSDL for<br>the communication back from legacy system to Salesforce",
    "C": "Outbound Messaging for Salesforce to Legacy System direction and SOAP API using Enterprise WSDL<br>for the communication back from legacy system to Salesforce"
  },
  "answer": "C"
},
{
  "question": "17 of 65. What is the first thing an integration architect should validate if a callout<br>from a Lightning web component to an external endpoint is failing?",
  "type": "single",
  "options": {
    "A": "The endpoint domain has been added to Cross-Origin Resource Sharing.",
    "B": "The endpoint URL has been added to Remote Site Settings.",
    "C": "The endpoint URL has been added to Content Security Policies."
  },
  "answer": "B"
},
{
  "question": "18 of 65. What should an integration architect recommend to ensure all integrations<br>to the Northern Trail Outfitters' company portal use SSL mutual authentication?",
  "type": "single",
  "options": {
    "A": "Generate a certification authority (CA) signed certificate.",
    "B": "Enforce SSL/TLS Mutual Authentication.",
    "C": "Enable My Domain and SSL/TLS."
  },
  "answer": "B"
},
{
  "question": "19 of 65. Universal Containers (UC) is a global financial company. UC support agents<br>would like to open bank accounts on the spot for customers who inquire about UC<br>products.<br>During the bank account opening process, the agents execute credit checks for the<br>customers through external agencies. At any given time, up to 30 concurrent reps will<br>be using the service to perform credit checks for customers.<br>Which error handling mechanisms should be built to display an error to the agent<br>when the credit verification process has failed?",
  "type": "single",
  "options": {
    "A": "In case the verification process is down, use mock service to send the response to the agent.",
    "B": "In case the verification process is down, use fire and forget mechanism instead of Request and Reply<br>to allow the agent to get the response back when the service is back online.",
    "C": "Handle integration errors in the middleware in case the verification process is down, then the<br>middleware should retry processing the request multiple times."
  },
  "answer": "C"
},
{
  "question": "20 of 65. Which Web Services Description Language (WSDL) should an architect<br>consider when creating an integration that might be used for more than one<br>Salesforce org and different metadata?",
  "type": "single",
  "options": {
    "A": "Partner WSDL",
    "B": "Enterprise WSDL",
    "C": "SOAP API WSDL"
  },
  "answer": "A"
},
{
  "question": "21 of 65. Salesforce users need to read data from an external system via an HTTP<br>request.<br>Which security methods should an integration architect leverage within Salesforce to<br>secure the integration?",
  "type": "single",
  "options": {
    "A": "Authorization Provider and Named Credentials",
    "B": "Named Credentials and Two way SSL",
    "C": "Two-way SSL and Authorization Provider"
  },
  "answer": "B"
},
{
  "question": "22 of 65. Northern Trail Outfitters is in the final stages of merging two Salesforce<br>orgs, but needs to keep the retiring org available for a short period of time for lead<br>management as it is connected to multiple public website forms. The sales<br>department has requested that new leads are available in the new Salesforce instance<br>within 30 minutes.<br>Which approach requires the least amount of development effort?",
  "type": "single",
  "options": {
    "A": "Use the Tooling API with Process Builder to insert leads in real time.",
    "B": "Configure named credentials in the source org.",
    "C": "Use the Composite REST API to aggregate multiple leads in a single call."
  },
  "answer": "C"
},
{
  "question": "Northern Trail Outfitters (NTO) has a requirement to encrypt a few widely-used standard fields. NTO also wants to be able to use these fields in record-triggered flows.<br>Which security solution should an integration architect recommend to fulfill the business use case?",
  "type": "single",
  "options": {
    "A": "Classic Encryption",
    "B": "Data Masking",
    "C": "Shield Platform Encryption"
  },
  "answer": "C"
},
{
  "question": "A customer is migrating from an old legacy system to Salesforce. As part of the modernization effort, the customer would like to integrate all existing systems that currently work with its legacy application with Salesforce.<br>Which constraint/pain-point should an integration architect consider when choosing the integration pattern/mechanism?",
  "type": "single",
  "options": {
    "A": "Data volume and processing volume",
    "B": "Reporting and usability requirements",
    "C": "Multi-language and multi-currency requirement"
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters (NTO) uses different shipping services for each of the 34 countries it serves. Services are added and removed frequently to optimize shipping times and costs. Sales representatives serve all NTO customers globally and need to select between valid service(s) for the customer's country and request shipping estimates from that service.<br>Which solution should an architect propose?",
  "type": "single",
  "options": {
    "A": "Use middleware to abstract the call to the specific shipping services.",
    "B": "Use Platform Events to construct and publish shipper-specific events.",
    "C": "Store shipping services in a picklist that is dependent on a country picklist."
  },
  "answer": "A"
},
{
  "question": "An integration architect has received a request to prevent employees that leave the company from accessing data in Salesforce after they are deactivated in the company's HR system.<br>What should the integration architect determine before recommending a solution?",
  "type": "single",
  "options": {
    "A": "Inbound integration requirements, then identify frequency",
    "B": "Data access prevention requirements, then identify frequency",
    "C": "Data access prevention requirements, integration requirements, and system constraints"
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters has recently implemented middleware for orchestration of services across platforms. The Enterprise Resource Planning (ERP) system being used requires transactions be captured near real time at a REST endpoint initiated in Salesforce when creating an Order object. Additionally, the Salesforce team has limited development resources and requires a low-code solution.<br>Which option should fulfill the use case requirements?",
  "type": "single",
  "options": {
    "A": "Use Lightning Flow to create a platform event, selecting the record type as the platform event name on insert of record.",
    "B": "Implement a Workflow Rule with Outbound Messaging to send SOAP messages to the designated endpoint.",
    "C": "Implement Change Data Capture on the Order object and leverage the replay ID in the middleware solution."
  },
  "answer": "C"
},
{
  "question": "Northern Trail Outfitters (NTO) has an affiliate company that would like immediate notifications of changes to opportunities in the NTO Salesforce instance. The affiliate company has a CometD client available.<br>Which solution is recommended in order to meet the requirement?",
  "type": "single",
  "options": {
    "A": "Create a connected app in the affiliate org and select \"Accept CometD API Requests\".",
    "B": "Implement a polling mechanism in the client that calls the SOAP API getUpdated method to get the ID values of each updated record.",
    "C": "Create a PushTopic update event on the Opportunity object to allow the subscriber to react to the streaming API."
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) currently owns a middleware tool and has developed an API-led integration architecture with three API tiers:<br>- The first tier interfaces directly with the systems of engagement.<br>- The second tier implements business logic and aggregates data.<br>- The third tier interfaces directly with the systems of record.<br><br>Some of the systems of engagement will be a mobile application, a web application, and Salesforce.<br><br>UC has a business requirement to return data to the systems of engagement in different formats while also enforcing different security protocols.<br>What should an integration architect recommend to meet these requirements?",
  "type": "single",
  "options": {
    "A": "Leverage an Identity Provider solution that communicates with the API tiers via SAML.",
    "B": "Enforce separate security protocols and return formats at the first tier of the API-led architecture.",
    "C": "Implement an API Gateway that all systems of engagement must interface with first."
  },
  "answer": "C"
},
{
  "question": "An integration architect has been tasked with integrating Salesforce with an on-premises system. Due to some established policies, this system must remain on-premises.<br>What should the integration architect use to build a solution for this requirement?",
  "type": "single",
  "options": {
    "A": "Use Heroku Connect if the data is hosted in Heroku.",
    "B": "Use Salesforce Connect if the database supports Open Data Protocol (OData).",
    "C": "Use Salesforce Connect if the database supports Open Database Connectivity (ODBC)."
  },
  "answer": "B"
},
{
  "question": "What should an integration architect consider when recommending Platform Events as an integration solution?",
  "type": "single",
  "options": {
    "A": "Subscribe to an AssetTokenEvent stream to monitor OAuth 2.0 authentication activity.",
    "B": "When an event definition is deleted, it's permanently removed and can't be restored.",
    "C": "Event Monitoring is used to track user activity, such as logins and running reports."
  },
  "answer": "B"
},
{
  "question": "The goals for implementing Salesforce include:<br>1. Develop a 360-degree view of the customer.<br>2. Leverage Salesforce capabilities for marketing, sales, and service processes.<br>3. Reuse Enterprise capabilities built for quoting and order management processes.<br><br>A large business-to-consumer (B2C) customer is planning to implement Salesforce CRM to become a customer-centric enterprise. Below is the B2C customer's current system landscape diagram. <br><br>{{images_integ/integ4.jpg}}<br><br>Which three systems from the current system landscape can be retired with the implementation of Salesforce?",
  "type": "single",
  "options": {
    "A": "Order Management, Case Management, and Email Marketing",
    "B": "Sales Activity, Order Management, and Case Management",
    "C": "Email Marketing, Sales Activity, and Case Management"
  },
  "answer": "C"
},
{
  "question": "Northern Trail Outfitters is creating a distributable Salesforce package for other Salesforce orgs within the company. The package needs to call into a custom Apex REST endpoint in the central org. The security team wants to ensure a specific integration account is used in the central org that they will authorize after installation of the package.<br>Which item should an architect recommend to secure the integration in the package?",
  "type": "single",
  "options": {
    "A": "Use an encrypted field to store the password that the security team enters, and use password management for external orgs and set the encryption method to TLS 1.2.",
    "B": "Create a connected app in the central org and add the callback URI for each org in the package it is installed in to redirect after a successful authentication.",
    "C": "Contact Salesforce Support and create a case to temporarily enable API access for managed packages."
  },
  "answer": "B"
},
{
  "question": "Universal Containers (UC) uses Salesforce to track the following customer data:<br>1. Leads<br>2. Contacts<br>3. Accounts<br>4. Cases<br>Salesforce is considered to be the system of record for the customer. In addition to Salesforce, customer data exists in an Enterprise Resource Planning (ERP) system, ticketing system, and enterprise data lake. Each of these additional systems have their own unique identifier. UC plans on using middleware to integrate Salesforce with the external systems. UC has a requirement to update the proper external system with record changes in Salesforce and vice versa.<br>Which solution should an integration architect recommend to handle this requirement?",
  "type": "single",
  "options": {
    "A": "Use Change Data Capture to update downstream systems accordingly when a record changes.",
    "B": "Locally cache external IDs at the middleware layer and design business logic to map updates between systems.",
    "C": "Store unique identifiers in an External ID field in Salesforce and use this to update the proper records across systems."
  },
  "answer": "A"
},
{
  "question": "An architect decided to use Platform Events for integrating Salesforce with an external system for a company. What should an architect consider when proposing this type of integration mechanism?",
  "type": "single",
  "options": {
    "A": "External system needs to have the same uptime in order to be able to keep up with Salesforce Platform Events.",
    "B": "Salesforce needs to be able to store information about the external system in order to know which event to send out.",
    "C": "To subscribe to an event, the integration user in Salesforce needs Read access to the event entity."
  },
  "answer": "C"
},
{
  "question": "An enterprise customer is planning to implement Salesforce to support case management. {{images_integ/integ3.jpg}}Considering Salesforce capabilities, what should the integration architect evaluate when integrating Salesforce with the current system landscape?",
  "type": "single",
  "options": {
    "A": "Integrate Salesforce with Data Warehouse, Order Management and Email Management System.",
    "B": "Integrate Salesforce with Email Management System, Order Management System and Case Management System.",
    "C": "Integrate Salesforce with Order Management System, Data Warehouse and Case Management System."
  },
  "answer": "A"
},
{
  "question": "An integration architect has built a solution using REST API, updating Account, Contact, and other related information. The data volumes have increased, resulting in higher API calls consumed, and some days the limits are exceeded. A decision was made to decrease the number of API calls using bulk updates. The customer prefers to continue using REST API to avoid architecture changes. Which REST API composite resources should the integration architect use to allow up to 200 records in one API call?",
  "type": "single",
  "options": {
    "A": "Batch",
    "B": "SObject Tree",
    "C": "Composite"
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters has a registration system that is used for workshops offered at its conferences. Attendees use Salesforce Community to register for workshops, but the scheduling system manages workshop availability based on room capacity. It is expected that there will be a big surge of requests for workshop reservations when the conference schedule goes live. Which integration pattern should be used to manage the influx in registrations?",
  "type": "single",
  "options": {
    "A": "Remote Process Invocation Request and Reply",
    "B": "Batch Data Synchronization",
    "C": "Remote Process Invocation Fire and Forget"
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters is planning to perform nightly batch loads into Salesforce from an external system with a custom Java application using the Bulk API. The CIO is curious about monitoring recommendations for the jobs from the technical architect. Which recommendation should help meet the requirements?",
  "type": "single",
  "options": {
    "A": "Visually monitor in the Salesforce UI using the \"Bulk Data Load Jobs\" in Salesforce in the setup menu.",
    "B": "Set the Salesforce debug logs level to \"finest\", and add the user ID running the job to monitor in the \"Debug Logs\" in the setup menu.",
    "C": "Write the error response from the Bulk API status to a custom error logging object in Salesforce using an Apex trigger, and create reports on the object."
  },
  "answer": "A"
},
{
  "question": "A customer imports data from an external system into Salesforce using Bulk API. These jobs have batch sizes of 2,000 and are run in parallel mode. The batches fail frequently with the error \"Max CPU time exceeded\". A smaller batch size will fix this error. What should be considered when using a smaller batch size?",
  "type": "single",
  "options": {
    "A": "Smaller batch size may increase time required to execute bulk jobs.",
    "B": "Smaller batch size can trigger \"Too many concurrent batches\" error.",
    "C": "Smaller batch size may exceed the concurrent API request limits."
  },
  "answer": "A"
},
{
  "question": "A developer has been tasked by the integration architect to build a solution based on the Streaming API. The developer has done some research and has found there are different implementations of the events in Salesforce (PushTopic Events, Change Data Capture, Generic Streaming, Platform Events), but is unsure of how to proceed with the implementation and asks the system architect for some guidance. What should the architect consider when making the recommendation?",
  "type": "single",
  "options": {
    "A": "PushTopic Events can define a custom payload.",
    "B": "Change Data Capture can be published from Apex.",
    "C": "Change Data Capture does not have record access support."
  },
  "answer": "C"
},
{
  "question": "A company accepts payments requests 24/7. {{images_integ/integ2.jpg}}Once the company accepts a payment request, its service level agreement (SLA) requires it to make sure each payment request is processed by its Payment System. The company tracks payment requests using a globally unique identifier created at the Data Entry Point. The company encounters intermittent update errors when two or more processes try to update the same Payment Request record at the same time. Which recommendation should an integration architect make to improve the company's SLA and update conflict handling?",
  "type": "single",
  "options": {
    "A": "Middleware should coordinate request delivery and payment processing.",
    "B": "Data Entry Point and Middleware should automatically retry requests.",
    "C": "Payment System and Middleware should automatically retry requests."
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters (NTO) has recently changed its Corporate Security Guidelines. The guidelines require that all cloud applications pass through a secure firewall before accessing on-premise resources. NTO is evaluating middleware solutions to integrate cloud applications with on-premise resources and services. Which consideration should an integration architect evaluate before choosing a middleware solution?",
  "type": "single",
  "options": {
    "A": "The middleware solution enforces the OAuth security protocol.",
    "B": "The middleware solution is able to interface directly with databases via an Open Database Connectivity (ODBC) connection string.",
    "C": "The middleware solution is capable of establishing a secure API Gateway between cloud applications and on-premise resources."
  },
  "answer": "C"
},
{
  "question": "An integration developer is developing an HR synchronization app for a client. The app synchronizes Salesforce record data changes with an HR system that's external to Salesforce. What should the integration architect recommend to ensure notifications are stored for up to 3 days if data replication fails?",
  "type": "single",
  "options": {
    "A": "Outbound Message",
    "B": "Change Data Capture",
    "C": "Callouts"
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters submits orders to the manufacturing system web service. Recently, the system has experienced outages that keep service unavailable for several days. Which solution should an integration architect recommend to handle errors during these types of service outages?",
  "type": "single",
  "options": {
    "A": "Use middleware queuing and buffering to insulate Salesforce from system outages.",
    "B": "Use Outbound Messaging to automatically retry failed service calls.",
    "C": "Use Platform Event replayId and custom scheduled Apex process to retrieve missed events."
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters leverages Sales Cloud for tracking and managing leads, accounts, contacts, and opportunities. Orders and order fulfillment is taken care of by an Order Management System (OMS) in the back office. When an opportunity has changed its status to \"Closed/Won\" and there are products attached, the details should be passed to the OMS for fulfillment operations. The callout from Salesforce to the OMS should be synchronous. What should an integration architect do to satisfy these requirements?",
  "type": "single",
  "options": {
    "A": "Write a trigger that invokes an Apex proxy class to make a REST callout to the OMS.",
    "B": "Build a Lightning component that makes a synchronous Apex REST callout to the OMS when a button is clicked.",
    "C": "Develop a batch Apex job that aggregates closed opportunities and makes a REST callout to the OMS hourly."
  },
  "answer": "B"
},
{
  "question": "An enterprise customer with more than 10 million customers has the following systems and conditions in its landscape: 1. Enterprise Billing System (EBS) — All customers' monthly billing is generated by this system. 2. Enterprise Document Management System (DMS) — Bills mailed to customers are maintained in the Document Management system. 3. Salesforce CRM (CRM) — Customer information, sales, and support information is maintained in the CRM. Only authorized users are allowed access to the EBS and the Enterprise DMS. Customers call Customer Support when they need clarification on their bills. Customer Support needs seamless access to customer billing information from the EBS and to view generated bills from the DMS. Which authorization and authentication need should an integration consultant consider while integrating the DMS and EBS with Salesforce?",
  "type": "single",
  "options": {
    "A": "Consider Enterprise security needs for access to DMS and EBS.",
    "B": "Identify options to maintain DMS and EBS authentication and authorization details in Salesforce.",
    "C": "Consider options to migrate DMS and EBS into Salesforce."
  },
  "answer": "B"
},
{
  "question": "Universal Containers (UC) has embarked on a Salesforce transformation journey. UC will decommission its legacy CRM system and migrate data to Salesforce. The data migration team asked for a recommendation to optimize the performance of the data load to Salesforce. Which approach should be used to meet the requirement?",
  "type": "single",
  "options": {
    "A": "Use Bulk API to process jobs in serial mode.",
    "B": "Use Bulk API to process jobs in parallel mode.",
    "C": "Contact Salesforce Support to schedule performance load."
  },
  "answer": "B"
},
{
  "question": "A global financial company sells financial products and services that include: 1. Bank accounts 2. Loans 3. Insurance The company has a state-of-the-art core banking system that is the master system to store financial transactions, financial products, and customer information. The core banking system currently processes 1 million financial transactions per day. The CTO for the company is considering building a community portal so that customers can review their bank account details, update their information, and review their account financial transactions. What should an integration architect recommend as a solution to enable customer community users to view their financial transactions?",
  "type": "single",
  "options": {
    "A": "Migrate the financial transaction records to a Salesforce custom object and use an extract, transform, and load (ETL) tool to keep systems in sync.",
    "B": "Use Salesforce Connect to display the financial transactions as an external object.",
    "C": "Use Iframe to display core banking financial transactions data in the customer community."
  },
  "answer": "B"
},
{
  "question": "A business requires automating the check and updating of the phone number type classification (mobile vs. landline) for all incoming calls delivered to its phone sales agents. The following conditions exist: 1. At peak, the call center can receive up to 100,000 calls per day. 2. The phone number type classification is a service provided by an external service API. 3. Business is flexible with timing and frequency to check and update the records (throughout the night or every 6-12 hours is sufficient). A Remote-Call-In pattern and/or Batch Synchronization (Replication via ETL: System -> Salesforce) are determined to work with a middleware hosted on customer premise. In order to implement these patterns and mechanisms, which component should an integration architect recommend?",
  "type": "single",
  "options": {
    "A": "ConnectedApp configured in Salesforce to authenticate the middleware",
    "B": "An API Gateway that authenticates requests from Salesforce into the middleware (ETL/ESB)",
    "C": "Remote Site Settings configured in Salesforce to authenticate the middleware"
  },
  "answer": "A"
},
{
  "question": "The company wants to use the average response time of its application's user interface as a basis for certain alerts. {{images_integ/integ1.jpg}}For this purpose, the following occurs: 1. Log every call start and finish date and time to a central analytics data store. 2. Compute response time uniformly as the difference between the start and finish date and time (A to H in the diagram). Which computation represents the end-to-end response time from the user's perspective?",
  "type": "single",
  "options": {
    "A": "Sum of A to H",
    "B": "Sum of A to F",
    "C": "Sum of A and H"
  },
  "answer": "C"
},
{
  "question": "52 of 65. A company that is a leading provider of training delivers courses to students globally. The company decided to use Customer Community in order to allow students to log in to the community, register for courses, and pay course fees. The company has a payment gateway that takes more than 30 seconds to process the payment transaction. Students would like to get the payment result in real time so in case an error happens, the students can retry the payment process. What is the recommended integration approach to process payments based on this requirement?",
  "type": "single",
  "options": {
    "A": "Use Platform Events to process payment to the payment gateway.",
    "B": "Use Request and Reply to make an API call to the payment gateway.",
    "C": "Use Continuation to process payment to the payment gateway."
  },
  "answer": "C"
},
{
  "question": "53 of 65. A company that is a leading provider of courses and training delivers courses using third-party trainers. The trainer for the company has to be verified by 10 different training accreditation verification agencies before providing training for the company. Each training accreditation agency has its own response time, which means it could take days to confirm a trainer. The company decided to automate the trainer accreditation verification process by integrating it with the agency's web services. What is the recommended approach to automate this process?",
  "type": "single",
  "options": {
    "A": "Use middleware to handle the callout to the 10 different verification services; the middleware will handle the business logic of consolidating the verification result from the 10 services. Then, make a call-in to Salesforce and update the verification status to \"verified\".",
    "B": "Use Salesforce External Service to make the callout; Salesforce External Service should check the verification agencies until the result is verified. Then, update the trainer status to \"verified\".",
    "C": "Make an Apex callout using @future annotation to make the callout to all different agencies; the response should update the trainer status to \"verified\"."
  },
  "answer": "A"
},
{
  "question": "54 of 65. Universal Containers (UC) is planning to implement Salesforce as its CRM system. Currently, UC has the following systems: 1. Leads are managed in a Marketing system. 2. Sales people use Microsoft Outlook to enter contacts and emails, and manage activities. 3. Inventory, Billing, and Payments are managed in UC's Enterprise Resource Planning (ERP) system. The proposed CRM system is expected to provide sales and support people with a single view of their customers and the ability to manage their contacts, emails, and activities in the Salesforce CRM. What should an integration architect consider to support the proposed CRM system strategy?",
  "type": "single",
  "options": {
    "A": "Propose a middleware system that can support interface between systems with Salesforce.",
    "B": "Evaluate current and future data and system usage, and then identify potential integration requirements to Salesforce.",
    "C": "Explore out of the box Salesforce connectors for integration with ERP, Marketing, and Microsoft Outlook systems."
  },
  "answer": "B"
},
{
  "question": "55 of 65. Northern Trail Outfitters (NTO) wants to improve the quality of callouts from Salesforce to its REST APIs. For this purpose, NTO will require all API clients/consumers to adhere to REST API Markup Language (RAML) specifications that include the field-level definition of every API request and response payload. The RAML specs serve as interface contracts that Apex REST API Clients can rely on. Which design specification should the integration architect include in the integration architecture to ensure that Apex REST API Clients' unit tests confirm adherence to the RAML specs?",
  "type": "single",
  "options": {
    "A": "Require the Apex REST API Clients to implement the HttpCalloutMock.",
    "B": "Call the HttpCalloutMock implementation from the Apex REST API Clients.",
    "C": "Implement HttpCalloutMock to return responses per RAML specification."
  },
  "answer": "C"
},
{
  "question": "56 of 65. A company captures orders and needs to send them to the Order fulfillment system. The user is not required to have confirmation from the Order fulfillment system. Which system constraint question should be considered when designing an integration to send orders from Salesforce to a fulfillment system?",
  "type": "single",
  "options": {
    "A": "What latency is acceptable for orders to reach the fulfillment system?",
    "B": "Can the fulfillment system implement a contract-first Outbound Messaging interface?",
    "C": "Which system will validate order shipping addresses?"
  },
  "answer": "B"
},
{
  "question": "57 of 65. Universal Containers (UC) is a global financial company that sells financial products and services including bank accounts, loans, and insurance. UC uses Salesforce Service Cloud to service its customers via calls and live chat. Support agents open bank accounts on the spot for customers who inquire about UC bank accounts. UC's core banking system is the system of record for bank accounts, and all accounts opened in Salesforce have to be synced in real time to the core banking system. Support agents need to inform the customers with the newly created bank account ID, which has to be generated from the core banking system. Which integration pattern is recommended for this use case?",
  "type": "single",
  "options": {
    "A": "Streaming API to generate PushTopic",
    "B": "Salesforce platform event",
    "C": "Request and Reply"
  },
  "answer": "C"
},
{
  "question": "58 of 65. Northern Trail Outfitters needs to make synchronous callouts \"available-to-promise\" services to query product availability and reserve inventory during the customer checkout process. What should an integration architect consider when building a scalable integration solution?",
  "type": "single",
  "options": {
    "A": "How many concurrent service calls are being placed",
    "B": "The maximum query cursors open per user on the service",
    "C": "The number of batch jobs that can run concurrently"
  },
  "answer": "A"
},
{
  "question": "An eligibility check is triggered by the customer service agent in Salesforce Lightning UI. The eligibility system can take up to 15 seconds to process and return (there are discussions to reduce the response times in the future, but no commitments are made). These eligibility systems can be accessed through APIs orchestrated via ESB (MuleSoft). All requests from Salesforce will have to traverse through the customer's API Gateway layer, and the API Gateway imposes a constraint of timing out requests after 9 seconds. Which recommendation should the integration architect make?",
  "type": "single",
  "options": {
    "A": "Recommend synchronous Apex callouts from Lightning UI to External Systems via Mule and implement polling on an API Gateway timeout.",
    "B": "Use Continuation callouts to make the eligibility check request from Salesforce Lightning UI at page load.",
    "C": "Create a platform event in Salesforce via Remote Call In and use the empAPI in the Lightning UI to serve 3,000 concurrent users when responses are received by Mule."
  },
  "answer": "B"
},
{
  "question": "60 of 65. An integration architect has designed a mobile application for Salesforce users to get data while on the road using a custom user interface (UI). The application is secured with OAuth and is currently functioning well. There is a new requirement where the mobile application needs to obtain the GPS coordinates and store them on a custom geolocation field. The geolocation field is secured with field-level security, so users can view the value without changing it. What should be done to meet the requirement?",
  "type": "single",
  "options": {
    "A": "The mobile device makes a REST Apex inbound call.",
    "B": "The mobile device makes a REST API inbound call.",
    "C": "The mobile device receives a REST Apex callout call."
  },
  "answer": "A"
},
{
  "question": "61 of 65. The director of customer service at Northern Trail Outfitters wants to capture and trend specific business events that occur in Salesforce in real time. The metrics will be accessed in an ad-hoc manner using an external analytics system. The events are as follows: 1. A customer initiates a product exchange via a Case. 2. A customer service rep clicks on the \"Authorize Exchange Product\" menu item in the Case. 3. A customer initiates a subscription cancellation via a Case. 4. A customer service rep clicks on the \"Initiate Refund\" menu item in the Case. Which solution should meet these business requirements?",
  "type": "single",
  "options": {
    "A": "Case Trigger after Insert, after update to publish the platform event",
    "B": "Case Workflow Rule that sends an Outbound Message",
    "C": "Case after insert Trigger that executes a callout"
  },
  "answer": "A"
},
{
  "question": "62 of 65. A customer is evaluating the Platform Events solution and would like help in comparing/contrasting it with Outbound Messaging for real-time/near-real time needs. They expect 3,000 customer to view messages in Salesforce. What should be evaluated and highlighted when deciding between the solutions?",
  "type": "single",
  "options": {
    "A": "Message sequence is possible in Outbound Messaging, but not guaranteed with Platform Events. Both offer very high reliability. Fault handling and recovery are fully handled by Salesforce.",
    "B": "Both Platform Events and Outbound Messaging offer declarative means for asynchronous near-real time needs. They aren't best suited for real-time integrations.",
    "C": "In both Platform Events and Outbound Messaging, the event messages are retried by and delivered in sequence, and only once. Salesforce ensures there is no duplicate message delivery."
  },
  "answer": "B"
},
{
  "question": "63 of 65. Northern Trail Outfitters needs to send order and line items directly to an existing finance application webservice when an order is fulfilled. It is critical that each order reach the finance application exactly once for accurate invoicing. Which solution should an architect propose?",
  "type": "single",
  "options": {
    "A": "Button press invokes synchronous callout, with user handling retries in case of error",
    "B": "Trigger invokes Queueable Apex method, with custom error handling process",
    "C": "Trigger makes @future Apex method, with custom error handling process"
  },
  "answer": "B"
},
{
  "question": "64 of 65. Northern Trail Outfitters uses Salesforce to track leads and opportunities, and to capture order details. However, Salesforce isn't the system that holds or processes orders. After the order details are captured in Salesforce, an order must be created in the remote system, which manages the order's lifecycle. The integration architect for the project is recommending a remote system that will subscribe to the platform event defined in Salesforce. Which integration pattern should be used for this business use case?",
  "type": "single",
  "options": {
    "A": "Remote Call-In",
    "B": "Request and Reply",
    "C": "Fire and Forget"
  },
  "answer": "C"
},
{
  "question": "65 of 65. A customer's enterprise architect has identified requirements around caching, queuing, error handling, alerts, retries, event handling, etc. The company has asked the integration architect to help fulfill such aspects with its Salesforce program. Which recommendation should the integration architect make?",
  "type": "single",
  "options": {
    "A": "Transform a Fire and Forget mechanism to Request and Reply, which should be handled by middleware tools (like ETL/ESB) to improve performance.",
    "B": "Event handling in a publish/subscribe scenario; the middleware can be used to route requests or messages to active data-event subscribers from active data-event publishers.",
    "C": "Message transformation and protocol translation should be done within Salesforce. Recommend leveraging Salesforce native protocol conversion capabilities as middleware tools are NOT suited for such tasks."
  },
  "answer": "B"
},
















	
];
};
