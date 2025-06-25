window.getQuestions = function() {
    return [








{
  "question": "36 of 60. A sales rep (John) at Universal Containers requested to update information in an account record where he has Read-Only access. John requested the Edit access permission from the owner of the record (Paul). Paul manually shared the record with John. Assuming the organization-wide default of the Account object is Public Read-Only, what is the impact in the system?",
  "type": "single",
  "options": {
    "A": "Existing AccountShare record is updated. Row Cause is \"Manual\" and Access Level is \"Read/Write\".",
    "B": "New AccountShare record is created. Row Cause is \"Manual\" and Access Level is \"Read/Write\".",
    "C": "New AccountShare record is created. Row Cause is \"Owner\" and Access Level is \"Full\"."
  },
  "answer": "B",
  "explanation": "Manual sharing creates a new AccountShare record with 'Manual' RowCause. OWD is Public Read-Only, so manual sharing grants explicit Read/Write access.",
},
{
  "question": "37 of 60. Universal Containers (UC) operates worldwide, with offices in more than 100 regions in 10 different countries, and has established a very complex Role Hierarchy to control data visibility. In the new fiscal year, UC is planning to reorganize the roles and reassign account owners. Which feature should an architect recommend to avoid problems with this operation?",
  "type": "single",
  "options": {
    "A": "Partition data using Divisions",
    "B": "Skinny table",
    "C": "Deferred Sharing Recalculation"
  },
  "answer": "C",
  "explanation": "Deferred Sharing Recalculation prevents performance issues during mass role/ownership changes. Divisions (A) segment data but don't optimize sharing, and skinny tables (B) improve query performance only.",
},
{
  "question": "38 of 60. Universal Containers (UC) delivers training and courses to students and companies. UC is implementing a Salesforce Customer Community for its students granting them a Customer Community license. As part of the community requirements, UC asked to give students access to cases that are related to their account in the UC community. What is the optimum sharing technique to achieve these requirements?",
  "type": "single",
  "options": {
    "A": "Use Apex sharing to share cases with the students.",
    "B": "Create a sharing rule to share cases with the students.",
    "C": "Create a sharing set to share cases with the students."
  },
  "answer": "C",
  "explanation": "Sharing sets automatically grant access to account-related cases for community users. Apex sharing (A) requires custom code, while sharing rules (B) don't support account-based sharing for communities.",
},
{
  "question": "39 of 60. A consulting company uses the Salesforce mobile app for its field consultants and uses Case object to track customer specific consulting done by field consultants. The company also has a large number of customer service representatives who takes calls from customers on company issued desktops and uses case object to track customer issues and grievances. The company would like to capture images of customer site captured by field consultants while they are editing the case record during customer site visit. The Director of IT wants to minimize customization and promote reuseability of code artifacts wherever possible. What recommendations should an architect give to the company to implement the image capture requirement, while ensuring customer that the service rep can continue to use same lightning pages they were trained to use?",
  "type": "single",
  "options": {
    "A": "Use Lightning Component as an override for \"Edit\" action on mobile view allowing image capture feature. No Change required for desktop users.",
    "B": "Use Lightning Component as an override for \"Edit\" action on lightning experience allowing image capture feature. Detect the form factor of the device and redirect the user to the default not overridden view.",
    "C": "Create a separate button \"Edit in Mobile\", which opens a custom lightning component that will allow field consultants to add an image. No change required for desktop users."
  },
  "answer": "A",
  "explanation": "Option A provides a mobile-specific solution without affecting desktop users. It meets the requirement for minimal customization while maintaining the existing desktop experience.",
},
{
  "question": "40 of 60. Universal Containers (UC) is a non-profit organization with more than 20,000,000 members (donors). UC decided to assign those accounts to donations reps based on their regions. Donations reps ended up owning more than 50,000 donors each. The donation reps started to see significant degradation of the system performance. What is the reason for this problem?",
  "type": "single",
  "options": {
    "A": "There is an Account ownership data skew problem.",
    "B": "The donations reps’ access to the assigned accounts is wrong.",
    "C": "Salesforce sharing recalculation kicked off."
  },
  "answer": "A",
  "explanation": "Ownership skew occurs when users own disproportionate records (50,000+ donors). This strains sharing calculations and query performance. Access (B) and sharing recalculations (C) are symptoms, not root causes.",
},
{
  "question": "41 of 60. A company intends bring work from anywhere culture in a bid to improve productivity. Their sellers use wide variety of devices with different form factors. The company currently uses one page layout to display opportunity record details to the sellers. The Regional Vice President of Sales is complaining about incorrect alignment of data in opportunity records, making it difficult for some sellers. Which steps are recommended to rectify this?",
  "type": "single",
  "options": {
    "A": "Use a custom LWC override for Opportunity view action, identify form factor onLoad action and display relevant layouts based on form factors.",
    "B": "Use a visualforce override for Opportunity view action, identify the form factor onLoad action and display relevant layouts based on form factors.",
    "C": "Use Dynamic Form to define different field sections applicable for different form factors of devices."
  },
  "answer": "C",
  "explanation": "Dynamic Forms is the native solution for responsive layouts across devices. LWC/VF overrides (A/B) are overengineering for this UI alignment issue.",
},
{
  "question": "42 of 60. Universal Containers (UC) uses a custom Lightning component with an Apex class to display shipment information (custom object, Private organization-wide default). UC sales managers are complaining about two important points: Shipment records that belong to their teams can be seen by other users. Shipment amount should be visible only by managers, but sales reps are able to view it. Which feature did the development team miss that is causing the problems?",
  "type": "single",
  "options": {
    "A": "Use isShareable keyword in Apex classes to assure record visibility.",
    "B": "Use isAccessible() method in Apex classes to check field accessibility.",
    "C": "Use runAs in test class to enforce user permissions and field level permissions."
  },
  "answer": "B",
  "explanation": "The team missed field-level security checks using isAccessible() for the amount field. Record visibility issues require sharing settings, not isShareable (A). runAs (C) is for testing, not runtime security.",
},
{
  "question": "43 of 60. A sales coach at Universal Containers wants to create and share a report folder with other sales coaches. Which two permissions are required to accomplish this?",
  "type": "single",
  "options": {
    "A": "Create Report Folders and manage Reports in Public Folders",
    "B": "Create and customize Reports and Report Folders",
    "C": "Manage Reports in Public Folders and edit My Reports"
  },
  "answer": "B",
  "explanation": "Both 'Create Report Folders' (A) and 'Create and customize Reports' (B) are needed to build and share report folders. 'Manage Reports in Public Folders' (A) enables sharing, while customization (B) allows content creation.",
},
{
  "question": "44 of 60. At Universal Containers, there's a team of auditors distributed throughout the organization that all need access to high-value opportunities. With a Private sharing model, which option should an architect recommend when designing a solution for this requirement?",
  "type": "single",
  "options": {
    "A": "Create a criteria-based sharing rule to grant a public group access to high-value opportunities.",
    "B": "Add the auditors to the default Opportunity Team.",
    "C": "Put the auditors at the highest level of the Role Hierarchy."
  },
  "answer": "A",
  "explanation": "Criteria-based sharing rules automatically grant access to high-value opportunities for the auditors' public group. Role Hierarchy (C) would grant excessive access, and Opportunity Teams (B) require manual maintenance.",
},
{
  "question": "45 of 60. What should an architect recommend to make sure that users that gained access to a custom object record through Apex managed sharing do not lose access to it when its owner is changed?",
  "type": "single",
  "options": {
    "A": "Use \"With Sharing\" keyword to make sure record visibility will be considered.",
    "B": "Create a new record in _Share object with RowCause \"Manual\".",
    "C": "Create a specific Apex Sharing Reason for the custom object."
  },
  "answer": "B",
  "explanation": "Manual sharing (via _Share object) persists through owner changes. Apex Sharing Reasons (C) require re-calculation, and \"With Sharing\" (A) only enforces sharing rules at runtime.",
},
{
  "question": "46 of 60. Universal Containers has implemented Customer Community with Customer Community Plus licenses for its distributors. Some distributors requested granting specific community users (agents) to view cases submitted by other agents of the same distributor. Which feature only supports these requirements?",
  "type": "single",
  "options": {
    "A": "Permission set to grant community admin permission",
    "B": "Delegate external user",
    "C": "Partner super user"
  },
  "answer": "C",
  "explanation": "Partner Super User enables agents to view records from same distributor. Other options grant excessive permissions or don't meet the sharing requirement.",
},
{
  "question": "47 of 60. An architect from a previous project implemented Platform Shield Encryption for a company. However, based on a recent audit, the company's Privacy Team identified three additional fields in their Account Records (Billing Street, Billing City and Phone) that needs to be secure and protected. How should an architect proceed with this new policy change?",
  "type": "single",
  "options": {
    "A": "Use Classic Encryption to ensure all fields are protected and contact Salesforce for help with encryption verification.",
    "B": "Use Encryption Policy and wait for an email from Salesforce indicating the field values are encrypted.",
    "C": "Use Encryption Policy and contact Salesforce to update the existing records so that their field values are encrypted."
  },
  "answer": "C",
  "explanation": "Encryption Policy (Platform Shield) is required for standard fields like Billing Street. Salesforce must retroactively encrypt existing data, while new entries auto-encrypt."
},
{
  "question": "47 of 60. An architect from a previous project implemented Platform Shield Encryption for a company. However, based on a recent audit, the company's Privacy Team identified three additional fields in their Account Records (Billing Street, Billing City and Phone) that needs to be secure and protected. How should an architect proceed with this new policy change?",
  "type": "single",
  "options": {
    "A": "Use Classic Encryption to ensure all fields are protected and contact Salesforce for help with encryption verification.",
    "B": "Use Encryption Policy and wait for an email from Salesforce indicating the field values are encrypted.",
    "C": "Use Encryption Policy and contact Salesforce to update the existing records so that their field values are encrypted."
  },
  "answer": "C",
},
{
  "question": "48 of 60. Universal Containers (UC) has a mostly Private organization-wide default, as it's a core principle of UC to respect client data privacy. UC has implemented complex processes for granting access to Opportunity data. A few key members of the sales reporting team need to always be able to see, but not change, Opportunity data for all opportunities. What should an architect recommend as an approach to meet these requirements?",
  "type": "single",
  "options": {
    "A": "Give the View All Data permission to the Sales Reporting profile.",
    "B": "Create a permission set that grants the View All Data permission.",
    "C": "Create a permission set that grants the View All permission for Opportunity."
  },
  "answer": "C",
},
{
  "question": "49 of 60. A custom ServiceFeedback object is used to collect partner feedback. ServiceFeedback records should be available to all internal employees. The organization-wide default (OWD) is set to Private for external users so partners cannot see feedback from other partner users. How should the architect give access to all internal employees?",
  "type": "single",
  "options": {
    "A": "Create an owner-based sharing rule for all Service Feedback records owned by partners.",
    "B": "Ensure all the internal users are above the partners in the Role Hierarchy.",
    "C": "Set the OWD for Internal Users to Public Read-Only."
  },
  "answer": "C",
},
{
  "question": "50 of 60. Universal Containers created a public group with certain sales engineers to help on complex deals, as well as a sharing rule to grant access to these opportunities. The Opportunity organization-wide default is Private. What is the impact of these sharing settings?",
  "type": "single",
  "options": {
    "A": "Sales engineers and their managers in the Role Hierarchy will also have access to these records.",
    "B": "Subordinates of managers who have sales engineers in the public group will also have access to these records.",
    "C": "Other sales engineers who are in the same Role Hierarchy as the sales engineers of the public group will also have access to these records."
  },
  "answer": "A",
},
{
  "question": "52 of 60. A sales rep at Universal Containers was added to an opportunity team with Read/Write permissions. Which action is she allowed to perform in the opportunity?",
  "type": "single",
  "options": {
    "A": "Update opportunity stage.",
    "B": "Replace opportunity owner.",
    "C": "Add/remove members in the opportunity team."
  },
  "answer": "A",
},
{
  "question": "51 of 60. A banking company uses a VIP Flag in the Contact Object that they want only Private Banking Reps to see. Which approach is recommended to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Change the type of VIP Flag field to a picklist, define a new record type for the Contact Object and make the picklist field available for Editing.",
    "B": "Define a page layout for Contact Object and add the VIP Flag field for that layout. Remove the VIP Flag field from other layouts.",
    "C": "Set the Field Level Security for the VIP Flag field so that it is visible to Private Banking Rep Profile."
  },
  "answer": "C",
},
{
  "question": "53 of 60. The sales managers at Universal Containers requested their teams to define each user's role on their accounts in order to provide an easy way to establish accountability and collaboration. Sales managers also requested that sales associates should only get the following permissions: 1. Read access to the accounts. 2. Read access to cases related to the accounts. 3. No access to deals related to the accounts. The sales associates may be granted access to opportunities when needed. Assuming the overall sharing model of the organization is Private and no sharing rules are configured on the Account object, how should an architect achieve these requirements?",
  "type": "single",
  "options": {
    "A": "Use Account teams to define access to accounts as well as opportunities and cases related to accounts.",
    "B": "Use Account teams and Case teams. No configuration required for the Opportunity object.",
    "C": "Use Account teams and sharing rules to share cases with sales associates. No change required to the Opportunity object."
  },
  "answer": "A",
},
{
  "question": "54 of 60. Universal Containers has a Performance Feedback custom object (Private organization-wide default) used by customers to report any issues with delivery drivers. Feedback should not be visible to the driver, but any feedback records should be accessible to people above them in the Role Hierarchy, even when the driver changes managers. Assuming managers have Read access to the Feedback object, which three steps are necessary to solve these requirements?",
  "type": "single",
  "options": {
    "A": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and create an ownership-based sharing rule.",
    "B": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver's manager when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager.",
    "C": "Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and use the Role Hierarchy to give access to a driver's manager."
  },
  "answer": "B",
},
{
  "question": "55 of 60. Universal Containers (UC) has 200 distributors that use Partner Community licenses. Partners cannot see each other's data, but UC is also trying to give more visibility to data for certain individuals at a distributor. Which scalable option gives users in the partner manager role access to all case and container records for partner users at the same distributor?",
  "type": "single",
  "options": {
    "A": "Create an ownership-based sharing rule.",
    "B": "Give Super User permission to the individual partner manager users.",
    "C": "Create sharing sets."
  },
  "answer": "B",
},
{
  "question": "56 of 60. Universal Containers implemented Sales Cloud and requested that sales agents have access to products and prices the company sells, and to be able to create opportunities for its customers. What should the organization-wide defaults be for pricebook?",
  "type": "single",
  "options": {
    "A": "Public Read-Only",
    "B": "View",
    "C": "Use"
  },
  "answer": "A",
},
{
  "question": "57 of 60. Which method should be used to grant an unrelated group of users access to a set of records?",
  "type": "single",
  "options": {
    "A": "Role Hierarchy",
    "B": "Sharing Sets",
    "C": "Public Groups"
  },
  "answer": "C",
},
{
  "question": "Universal Containers has expanded to sell virtual containers for data storage. Virtual container work orders are provisioned immediately by the system and therefore cannot be changed by a sales rep. What is an optimal approach to implement these requirements?",
  "type": "single",
  "options": {
    "A": "Implement a sharing rule that changes access for all Work Orders to Read.",
    "B": "Change the Record Type/Page Layout assignment for Work Orders to Read Only.",
    "C": "Remove the Work Order Edit permission from the Sales Representative profile."
  },
  "answer": "C",
},
{
  "question": "Users at Universal Containers are complaining that a field has disappeared from the Account page after deploying its latest project. The page layout has not changed with this deployment. How should the admin troubleshoot this issue?",
  "type": "single",
  "options": {
    "A": "Log in as a user and check several Accounts to isolate the problem records.",
    "B": "Review changes to Account record types.",
    "C": "View field Accessibility in the Object Manager.",
    "D": "Run a Who Sees What report, filtering on Account."
  },
  "answer": "C",
},
{
  "question": "Universal Containers (UC) has implemented Service Cloud. There is a flag field on the case object that marks a case as (Sensitive). UC requested that this flag can be viewed by all users who have access to the case but only be edited by the assigned case assessor. The case assessor is a lookup field on the case object. How can an architect achieve this requirement?",
  "type": "single",
  "options": {
    "A": "Permission set",
    "B": "Custom lightning component",
    "C": "Object permissions",
    "D": "Field-level security"
  },
  "answer": "D",
},
{
  "question": "Universal Containers requested to leverage Lightning Web Components (LWC) to improve support reps' user experience. LWC will be used as view layer, and Apex classes will have the business logic. Which attention points should the development team consider when implementing this solution?",
  "type": "single",
  "options": {
    "A": "Once that Apex runs on system mode, the development team needs to enforce record visibility.",
    "B": "Create test classes including runAs to test different users accessing the data.",
    "C": "User isShareable, isEditable, and isCreatable to enforce field permissions."
  },
  "answer": "A"
},
{
  "question": "A support representative at Universal Containers created a report to view all her open cases that have been created in the past seven days and saved the report in the Private Reports folder. Who can view and run the report?",
  "type": "single",
  "options": {
    "A": "The report owner and users with the View All Data permission.",
    "B": "The report owner and any users who have been given access to the My Private Reports folder.",
    "C": "The report owner."
  },
  "answer": "C",
},
{
  "question": "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC also wants to ensure that leads are only edited/reassigned by the lead owner. What organization-wide default (OWD) approach should be recommended to help UC implement these requirements?",
  "type": "single",
  "options": {
    "A": "Implement a Public Read Only/Transfer OWD on Lead.",
    "B": "Implement a Private OWD on Lead.",
    "C": "Implement a Public Read/Write OWD on Lead.",
    "D": "Implement a Public Read Only OWD on Lead."
  },
  "answer": "B",
},
{
  "question": "Universal Containers has a customer that meets criteria for two Enterprise Territory Management territories (Portugal and Southern Europe). What is necessary to assign opportunities to a territory for this account?",
  "type": "single",
  "options": {
    "A": "Create an Apex class that implements Filter-Based Opportunity Territory Assignment.",
    "B": "Create a criteria-based sharing rule on the Opportunity to assign it to a territory.",
    "C": "Create a Process Builder Process that updates the Territory field on the Opportunity.",
    "D": "The territory with the highest TerritoryType Priority is automatically assigned to the Opportunity."
  },
  "answer": "D",
},
{
  "question": "If a Case requires involvement from one of the Legal team, the Case owner adds one of the corporate lawyers to the Legal SME field on the case. Since cases are private, how can we grant a lawyer access to a specific case when their assistance is needed?",
  "type": "single",
  "options": {
    "A": "Use Apex Managed sharing in a case Trigger that shares the record to the user identified in the Legal SME field.",
    "B": "Create a Criteria Based Sharing Rule that shares to the Corporate Legal Team Role when the legal assistance needed? field is checked.",
    "C": "Create a Criteria Based Sharing Rule that shares to the Legal Public Group when the legal assistance needed? field is checked."
  },
  "answer": "A",
},
{
  "question": "Universal Containers organization wide-defaults model is private for the Account object. A sales representative user has Create/Edit access to opportunity records. Which level of access will the sales rep have to the related account record?",
  "type": "single",
  "options": {
    "A": "Read/Create/Edit access",
    "B": "No access",
    "C": "Read/Create access",
    "D": "Read-only access"
  },
  "answer": "D",
},
{
  "question": "Universal Containers organization wide-defaults model is Private for the Account object. A sales rep owns two opportunities in one Account. The Sales Rep profile has Create/Edit access to opportunity records. Which level of access will the sales rep have to the related Account record?",
  "type": "single",
  "options": {
    "A": "No access",
    "B": "Read/Create/Edit access",
    "C": "Read access"
  },
  "answer": "C",
},
















	
];
};
