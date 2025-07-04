window.getQuestions = function() {
    return [










{
  "question": "1 of 60. Users at Universal Containers are complaining that a field has disappeared from the Account page after last weekend's deployment. The page layout did not change with this deployment. How should the admin troubleshoot this issue?",
  "type": "single",
  "options": {
    "A": "Run a Who Sees What report, filtering on Account.",
    "B": "Log in as a user and check several accounts to isolate the problem records.",
    "C": "View Field Accessibility in the Object Manager."
  },
  "answer": "C"
},
{
  "question": "7 of 60. Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunities. UC has noticed that fields with Field-Level Security permission of Read-Only on certain users' profiles are being updated by this class. How should the architect fix this problem?",
  "type": "single",
  "options": {
    "A": "Add the With Sharing keyword to the class.",
    "B": "Put the code in an inner class that uses the With Sharing keyword.",
    "C": "Use the isUpdateable() Apex method to test each field prior to allowing update."
  },
  "answer": "C"
},
{
  "question": "11 of 60. Sales operations at Universal Containers (UC) has created Public Reports and Dashboards folders for sales managers. Sales operations and sales managers report to the VP of Sales. Sales operations currently spends a few hours each month updating users that should have access to edit reports and dashboards in these folders. How should UC grant access to sales managers to automate access to these Public Reports and Dashboards folders?",
  "type": "single",
  "options": {
    "A": "Share the folders with the lowest roles in the Role Hierarchy; superiors will get access automatically.",
    "B": "Share the folders with the Sales Managers profile.",
    "C": "Share the folders with a \"Sales Managers\" Public Group."
  },
  "answer": "C"
},
{
  "question": "13 of 60. Universal Containers (UC) is looking to expand its delivery capabilities through a network of distributors that use a Partner Community license. UC employees currently can view all delivery records through the organization-wide default (OWD) setting of Public Read-Only. Which approach should an architect recommend to limit the records a distributor can see?",
  "type": "single",
  "options": {
    "A": "Create an ownership-based sharing rule to grant access to the distributor.",
    "B": "Create a criteria-based sharing rule to grant access to the distributor.",
    "C": "Set the External OWD to Private for the Delivery object."
  },
  "answer": "C"
},
{
  "question": "16 of 60. Universal Containers (UC) is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service containers. UC implemented a new Partner Community for its dealers. Each dealership has a dealer manager who manages the service agents. The community-sharing model is private. What is the optimal option to give dealer managers visibility to customer cases only raised by their service agents?",
  "type": "single",
  "options": {
    "A": "Use the Role Hierarchy so that the cases raised by service agents will be visible to their relevant dealer managers.",
    "B": "Create a sharing rule to share cases created by service agents with their dealer manager.",
    "C": "Create a sharing group to share cases created by service agents with their dealer manager."
  },
  "answer": "A"
},
{
  "question": "18 of 60. Which functionality does the system method \"runAs()\" verify when writing test methods?",
  "type": "single",
  "options": {
    "A": "Enforcement of a user's record sharing",
    "B": "Enforcement of a user's Field Level Security",
    "C": "Enforcement of a user's permissions"
  },
  "answer": "A"
},
{
  "question": "19 of 60. Sales reps at Universal Containers sometimes create large files as a part of the sales process that are too large to share over email. They would like users to be able to share files with customers, but the CISO has requested that any file links shared must be password-protected. How can this be accomplished?",
  "type": "single",
  "options": {
    "A": "Utilize an AppExchange product for delivering password protected files to customers.",
    "B": "Create a content delivery; during creation, the user should select the option to require a password to access content.",
    "C": "Set up an Experience Cloud site for customers to access files and share the file with customers via Chatter. Customers can then log in to the site to access the content."
  },
  "answer": "B"
},
{
  "question": "21 of 60. Universal Containers uses Person Accounts to represent retail customers and Business Accounts to represent commercial customers. The retail sales team should not have access to commercial customers but should have access to ALL retail customers. With the organization-wide default on Account set to Private, how should the architect meet these requirements?",
  "type": "single",
  "options": {
    "A": "Create a criteria-based sharing rule giving the Retail Sales role access to Accounts of type PersonAccount.",
    "B": "Create an owner-based sharing rule on AccountContactRelation to grant access to all account contact roles records owned by retail sales reps.",
    "C": "Update the Retail Sales profile to grant access to Person Account record type."
  },
  "answer": "A"
},
{
  "question": "22 of 60. Universal Containers is implementing Sales Cloud. During the final quarter of the financial year, sales managers help each other close deals. They requested a solution in Salesforce to allow them to share opportunities with other sales managers from different teams as needed. They also requested that sharing deals should expire automatically 2 weeks after the new fiscal year starts. Which proposed solution meets the requirements?",
  "type": "single",
  "options": {
    "A": "Apex sharing to share opportunities with sales managers",
    "B": "Scheduled Apex job to remove access",
    "C": "Sharing rules to share opportunities with sales managers"
  },
  "answer": "B"
},
{
  "question": "23 of 60. The finance team at Universal Containers usually does not have access to account and contact records. A finance analyst was temporarily given opportunity access for a big deal to help with tax calculation. However, she can now also access account and contact records. What is causing this issue?",
  "type": "single",
  "options": {
    "A": "Account records can be accessed due to implicit sharing from Opportunity.",
    "B": "Account records can be accessed due to Role Hierarchy.",
    "C": "Contact records can be accessed due to implicit sharing from Opportunity."
  },
  "answer": "A"
},
{
  "question": "33 of 60. Universal Containers is planning to pilot a new application to a small set of sales reps. What is the optimal way to grant only those sales reps access to the new functionality, while hiding the legacy functionality?",
  "type": "single",
  "options": {
    "A": "Clone the Sales Rep profile, adjust settings, and assign the pilot users the new profile.",
    "B": "Revoke access to legacy functions in the Sales Rep profile and create a permission set for the new functionality.",
    "C": "Create a permission set to grant access to the new functionality and hide the old functionality."
  },
  "answer": "A"
},
{
  "question": "43 of 60. A sales coach at Universal Containers wants to create and share a report folder with other sales coaches. Which two permissions are required to accomplish this?",
  "type": "single",
  "options": {
    "A": "Create Report Folders and manage Reports in Public Folders",
    "B": "Create and customize Reports and Report Folders",
    "C": "Manage Reports in Public Folders and edit My Reports"
  },
  "answer": "B"
},
{
  "question": "46 of 60. Universal Containers has implemented Customer Community with Customer Community Plus licenses for its distributors. Some distributors requested granting specific community users (agents) to view cases submitted by other agents of the same distributor. Which feature only supports these requirements?",
  "type": "single",
  "options": {
    "A": "Permission set to grant community admin permission",
    "B": "Delegate external user",
    "C": "Partner super user"
  },
  "answer": "C"
},
{
  "question": "48 of 60. Universal Containers (UC) has a mostly Private organization-wide default, as it's a core principle of UC to respect client data privacy. UC has implemented complex processes for granting access to Opportunity data. A few key members of the sales reporting team need to always be able to see, but not change, Opportunity data for all opportunities. What should an architect recommend as an approach to meet these requirements?",
  "type": "single",
  "options": {
    "A": "Give the View All Data permission to the Sales Reporting profile.",
    "B": "Create a permission set that grants the View All Data permission.",
    "C": "Create a permission set that grants the View All permission for Opportunity."
  },
  "answer": "C"
},
{
  "question": "49 of 60. A custom ServiceFeedback object is used to collect partner feedback. ServiceFeedback records should be available to all internal employees. The organization-wide default (OWD) is set to Private for external users so partners cannot see feedback from other partner users. How should the architect give access to all internal employees?",
  "type": "single",
  "options": {
    "A": "Create an owner based sharing rule for all Service Feedback records owned by partners.",
    "B": "Ensure all the internal users are above the partners in the Role Hierarchy.",
    "C": "Set the OWD for Internal Users to Public Read-Only."
  },
  "answer": "C"
},
{
  "question": "50 of 60. Universal Containers created a public group with certain sales engineers to help on complex deals, as well as a sharing rule to grant access to these opportunities. The Opportunity organization-wide default is Private. What is the impact of these sharing settings?",
  "type": "single",
  "options": {
    "A": "Sales engineers and their managers in the Role Hierarchy will also have access to these records.",
    "B": "Subordinates of managers who have sales engineers in the public group will also have access to these records.",
    "C": "Other sales engineers who are in the same Role Hierarchy as the sales engineers of the public group will also have access to these records."
  },
  "answer": "A"
},
{
  "question": "50 of 60. Universal Containers created a public group with certain sales engineers to help on complex deals, as well as a sharing rule to grant access to these opportunities. The Opportunity organization-wide default is Private. What is the impact of these sharing settings?",
  "type": "single",
  "options": {
    "A": "Sales engineers and their managers in the Role Hierarchy will also have access to these records.",
    "B": "Subordinates of managers who have sales engineers in the public group will also have access to these records.",
    "C": "Other sales engineers who are in the same Role Hierarchy as the sales engineers of the public group will also have access to these records."
  },
  "answer": "A"
},
{
  "question": "52 of 60. A sales rep at Universal Containers was added to an opportunity team with Read/Write permissions. Which action is she allowed to perform in the opportunity?",
  "type": "single",
  "options": {
    "A": "Update opportunity stage.",
    "B": "Replace opportunity owner.",
    "C": "Add/remove members in the opportunity team."
  },
  "answer": "A"
},
{
  "question": "54 of 60. Universal Containers has a Performance Feedback custom object (Private organization-wide default) used by customers to report any issues with delivery drivers. Feedback should not be visible to the driver, but any feedback records should be accessible to people above them in the Role Hierarchy, even when the driver changes managers. Assuming managers have Read access to the Feedback object, which three steps are necessary to solve these requirements?",
  "type": "single",
  "options": {
    "A": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and create an ownership-based sharing rule.",
    "B": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver's manager when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager.",
    "C": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager."
  },
  "answer": "B"
},
{
  "question": "55 of 60. Universal Containers (UC) has 200 distributors that use Partner Community licenses. Partners cannot see each other's data, but UC is also trying to give more visibility to data for certain individuals at a distributor. Which scalable option give users in the partner manager role access to all case and container records for partner users at the same distributor?",
  "type": "single",
  "options": {
    "A": "Create an ownership based sharing rule.",
    "B": "Give Super User permission to the individual partner manager users.",
    "C": "Create sharing sets."
  },
  "answer": "B"
},
{
  "question": "56 of 60. Universal Containers implemented Sales Cloud and requested that sales agents have access to products and prices the company sells, and to be able to create opportunities for its customers. What should the organization-wide defaults be for pricebook?",
  "type": "single",
  "options": {
    "A": "Public Read-Only",
    "B": "View",
    "C": "Use"
  },
  "answer": "C"
},
{
  "question": "57 of 60. Which method should be used to grant an unrelated group of users access to a set of records?",
  "type": "single",
  "options": {
    "A": "Role Hierarchy",
    "B": "Sharing Sets",
    "C": "Public Groups"
  },
  "answer": "B"
},
{
  "question": "41 of 60. Universal Containers (UC) uses a custom Lightning component with an Apex class to display shipment information (custom object, Private organization-wide default). UC sales managers are complaining about two important points: Shipment records that belong to their teams can be seen by other users. Shipment amount should be visible only by managers, but sales reps are able to view it. Which feature did the development team miss that is causing the problems?",
  "type": "single",
  "options": {
    "A": "Use runAs in test class to enforce user permissions and field-level permissions.",
    "B": "Use With Sharing keyword in Apex classes to enforce sharing rules evaluation.",
    "C": "Use isShareable keyword in Apex classes to assure record visibility."
  },
  "answer": "B"
},
{
  "question": "50 of 60. Universal Containers uses the standard Case object to track various support requests sent to servicing agents. Currently, the Case object has more than 400 fields. Eight different types of case processes have been established, each with a unique combination of statuses. The Director of Customer Service wants to ensure that servicing agents see only the required information specific to the case type they are addressing. Which option is recommended to implement this requirement?",
  "type": "single",
  "options": {
    "A": "Use different Page Layouts per case type, each representing the relevant fields per case type.",
    "B": "Use Dynamic Forms with different field sections representing the relevant fields per case type, and control visibility of sections by Case Record Type value.",
    "C": "Use a custom LWC to override the View action of the Case object, and a Custom Metadata Type to define the relevant fields per case type."
  },
  "answer": "B"
},
{
  "question": "60 of 60. Universal Containers uses the Standard WorkOrder object to track various work orders sent to field agents. Currently, the WorkOrder object has more than 400 fields. There are eight different types of work order processes established. The Director of Customer Service wants to ensure that field agents see only required information specific to the WorkOrder type they are addressing. Which option is recommended to implement this requirement?",
  "type": "single",
  "options": {
    "A": "Use a custom LWC to override the view action of WorkOrder with custom metadata type defining relevant fields per WorkOrder type.",
    "B": "Use Dynamic form to add different page sections and control visibility of sections by Work Order RecordType value.",
    "C": "Use different page layouts per work order type with different sections representing key information about the specific work order type."
  },
  "answer": "B"
},
{
  "question": "59 of 60. Besides their own team accounts, sales managers at Universal Containers (UC) need Read access to all accounts of the same segment in other countries. Role Hierarchy was implemented accordingly (based on countries), but a sales manager in the U.S. is complaining that he cannot view account records of the same segment in Canada. What should UC do to grant access properly?",
  "type": "single",
  "options": {
    "A": "Create owner-based sharing rule to grant access to account records that have the same segment to all sales manager roles.",
    "B": "Create a public group and include all accounts of the same segment, and then grant access with a permission set.",
    "C": "Change the Role Hierarchy and put all the sales managers in the U.S. and Canada in the same role."
  },
  "answer": "A",
},
{
  "question": "58 of 60. The sales managers at Universal Containers requested their teams to define each user's role on their accounts in order to provide an easy way to establish accountability and collaboration. Sales managers also requested that sales associates should only get the following permissions: 1. Read access to the accounts, 2. Read access to cases related to the accounts, 3. No access to deals (opportunities) related to the accounts. The sales associates may be granted access to opportunities when needed. Assuming the overall sharing model of the organization is Private and no sharing rules are configured on the Account object, how should an architect achieve these requirements?",
  "type": "single",
  "options": {
    "A": "Use Account teams to define access to accounts as well as opportunities and cases related to accounts.",
    "B": "Use Account teams and Case teams. No configuration required for the Opportunity object.",
    "C": "Use Account teams and sharing rules to share cases with sales associates. No change required to the Opportunity object."
  },
  "answer": "A"
},
{
  "question": "57 of 60. A company intends bring work from anywhere culture in a bid to improve productivity. Their sellers use wide variety of devices with different form factors. The company currently uses one page layout to display opportunity record details to the sellers. The Regional Vice President of Sales is complaining about incorrect alignment of data in opportunity records, making it difficult for some sellers. Which steps are recommended to rectify this?",
  "type": "single",
  "options": {
    "A": "Use Dynamic Form to define different field sections applicable for different form factors of devices.",
    "B": "Use a visualforce override for Opportunity view action, identify the form factor onLoad action and display relevant layouts based on form factors.",
    "C": "Use a custom LWC override for Opportunity view action, identify form factor onLoad action and display relevant layouts based on form factors."
  },
  "answer": "A",
},
{
  "question": "56 of 60. Universal Containers (UC) would like to store an encryption key within Salesforce for use in Apex code, but it does not want users to be able to see this confidential key. Users require the view setup permission. How can UC securely store the confidential key?",
  "type": "single",
  "options": {
    "A": "Create a protected custom metadata type that stores the encryption key. Package the protected custom metadata type with its associated records in a managed package. Install the package in the production org.",
    "B": "Create a protected custom metadata type that stores the encryption key. Package the protected custom metadata type with its associated records in an unlocked package. Install the package in the production org.",
    "C": "Create a custom metadata type that stores the encryption key. Make sure that only the admin profile has access to the custom metadata type so that end users cannot access the encryption key."
  },
  "answer": "A"
},
{
  "question": "55 of 60. Which option can be selected to share data when creating a sharing rule?",
  "type": "single",
  "options": {
    "A": "Roles",
    "B": "Users",
    "C": "Profiles"
  },
  "answer": "A",
},
{
  "question": "54 of 60. A support representative at Universal Containers created a report to view all her open cases that have been created in the past 7 days and saved the report in the \"Private Reports\" folder. Who can view and run the report?",
  "type": "single",
  "options": {
    "A": "The report owner",
    "B": "The report owner and any users who have been given access to the 'My Private Reports' folder",
    "C": "The report owner and users with the View All Data permission"
  },
  "answer": "A"
},
{
  "question": "52 of 60. Universal Containers (UC) is in a legal dispute regarding several orders. UC has found out these records were removed from the system. The VP of Sales has asked to ensure this cannot happen in the future. Which approach should meet this requirement?",
  "type": "single",
  "options": {
    "A": "Remove the Delete button from the Order Page Layout.",
    "B": "Remove Order Delete permission from profiles and permission sets.",
    "C": "Change the Record Type/Page Layout assignment for orders to be Read-Only."
  },
  "answer": "B",
},
{
  "question": "53 of 60. A consulting company uses the Salesforce mobile app for its field consultants and uses Case object to track customer-specific consulting done by field consultants. The company also has a large number of customer service representatives who take calls from customers on company-issued desktops and use the Case object to track customer issues and grievances. The company would like to capture images of customer sites captured by field consultants while they are editing the case record during customer site visits. The Director of IT wants to minimize customization and promote reusability of code artifacts wherever possible. What recommendations should an architect give to the company to implement the image capture requirement, while ensuring that the service rep can continue to use the same Lightning pages they were trained to use?",
  "type": "single",
  "options": {
    "A": "Use a Lightning Component as an override for the \"Edit\" action on mobile view, allowing the image capture feature. No change required for desktop users.",
    "B": "Create a separate button \"Edit in Mobile\", which opens a custom Lightning component that will allow field consultants to add an image. No change required for desktop users.",
    "C": "Use a Lightning Component as an override for the \"Edit\" action on the Lightning experience, allowing the image capture feature. Detect the form factor of the device and redirect the user to the default native view."
  },
  "answer": "C"
},
{
  "question": "51 of 60. A banking company wants their customers Date of Birth Field searchable by Banking Reps, but only editable by Customer Support Reps. Which approach is recommended to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Add Date of Birth field to the Search layout of the Contact Object. Modify the Page layout assigned to Customer Support Rep and add Date of Birth field as Required.",
    "B": "Create a Validation rule in the Data of Birth field so the rule returns true only when user profile name matches Customer Support Rep.",
    "C": "Set the Field Level Security for the Date of Birth field to be Visible to Customer Support Rep Profile, and set the Date of Birth field Visible and Readonly to Banking Rep profile."
  },
  "answer": "C",
},
{
  "question": "50 of 60. At Universal Containers, there's a team of auditors distributed throughout the organization that all need access to high-value opportunities. With a Private sharing model, which option should an architect recommend when designing a solution for this requirement?",
  "type": "single",
  "options": {
    "A": "Put the auditors at the highest level of the Role Hierarchy.",
    "B": "Add the auditors to the default Opportunity Team.",
    "C": "Create a public group and assign the auditors to the group."
  },
  "answer": "C"
},
{
  "question": "48 of 60. Universal Containers (UC) requested that branch managers and UC branch staff should only see customers and related information in their geographic location. Which options should be used together to achieve the requirements?",
  "type": "single",
  "options": {
    "A": "Configure organization-wide defaults of the Account object and create sharing rules.",
    "B": "Configure Role Hierarchy and create sharing rules.",
    "C": "Create the Account Team and add branch manager team members, and configure organization-wide defaults of the Account object."
  },
  "answer": "B",
},
{
  "question": "49 of 60. Sales reps at Universal Containers (UC) complain about the manual activities they need to perform in order to grant access to supporting internal users (legal, engineering, finance, etc.) for customer records when they need help. In general, the sales reps involved in the deals will not change. How should an architect help UC improve sales reps' productivity?",
  "type": "single",
  "options": {
    "A": "Create a criteria-based sharing rule to grant access to other users.",
    "B": "Create a permission set with View All Data and assign to supporting users.",
    "C": "Leverage default Account team."
  },
  "answer": "C"
},
{
  "question": "46 of 60. At Universal Containers, there's a team of auditors distributed throughout the organization that all need access to high-value opportunities. With a Private sharing model, which option should an architect recommend when designing a solution for this requirement?",
  "type": "single",
  "options": {
    "A": "Put the auditors at the highest level of the Role Hierarchy.",
    "B": "Add the auditors to the default Opportunity Team.",
    "C": "Create a criteria-based sharing rule to give access to the public group for high-value opportunities."
  },
  "answer": "C",
},
{
  "question": "47 of 60. What should an architect recommend to make sure that users that gained access to a custom object record through Apex managed sharing do not lose access to it when its owner is changed?",
  "type": "single",
  "options": {
    "A": "Use \"With Sharing\" keyword to make sure record visibility will be considered.",
    "B": "Create a specific Apex Sharing Reason for the custom object.",
    "C": "Create a new record in __Share object with RowCause \"Manual\"."
  },
  "answer": "B"
},
{
  "question": "45 of 60. Universal Containers has implemented Customer Community with Customer Community Plus licenses for its distributors. Retail distributors have part-time agents who work for multiple distributors. Those agents should have access to other distributor accounts as well. What should be configured to grant agents access to different distributor accounts?",
  "type": "single",
  "options": {
    "A": "Use Apex sharing to share distributor accounts with agents using the Account__Share table.",
    "B": "Create sharing rules to share distributor accounts with agents.",
    "C": "Create a sharing set to share distributor accounts with agents using account contact relationship."
  },
  "answer": "C"
},
{
  "question": "44 of 60. Universal Containers (UC) is a non-profit organization with more than 20,000,000 members (donors). UC decided to assign those accounts to donations reps based on their regions. Donations reps ended up owning more than 50,000 donors each. The donation reps started to see significant degradation of the system performance. What is the reason for this problem?",
  "type": "single",
  "options": {
    "A": "Salesforce sharing recalculation locked off",
    "B": "There is an Account ownership data skew problem",
    "C": "The donations reps' access to the assigned accounts is wrong."
  },
  "answer": "B",
},
{
  "question": "43 of 60. In order to allow community users to collaborate on Opportunities, which license type must the users be given?",
  "type": "single",
  "options": {
    "A": "Customer Community",
    "B": "Partner Community",
    "C": "Customer Community Plus"
  },
  "answer": "B",
},
{
  "question": "41 of 60. Universal Containers (UC) delivers training in 500 different regions. The UC operations users team manages course setup, scheduling, and trainer setup. The team members work at a regional level and report to an operations manager. The operations manager requested access to edit ALL scheduled courses owned by the operation users team. How should this be achieved?",
  "type": "single",
  "options": {
    "A": "The operations manager will get access to the scheduled courses by creating an ownership-based sharing rule and share the scheduled courses with the operations manager",
    "B": "The operations manager will get access to the scheduled courses owned by the operations users team defined in the Role Hierarchy.",
    "C": "The operations manager will get access to the scheduled courses by creating a public group, and add the operations manager and the operations users team to the public group."
  },
  "answer": "B",
},
{
  "question": "42 of 60. Universal Containers (UC) has a team that analyzes customer orders looking for fraud. This team needs access to Invoice records (custom object, Private organization-wide default). UC has complex rules to control users' access. The architect recommended using Apex managed sharing to meet these requirements. Which recommendation should a developer consider when implementing the changes?",
  "type": "single",
  "options": {
    "A": "Use \"Without Sharing\" keyword to make sure record visibility will be considered.",
    "B": "Use \"With Sharing\" keyword to enforce Field-Level Security.",
    "C": "Use runAs system method to test different users accessing these records."
  },
  "answer": "C"
},
{
  "question": "40 of 60. Sales operations at Universal Containers (UC) wants to create list views to filter opportunities for certain geographies. How should UC hide list views that are not relevant to an individual user since there will be more than 50 list views?",
  "type": "single",
  "options": {
    "A": "Share the list views with the appropriate queue.",
    "B": "Share the list views with the appropriate individual users.",
    "C": "Share the list views with the appropriate role and internal subordinates."
  },
  "answer": "C"
},
{
  "question": "39 of 60. Universal Containers would like to control access to records and objects according to the following business requirements: Sales users can view all account records but only edit their own records. Sales managers can view all account records but only edit records of their team. Service users can view all account records that are not marked with a RecordType of Prospect. Which organization-wide default configuration should an architect recommend to fulfill these requirements?",
  "type": "single",
  "options": {
    "A": "Private",
    "B": "Public Read Write",
    "C": "Public Read/Transfer"
  },
  "answer": "A",
},
{
  "question": "38 of 60. Universal Containers has expanded to sell virtual containers for data storage. Virtual container work orders are provisioned immediately by the system and therefore cannot be changed by a sales rep. What is an optimal approach to implement these requirements?",
  "type": "single",
  "options": {
    "A": "Change the Record Type/Page Layout assignment for Work Orders to Read-Only.",
    "B": "Remove the Work Order Edit permission from the Sales Representative profile.",
    "C": "Implement a sharing rule that changes access for all Work Orders to Read."
  },
  "answer": "B"
},
{
  "question": "37 of 60. Dreamforce presenters need to be able to edit their presentation details (summary, presenter biographies, etc) on a private custom object in Salesforce (Presentation). All presenters for a presentation are captured on a Presenters junction object between Presenter and User. How can this be accomplished?",
  "type": "single",
  "options": {
    "A": "Give Edit rights to the Presentation record via a Permission set that is given to the Presenters for a record.",
    "B": "Trigger on Presenter junction object that adds the user to the Sales Team for the Presentation record.",
    "C": "Trigger on Presenter junction object that uses Apex Managed sharing to add or remove access to the related Presentation record."
  },
  "answer": "C",
},
{
  "question": "35 of 60. A user posts a file to the Chatter feed for a record of an object that has a Private organization-wide default. Which statement accurately describes who can view the file by default?",
  "type": "single",
  "options": {
    "A": "The user who posted the file and users with a shared Chatter post link to the file",
    "B": "The user who posted the file and users with access to the record",
    "C": "Only the user who posted the file"
  },
  "answer": "B",
},
{
  "question": "36 of 60. Sales operations at Universal Containers (UC) wants to create list views to filter opportunities for certain geographies. How should UC hide list views that are not relevant to an individual user since there will be more than 50 list views?",
  "type": "single",
  "options": {
    "A": "Share the list views with the appropriate public group.",
    "B": "Share the list views with the appropriate queue.",
    "C": "Share the list views with the appropriate individual users."
  },
  "answer": "A"
},
{
  "question": "34 of 60. If a Case requires involvement from one of the Legal team, the Case owner adds one of the corporate lawyers to the Legal SME field on the case. Since cases are private, how can we grant a lawyer access to a specific case when their assistance is needed?",
  "type": "single",
  "options": {
    "A": "Use Apex Managed sharing in a case Trigger that shares the record to the user identified in the Legal SME field.",
    "B": "Create an Criteria Based Sharing Rule that shares to the Corporate Legal Team Role when the \"Legal assistance needed?\" field is checked.",
    "C": "Create a Criteria Based Sharing Rule that shares to the Legal Public Group when the \"legal assistance needed?\" field is checked."
  },
  "answer": "A"
},
{
  "question": "33 of 60. The corporate identity and access team needs to audit User setup in the Salesforce org. Which permission should be granted to this team so they can perform their audit?",
  "type": "single",
  "options": {
    "A": "View All Users",
    "B": "View All Data",
    "C": "View permission on the User object"
  },
  "answer": "A",
},
{
  "question": "31 of 60. To grant Universal Containers sales managers access to shipment records properly, it was necessary to leverage Apex managed sharing. The IT team is worried about improper access to records. What should an architect recommend to mitigate this risk?",
  "type": "single",
  "options": {
    "A": "Use isAccessible Keyword in Apex classes to assure record visibility will be followed.",
    "B": "Use runAs system method in test classes to test using different users and profiles.",
    "C": "Use isShareable keyword in Apex classes to assure record visibility will be followed."
  },
  "answer": "B",
},
{
  "question": "32 of 60. Mary is Joe's manager in the Role Hierarchy. The organization-wide default for a custom Invoice object is Public Read-Only, and Mary's profile is not granted the Read permission for the Invoice object. Which action can Mary take on Joe's invoice records?",
  "type": "single",
  "options": {
    "A": "Read/Write",
    "B": "None",
    "C": "View Only"
  },
  "answer": "B"
},
{
  "question": "30 of 60. Universal Containers (UC) service reps are assigned to a profile which has View All in the Case object (Private organization-wide default). To make sure service reps have access to all relevant information (accounts and contacts) to attend to customer requests, which detail should an architect consider?",
  "type": "single",
  "options": {
    "A": "Service reps will NOT be able to access all UC contact records if they are Controlled by Parent.",
    "B": "Service reps will NOT be able to access all UC account records because the Account OWD is Private.",
    "C": "Service reps will be able to access all UC contact records if they are Controlled by Parent."
  },
  "answer": "B"
},
{
  "question": "29 of 60. Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC also wants to ensure that leads are only edited/reassigned by the lead owner. Which organization-wide default (OWD) approach should be recommended to help UC implement these requirements?",
  "type": "single",
  "options": {
    "A": "Implement a Private OWD on Lead.",
    "B": "Implement a Public Read-Only OWD on Lead.",
    "C": "Implement a Public Read-Only/Transfer OWD on Lead."
  },
  "answer": "B",
},
{
  "question": "27 of 60. Universal Containers (UC) delivers training and courses to students and companies. UC is implementing a Salesforce Customer Community for its students granting them a Customer Community license. As part of the community requirements, UC asked to give students access to cases that are related to their account in the UC community. What is the optimum sharing technique to achieve these requirements?",
  "type": "single",
  "options": {
    "A": "Create a sharing rule to share cases with the students.",
    "B": "Use Apex sharing to share cases with the students.",
    "C": "Create a sharing set to share cases with the students."
  },
  "answer": "C",
},
{
  "question": "28 of 60. Which functionality does the system method \"runAs()\" verify when writing test methods?",
  "type": "single",
  "options": {
    "A": "Enforcement of a user's Field-Level Security",
    "B": "Enforcement of a user's record sharing",
    "C": "Enforcement of a user's permissions"
  },
  "answer": "B"
},
{
  "question": "26 of 60. Universal Containers (UC) has a custom object to track the internal net promoter score (NPS) for all of its employees. The manager is in the role above the owner and there are no sharing rules on the object. How should UC ensure that NPS records cannot be accessed by the owner's manager?",
  "type": "single",
  "options": {
    "A": "Use Apex sharing to remove NPS object share records for Manager profiles.",
    "B": "Set organization-wide default to Private and uncheck the Access Using Hierarchies option for the NPS object.",
    "C": "Remove Create, Read, Edit, and Delete from Manager profiles and permission sets."
  },
  "answer": "B"
},
{
  "question": "25 of 60. Universal Containers (UC) operates worldwide, with offices in more than 100 regions in 10 different countries, and has established a very complex Role Hierarchy to control data visibility. In the new fiscal year, UC is planning to reorganize the roles and reassign account owners. Which feature should an architect recommend to avoid problems with this operation?",
  "type": "single",
  "options": {
    "A": "Skinny table",
    "B": "Deferred Sharing Recalculation",
    "C": "Partition data using Divisions"
  },
  "answer": "B",
},
{
  "question": "23 of 60. Universal Containers (UC) has created a custom Invoice object. Standard sales users at UC can see the records in search layout, but when they click to view the detail, only record name, created date, and last modified date are shown. When the system admin accesses it, he or she sees the full record detail with many more data fields. What is the likely cause of this issue?",
  "type": "single",
  "options": {
    "A": "The Sales Users profile does not have access to the remaining fields.",
    "B": "The page layout assigned to Sales User profile has only Read-Only access to the fields.",
    "C": "A role-based sharing rule is missing and should be added for the sales user’s role to grant access to the fields."
  },
  "answer": "A",
},
{
  "question": "24 of 60. Universal Containers (UC) has a partner community for its 200 distributors. UC customer accounts are assigned an individual distributor. The organization-wide default setting for the custom Delivery object is Private. How should an architect advise UC to grant all users at a distributor access to delivery records for all customers assigned to a particular distributor?",
  "type": "single",
  "options": {
    "A": "Create a criteria-based sharing rule that shares delivery records matching the Distributor to users of a Public Group created for the distributor.",
    "B": "Create a criteria-based sharing rule that shares delivery records matching a distributor to the Distributor role in the Role Hierarchy.",
    "C": "Create a Sharing Set for the Distributor profile to grant access to the Delivery object."
  },
  "answer": "C"
},
{
  "question": "22 of 60. Which community function is impacted by having the Site User Visibility turned off in Sharing Settings?",
  "type": "single",
  "options": {
    "A": "Updating their user profile.",
    "B": "Searching for other external users.",
    "C": "Searching for internal users."
  },
  "answer": "B"
},
{
  "question": "21 of 60. Universal Containers (UC) operates worldwide, with offices in more than 100 regions in 10 different countries, and has established a very complex Role Hierarchy to control data visibility. In the new fiscal year, UC is planning to reorganize the roles and reassign account owners. Which feature should an architect recommend to avoid problems with this operation?",
  "type": "single",
  "options": {
    "A": "Partition data using Divisions",
    "B": "Parallel Sharing Rule recalculation",
    "C": "Skinny table"
  },
  "answer": "B",
},
{
  "question": "20 of 60. Universal Containers (UC) uses a custom Lightning component with an Apex class to display shipment information (custom object, Private organization-wide default). UC sales managers are complaining about two important points: Shipment records that belong to their teams can be seen by other users. Shipment amount should be visible only by managers, but sales reps are able to view it. Which feature did the development team miss that is causing the problems?",
  "type": "single",
  "options": {
    "A": "Use `isAccessible()` method in Apex classes to check field accessibility.",
    "B": "Use `runAs` in test class to enforce user permissions and field-level permissions.",
    "C": "Use `isShareable` keyword in Apex classes to assure record visibility."
  },
  "answer": "A"
},
{
  "question": "19 of 60. A banking company uses a VIP Flag in the Contact Object that they want only Private Banking Reps to see. Which approach is recommended to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Define a page layout for Contact Object and add the VIP Flag field for that layout. Remove the VIP Flag field from other layouts.",
    "B": "Change the type of VIP Flag field to a picklist, define a new record type for the Contact Object and make the picklist field available for Editing.",
    "C": "Set the Field Level Security for the VIP Flag field so that it is visible to Private Banking Rep Profile."
  },
  "answer": "C",
},
{
  "question": "18 of 60. Universal Containers has selected a small and diverse group of users to review inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive accounts visible to the public group. However, some of these users are reporting they do not see any of the accounts that were shared with the public group. What is the underlying issue for these users?",
  "type": "single",
  "options": {
    "A": "The accounts are owned by users higher in the Role Hierarchy.",
    "B": "The users are in profiles that have no access to the Account object.",
    "C": "The page layout assigned to these users is different than the Account owner."
  },
  "answer": "B",
},
{
  "question": "17 of 60. Which advanced tool should Salesforce enable for large-scale Role Hierarchy realignments?",
  "type": "single",
  "options": {
    "A": "Partitioning by Divisions",
    "B": "Granular Locking",
    "C": "Skinny Table Indexing"
  },
  "answer": "B"
},
{
  "question": "16 of 60. Universal Containers (UC) has affiliates who sell containers in countries where UC does not have a local office. UC uses a Partner Community to manage the sales cycle in those countries. One of its affiliates has grown substantially and restructured its internal sales team with the following structure: Sales VP — > Director of Sales — > Sales Manager — > Sales Reps. Sales Reps should not see each others' opportunities, and visibility of deals should open up within a Sales Rep's hierarchy. What is the main problem an architect should address in this situation?",
  "type": "single",
  "options": {
    "A": "Partner Community does not support Role Hierarchy.",
    "B": "Partner User roles are limited to three levels.",
    "C": "The Channel Manager role cannot be shared with Partner Community."
  },
  "answer": "B",
},
{
  "question": "15 of 60. Sales operations at Universal Containers (UC) wants to create list views to filter opportunities for certain geographies. How should UC hide list views that are not relevant to an individual user since there will be more than 50 list views?",
  "type": "single",
  "options": {
    "A": "Share the list views with the appropriate individual users.",
    "B": "Share the list views with the appropriate queue.",
    "C": "Share the list views with the appropriate public group."
  },
  "answer": "C"
},
{
  "question": "14 of 60. Universal Containers implemented Sales Cloud and requested that only certain branch staff trained to sell high-risk products can create opportunities for high-risk products. How should an architect allow only specific branch staff to sell high-risk products?",
  "type": "single",
  "options": {
    "A": "Set the price book OWD to View Only and share the (High Risk) price book with the trained staff via manual sharing.",
    "B": "Set the price book organization-wide default (OWD) to View Only and share the price book (High Risk) with the trained staff.",
    "C": "Set the price book OWD to View Only and share the (High Risk) price book with the trained staff via a sharing rule."
  },
  "answer": "A",
},
{
  "question": "13 of 60. An architect has a requirement to create a criteria-based sharing rule based on the customer Social Security Number. However, when setting up the rule in Contact Sharing, the field is not shown on the list of available fields. What is causing this issue?",
  "type": "single",
  "options": {
    "A": "The architect's profile does not have Field-Level Security for this field.",
    "B": "The architect does not have permission to Compliance fields.",
    "C": "The field has been configured for encryption."
  },
  "answer": "C"
},
{
  "question": "12 of 60. An architect from a previous project implemented Platform Shield Encryption for a company. However, based on a recent audit, the company's Privacy Team identified three additional fields in their Account Records (Billing Street, Billing City and Phone) that needs to be secure and protected. How should an architect proceed with this new policy change?",
  "type": "single",
  "options": {
    "A": "Use Classic Encryption to ensure all fields are protected and contact Salesforce for help with encryption verification.",
    "B": "Use Encryption Policy and wait for an email from Salesforce indicating the field values are encrypted.",
    "C": "Use Encryption Policy and contact Salesforce to update the existing records so that their field values are encrypted."
  },
  "answer": "C",
},
{
  "question": "11 of 60. A custom Invoice object has been created with a master-detail relationship to Account. The accounts receivable (AR) team needs access to invoice records. AR users neither own nor have access to account records. The Account organization-wide default is set to Private. The AR team is unable to find invoices in list views, reports, and Global Search. The architect has been asked to help troubleshoot. What is preventing AR team members from seeing invoices?",
  "type": "single",
  "options": {
    "A": "A sharing rule is missing to share invoices with the AR team.",
    "B": "The AR profile does not have Read permission to the Invoice object.",
    "C": "A sharing rule is missing to share accounts with the AR team."
  },
  "answer": "C"
},
{
  "question": "10 of 60. Universal Containers' organization wide-defaults model is Private for the Account object. A sales rep owns two opportunities in one Account. The Sales Rep profile has Create/Edit access to opportunity records. Which level of access will the sales rep have to the related Account record?",
  "type": "single",
  "options": {
    "A": "Read/Create/Edit access",
    "B": "Read access",
    "C": "No access"
  },
  "answer": "B",
},
{
  "question": "9 of 60. Sales executives at Universal Containers (UC) want to create list views to filter opportunities for large at-risk opportunities. These list views should only be available to certain executives who specialize in closing problematic deals. What should UC do to solve this requirement?",
  "type": "single",
  "options": {
    "A": "Share the list views with the appropriate role in the Role Hierarchy.",
    "B": "Share the list views with the appropriate individual users.",
    "C": "Share the list views with the appropriate Public Group."
  },
  "answer": "C"
},
{
  "question": "8 of 60. Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need to use the community to see closing opportunities assigned to their distributor for delivery. Which license recommendation will meet distributor needs?",
  "type": "single",
  "options": {
    "A": "Customer Community",
    "B": "Partner Community",
    "C": "Customer Community Plus"
  },
  "answer": "B",
},
{
  "question": "6 of 60. Universal Containers (UC) sales managers are complaining that they cannot access their teams' Shipment records (a custom object). Initially, the admin suggested that this is happening due to a misconfigured Role Hierarchy (Shipment organization-wide default is Private). After investigation, they determined the Role Hierarchy for these users is correct. What is the reason why UC sales managers are unable to see shipment records?",
  "type": "single",
  "options": {
    "A": "The Grant Access Using Hierarchies option on Shipment Sharing Settings was incorrectly disabled by the admin.",
    "B": "The Role Hierarchy implicit sharing was incorrectly disabled by the admin.",
    "C": "The Ownership-based sharing rule for Shipment was incorrectly disabled by the admin."
  },
  "answer": "A"
},
{
  "question": "5 of 60. Universal Containers requested to leverage Lightning Web Components (LWC) to improve support reps' user experience. LWC will be used as view layer, and Apex classes will have the business logic. Which attention points should the development team consider when implementing this solution?",
  "type": "single",
  "options": {
    "A": "Once that Apex runs on system mode, the development team needs to enforce record visibility.",
    "B": "Create test classes including runAs to test different users accessing the data.",
    "C": "Use isShareable, isEditable, and isCreatable to enforce field permissions."
  },
  "answer": "A",
},
{
  "question": "4 of 60. Customer complaints for bad interactions with a customer support agent are logged as Cases and assigned to a human resources representative. The agent of the complaint should not see the case, but their manager should. How is this accomplished?",
  "type": "single",
  "options": {
    "A": "Case is owned by the subject of the complaint, so their manager in the role hierarchy can access the record. CRED permissions are removed on Case so the agent cannot read the case record.",
    "B": "Criteria-based Sharing Rule on Case that shares to the Role Manager and above when a custom field Assigned Agent (subject of the complaint) is not blank.",
    "C": "Trigger on Case to lookup and share to the manager of an Assigned Agent custom field (the subject of the complaint) using Apex Managed Sharing."
  },
  "answer": "C"
},
{
  "question": "3 of 60. A sales rep (John) at Universal Containers requested to update information in an account record where he has Read-Only access. John requested the Edit access permission from the owner of the record (Paul). Paul manually shared the record with John. Assuming the organization-wide default of the Account object is Public Read-Only, what is the impact in the system?",
  "type": "single",
  "options": {
    "A": "Existing AccountShare record is updated. Row Cause is \"Manual\" and Access Level is \"Read/Write\".",
    "B": "New AccountShare record is created. Row Cause is \"Owner\" and Access Level is \"Full\".",
    "C": "New AccountShare record is created. Row Cause is \"Manual\" and Access Level is \"Read/Write\"."
  },
  "answer": "C",
},
{
  "question": "2 of 60. Who can view a PDF that is uploaded to the Files Home private library by a user?",
  "type": "single",
  "options": {
    "A": "The user and users above them in the Role Hierarchy",
    "B": "The user and users with View All Data permission",
    "C": "Only the user"
  },
  "answer": "C"
},
{
  "question": "1 of 60. A junior account manager owns an account and creates a new opportunity to manage a complex deal. She needs the help of the product specialist and solution engineer. Given the size of this deal, she knows the account is likely to be reassigned to a senior account manager in the near future. What is the optimal way for the junior account manager to share the opportunity, given the private sharing model?",
  "type": "single",
  "options": {
    "A": "Manual share on the opportunity",
    "B": "Opportunity Team",
    "C": "Manual share on the account"
  },
  "answer": "B"
},







	
];
};
