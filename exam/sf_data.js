window.getQuestions = function() {
    return [











{
  "question": "Universal Containers (UC) has a Salesforce org with multiple automated processes defined for group membership processing. UC also has multiple admins on staff that perform manual adjustments to the role hierarchy. The automated tasks and manual tasks overlap daily, and UC is experiencing \"lock errors\" consistently. What should a data architect recommend to mitigate these errors?",
  "type": "single",
  "options": {
    "A": "Enable sharing recalculations.",
    "B": "Enable granular locking.",
    "C": "Remove SOQL statements from Apex Loops.",
    "D": "Ask Salesforce support for additional CPU power."
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters (NTO) has decided to franchise its brand. Upon Implementation 1,000 franchisees will be able to access NTO's product information and track large customer sales and opportunities through a portal. The franchisees will also be able to run monthly and quarterly sales reports and projections as well as view the reports in dashboards. Which license does NTO need to provide these features to the franchisees?",
  "type": "single",
  "options": {
    "A": "Lightning Platform License",
    "B": "Partner Community License",
    "C": "Salesforce Sales Cloud License",
    "D": "Customer Community License"
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters is concerned because some of its data is sensitive and needs to be identified for access. What should be used to provide ways to filter and identify the sensitive data?",
  "type": "single",
  "options": {
    "A": "Custom checkbox denoting sensitive data.",
    "B": "Implement field-level security.",
    "C": "Define data grouping metadata.",
    "D": "Define data classification metadata."
  },
  "answer": "D"
},
{
  "question": "Universal Containers is using Salesforce for Opportunity management and enterprise resource planning (ERP) for order management. Sales reps do not have access to the ERP and have no visibility into order status. What solution should a data architect recommend to give the sales team visibility into order status?",
  "type": "single",
  "options": {
    "A": "Build batch jobs to push order line items to Salesforce.",
    "B": "Build real-time integration to pull order line items into Salesforce when viewing orders.",
    "C": "Leverage Canvas to bring the order management Ul in to the Salesforce tab.",
    "D": "Leverage Salesforce Connect to bring the order line item from the legacy system to Salesforce."
  },
  "answer": "D"
},
{
  "question": "Based on government regulations, a Salesforce customer plans to implement the following in Salesforce for compliance: 1. Access to customer Information based on record ownership 2. Ability for customers to request removal of their information from Salesforce 3. Prevent users from accessing Salesforce from outside company network (Virtual private network, or VPN) What should a data architect recommend to address these requirements?",
  "type": "single",
  "options": {
    "A": "Contact Salesforce support to restrict access only with VPN and other requirements.",
    "B": "Implement IP restrictions, sharing settings, and custom Apex to support customer requests.",
    "C": "Allow users access to Salesforce through a custom web application hosted within VPN.",
    "D": "Implement Salesforce shield with Event Monitoring to address the requirement."
  },
  "answer": "B"
},
{
  "question": "A data architect is working with a large B2C retailer and needs to model the consumer account structure in Salesforce. What standard feature should be selected in this scenario?",
  "type": "single",
  "options": {
    "A": "Person Accounts",
    "B": "Individual Accounts",
    "C": "Contacts",
    "D": "Account Contact"
  },
  "answer": "A"
},
{
  "question": "A large telecommunication provider that provides Internet services to both residences and businesses has the following attributes: 1. A customer who purchases its services for their home will be created as an Account in Salesforce. 2. Individuals within the same house address will be created as Contact in Salesforce. 3. Businesses are created as Accounts in Salesforce. Some of the customers have both services at their home and business. What should a data architect recommend for a single view of these customers without creating multiple customer records?",
  "type": "single",
  "options": {
    "A": "Customers are created as Contacts and related to Business and Residential Accounts using the Account Contact Relationships.",
    "B": "Customers are created as Person Accounts and related to Business and Residential Accounts using the Account Contact relationship.",
    "C": "Customers are created as Individual objects and relate with Accounts for Business and Residence accounts.",
    "D": "Customers are created as Accounts for Residence Account and use Parent Account to relate Business Account."
  },
  "answer": "A"
},
{
  "question": "Universal Container has implemented Sales Cloud to manage patient and related health records. During a recent security audit of the system, It was discovered that some standard and custom fields need to encrypted. Which solution should a data architect recommend to encrypt existing fields?",
  "type": "single",
  "options": {
    "A": "Use Apex Crypto Class to encrypt custom and standard fields.",
    "B": "Implement classic encryption to encrypt custom and standard fields.",
    "C": "Implement shield platform encryption to encrypt custom and standard fields.",
    "D": "Export data out of Salesforce and encrypt custom and standard fields."
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) has 50 million customers and stores customer order history on an ERP system. UC also uses Salesforce to manage opportunities and customer support. In order to provide seamless customer support, UC would like to see the customers order history when viewing the customer record during a sales or support call. What should a data architect do in order to provide this functionality, while preserving the user experience?",
  "type": "single",
  "options": {
    "A": "Embed the ERP system in an iframe and display on a custom tab.",
    "B": "Use Salesforce Connect and an external object to display the order history in Salesforce.",
    "C": "Use an Apex callout to populate a text area field for displaying the order history.",
    "D": "Import the order history into a custom Salesforce object, update nightly."
  },
  "answer": "B"
},
{
  "question": "Universal Containers uses classic encryption for custom fields and is leveraging weekly data export for data backups. During a validation process, UC discovered that encrypted field values are still being exported as part of the data export. What should a data architect recommend to make sure decrypted values are exported during data export?",
  "type": "single",
  "options": {
    "A": "Set up a standard profile for the data migration user, and assign View Encrypted Data.",
    "B": "Leverage an Apex class to decrypt data before exporting it.",
    "C": "Create another field to copy data from the encrypted field, and use this field in export.",
    "D": "Set up a custom profile for the data migration user, and assign View Encrypted Data."
  },
  "answer": "D"
},
{
  "question": "A casino is implementing Salesforce and is planning to build a customer 360 degree view for a customer who visits its resorts. The casino currently maintains the following systems that record customer activity: 1. Point-of-sale system: All purchases for a customer 2. Salesforce: All customer service activity and sales activities for a customer 3. Mobile app: All bookings, preferences, and browser activity for a customer 4. Marketing: All email, SMS, and social campaigns for a customer Customer service agents using Salesforce would like to view the activities from all four systems to provide support to customers. The information has to be current and real time. What strategy should the data architect implement to satisfy this requirement?",
  "type": "single",
  "options": {
    "A": "Migrate customer activities from all four systems into Salesforce.",
    "B": "Explore external data sources in Salesforce to build a 360 degree view of the customer.",
    "C": "Periodically upload summary information in Salesforce to build a 360 degree view.",
    "D": "Use a customer data mart to create the 360 degree view of the customer."
  },
  "answer": "B"
},
{
  "question": "Universal Containers (UC) is in the process of implementing an enterprise data warehouse (EDW). UC needs to extract 100 million records from Salesforce for migration to the EDW. What data extraction strategy should a data architect use for maximum performance?",
  "type": "single",
  "options": {
    "A": "Utilize PK Chunking with the Bulk API.",
    "B": "Install a third-party AppExchange tool.",
    "C": "Use the Bulk API in parallel mode.",
    "D": "Call the REST API in successive queries."
  },
  "answer": "A"
},
{
  "question": "Universal Containers has been a customer of Salesforce for 10 years. Currently they have 2 million accounts in the system. Due to an erroneous integration built 3 years ago, It is estimated there are 500,000 duplicates in the system. Which solution should a data architect recommend to remediate the duplication issue?",
  "type": "single",
  "options": {
    "A": "Extract the data using data loader and use excel to merge the duplicate records",
    "B": "Utilize a data warehouse as the system of truth",
    "C": "Develop an ETL process that utilizes the merge API to merge the duplicate records",
    "D": "Implement duplicate rules"
  },
  "answer": "D"
},
{
  "question": "Universal Containers (UC) has migrated its back-office data into an on-premise database with REST API access. UC recently implemented Sales Cloud for its sales organization, but users are complaining about a lack of order data inside Salesforce. UC is concerned about Salesforce storage limits but would still like Sales Cloud to have access to the data. Which design pattern should a data architect select to satisfy the requirement?",
  "type": "single",
  "options": {
    "A": "Migrate and persist the data in Salesforce to take advantage of native functionality.",
    "B": "Build a UI for the on-premise system and frame it in Salesforce.",
    "C": "Use Salesforce Connect to virtualize the data in Salesforce and avoid storage limits.",
    "D": "Develop a bidirectional integration between the on-premise system and Salesforce."
  },
  "answer": "C"
},
{
  "question": "A customer needs a sales model that allows the following: 1. Opportunities need to be assigned to sales people based on the zip code. 2. Each salesperson can be assigned to multiple zip codes. 3. Each zip code is assigned to a sales area definition. Sales are aggregated by sales area for reporting. What should a data architect recommend?",
  "type": "single",
  "options": {
    "A": "Assign opportunities using list views using zip code.",
    "B": "Allow sales users to manually assign opportunity ownership based on zip code.",
    "C": "Configure the Territory Management feature to support opportunity assignment.",
    "D": "Add custom fields in opportunities for zip code and use assignment rules."
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) owns several Salesforce orgs across a variety of business units. UC management has declared that It needs the ability to report on Accounts and Opportunities from each org in one place. Once the data is brought together into a global view, management would like to use advanced Al-driven analytics on the dataset. Which tool should a data architect recommend to accomplish this reporting requirement?",
  "type": "single",
  "options": {
    "A": "Use Einstein Analytics for multi-org.",
    "B": "Install a third-party AppExchange tool for multi-org reporting.",
    "C": "Run standard reports and dashboards.",
    "D": "Write a Python script to aggregate and visualize the data."
  },
  "answer": "A"
},
{
  "question": "Universal Containers (UC) is planning a massive Salesforce implementation with large volumes of data. As part of the org's implementation, several roles, territories, groups, and sharing rules have been configured. The data architect has been tasked with loading all of the required data, including user data, in a timely manner. What should a data architect do to minimize data load times due to system calculations?",
  "type": "single",
  "options": {
    "A": "Enable defer sharing calculations and suspend sharing rule calculations.",
    "B": "Leverage the Bulk API and concurrent processes with multiple batches.",
    "C": "Load the data through Data Loader and turn on parallel processing.",
    "D": "Enable granular locking to avoid the 'UNABLE_TO_LOCK_ROW' error."
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters would like to retrieve their Salesforce org's metadata programmatically for backup within a version control system. Which API is the best fit for accomplishing this task?",
  "type": "single",
  "options": {
    "A": "Bulk API in serial mode",
    "B": "Metadata API",
    "C": "SOAP API",
    "D": "Tooling API"
  },
  "answer": "B"
},
{
  "question": "Universal Containers (UC) has built a custom application on Salesforce to help track shipments around the world. A majority of the shipping records are stored on-premise in an external data source. UC needs shipment details to be exposed to the custom application, and the data needs to be accessible in real time. The external data source is not OData enabled, and UC does not own a middleware tool. Which Salesforce Connect procedure should a data architect use to ensure UC's requirements are met?",
  "type": "single",
  "options": {
    "A": "Write a custom adapter with the Apex Connector Framework.",
    "B": "Migrate the data to Heroku and register Postgres as a data source.",
    "C": "Write an Apex class that makes a REST callout to the external API.",
    "D": "Develop a process that calls an invocable web service method."
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters (NTO) has multiple systems across its enterprise landscape, including Salesforce, with disparate versions of the customer record. In Salesforce, the customer is represented by the Contact object. NTO utilizes a master data management (MDM) solution with these attributes: 1. The MDM solution keeps track of the Customer Master with a Master Key. 2. The Master Key is a map to the record IDs from each external system that customer data is stored within. 3. The MDM solution provides deduplication features, so it acts as the Single Source of Truth. How should a Data Architect implement the storage of the Master Key within Salesforce?",
  "type": "single",
  "options": {
    "A": "Store the Master Key in Heroku Postgres and use Heroku Connect for synchronization.",
    "B": "Create an external object to store the Master Key with a lookup field to Contact.",
    "C": "Store the Master Key on the Contact object as an External ID field for referential integrity.",
    "D": "Create a custom object to store the Master Key with a lookup field to Contact."
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) has a very large and complex Salesforce org with hundreds of validation rules and triggers. The triggers are responsible for system updates and data manipulation as records are created or updated by users. A majority of the automation tools within UC's org were not designed to run during a data load. UC is importing 100,000 records into Salesforce across several objects over the weekend. What should a data architect do to mitigate any unwanted results during the import?",
  "type": "single",
  "options": {
    "A": "Ensure validation rules, triggers, and other automation tools are disabled.",
    "B": "Ensure duplication and matching rules are defined.",
    "C": "Bulkify the triggers to handle import loads.",
    "D": "Import the data in smaller batches over a 24-hour period."
  },
  "answer": "A"
},
{
  "question": "Universal Containers (UC) has lead assignment rules to assign leads to owners. Leads not routed by assignment rules are assigned to a dummy user. Sales rep are complaining of high load times and issues with accessing leads assigned to the dummy user. What should a data architect recommend to solve these performance issues?",
  "type": "single",
  "options": {
    "A": "Assign dummy user last role in hierarchy.",
    "B": "Periodically delete leads to reduce number of leads.",
    "C": "Create multiple dummy user and assign leads to them.",
    "D": "Assign dummy user to highest role in role hierarchy."
  },
  "answer": "D"
},
{
  "question": "A large automobile manufacturer has decided to use Salesforce as its CRM. It needs to maintain the following dealer types in their CRM: 1. Local dealers 2. Regional distributor 3. State distributor 4. Service dealer The attributes are different for each of the customer types. The CRM users should be allowed to enter only attributes related to the customer types. The processes and business rules for each of the customer types could be different. How should the different dealers be maintained in Salesforce?",
  "type": "single",
  "options": {
    "A": "Use Accounts for dealers, and create record types for each of the dealer types.",
    "B": "Create dealers as Accounts, and build custom views for each of the dealer types.",
    "C": "Create Custom objects for each dealer types and custom fields for dealer attributes.",
    "D": "Use Accounts for dealers and custom picklist field for each of the dealer types."
  },
  "answer": "A"
},
{
  "question": "Universal Containers (UC) plans to implement consent management for its customers to be compliant with General Data Protection Regulation (GDPR). UC has the following requirements: 1. UC uses Person Accounts and Contacts in Salesforce for its customers. 2. Data Protection and Privacy is enabled in Salesforce. 3. Consent should be maintained in both these objects. 4. UC plans to verify the consent provided by customers before contacting them through email or phone. Which option should the data architect recommend to implement these requirements?",
  "type": "single",
  "options": {
    "A": "Configure custom fields in Person Account and Contact to store consent provided by customers, and validate consent against the fields.",
    "B": "Build Custom Object to store consent information in Person Account and Contact; validate against this object before contacting customers.",
    "C": "Delete contact information from customers who have declined consent to be contacted.",
    "D": "Use the Consent Management feature to validate consent provided under the Person Account and Contact that is provided by the customer."
  },
  "answer": "D"
},
{
  "question": "Universal Containers (UC) needs to run monthly and yearly reports on opportunities and orders for sales reporting. There are 5 million opportunities and 10 million orders. Sales users are complaining that the report will regularly timeout. What is the fastest and most effective way for a data architect to solve the time-out issue?",
  "type": "single",
  "options": {
    "A": "Extract opportunity and order data from Salesforce, and use a third-party reporting tool to run reports outside of Salesforce.",
    "B": "Utilize CRM Analytics to run analytical reporting for the large data objects.",
    "C": "Create custom fields on opportunity, and copy data from order into those custom fields and run all reports on Opportunity object.",
    "D": "Create a skinny table in Salesforce, and copy order and opportunity fields into the skinny table and create the required reports on it."
  },
  "answer": "B"
},
{
  "question": "Universal Containers is experiencing frequent and persistent group membership locking issues that severely restricts its ability to manage manual and automated updates at the same time. What should a data architect do in order to resolve the issue?",
  "type": "single",
  "options": {
    "A": "Enable implicit sharing.",
    "B": "Enable parallel sharing rule calculation.",
    "C": "Enable defer sharing calculation.",
    "D": "Enable granular locking."
  },
  "answer": "D"
},
{
  "question": "Northern Trail Outfitters (NTO) wants to implement backup and restore for Salesforce data. Currently, it has data backup processes that runs weekly, which backs up all Salesforce data to an enterprise data warehouse (EDW). NTO wants to move to daily backups and provide restore capability to avoid any data loss in case of outage. What should a data architect recommend for a daily backup and restore solution?",
  "type": "single",
  "options": {
    "A": "Change weekly backup process to daily backup, and implement a custom restore solution.",
    "B": "Use AppExchange package for backup and restore.",
    "C": "Use ETL tool for backup and restore from EDW.",
    "D": "Use Bulk API to extract data on daily basis to EDW and REST API for restore."
  },
  "answer": "B"
},
{
  "question": " UniversalContainers (UC) recently migrated 1 billion customer related records from a legacy datastore to Heroku Postgres. A subset of the data needs to be synchronized with Salesforce so that service agents are able to support customers directly within the service console. The remaining non-synchronized set of data will need to be accessed by Salesforce at any point in time, but UC management is concerned about storage limitations. What should a data architect recommend to meet these requirements with minimal effort?",
  "type": "single",
  "options": {
    "A": "Virtualize the remaining set of data with Salesforce Connect and external objects.",
    "B": "Use Heroku Connect to bidirectionally sync all data between systems.",
    "C": "As needed, make callouts into Heroku Postgres and persist the data in Salesforce.",
    "D": "Migrate the data to big objects and leverage Async SOQL with custom objects."
  },
  "answer": "A"
},
{
  "question": "Universal Containers requires all customers to provide either a phone number or an email address when registering for an account. What should the data architect use to ensure this requirement is met?",
  "type": "single",
  "options": {
    "A": "Apex Class",
    "B": "Process Builder",
    "C": "Validation Rule",
    "D": "Required Fields"
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) would like to build a Human Resources application on Salesforce to manage employee details, payroll, and hiring efforts. To adequately maintain and store the relevant data, the application will need to leverage 45 custom objects. In addition to this, UC expects roughly 20,000 API calls into Salesforce from an on-premise application daily. Which license type should a data architect recommend that best fits these requirements?",
  "type": "single",
  "options": {
    "A": "Lightning Platform Plus",
    "B": "Service Cloud",
    "C": "Lightning External Apps Starter",
    "D": "Lightning Platform Starter"
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce. Which solution should the data architect use to reduce the amount of returned mail?",
  "type": "single",
  "options": {
    "A": "Use a third-party data source to update the contact information in Salesforce.",
    "B": "Delete contacts when the mail is returned to save postal costs for NTO.",
    "C": "Have the sales team call all existing customers and ask to verify the contact details.",
    "D": "Email all customers and ask them to verify their information and to call NTO if their address is incorrect."
  },
  "answer": "A"
},
{
  "question": "11 of 65.  Universal ontalners (C) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales loud with the following requirements: Legacy inventory data will be stored in a custom child object called Inventory_c. Inventory data should be related to the standard Account object. The Inventory_c object should inherit the same sharing rules as the Account object. Anytime an Account record is deleted in Salesforce, the related Inventory_c record(s) should be deleted as well. What type of relationship field should a data architect recommend in this scenario?",
  "type": "single",
  "options": {
    "A": "Lookup relationship field on Inventory_c, related to Account.",
    "B": "Master-detail relationship field on Account, related to Inventory_c.",
    "C": "Indirect lookup relationship field on Account, related to Inventory_c.",
    "D": "Master-detail relationship field on Inventory_c, related to Account."
  },
  "answer": "D"
},
{
  "question": "10 of 65. To address different compliance requirements such as General Data Protection Regulation (GDPR), personally identifiable information (PII), Health Insurance Portability and Accountability Act (HIPAA) and others, a Salesforce customer decided to categorize each data element in Salesforce with the following: 1. Data owner 2. Security level (i.e. confidential) 3. Compliance type (i.e. GDPR, PII, HIPAA) A compliance audit would require Salesforce admins to generate reports to manage compliance. What should a data architect recommend to address this requirement?",
  "type": "single",
  "options": {
    "A": "Use field metadata attributes for compliance categorization, data owner, and data sensitivity level.",
    "B": "Build reports for field information, then export the information to classify and report for audits.",
    "C": "Create a custom object and field to capture necessary compliance information and build custom reports.",
    "D": "Use the Metadata API to extract field attribute information and use the extract to classify and build reports."
  },
  "answer": "A"
},
{
  "question": "9 of 65. Universal Containers (UC) needs to move millions of records from an external enterprise resource planning (ERP) system into Salesforce. What should a data architect recommend to be done while using the Bulk API in serial mode instead of parallel mode?",
  "type": "single",
  "options": {
    "A": "Leveraging a controlled feed load with 10 batches per job.",
    "B": "Inserting 1 million orders distributed across a variety of accounts with potential lock exceptions.",
    "C": "Inserting 1 million orders distributed across a variety of accounts with lock exceptions eliminated and managed.",
    "D": "Placing 20 batches on the queue for upsert jobs."
  },
  "answer": "B"
},
{
  "question": "8 of 65. A customer wants to maintain geographic location information including latitude and longitude in a custom object. What should a data architect recommend to satisfy this requirement?",
  "type": "single",
  "options": {
    "A": "Create formula fields with geolocation functions for this requirement.",
    "B": "Create a geolocation custom field to maintain this requirement.",
    "C": "Create custom fields to maintain latitude and longitude information.",
    "D": "Recommend AppExchange packages to support this requirement."
  },
  "answer": "B"
},
{
  "question": "7 of 65. A large retail B2C customer wants to build a 360-degree view of its customers for its call center agents. The customer information is currently maintained in the following systems: 1. Salesforce CRM 2. Custom billing solution 3. Customer master data management (MDM) 4. Contract management system 5. Marketing solution What should a data architect recommend that would help uniquely identify the customer across multiple systems?",
  "type": "single",
  "options": {
    "A": "Store the Salesforce ID in all the solutions to identify the customer.",
    "B": "Create a custom object that will serve as a cross-reference for the customer ID.",
    "C": "Create a customer database, and use this ID in all systems.",
    "D": "Create a custom field as external ID to maintain the customer ID from the MDM solution."
  },
  "answer": "D"
},
{
  "question": "1 of 65. Universal Containers (UC) manages Vehicle and Service History in Salesforce. Vehicle (Vehicle__c) and Service History (Service_History__c) are both custom objects related through a lookup relationship. Every week a batch synchronization process updates the Vehicle and Service History records in Salesforce. UC has two hours of migration window every week and is facing locking issues as part of the data migration process. What should a data architect recommend to avoid locking issues without affecting performance of data migration?",
  "type": "single",
  "options": {
    "A": "Use Bulk API parallel mode for data migration.",
    "B": "Change the lookup configuration to \"Clear the value of this field\" when lookup record is deleted.",
    "C": "Use Bulk API serial mode for data migration.",
    "D": "Insert the order in another custom object and use Batch Apex to move the records to Service_Order__c object."
  },
  "answer": "C"
},
{
  "question": "United Containers (UC) has released a new disaster recovery (DR) policy that states that cloud solutions need a business continuity plan in place separate from the cloud provider's built-in data recovery solution.  Which solution should a data architect use to comply with the DR policy?",
  "type": "single",
  "options": {
    "A": "Leverage a third-party tool that extracts Salesforce data/metadata, and stores the information in an external protected system.",
    "B": "Write a custom batch job to extract data changes nightly, and store on an external protected system.",
    "C": "Leverage Salesforce weekly exports, and store data in flat files on a protected system.",
    "D": "Utilize an ETL tool to migrate data to an on-premise archival solution."
  },
  "answer": "A"
},
{
  "question": "What should a data architect recommend for maintaining Sales Orders in Salesforce?",
  "type": "single",
  "options": {
    "A": "Use custom big objects to maintain Sales Orders in Salesforce.",
    "B": "Use custom objects to maintain Sales Orders in Salesforce.",
    "C": "Use external objects to maintain Sales Orders in Salesforce."
  },
  "answer": "C"
},
{
  "question": "What should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
  "type": "single",
  "options": {
    "A": "Create a custom object to maintain the pricing criteria.",
    "B": "Configure the pricing criteria in price books.",
    "C": "Assign the pricing criteria within custom pricing engine.",
    "D": "Maintain required pricing criteria in custom metadata types."
  },
  "answer": "D"
},
{
  "question": "Universal Containers is establishing a call center that will use Salesforce. UC receives 10 million calls and creates 100 million cases every month. Cases are linked to a custom call object using lookup relationship. UC would like to run reports and dashboard to better understand different case types being created on calls to better serve customers. What solution should a data architect recommend to meet the business requirement?",
  "type": "single",
  "options": {
    "A": "Leverage out-of-the-box reports and dashboard on case and interactive voice response (IVR) custom object.",
    "B": "Leverage big objects to archive records and Einstein Analytics to run reports.",
    "C": "Archive records to a data warehouse and run analytics on the data warehouse.",
    "D": "Leverage custom objects to store aggregate data and run analytics."
  },
  "answer": "B"
},
{
  "question": "What should a data architect recommend in order to get around the time-out issue?",
  "type": "single",
  "options": {
    "A": "Use a PK Chunking within the Bulk API.",
    "B": "Use the Rest API to extract data as it automatically chunks records by 200.",
    "C": "Ask Salesforce support to increase the query timeout value.",
    "D": "Use extract, transform, load (ETL) tool for extraction of records."
  },
  "answer": "A"
},
{
  "question": "Universal Containers (UC) has implemented a master data management strategy, which uses a central system of truth, to ensure the entire company has the same customer information in all systems. UC customer data changes need to be accurate at all times in all of the systems. Salesforce is the identified system of record for this information. What is the correct solution for ensuring all systems using customer data are kept up to date?",
  "type": "single",
  "options": {
    "A": "Have each system pull the record changes from Salesforce using change data capture.",
    "B": "Send customer record changes from Salesforce to each system in a nightly batch job.",
    "C": "Send customer record changes from Salesforce to the system of truth in real time.",
    "D": "Send customer data nightly to the system of truth in a scheduled batch job."
  },
  "answer": "C"
},
{
  "question": "What solution should a data architect recommend?",
  "type": "single",
  "options": {
    "A": "Load customer data in all systems.",
    "B": "Make Salesforce the system of record for all data.",
    "C": "Implement a master data management (MDM) strategy for customer data.",
    "D": "Let each system be an owner of data it generates."
  },
  "answer": "C"
},
{
  "question": "2 of 65. Universal Containers (UC) is migrating data from legacy system to Salesforce. During data analysis it was discovered that data types of fields being migrated do not match with Salesforce data types. Which solution should a data architect use to ensure successful data migrations?",
  "type": "single",
  "options": {
    "A": "Migrate the legacy data leveraging an ETL tool to transform data types and load data into Salesforce.",
    "B": "Export legacy data into the staging database and leverage stored procedures to transform data types before loading into Salesforce.",
    "C": "Migrate legacy data to a staging database for mapping then leverage an ETL tool to transform the data and load into Salesforce.",
    "D": "Export legacy data into CSV files and leverage data loader to load data into Salesforce."
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters (NTO) uses Sales Cloud and Service Cloud to manage their sales and support processes. Some of NTOs teams are complaining they see new fields on their page and are unsure of which values need be Input. NTO is concerned about lack of governance in making changes to Salesforce. Which governance measure should a data architect recommend to solve this issue?",
  "type": "single",
  "options": {
    "A": "Add description fields to explain why the field is used, and mark the fields as Required.",
    "B": "Create reports to identify which fields users are leaving blank, and use external data sources to augment the missing data.",
    "C": "Create validation rules with error messages to explain why the field is used.",
    "D": "Create and manage a data dictionary, and use a governance process for changes made to common objects."
  },
  "answer": "D"
},
{
  "question": "Which data relationship should the data architect use to support this requirement when creating the custom VTOTime__c object?",
  "type": "single",
  "options": {
    "A": "Lookup field on VTOTime__c to Project__c with formula filed on Project__c showing Sum of hours from VTOTime__c records.",
    "B": "Master Detail field on Project__c to VTOTime__c showing a list of VTOTime__c Records in a related list.",
    "C": "Master Detail field on VTOTime__c to Project__c with rollup summary field on Project__c showing sum of hours from VTOTime__c records.",
    "D": "Lookup field on Project__c to VTOTime__c displaying a list of VTOTime__c in a related list."
  },
  "answer": "C"
},
{
  "question": "What should the data architect do for a successful migration to mitigate the pain point?",
  "type": "single",
  "options": {
    "A": "Hire an intern manually de-duplicate the records after migrating to Salesforce.",
    "B": "Migrate the data as is, and use Salesforce's de-duplicating feature.",
    "C": "Store the data in a staging database, and de-duplicate identical records.",
    "D": "Have the users manually clean the data in the old system prior to migration."
  },
  "answer": "C"
},
{
  "question": "Which object model should a data architect configure within Salesforce?",
  "type": "single",
  "options": {
    "A": "Leverage the person account object in Salesforce.",
    "B": "Leverage the standard account and contact object in Salesforce.",
    "C": "Leverage a custom account and contact object in Salesforce.",
    "D": "Leverage a custom person account object in Salesforce."
  },
  "answer": "A"
},
{
  "question": "6 of 65. Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data. Which solution should a data architect recommend to resolve the complaints?",
  "type": "single",
  "options": {
    "A": "Do a bulk delete of all account records in Salesforce and a complete reload from the ERP.",
    "B": "Build a nightly batch job to de-dupe data, and merge account records.",
    "C": "Build a nightly sync job from ERP to Salesforce.",
    "D": "Implement a de-dupe solution and establish account ownership in Salesforce."
  },
  "answer": "D"
},
{
  "question": "What should a data architect use to provide the sales team with the required functionality?",
  "type": "single",
  "options": {
    "A": "Write an Apex callout and populate a related list to display on the account record.",
    "B": "Create a mashup page that will present the billing system records within Salesforce.",
    "C": "Create a visual force tab with the billing system encapsulated within an Iframe.",
    "D": "Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout."
  },
  "answer": "B"
},
{
  "question": "What should a data architect do to fulfill these requirements with minimum development effort in Salesforce?",
  "type": "single",
  "options": {
    "A": "Build customer view in Service Console with components that show website data and marketing data as mashup.",
    "B": "Build custom components in Service Console to bring information from the marketing and website information.",
    "C": "Create web tabs in Service Console to show website and marketing activities.",
    "D": "Use Salesforce Connect to integrate the website and the marketing system into Salesforce."
  },
  "answer": "A"
},
{
  "question": "Which MDM data element is needed to allow reporting across these systems?",
  "type": "single",
  "options": {
    "A": "Full name",
    "B": "Globally Unique Identifier",
    "C": "Phone number",
    "D": "Email address"
  },
  "answer": "B"
},
{
  "question": "Which strategy should a data architect recommend to configure customer type?",
  "type": "single",
  "options": {
    "A": "Lookup to a custom object with defined choices.",
    "B": "Single-select restricted picklist with defined choices.",
    "C": "Provide help text to guide users with defined choices.",
    "D": "Create a validation rule to limit entry to defined choices."
  },
  "answer": "B"
},
{
  "question": "Which license type should a data architect recommend for the finance team that best meets the requirements?",
  "type": "single",
  "options": {
    "A": "Service Cloud",
    "B": "Lightning Platform Starter",
    "C": "Lightning Platform Plus",
    "D": "Sales Cloud"
  },
  "answer": "B"
},
{
  "question": "49 of 65. Universal Containers (UC) has implemented Salesforce. UC is running out of storage and needs to have an archiving solution. UC would like to maintain two years of data in Salesforce and archive older data out of Salesforce. Which solution should a data architect recommend as an archiving solution?",
  "type": "single",
  "options": {
    "A": "Build a batch job to move two-year-old records off platform, and delete old records from Salesforce.",
    "B": "Use a third-party backup solution to back up all data off platform.",
    "C": "Build a batch job to move all records off platform, and delete all records from Salesforce.",
    "D": "Build a batch job to move all records off platform, and delete old records from Salesforce."
  },
  "answer": "A"
},
{
  "question": "50 of 65. Universal Containers (UC) needs to aggregate monthly and yearly metrics using standard reports. UC's monthly and yearly details are stored in custom objects with four million monthly records and nine million yearly records. The reports are aggregating millions of records across the two objects and taking long time to return results. What solution should a data architect recommend to improve report performance?",
  "type": "single",
  "options": {
    "A": "Leverage big object to store data and run reports on it.",
    "B": "Move data out of Salesforce and run reporting on it.",
    "C": "Create an aggregation custom object that summarized the monthly and yearly values.",
    "D": "Delete old data from Salesforce and run reports on it."
  },
  "answer": "C"
},
{
  "question": "51 of 65. Universal Containers is preparing to implement Sales Cloud and would like its users to have Read Only access to an Account record if they have access to its child Opportunity record. How would a data architect implement this sharing requirement between objects?",
  "type": "single",
  "options": {
    "A": "Add appropriate users to the Account team.",
    "B": "Create a criteria-based sharing rule.",
    "C": "Create an owner-based sharing rule.",
    "D": "Implicit sharing will automatically handle this with standard functionality."
  },
  "answer": "D"
},
{
  "question": "52 of 65. Northern Trail Outfitters (NTO) wants to capture a list of customers that have bought a particular product. The solution architect has recommended to create a custom object for product, and to create a lookup relationship between its customers and its products. Products will be modeled as a custom object (NTO_Product__c) and customers are modeled as person accounts. Every NTO product may have millions of customers looking up a single product, resulting in a lookup skew. What should a data architect suggest to mitigate issues related to lookup skew?",
  "type": "single",
  "options": {
    "A": "Change the lookup relationship to master-detail relationship.",
    "B": "Create multiple similar products and distribute the skew across those products.",
    "C": "Create a custom object to maintain the relationship between products and customers.",
    "D": "Select Clear the value of this field option while configuring the lookup relationship."
  },
  "answer": "B"
},
{
  "question": "1 of 65. Northern Trail Outfitters (NTO) has an external product master system that syncs product and pricing information with Salesforce. Users have been complaining that they are seeing discrepancies in product and pricing information displayed on the NTO website and Salesforce. As a data architect, which action is recommended to avoid data sync issues?",
  "type": "single",
  "options": {
    "A": "Use the Customer 360 data manager to sync product and pricing information from product master database to Salesforce.",
    "B": "Build a custom Integration for two-way sync of product and pricing information between product master to Salesforce.",
    "C": "Implement a manual process to update the products from an extract from the products master on a weekly basis.",
    "D": "Build a custom Integration for one way sync of product and pricing information from product master to Salesforce."
  },
  "answer": "A"
},
{
  "question": "2 of 65. Universal Containers has multiple systems all containing and maintaining customer data. Although point-to-point integrations are in place, customers are complaining about consistency in the data. What solution should the data architect recommend?",
  "type": "single",
  "options": {
    "A": "Improve existing point-to-point integrations",
    "B": "An MDM solution as the customer master, with centralized integrations to ensure consistency across all systems.",
    "C": "Perform a one time synchronization to level set the built up inconsistencies",
    "D": "Data cleanse each system"
  },
  "answer": "B"
},
{
  "question": "3 of 65. Universal Containers (UC) has a requirement to migrate 100 million order records from a legacy enterprise resource planning (ERP) application into the Salesforce platform. UC does not have any requirements around reporting on the migrated data. What should a data architect recommend to reduce performance degradation of the platform?",
  "type": "single",
  "options": {
    "A": "Create a custom object to store the data.",
    "B": "Use a standard big object defined by Salesforce",
    "C": "Implement a custom big object to store the data.",
    "D": "Use the standard \"Order\" object to store the data."
  },
  "answer": "C"
},
{
  "question": "4 of 65. Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis. Which solution should a data architect recommend to meet business requirement?",
  "type": "single",
  "options": {
    "A": "Build a swivel chair solution to go into the legacy system and display records.",
    "B": "Bring all data in Salesforce, and delete it after a year.",
    "C": "Leverage mashup to display historical records in Salesforce.",
    "D": "Leverage real-time integration to pull records into Salesforce."
  },
  "answer": "C"
},
{
  "question": "5 of 65. Universal Containers (UC) is implementing Salesforce and will be using Salesforce to track customer complaints, provide white papers on products, and provide subscription based support. Which license type will UC users need to fulfill UC's requirements?",
  "type": "single",
  "options": {
    "A": "Sales Cloud License",
    "B": "Service Cloud License",
    "C": "Lightning Platform Starter License",
    "D": "Salesforce License"
  },
  "answer": "B"
},
{
  "question": "6 of 65. As part of addressing General Data Protection Regulation (GDPR) requirements, Universal Containers (UC) plans to implement a data classification policy for all of its internal systems that store customer information including Salesforce. What should a data architect recommend so that UC can easily classify customer information maintained in Salesforce under both standard and custom objects?",
  "type": "single",
  "options": {
    "A": "Create a custom picklist field to capture classification of information on the Contact object.",
    "B": "Use Data Classification metadata fields available in Field definition.",
    "C": "Use an AppExchange product to classify fields based on policy.",
    "D": "Build reports that contain customer data and classify manually."
  },
  "answer": "B"
},
{
  "question": "7 of 65. Northern Trail Outfitters (NTO) is streaming IoT data from connected devices to a cloud database. Every 24 hours, 100,000 records are generated. NTO employees will need to see these IoT records within Salesforce and generate weekly reports on it. Developers may also need to write programmatic logic to aggregate the records and incorporate them into workflows. Which data pattern will allow a data architect to satisfy these requirements, while also keeping limits in mind?",
  "type": "single",
  "options": {
    "A": "Virtualization",
    "B": "Bidirectional Integration",
    "C": "Persistence",
    "D": "Unidirectional Integration"
  },
  "answer": "A"
},
{
  "question": "8 of 65. Northern Trail Outfitters (NTO) has multiple Salesforce orgs based on regions. Users need read-only access to customers across all Salesforce orgs. Which feature in Salesforce can be used to provide access to customer records across all NTO orgs?",
  "type": "single",
  "options": {
    "A": "Federated Search",
    "B": "Salesforce Connect",
    "C": "Salesforce 2 Salesforce",
    "D": "External APIs"
  },
  "answer": "C"
},
{
  "question": "9 of 65. Which API should a data architect use if exporting 1 million records from Salesforce?",
  "type": "single",
  "options": {
    "A": "Bulk API",
    "B": "Streaming API",
    "C": "SOAP API",
    "D": "REST API"
  },
  "answer": "A"
},
{
  "question": "10 of 65. A large automobile company has implemented Salesforce for its sales associates. Leads flow from its website to Salesforce using a batch integration in Salesforce. The batch job converts the leads to Accounts in Salesforce. Customers visiting their retail stores are also created in Salesforce as Accounts. The company has noticed a large number of duplicate Accounts in Salesforce. On analysis, it was found that certain customers could interact with its website and also visit the store. The sales associates use Global Search to search for customers in Salesforce before they create the customers. Which option should a data architect choose to implement to avoid duplicates?",
  "type": "single",
  "options": {
    "A": "Implement an MDM solution to validate the customer information before creating Accounts in Salesforce.",
    "B": "Develop an Apex class that searches for duplicates and removes them nightly.",
    "C": "Build a custom search functionality that allows sales associates to search for customer in real time upon visiting their retail stores.",
    "D": "Leverage duplicate rules in Salesforce to validate duplicates during the account creation process."
  },
  "answer": "D"
},
{
  "question": "11 of 65. What should a data architect do to provide additional guidance for users when they enter information in a Standard field?",
  "type": "single",
  "options": {
    "A": "Provide custom help text under field properties.",
    "B": "Create a custom page with help text for user guidance.",
    "C": "Add custom help text in default value for the field.",
    "D": "Add a label field with help text adjacent to the custom field."
  },
  "answer": "A"
},
{
  "question": "12 of 65. Northern Trail Outfitters needs to implement an archive solution for Salesforce data. This archive solution needs to help NTO do the following: 1. Remove outdated information not required on a day-to-day basis. 2. Improve Salesforce performance. Which solution should be used to meet these requirements?",
  "type": "single",
  "options": {
    "A": "Create a full copy sandbox, and use it as a source for retaining archived data.",
    "B": "Identify a location to store archived data and use scheduled batch jobs to migrate and purge the aged data on a nightly basis.",
    "C": "Use a formula field that shows true when a record reaches a defined age and use that field to run a report and export a report into SharePoint.",
    "D": "Identify a location to store archived data, and move data to the location using a time-based workflow."
  },
  "answer": "B"
},
{
  "question": "13 of 65. Universal Containers is implementing Sales Cloud for patient management and would like to encrypt sensitive patient records being stored in files. Which solution should a data architect recommend to solve this requirement?",
  "type": "single",
  "options": {
    "A": "Implement a third-party AppExchange app to encrypt files.",
    "B": "Implement Shield Platform Encryption to encrypt files.",
    "C": "Store files outside of Salesforce and access them in real time.",
    "D": "Use classic encryption to encrypt files."
  },
  "answer": "B"
},
{
  "question": "14 of 65. The data architect for Universal Containers has written a SOQL query that will return all records from the Task object that do not have a value in the whatID field: SELECT ID, Description, Subject FROM Task WHERE WhatId != NULL When the data architect uses the query to select values for a process, a time-out error occurs. What does the data architect need to change to make this query more performant?",
  "type": "single",
  "options": {
    "A": "Remove description from the requested field set.",
    "B": "Change query to SOSL.",
    "C": "Add LIMIT 100 to the query.",
    "D": "Change the WHERE clause to filter by a deterministic defined value."
  },
  "answer": "D"
},
{
  "question": "15 of 65. Northern Trail Outfitters (NTO) operates a majority of its business from a central Salesforce org. NTO also owns several secondary orgs that the service, finance, and marketing teams work out of. At the moment, there is no integration between central and secondary orgs, leading to data-visibility issues. Moving forward, NTO has identified that a hub-and-spoke model is the proper architecture to manage its data, where the central org is the hub and the secondary orgs are the spokes. Which tool should a data architect use to orchestrate data between the hub org and spoke orgs?",
  "type": "single",
  "options": {
    "A": "A middleware solution that extracts and distributes data across both the hub and spokes.",
    "B": "A backup and archive solution that extracts and restores data across orgs.",
    "C": "Develop custom APIs to poll the spoke org for change data and push into the hub org.",
    "D": "Develop custom APIs to poll the hub org for change data and push into the spoke orgs."
  },
  "answer": "A"
},
{
  "question": "16 of 65. A large healthcare provider wishes to use Salesforce to track patient care. The following actors are in Salesforce: 1. Payment providers: Organizations who pay for the care to patients. 2. Doctors: They provide care plans for patients and need to support multiple patients. They are provided access to patient information. 3. Patients: These are individuals who need care. A data architect needs to map the actors to Salesforce objects. What should be the optimal selection by the data architect?",
  "type": "single",
  "options": {
    "A": "Patients as Accounts, Payment providers as Accounts, and Doctors as Person Accounts",
    "B": "Patients as Person Accounts, Payment providers as Accounts, and Doctors as Person Accounts",
    "C": "Patients as Person Accounts, Payment providers as Accounts, and Doctors as Accounts"
  },
  "answer": "B"
},
{
  "question": "17 of 65. Northern Trail Outfitters (NTO) has recently implemented Salesforce to track opportunities across all their regions. NTO sales teams across all regions have historically managed their sales process in Microsoft Excel. NTO sales teams are complaining that their data from the Excel files were not migrated as part of the implementation and NTO is now facing low Salesforce adoption. What should a data architect recommend to increase Salesforce adoption?",
  "type": "single",
  "options": {
    "A": "Define a standard mapping and train sales users to import opportunity data.",
    "B": "Load data in external database and provide access to database to sales users.",
    "C": "Create a chatter group and upload all Excel files to the group.",
    "D": "Use the Excel connector to Salesforce to sync data from Individual Excel files."
  },
  "answer": "A"
},
{
  "question": "17 of 65. Northern Trail Outfitters (NTO) has recently implemented Salesforce to track opportunities across all their regions. NTO sales teams across all regions have historically managed their sales process in Microsoft Excel. NTO sales teams are complaining that their data from the Excel files were not migrated as part of the implementation and NTO is now facing low Salesforce adoption. What should a data architect recommend to increase Salesforce adoption?",
  "type": "single",
  "options": {
    "A": "Define a standard mapping and train sales users to import opportunity data.",
    "B": "Load data in external database and provide access to database to sales users.",
    "C": "Create a chatter group and upload all Excel files to the group.",
    "D": "Use the Excel connector to Salesforce to sync data from Individual Excel files."
  },
  "answer": "A"
},
{
  "question": "18 of 65. Universal Containers (UC) has decided that they are going to retire a homegrown CRM application and move to Salesforce. As part of the implementation, they will need to migrate 5 billion records in a series of batches. The records are a collection of Accounts, Contacts, Opportunities, Products, and Orders. Since the legacy CRM application and Salesforce have different data models, the data will need to be transformed and normalized before it is loaded into the system. What should a data architect recommend as a migration and storage strategy?",
  "type": "single",
  "options": {
    "A": "Import all data into custom objects with middleware.",
    "B": "Migrate data to a centralized datastore first with ETL tools.",
    "C": "Import all data into custom objects with data loader.",
    "D": "Use an ETL tool to extract and transform the data, then load into standard objects."
  },
  "answer": "D"
},
{
  "question": "19 of 65. Northern Trail Outfitters is planning to build a consent form to record customer authorization for marketing purposes. What should a data architect recommend to fulfill this requirement?",
  "type": "single",
  "options": {
    "A": "Utilize the Authorization Form Consent object to capture the consent.",
    "B": "Create a custom object to maintain the authorization.",
    "C": "Use custom fields to capture the authorization details.",
    "D": "Use AppExchange solution to address the requirement."
  },
  "answer": "A"
},
{
  "question": "20 of 65. Universal Containers's system administrators have been complaining that they are not able to make changes to its users' records, including moving them to new territories without getting \"unable to lock row\" errors. This is causing the system admins to spend hours updating user records every day. What should the data architect do to prevent the errors?",
  "type": "single",
  "options": {
    "A": "Reduce number of users updated concurrently.",
    "B": "Analyze Splunk query to spot offending records.",
    "C": "Increase CPU for the Salesforce org.",
    "D": "Enable granular locking."
  },
  "answer": "D"
},
{
  "question": "21 of 65. Universal Containers (UC) owns a complex Salesforce org with many Apex classes, triggers, and automated processes that will modify records if available. UC has identified that, in its current development state, UC runs chance of encountering race conditions on the same record. What should a data architect recommend to guarantee that records are not being updated at the same time?",
  "type": "single",
  "options": {
    "A": "Disable classes or triggers that have the potential to obtain the same record.",
    "B": "Refactor or optimize classes and triggers for maximum CPU performance.",
    "C": "Migrate programmatic logic to processes and flows.",
    "D": "Embed the keywords FOR UPDATE after SOQL statements."
  },
  "answer": "D"
},
{
  "question": "22 of 65. Universal Containers is building a Salesforce application to track Contacts and the respective Conferences that they have attended with the following requirements:\n1. Contacts will be stored in the standard Contact object.\n2. Conferences will be stored in a custom Conference__c object.\n3. Each Contact may attend multiple Conferences and each Conference may be related to multiple Contacts. How should a data architect model the relationship between the Contact and Conference__c objects?",
  "type": "single",
  "options": {
    "A": "Create a master-detail relationship field on the Contact object.",
    "B": "Implement a Contact Conference junction object with master-detail relationships to both Contact and Conference__c.",
    "C": "Create a lookup relationship field on the Contact object.",
    "D": "Create a master-detail relationship field on the Conference__c object."
  },
  "answer": "B"
},
{
  "question": "22 of 65. Universal Containers is building a Salesforce application to track Contacts and the respective Conferences that they have attended with the following requirements:\n1. Contacts will be stored in the standard Contact object.\n2. Conferences will be stored in a custom Conference__c object.\n3. Each Contact may attend multiple Conferences and each Conference may be related to multiple Contacts. How should a data architect model the relationship between the Contact and Conference__c objects?",
  "type": "single",
  "options": {
    "A": "Create a master-detail relationship field on the Contact object.",
    "B": "Implement a Contact Conference junction object with master-detail relationships to both Contact and Conference__c.",
    "C": "Create a lookup relationship field on the Contact object.",
    "D": "Create a master-detail relationship field on the Conference__c object."
  },
  "answer": "B"
},
{
  "question": "23 of 65. Universal Containers has implemented Salesforce for its operations. In order for customers to be created in their MDM solution, the customer record needs to have the following attributes:\n1. First Name\n2. Last Name\n3. Email\nWhich option should the data architect recommend to mandate this when customers are created in Salesforce?",
  "type": "single",
  "options": {
    "A": "Build validation in Integration with MDM to check required attributes.",
    "B": "Create validation rules to check if the required attributes are entered.",
    "C": "Mark Fields for the attributes as required under Setup.",
    "D": "Configure Page Layout marking attributes as required fields."
  },
  "answer": "B"
},
{
  "question": "24 of 65. Universal Containers uses Apex jobs to create leads in Salesforce. The business team has requested that lead creation failures should be reported to them. Which option does Apex provide to report errors from this Apex job?",
  "type": "single",
  "options": {
    "A": "Use AppExchange package to clean lead information before Apex job processes them.",
    "B": "Use Apex services to email failures to business when error occurs.",
    "C": "Save Apex errors in a custom object, and allow access to this object for reporting.",
    "D": "Use Custom Object to store leads, and allow unprocessed leads to be reported."
  },
  "answer": "B"
},
{
  "question": "25 of 65. A large retail company has recently chosen Salesforce as its CRM solution. They have the following record counts:\n* 2,500,000 Accounts\n* 25,000,000 Contacts\nWhen doing an initial performance test, the data architect noticed an extremely slow response-time for reports and list views. What should a data architect do to solve the performance issues?",
  "type": "single",
  "options": {
    "A": "Load only data that the user is permitted to access.",
    "B": "Create a Skinny Table to represent Account and Contact objects.",
    "C": "Add Custom Indexes on frequently searched Account and Contact fields.",
    "D": "Limit data loading to the 2,000 most recently created records."
  },
  "answer": "C"
},
{
  "question": "26 of 65. Northern Trail Outfitters has these simple requirements for a data export process:\n1. File format should be in CSV.\n2. Process should be scheduled and run once per week.\n3. The export should be configurable through the Salesforce UI.\nWhich tool should a data architect leverage to accomplish these requirements?",
  "type": "single",
  "options": {
    "A": "Bulk API",
    "B": "Data loader",
    "C": "Third-party ETL tool",
    "D": "Data export wizard"
  },
  "answer": "D"
},
{
  "question": "27 of 65. Universal Containers (UC) is implementing Salesforce for lead management. UC procures lead data from multiple sources and would like to make sure lead data has company profile and location information. Which solution should a data architect recommend to make sure lead data has both profile and location information?",
  "type": "single",
  "options": {
    "A": "Export data out of Salesforce and send to another team to populate company profile and location data.",
    "B": "Run reports to identify records which do not have company profile and location data.",
    "C": "Ask sales people to search for and populate company profile and location data.",
    "D": "Leverage external data providers to populate company profile and location data."
  },
  "answer": "D"
},
{
  "question": "28 of 65. Northern Trail Outfitters (NTO) has implemented Salesforce for its sales users. The opportunity management in Salesforce is implemented as follows:\n1. Sales users enter their opportunities in Salesforce for forecasting and reporting purposes.\n2. NTO has a product pricing system (PPS) that is used to update the Opportunity Amount field on opportunities on a daily basis.\n3. PPS is the trusted source within NTO for Opportunity Amount.\n4. NTO uses Opportunity Forecast for its sales planning and management.\nSales users have noticed that their updates to the Opportunity Amount field are overwritten when PPS updates their opportunities. How should a data architect address this overwriting issue?",
  "type": "single",
  "options": {
    "A": "Change PPS integration to update only Opportunity Amount field when the value is null.",
    "B": "Change Opportunity Amount field access to Read Only for sales users using field-level security.",
    "C": "Create a custom field for Opportunity amount that PPS updates separating the field sales user updates.",
    "D": "Create a custom field for Opportunity Amount that sales users update."
  },
  "answer": "B"
},
{
  "question": "29 of 65. Northern Trail Outfitters (NTO) plans to maintain contact preferences for customers and employees. NTO has implemented the following:\n1. Customers are Person Accounts for their retail business.\n2. Customers are represented as Contacts for their commercial business.\n3. Employees are maintained as Users.\n4. Prospects are maintained as Leads.\nNTO needs to implement a standard communication preference management model for Person Accounts, Contacts, Users, and Leads. Which option should the data architect recommend NTO to satisfy this requirement?",
  "type": "single",
  "options": {
    "A": "Create case for contact preferences, and use this to validate the preferences for Lead, Person Accounts, and Users.",
    "B": "Use Individual objects to maintain the preferences with relationships to Lead, Person Account, and Users.",
    "C": "Create custom fields for contact preferences in Lead, Person Account, and Users objects.",
    "D": "Create a custom object to maintain preferences and build relationships to Lead, Person Account, and Users."
  },
  "answer": "B"
},
{
  "question": "53 of 65. Universal Containers (UC) is going through major reorganization of their sales team. This would require changes to a large number of group membership and sharing rules. UCs administrator is concerned about long processing time and failures during the process. What should a Data Architect implement to make changes efficiently?",
  "type": "single",
  "options": {
    "A": "Delete old sharing rules and build new sharing rules.",
    "B": "Enable Defer Sharing Calculation prior to making sharing rule changes.",
    "C": "Log out all users and make change to sharing rules.",
    "D": "Log a case with salesforce to make sharing rule changes."
  },
  "answer": "B"
},
{
  "question": "54 of 65. Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance issues and time-outs while running case reports in the Salesforce org. Which solution should a data architect recommend to improve reporting performance?",
  "type": "single",
  "options": {
    "A": "Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
    "B": "Build reports using custom Lightning components.",
    "C": "Contact Salesforce support to enable skinny table for cases.",
    "D": "Create a custom object to store aggregate data and run reports."
  },
  "answer": "C"
},
{
  "question": "55 of 65. Universal Containers has provided a web order form for its customers and has noticed invalid data coming in on orders. What should be used to mitigate this problem?",
  "type": "single",
  "options": {
    "A": "Validation Rules",
    "B": "Apex Trigger", 
    "C": "Work Flow Rules",
    "D": "Formatted Fields"
  },
  "answer": "A"
},
{
  "question": "56 of 65. Northern Trail Outfitters (NTO) wants to start a loyalty program to reward repeat customers. The program will track every item a customer has bought and grants them points for discounts. The following conditions will exist upon implementation: 1. Data will be used to drive marketing and product development initiatives. 2. NTO estimates that the program will generate 100 million rows of data monthly. 3. NTO will use Salesforce's Einstein Analytics and Discovery to leverage their data and make business and marketing decisions. What should the Data Architect do to store, collect, and use the reward program data?",
  "type": "single", 
  "options": {
    "A": "Have Einstein connect to the point of sales system to capture the Reward Program data.",
    "B": "Create a big object in Einstein Analytics to capture the Loyalty Program data.",
    "C": "Create a custom object in Salesforce that will be used to capture the Reward Program data.",
    "D": "Create a custom big object in Salesforce which will be used to capture the Reward Program data for consumption by Einstein."
  },
  "answer": "D"
},
{
  "question": "57 of 65. Universal Containers (UC) has millions of case records with case history and service level agreement data. UC's compliance team would like historical cases to be accessible for 10 years for audit purposes. What solution should a data architect recommend?",
  "type": "single",
  "options": {
    "A": "Archive case data using a Salesforce Archival solution.",
    "B": "Purchase more data storage to support the case object.",
    "C": "Use a custom object to store archived case data.",
    "D": "Use a custom big object to store archived case data."
  },
  "answer": "D"
},
{
  "question": "58 of 65. Northern Trail Outfitters has decided that it is going to build a channel sales portal with the following requirements: 1. External resellers are able to authenticate to the portal with a login. 2. Lead data, Opportunity data, and Order data are available to authenticated users. 3. Authenticated users may need to run reports and dashboards. 4. There is no need for more than 10 custom objects or additional file storage. Which Community Cloud license type should a data architect recommend to meet the portal requirements?",
  "type": "single",
  "options": {
    "A": "Customer Community",
    "B": "Partner Community",
    "C": "Customer Community Plus",
    "D": "Lightning External Apps Starter"
  },
  "answer": "B"
},
{
  "question": "59 of 65. Universal Containers has a rollup summary field on account to calculate the number of contacts associated with an account. During the account load, Salesforce is throwing an 'UNABLE TO LOCK ROW' error. Which solution should a data architect recommend to resolve the error?",
  "type": "single",
  "options": {
    "A": "Perform a batch job in serial mode and reduce the batch size.",
    "B": "Perform a batch job in parallel mode and reduce the batch size.",
    "C": "Leverage Data Loader's platform API to load data.",
    "D": "Defer rollup summary field calculation during data migration."
  },
  "answer": "A"
},
{
  "question": "60 of 65. Universal Containers (UC) has a Salesforce org with multiple automated processes defined for group membership processing. UC also has multiple admins on staff that perform manual adjustments to the role hierarchy. The automated tasks and manual tasks overlap daily, and UC is experiencing 'lock errors' consistently. What should a data architect recommend to mitigate these errors?",
  "type": "single",
  "options": {
    "A": "Enable sharing recalculations.",
    "B": "Ask Salesforce support for additional CPU power.",
    "C": "Enable granular locking.",
    "D": "Remove SOQL statements from Apex loops."
  },
  "answer": "C"
},
{
  "question": "61 of 65. Universal Containers (UC) is transitioning from Classic to Lightning Experience. What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
  "type": "single",
  "options": {
    "A": "Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
    "B": "Manually upload Attachments in Lightning Experience.",
    "C": "Migrate Notes and Attachments to Enhanced Notes and Files using a migration tool.",
    "D": "Manually upload Notes in Lightning Experience."
  },
  "answer": "C"
},
{
  "question": "62 of 65. A large multinational B2C Salesforce customer is looking to implement their distributor management application in Salesforce. The application has the following capabilities: 1. Distributors create Sales Orders in Salesforce. 2. Sales Orders are based on Product prices applicable to their region. 3. Sales Orders are closed once they are fulfilled. 4. It is decided to maintain Sales Orders in Opportunities object. How should the data architect model this requirement?",
  "type": "single",
  "options": {
    "A": "Add custom fields in Opportunity and use triggers to update prices.",
    "B": "Manually update Opportunities with Prices applicable to distributors.",
    "C": "Create lookup to Custom Price object and share with distributors.",
    "D": "Configure Price Books for each region and share with distributors."
  },
  "answer": "D"
},
{
  "question": "63 of 65. Universal Containers (UC) is in the process of selling half of its company. As part of this split, UC's main Salesforce org will be divided into two orgs: Org A and Org B. UC has delivered these requirements to its data architect: 1. The data model for Org B will drastically change with different objects, fields, and picklist values. 2. Three million records will need to be migrated from Org A to Org B for compliance reasons. 3. The migration will need occur within the next two months, prior to the split. Which migration strategy should a data architect use to successfully migrate the data?",
  "type": "single",
  "options": {
    "A": "Use the Salesforce CLI to query, export, and import.",
    "B": "Write a script to use the Bulk API.",
    "C": "Use Data Loader for export and Data Import Wizard for import.",
    "D": "Use an ETL tool to orchestrate the migration."
  },
  "answer": "D"
},
{
  "question": "64 of 65. Northern Trail Outfitters (NTO) runs its entire business out of an enterprise data warehouse (EDW). NTO's sales team is starting to use Salesforce after a recent implementation, but currently lacks the data required to advance leads and opportunities to the next stage. NTO's management has researched Salesforce Connect and would like to use it to virtualize and report on data from the EDW within Salesforce. NTO will be running thousands of reports per day across 10 to 15 external objects. What should a data architect consider before implementing Salesforce Connect for reporting?",
  "type": "single",
  "options": {
    "A": "Maximum number of records returned",
    "B": "OData callout limits per day",
    "C": "Maximum external objects per org",
    "D": "Maximum page size for server-driven paging"
  },
  "answer": "B"
},
{
  "question": "65 of 65. Universal Containers (UC) owns multiple Salesforce orgs that are distributed across regional branches. Each branch stores local customer data inside its org's Account and Contact objects. This creates a scenario where UC is unable to view customers across all orgs. UC has an initiative to create a 360 degree view of the customer, as UC would like to see Account and Contact data from all of its orgs in one place. Which solution should a data architect suggest to achieve a 360 degree view of the customer?",
  "type": "single",
  "options": {
    "A": "Use an ETL tool to migrate gap Accounts and Contacts into each org.",
    "B": "Build a bidirectional integration between all orgs.",
    "C": "Use the Salesforce Connect cross-org adapter.",
    "D": "Consolidate the data from each org into a centralized datastore."
  },
  "answer": "D"
},





	
];
};
