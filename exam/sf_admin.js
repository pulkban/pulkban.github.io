window.getQuestions = function() {
    return [


  {
    "question": "What feature should an administrator use to categorize accounts into small, medium, and large based on the dollar value in the Contract Value field?",
    "type": "single",
    "options": {
      "A": "Filter Logic",
      "B": "Detail Column",
      "C": "Group Rows",
      "D": "Bucket Column"
    },
    "answer": ["D"]
  },
  {
    "question": "Which routing option should an administrator recommend to ensure the right cases get to the correct agents for resolution?",
    "type": "single",
    "options": {
      "A": "Skills-Based Routing",
      "B": "Translation Workbench",
      "C": "Queue-Based Routing",
      "D": "Case Assignment Rules"
    },
    "answer": ["A"]
  },
  {
    "question": "Which tool allows the business to control its own assignment of work without relying on administrator teams?",
    "type": "single",
    "options": {
      "A": "Case Assignment Rules",
      "B": "Email-to-Case",
      "C": "Omni-Channel",
      "D": "Lead Assignment Rules"
    },
    "answer": ["C"]
  },
  {
    "question": "What should an administrator do to better understand data quality and record completeness for Accounts and Opportunities?",
    "type": "single",
    "options": {
      "A": "Explore AppExchange for data quality and record completeness solutions.",
      "B": "Create a report for Accounts and Opportunities highlighting missing data.",
      "C": "Subscribe the sales reps to a monthly report for accounts and opportunities.",
      "D": "Configure the key fields as required fields on the page layout."
    },
    "answer": ["A"]
  },
  {
    "question": "What should an administrator configure for two different sales processes with different stages, page layouts, and picklist values?",
    "type": "single",
    "options": {
      "A": "Validation rules",
      "B": "Public groups",
      "C": "Separate record types and sales processes",
      "D": "Different page layouts only"
    },
    "answer": ["C"]
  },
  {
    "question": "How should a Platform Administrator implement a document merge solution in Salesforce?",
    "type": "single",
    "options": {
      "A": "Download the solution from AppExchange.",
      "B": "Install a package from the Partner Portal.",
      "C": "Create a managed package in AppExchange.",
      "D": "Configure the package from Salesforce Setup."
    },
    "answer": ["A"]
  },
  {
    "question": "Where should a Platform Administrator view current fiscal year settings in Salesforce?",
    "type": "single",
    "options": {
      "A": "User Management Settings",
      "B": "Company Settings",
      "C": "Custom Settings",
      "D": "Feature Settings"
    },
    "answer": ["B"]
  },
  {
    "question": "What should a Platform Administrator configure so a VP of Sales can report on records owned by individuals in various parts of the role hierarchy?",
    "type": "single",
    "options": {
      "A": "Field-Level Security",
      "B": "Sharing Rules",
      "C": "Permission Sets",
      "D": "Restriction Rules"
    },
    "answer": ["B"]
  },
  {
    "question": "Which two automated actions are available as part of an approval process? (Choose two.)",
    "type": "multiple",
    "options": {
      "A": "Field Update",
      "B": "Email Alert",
      "C": "Autolaunched Flow",
      "D": "Chatter Post"
    },
    "answer": ["A", "B"]
  },
  {
    "question": "What should the administrator use to automatically apply discounts from Opportunities to related Opportunity Products?",
    "type": "single",
    "options": {
      "A": "Formula field",
      "B": "Flow Builder",
      "C": "Approval Process",
      "D": "Prebuilt Macro"
    },
    "answer": ["B"]
  },

{ 
  "question": "What should a Platform Administrator do after assigning the Marketing User profile to marketers so they can access Opportunities?", 
  "type": "single", 
  "options": { 
    "A": "Edit the object permissions to include Opportunity.",
    "B": "Add a custom permission set to include Opportunity.",
    "C": "Edit the role to enable Sales access.",
    "D": "Configure the assigned apps to include Opportunity."
  }, 
  "answer": ["A"] 
},
{ 
  "question": "How should a Platform Administrator prevent an Employee Agent from responding to questions about the CEO's private health plan?", 
  "type": "single", 
  "options": { 
    "A": "Configure assignment rules to assign the agent to employee data.",
    "B": "Ensure the users' permissions and field-level security restrict access to the CEO's health plan.",
    "C": "Modify the agent's instructions and guardrails to block questions related to the CEO's health plan.",
    "D": "Train the agent on employee health plans instead of the CEO's health plan."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "What could be causing support reps to see all cases on dashboards despite the Case object being private?", 
  "type": "single", 
  "options": { 
    "A": "Dashboard Subscriptions",
    "B": "Public Dashboards",
    "C": "Dashboard Filters",
    "D": "Dashboard’s running user"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "Which standard object supports roll-up summaries natively on the Account object?", 
  "type": "single", 
  "options": { 
    "A": "Opportunity",
    "B": "Contact",
    "C": "Case",
    "D": "Campaign"
  }, 
  "answer": ["A"] 
},
{ 
  "question": "Which two actions can Case escalation rules perform? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "Re-open the Case.",
    "B": "Send email notifications.",
    "C": "Re-assign the Case.",
    "D": "Change the Case Priority."
  }, 
  "answer": ["B", "C"] 
},
{ 
  "question": "How should an administrator ensure emails received from customers generate cases in the correct queue?", 
  "type": "single", 
  "options": { 
    "A": "Create an Escalation Rule to send cases to the correct queue.",
    "B": "Use a custom email service to set the owner of the case upon creation.",
    "C": "Configure Email-to-Case so emails are delivered to the correct queue.",
    "D": "Utilize a flow to identify the correct queue and assign the case."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "Which tool allows tracking how long a case sits with different teams using business hours?", 
  "type": "single", 
  "options": { 
    "A": "Escalation Rules with Business Hours",
    "B": "Record-Triggered Flows with Business Hours",
    "C": "Case Assignment Rules with Business Hours",
    "D": "Milestones with Business Hours"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How should an administrator export closed won opportunities from the last 90 days including Opportunity Name, ID, Close Date, and Amount?", 
  "type": "single", 
  "options": { 
    "A": "Data Export Service",
    "B": "Data Export Wizard",
    "C": "Data Loader",
    "D": "Data Import Wizard"
  }, 
  "answer": ["C"] 
},
{ 
  "question": "Which feature should a Platform Administrator use so the CFO can approve opportunities over $100,000 before closing?", 
  "type": "single", 
  "options": { 
    "A": "Submit for Approval button",
    "B": "Einstein Next Best Action",
    "C": "Apex Triggers",
    "D": "Flow Approvals"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "Which feature should a Platform Administrator configure to automatically add the same team members to multiple accounts?", 
  "type": "single", 
  "options": { 
    "A": "Default Account Teams",
    "B": "Sharing Rules",
    "C": "Role Hierarchy",
    "D": "Permission Sets"
  }, 
  "answer": ["A"] 
},

{ 
  "question": "What should a Platform Administrator edit to change the default Case Owner and Created By values to an integration user?", 
  "type": "single", 
  "options": { 
    "A": "Debug Logs",
    "B": "Process Automation Settings",
    "C": "Support Settings",
    "D": "Support Processes"
  }, 
  "answer": ["C"] 
},
{ 
  "question": "How should an administrator set up Campaigns to simplify reporting by month and series for networking events?", 
  "type": "single", 
  "options": { 
    "A": "Use Campaign Hierarchy where the monthly events roll up to a parent Campaign",
    "B": "Add different record types for the monthly event types",
    "C": "Create individual Campaigns that all have the same name",
    "D": "Configure campaign Member Statuses to record which event members attended"
  }, 
  "answer": ["A"] 
},
{ 
  "question": "What should a Platform Administrator use to dynamically populate real Salesforce data in an agent response from a prompt template?", 
  "type": "single", 
  "options": { 
    "A": "Flow",
    "B": "Picklists",
    "C": "Agent Instructions",
    "D": "Merge Fields"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "What should a Platform Administrator consider regarding delegated administrators?", 
  "type": "single", 
  "options": { 
    "A": "Delegated administrators can unlock users but cannot reset passwords.",
    "B": "Delegated administrators can update field-level security on standard objects.",
    "C": "Delegated administrators cannot modify permission sets.",
    "D": "Delegated administrators cannot assign users to profiles."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "What should an administrator use so Platinum Level partner cases automatically go to the Priority Support Queue?", 
  "type": "single", 
  "options": { 
    "A": "Workflow Rules",
    "B": "Case Rules",
    "C": "Assignment Rules",
    "D": "Escalation Rules"
  }, 
  "answer": ["C"] 
},
{ 
  "question": "How should a Platform Administrator provide users with individualized views of data on a dashboard?", 
  "type": "single", 
  "options": { 
    "A": "Add a Dashboard Filter to change the dashboard view.",
    "B": "Create a Dynamic Dashboard.",
    "C": "Set View Dashboard As to Me.",
    "D": "Set View Dashboard As to Another person."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "Which tool should an administrator use to import 300 accounts with contacts into Salesforce?", 
  "type": "single", 
  "options": { 
    "A": "Dataloader.io",
    "B": "Manual Import",
    "C": "Data Import Wizard",
    "D": "Data Loader"
  }, 
  "answer": ["C"] 
},
{ 
  "question": "How should an administrator require the Amount field during the negotiation stage for sales users but not managers?", 
  "type": "single", 
  "options": { 
    "A": "Create a formula field to fill in the field for managers.",
    "B": "Configure a validation rule to meet the criteria.",
    "C": "Assign the Administrator profile to the managers.",
    "D": "Make the field required for all users."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "Which Salesforce feature automates the routing of records to specific users for review and decision-making based on predefined criteria?", 
  "type": "single", 
  "options": { 
    "A": "Assignment Rules",
    "B": "Validation Rules",
    "C": "Approval Process",
    "D": "Schema Builder"
  }, 
  "answer": ["C"] 
},
{ 
  "question": "Which flow should a Platform Administrator recommend to automate a weekly process that counts the number of open cases related to an Account?", 
  "type": "single", 
  "options": { 
    "A": "Scheduled flow",
    "B": "Record triggered flow",
    "C": "Autolaunched flow",
    "D": "Automation event triggered flow"
  }, 
  "answer": ["A"] 
},

{ 
  "question": "Which two tools should an administrator use to build a guided expense report process with submissions, routing, and authorizations? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "Flow Builder",
    "B": "Quick Action",
    "C": "Validation Rule",
    "D": "Approval Process"
  }, 
  "answer": ["A", "D"] 
},
{ 
  "question": "What automated solution should an administrator use to delete records based on field values?", 
  "type": "single", 
  "options": { 
    "A": "Workflow",
    "B": "Automation Studio",
    "C": "Process Builder",
    "D": "Flow Builder"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How should a Platform Administrator help a sales manager emphasize important data and tell a compelling data story on a dashboard?", 
  "type": "single", 
  "options": { 
    "A": "Use a Text Widget.",
    "B": "Assign a new Task to each rep.",
    "C": "Use the Highlights Panel.",
    "D": "Send out a mass email."
  }, 
  "answer": ["A"] 
},
{ 
  "question": "How should an administrator grant leadership users Modify All access similar to administrators?", 
  "type": "single", 
  "options": { 
    "A": "Assign the standard Platform User profile and edit permissions.",
    "B": "Assign the standard System Administrator profile.",
    "C": "Assign the standard User profile and add a custom permission set with Modify All access.",
    "D": "Clone the standard User profile and assign a Modify All role."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "Which feature should a Platform Administrator set up to notify leadership about opportunities over $250,000 with more than a 75% probability of closing?", 
  "type": "single", 
  "options": { 
    "A": "Guidance for Success",
    "B": "Big Deal Alerts",
    "C": "Reports and Dashboards",
    "D": "Similar Opportunities"
  }, 
  "answer": ["B"] 
},
{ 
  "question": "Which Einstein feature should an administrator recommend to help sales reps prioritize and close more deals?", 
  "type": "single", 
  "options": { 
    "A": "Einstein Activity Capture",
    "B": "Einstein Search Personalization",
    "C": "Einstein Lead Scoring",
    "D": "Einstein Opportunity Scoring"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "Where should an administrator update picklist options that vary based on the kind of Opportunity?", 
  "type": "single", 
  "options": { 
    "A": "Fields and relationships",
    "B": "Related lookup filters",
    "C": "Picklist value sets",
    "D": "Record type"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "Which two types of pages can an administrator customize using Lightning App Builder for the Salesforce mobile app? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "App page",
    "B": "Record page",
    "C": "User page",
    "D": "Dashboard page"
  }, 
  "answer": ["A", "B"] 
},
{ 
  "question": "Why is a rehired sales rep no longer able to see the same Opportunity records after reactivation?", 
  "type": "single", 
  "options": { 
    "A": "The records were manually shared with the user.",
    "B": "The Opportunity stage was changed to Closed Lost.",
    "C": "Permission sets were removed during deactivation.",
    "D": "The Record Type was changed."
  }, 
  "answer": ["A"] 
},
{ 
  "question": "How should a Platform Administrator rename the standard Account Type field label to 'Tier'?", 
  "type": "single", 
  "options": { 
    "A": "Edit the Type field and change the name.",
    "B": "Use Rename Tabs and Labels.",
    "C": "Build a custom field called Tier and delete Type.",
    "D": "Create a global picklist value set."
  }, 
  "answer": ["B"] 
},

{ 
  "question": "How does Agentforce SDR help in nurturing leads?", 
  "type": "single", 
  "options": { 
    "A": "Generate a dynamic call script and talking points for human sales reps.",
    "B": "Autonomously negotiate pricing and close deals.",
    "C": "Analyze sales rep performance and provide coaching tips.",
    "D": "Answer lead questions with responses grounded in company data."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "Which two steps are required to create a many-to-many relationship between two custom objects? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "Create two lookup relationships on the new object.",
    "B": "Create two master-detail relationships on the new object.",
    "C": "Create URL fields on a custom object.",
    "D": "Create a junction object."
  }, 
  "answer": ["B", "D"] 
},
{ 
  "question": "How should an administrator show a Specific Search Engine picklist only when Lead Source is 'Search Engine' in a screen flow?", 
  "type": "single", 
  "options": { 
    "A": "Create the picklist and use conditional visibility.",
    "B": "Use a validation rule.",
    "C": "Use an assignment element.",
    "D": "Use a decision element and second screen."
  }, 
  "answer": ["A"] 
},
{ 
  "question": "What should a Platform Administrator do if the Activity Timeline is missing from the Account record page?", 
  "type": "single", 
  "options": { 
    "A": "Add the standard Activities component to the Account Lightning record page.",
    "B": "Update the user's permissions for Activity Timeline.",
    "C": "Run a report to verify activities exist.",
    "D": "Add a button for Activity Timeline in Object Manager."
  }, 
  "answer": ["A"] 
},
{ 
  "question": "Which tool should an administrator use to limit the kinds of reports users can create?", 
  "type": "single", 
  "options": { 
    "A": "Hide Report Types",
    "B": "Report Folder Sharing",
    "C": "Standard Report Types",
    "D": "Joined Report"
  }, 
  "answer": ["A"] 
},
{ 
  "question": "What is the most likely reason support agents lack context when Agentforce escalates cases?", 
  "type": "single", 
  "options": { 
    "A": "Support users are missing the Agentforce User permission set.",
    "B": "The case page layout is missing the agent history component.",
    "C": "The agent instructions prevent history from being saved.",
    "D": "The handoff creates a new case instead of transferring the existing session."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How should an administrator display a custom text area field in the highlights panel on the Account page?", 
  "type": "single", 
  "options": { 
    "A": "Mark this item for later review.",
    "B": "Drag the field to the highlights panel in page layout editor.",
    "C": "Create a custom compact layout in Object Manager.",
    "D": "Make the field required and move it to the top."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "What are three ways to restore a text area field accidentally removed from a page layout? (Choose three.)", 
  "type": "multiple", 
  "options": { 
    "A": "Drag the field back from the fields palette.",
    "B": "Click undo or cancel.",
    "C": "Restore original page layout from a sandbox.",
    "D": "Clone the layout from another profile and use Save As.",
    "E": "Restore from the recycle bin within 15 days."
  }, 
  "answer": ["A", "B", "D"] 
},
{ 
  "question": "How should a Platform Administrator track different marketing initiatives like emails, trade shows, and webinars with different information requirements?", 
  "type": "single", 
  "options": { 
    "A": "Create a custom report type.",
    "B": "Create a custom field on Campaign.",
    "C": "Create record types and page layouts for each campaign type.",
    "D": "Use campaign hierarchies."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "Why does a prompt template give different responses each time it is tested?", 
  "type": "single", 
  "options": { 
    "A": "Prompt Builder caches the response.",
    "B": "Each run creates a unique call to the large language model.",
    "C": "The prompt is only sent after deployment.",
    "D": "Prompt Builder simulates calls instead of using the real model."
  }, 
  "answer": ["B"] 
},

{ 
  "question": "How should an administrator enable management to share dashboard components in Chatter?", 
  "type": "single", 
  "options": { 
    "A": "Select Download Chart on the component.",
    "B": "Enable dashboard feed tracking.",
    "C": "Enable reporting snapshots.",
    "D": "Set View Dashboard As to the dashboard viewer."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "Which three options should an administrator use to ensure sales reps complete key Opportunity fields while progressing through stages? (Choose three.)", 
  "type": "multiple", 
  "options": { 
    "A": "Use Flow to mark fields required.",
    "B": "Configure Opportunity Path.",
    "C": "Mark fields required on the page layout.",
    "D": "Use validation rules.",
    "E": "Enable guided selling."
  }, 
  "answer": ["B", "D", "E"] 
},
{ 
  "question": "What is a valid Agentforce use case in a sales organization?", 
  "type": "single", 
  "options": { 
    "A": "Generate cold calls",
    "B": "Automating lead qualification",
    "C": "Providing web chat bots",
    "D": "Automating all marketing content"
  }, 
  "answer": ["B"] 
},
{ 
  "question": "Which two configurations allow different picklist values for sales and marketing users? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "One record type, two profiles, one picklist",
    "B": "Two permission sets, one record type, one picklist",
    "C": "One page layout, two record types, one picklist",
    "D": "Two page layouts, one record type, two picklists"
  }, 
  "answer": ["A", "C"] 
},
{ 
  "question": "Why might a production flow that should create records not be working?", 
  "type": "single", 
  "options": { 
    "A": "The flow is read only.",
    "B": "The flow is inactive.",
    "C": "The flow trigger is missing.",
    "D": "The flow URL is deactivated."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "Why does a sales manager receive a 'We couldn't find the record you're trying to access' message when opening a dashboard folder URL?", 
  "type": "single", 
  "options": { 
    "A": "The sales manager does not have the correct permission set.",
    "B": "The sales manager needs the correct sales user profile.",
    "C": "The Dashboard folder is set to Private.",
    "D": "View access has not been granted to the Dashboard folder."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How should an administrator ensure only the correct Opportunities enter an approval process?", 
  "type": "single", 
  "options": { 
    "A": "Add Specific Entry Criteria.",
    "B": "Use Dynamic Forms to display a button.",
    "C": "Create a screen flow.",
    "D": "Add a validation rule."
  }, 
  "answer": ["A"] 
},
{ 
  "question": "How should an administrator proceed with activation of an upcoming critical update?", 
  "type": "single", 
  "options": { 
    "A": "Activate the critical update in production.",
    "B": "Activate the critical update in a sandbox.",
    "C": "Allow the critical update to auto-activate in a sandbox.",
    "D": "Allow the critical update to auto-activate."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "What should an administrator do to give users access to Lightning Experience when using a custom profile based on Minimum Access?", 
  "type": "single", 
  "options": { 
    "A": "Enable the Enhanced Interface for User Access Policies.",
    "B": "Create a Lightning App Builder page.",
    "C": "Add Lightning component to a layout.",
    "D": "Assign the Lightning Experience User permission."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How can an administrator validate an error message a VP of Sales is receiving on an Opportunity record?", 
  "type": "single", 
  "options": { 
    "A": "Review the sharing model.",
    "B": "View the setup audit trail.",
    "C": "Log in as the user.",
    "D": "Edit the page layout."
  }, 
  "answer": ["C"] 
},

{ 
  "question": "How should a screen flow be distributed so service reps can access it from Cases?", 
  "type": "single", 
  "options": { 
    "A": "Lightning Page",
    "B": "Home Page",
    "C": "Page Layout",
    "D": "Component Filter"
  }, 
  "answer": ["A"] 
},
{ 
  "question": "Which action instruction follows best practices for a createCase action in Agentforce?", 
  "type": "single", 
  "options": { 
    "A": "This action provides the ability to create a new case record in the Salesforce system.",
    "B": "Use this action to create a new Salesforce Case record. The goal is to document a customer's issue in the system.",
    "C": "Creates a new case record in the system for any type of customer inquiry.",
    "D": "The createCase code snippet is configured to create a case."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "What type of relationship should exist between Shipments and Accounts if shipments should remain after an Account is deleted?", 
  "type": "single", 
  "options": { 
    "A": "Accounts should have a master-detail to Shipments.",
    "B": "Shipments should have a master-detail to Accounts.",
    "C": "Accounts should have a lookup to Shipments.",
    "D": "Shipments should have a lookup to Account."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How should an administrator ensure the Billing System field is always completed on Invoice records?", 
  "type": "single", 
  "options": { 
    "A": "Define an approval process for the field.",
    "B": "Create a Process Builder to set the field.",
    "C": "Make the field universally required.",
    "D": "Require the field on the record type."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "Which automation solution should an administrator use so that when an Opportunity is Closed Won, all other open Opportunities on the same Account become Closed Lost?", 
  "type": "single", 
  "options": { 
    "A": "Quick Action",
    "B": "Workflow Rule",
    "C": "Flow Builder",
    "D": "Outbound Message"
  }, 
  "answer": ["C"] 
},
{ 
  "question": "What should a Platform Administrator do to allow Tasks to be related to the Course custom object?", 
  "type": "single", 
  "options": { 
    "A": "Create a sharing rule for the Course object.",
    "B": "Select Allow Activities on the Course object.",
    "C": "Add the Open Activities related list to the Course page layout.",
    "D": "Grant Edit access to the Task object."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "What should a Platform Administrator configure so only members can see and access a sensitive discussion forum in Salesforce?", 
  "type": "single", 
  "options": { 
    "A": "Private Chatter Channel",
    "B": "Chatter Private Group",
    "C": "Chatter Public Group",
    "D": "Chatter Unlisted Group"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "Which Flow should be used to standardize inconsistent Lead Source values across records?", 
  "type": "single", 
  "options": { 
    "A": "Segment triggered flow",
    "B": "Record triggered flow",
    "C": "Schedule-triggered flow",
    "D": "Screen flow"
  }, 
  "answer": ["C"] 
},
{ 
  "question": "How should an administrator automate a weekly process that counts open cases related to an Account?", 
  "type": "single", 
  "options": { 
    "A": "Create a workflow rule with an outbound message.",
    "B": "Set up a scheduled process in Process Builder.",
    "C": "Configure a scheduled flow in Flow Builder.",
    "D": "Use a process to update the Account when edited."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "Which standard feature helps route Cases to a Tier 2 team if they are not addressed within a specific amount of time?", 
  "type": "single", 
  "options": { 
    "A": "Milestones and Entitlements",
    "B": "Omni-Channel Routing",
    "C": "Auto Response Rules",
    "D": "Escalation Rules"
  }, 
  "answer": ["D"] 
},


{ 
  "question": "What should an administrator be aware of before changing an Auto Number field to a Text field?", 
  "type": "single", 
  "options": { 
    "A": "Changing Auto Number to Text is prevented.",
    "B": "Existing field values will be deleted.",
    "C": "Existing field values will be converted.",
    "D": "Existing field values will remain unchanged."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "What is the best practice when writing a prompt template for troubleshooting technical issues?", 
  "type": "single", 
  "options": { 
    "A": "Write detailed prompts with nested conditions.",
    "B": "Use highly specialized abbreviations.",
    "C": "Focus on high-level theoretical concepts.",
    "D": "Use natural language and concise instructions."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "Which feature should a Platform Administrator use to determine why a Lightning record page is loading slowly?", 
  "type": "single", 
  "options": { 
    "A": "Lightning Analytics",
    "B": "Lightning Usage App",
    "C": "Lightning Page Visibility Rule",
    "D": "Lightning App Builder Analytics"
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How should an administrator create a report that shows only a sales rep's own Orders?", 
  "type": "single", 
  "options": { 
    "A": "Set the Opportunity Filter for Primary as True.",
    "B": "Filter by Opportunity Owner equals $USER.",
    "C": "Set Organization Wide Defaults of Order object to Private.",
    "D": "Save the report in a private folder."
  }, 
  "answer": ["B"] 
},
{ 
  "question": "During a grounding check, what additional risk does Agentforce examine?", 
  "type": "single", 
  "options": { 
    "A": "Incompatible data types",
    "B": "Prompt injection risks",
    "C": "Encrypted fields",
    "D": "Web verification risks"
  }, 
  "answer": ["B"] 
},
{ 
  "question": "How should a Platform Administrator create a dashboard that shows data specific to each customer support team?", 
  "type": "single", 
  "options": { 
    "A": "Create separate dashboards for each team.",
    "B": "Create widgets specific to each team.",
    "C": "Use dashboard filters to show specific team data.",
    "D": "Add cross filters to switch teams."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "Which two features should an administrator use to open Opportunity access for collaborative deals when OWD is Private? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "Sharing set",
    "B": "Role hierarchy",
    "C": "Profiles",
    "D": "Sharing rules"
  }, 
  "answer": ["B", "D"] 
},
{ 
  "question": "What is the best practice for writing topic instructions for an Agentforce topic?", 
  "type": "single", 
  "options": { 
    "A": "Write instructions generically.",
    "B": "Include many example questions.",
    "C": "Keep instructions minimal.",
    "D": "Add business-specific language."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How should an administrator implement a process requiring manager and finance approval for large won Opportunities?", 
  "type": "single", 
  "options": { 
    "A": "Create a screen flow.",
    "B": "Add a Lightning web component.",
    "C": "Create a quick action with emails.",
    "D": "Create an approval process with steps."
  }, 
  "answer": ["D"] 
},
{ 
  "question": "How should an administrator ensure Lead Source is selected before Opportunity Stage can be set to Closed Won?", 
  "type": "single", 
  "options": { 
    "A": "Configure a validation rule.",
    "B": "Make Opportunity Stage read only.",
    "C": "Make Lead Source a dependent picklist.",
    "D": "Modify Opportunity Stage to depend on Lead Source."
  }, 
  "answer": ["A"] 
},

{ 
  "question": "Which two solutions can an administrator find on AppExchange to enhance an organization? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "Components",
    "B": "Consultants",
    "C": "Customers",
    "D": "Communities"
  }, 
  "answer": ["A", "B"] 
},
{ 
  "question": "Which tool should an administrator use to surface important values based on the Opportunity stage?", 
  "type": "single", 
  "options": { 
    "A": "Path Key Fields",
    "B": "Opportunity Processes",
    "C": "Dynamic Forms",
    "D": "Workflow Rules"
  }, 
  "answer": ["A"] 
},
{ 
  "question": "Which reporting feature allows multiple picklist values to be categorized into a single value?", 
  "type": "single", 
  "options": { 
    "A": "Bucket Column",
    "B": "Unique Count",
    "C": "Report Filter",
    "D": "Chart"
  }, 
  "answer": ["A"] 
},
{ 
  "question": "What should an administrator do to identify why a flow launched by a process is not working properly?", 
  "type": "single", 
  "options": { 
    "A": "Use the native debug feature in Flow Builder.",
    "B": "Review the setup audit trail.",
    "C": "Set up email logs.",
    "D": "Review debug logs with flow logging."
  }, 
  "answer": ["A"] 
},
{ 
  "question": "Which tool should an administrator use to reassign all Accounts and Opportunities from one sales rep to another while keeping teams intact?", 
  "type": "single", 
  "options": { 
    "A": "Data Loader",
    "B": "Mass Transfer Tool",
    "C": "Data Import Wizard",
    "D": "Dataloader.io"
  }, 
  "answer": ["B"] 
},
{ 
  "question": "How should an administrator handle different business hours for Pacific Time and Eastern Time support reps?", 
  "type": "single", 
  "options": { 
    "A": "Create one set of business hours per time zone.",
    "B": "Adjust current business hours.",
    "C": "Set temporary business hours.",
    "D": "Allow reps to set business hours manually."
  }, 
  "answer": ["A"] 
},
{ 
  "question": "How should an administrator implement approval routing when there are 30 different sets of criteria for Opportunities?", 
  "type": "single", 
  "options": { 
    "A": "Create an email button.",
    "B": "Create an approval process with multiple steps.",
    "C": "Create a record-triggered flow orchestration.",
    "D": "Use a screen flow for manual routing."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "How should an administrator make the Case page more dynamic and useful for different users?", 
  "type": "single", 
  "options": { 
    "A": "Delete extra components.",
    "B": "Remove fields from record details.",
    "C": "Add component visibility filters.",
    "D": "Include more tab components."
  }, 
  "answer": ["C"] 
},
{ 
  "question": "In which two areas of the Salesforce mobile app can branding be customized? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "Record background color",
    "B": "Popups header color",
    "C": "Loading page logo",
    "D": "Header background color"
  }, 
  "answer": ["C", "D"] 
},
{ 
  "question": "What data loss considerations should an administrator keep in mind when changing a custom field type from Text to Picklist? (Choose two.)", 
  "type": "multiple", 
  "options": { 
    "A": "There will be no data loss with a global value set.",
    "B": "Assignment and escalation rules may be affected.",
    "C": "Visualforce references are automatically updated.",
    "D": "Any list view based on the custom field is deleted."
  }, 
  "answer": ["B", "D"] 
},



{
"question": "Cloud Kicks wants to ensure that every client has support based on the level of service that has been agreed on in the sales cycle. There are tiers to this support model, Gold, Silver, and Bronze. What should a Platform Administrator create to ensure that this is part of every client's account once they become a client?",
"type": "single",
"options": {
"A": "A flow to assign Entitlements",
"B": "Routing Configuration for each client",
"C": "Email to Case for each service level",
"D": "Case Assignment Rules for each client"
},
"answer": ["A"]
},
{
"question": "What are three characteristics of a master-detail relationship? Choose 3 answers.",
"type": "multiple",
"options": {
"A": "Permissions for the detail record are set independently of the master.",
"B": "The owner field on the detail records is the owner of the master record.",
"C": "Each object can have up to five master-detail relationships.",
"D": "The master object can be a standard or custom object.",
"E": "Roll-up summaries are supported in master-detail relationships."
},
"answer": ["B", "D", "E"]
},
{
"question": "A Platform Administrator for Cloud Kicks needs to ensure that only the financial records belonging to each individual user are visible on the report in order to meet scope of the data privacy requirements. How should the administrator achieve this?",
"type": "single",
"options": {
"A": "Set sharing model as Public Read/Write for the respective object(s)",
"B": "Set sharing model as Private for the respective object(s).",
"C": "Create multiple reports, each filtered to show records owned by each user.",
"D": "Use Apex sharing to hide records."
},
"answer": ["B"]
},
{
"question": "One of the sales managers at UC will be going on leave for several months. The executive wants to make sure the sales manager does not login to Salesforce while on leave.",
"type": "single",
"options": {
"A": "Reassign the user license during the leave.",
"B": "Change the login for that profile.",
"C": "Freeze the user account.",
"D": "Restrict login IP for the profile."
},
"answer": ["C"]
},
{
"question": "A new agent is being developed to help customer service reps process customer requests for a replacement product. The agent needs to call an action that takes two inputs: productId and reasonCode. Which set of agent instructions should a Platform Administrator use for these inputs, according to best practices for Agentforce instructions?",
"type": "single",
"options": {
"A": "Instructions for productId: 'The 18 character ID of the product.' Instructions for reasonCode: 'A numerical code.'",
"B": "Instructions for productId: 'The product ID. Retrieve this from the conversation history or the user's input.' Instructions for reasonCode: 'The three-digit replacement reason. This is required when the product ID is present.'",
"C": "Instructions for productId: 'ID from the product record.' Instructions for reasonCode: 'Code for the reason.'",
"D": "Instructions for productId: 'The 18 character ID of the product. Retrieve this from the conversation history or the user's input. Required.' Instructions for reasonCode: 'A three-digit code that specifies the reason for replacement. This is required only when the product ID is present.'"
},
"answer": ["D"]
},
{
"question": "The Sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure?",
"type": "multiple",
"options": {
"A": "Opportunity Stages",
"B": "Sales Quotes",
"C": "Forecasting",
"D": "Opportunity List View"
},
"answer": ["A", "C"]
},
{
"question": "The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
"type": "single",
"options": {
"A": "Record Type Assignment",
"B": "Page Layout Assignment",
"C": "Component Visibility",
"D": "Sharing Settings"
},
"answer": ["C"]
},
{
"question": "Users at Dream House Realty are only allowed to see opportunities they own. Leadership wants an enterprise-wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time. How should an administrator create the dashboard without changing any sharing settings?",
"type": "single",
"options": {
"A": "Add a filter to the dashboard to filter the opportunities by owner role.",
"B": "Update the dashboard folder settings to manager for the sales reps role.",
"C": "Create a dashboard with the running user set as someone who can see all opportunities.",
"D": "Build individual dashboards for profiles that need to see the enterprise results."
},
"answer": ["C"]
},
{
"question": "The administrator at Cloud Kicks has a Custom picklist field on Lead, which is missing on the Contact when leads are converted. Which two items should the administrator do to make sure these values are populated?",
"type": "multiple",
"options": {
"A": "Create a custom picklist field on Contact.",
"B": "Update the picklist value with a validation rule.",
"C": "Map the picklist field on the Lead to the Contact.",
"D": "Set the picklist field to be required on the Lead Object."
},
"answer": ["A", "C"]
},
{
"question": "The Sales manager at DreamHouse Realty wants the sales users to have a quick way to view and edit the Opportunities in their pipeline expected to close in the next 90 days. What should an administrator do to accomplish this request?",
"type": "single",
"options": {
"A": "Create a custom report and schedule the sales users to receive it each day as a reminder to update their opportunities.",
"B": "Enable Sales Console and show users how to open a tab for each opportunity in the pipeline that meets the requirements.",
"C": "Create a list view on the Opportunity object and recommend users switch the view to Kanban to edit by drag and drop.",
"D": "Make a new Sales dashboard and add a component that shows all opportunities that meet the criteria."
},
"answer": ["C"]
},
{
"question": "DreamHouse Realty wants a templated process with a mortgage calculator that generates leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year. Which AppExchange Item should help the administrator meet the request?",
"type": "single",
"options": {
"A": "Lightning Community",
"B": "Lightning Data",
"C": "Flow Solutions",
"D": "Bolt Solutions"
},
"answer": ["C"]
},
{
"question": "Which task is especially suited for Agentforce?",
"type": "single",
"options": {
"A": "Single-step predefined processes",
"B": "Static document generation",
"C": "Multi-step processes that need adaption to change",
"D": "Tasks without decision-making"
},
"answer": ["C"]
},
{
"question": "A Platform Administrator at Universal Containers is asked to restrict login access for users to specific hours and specific IP addresses to help minimize the risk of bad actors getting into the org. Which setting should the administrator update to accomplish this?",
"type": "single",
"options": {
"A": "Company Settings",
"B": "The user's role",
"C": "The user's profile",
"D": "Custom permission sets"
},
"answer": ["C"]
},
{
"question": "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation. Which feature should an administrator use to fulfill this requirement?",
"type": "single",
"options": {
"A": "Formula field",
"B": "Omni-Channel Supervisor",
"C": "Case Escalation Rule",
"D": "Assignment Rule"
},
"answer": ["C"]
},
{
"question": "Dream House Realty has an approval process. A manager attempts to approve the record but receives an error. What should an administrator review to troubleshoot this request?",
"type": "single",
"options": {
"A": "Add a delegated approver for the next approver in the process.",
"B": "Update the field level security to view on fields that are updated in the process.",
"C": "Check if the user in the next approver is inactive or missing",
"D": "Review the page layout to ensure the fields updated in the process are visible"
},
"answer": ["C"]
},
{
"question": "A platform admin needs to enable Agentforce for the service team. What is the most critical prerequisite for ensuring the service agents have a complete and accurate view of their customers?",
"type": "single",
"options": {
"A": "Activate Email-to-Case for the agents.",
"B": "Configure a new Service Console layout.",
"C": "Verify Data Cloud is implemented.",
"D": "Create new user profile for the agent."
},
"answer": ["C"]
},
{
"question": "Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. This process needs to be reviewed by managers and directors. Which two tools should an administrator configure?",
"type": "multiple",
"options": {
"A": "Quick Action",
"B": "Outbound Message",
"C": "Email Alert Action",
"D": "Approval Process"
},
"answer": ["B", "D"]
},
{
"question": "Cloud Kicks has been seeing exponential growth and will be hiring additional sales reps and support reps. The support team will need access to the Service Console to manage cases. How should the administrator ensure the support reps have the appropriate access to the console?",
"type": "single",
"options": {
"A": "Enable the Service Cloud User feature license for the support reps on the User Detail page.",
"B": "Create a permission set for the Service Console and assign it to the support reps.",
"C": "Build a Service Console using Lightning App Builder for the custom service profile.",
"D": "Assign the Salesforce Platform User License to the support reps."
},
"answer": ["A"]
},
{
"question": "A manager wants the sales team to update their opportunities on a regular basis. Which feature should a platform admin implement to help with this?",
"type": "single",
"options": {
"A": "Similar Opportunities",
"B": "Opportunity Update Reminders",
"C": "Big Deal Alerts",
"D": "Scheduled Reports"
},
"answer": ["B"]
},
{
"question": "Cloud Kicks has a new administrator who is asked to put together a memo detailing Salesforce uses to budget for upcoming license purchases. Where should the administrator go to find out what type of licenses CK has purchased and how many are available?",
"type": "single",
"options": {
"A": "Search for license types in Setup.",
"B": "User Licenses Related List in Company Information.",
"C": "User Management settings in Setup.",
"D": "Usage Based Entitlement Related List in Company Information."
},
"answer": ["B"]
},
{
"question": "Northern Trail Outfitters wants to ensure new Contacts are validated before they can be saved. If a user selects that the LeadSource picklist value is Other, NTO also wants to populate a custom text field called Source__c. Which validation rule should a Platform Administrator configure to meet this requirement?",
"type": "single",
"options": {
"A": "AND(LeadSource = 'Other', Source__c = '')",
"B": "AND(NOT(LeadSource = 'Other'), NOT(Source__c = ''))",
"C": "AND(ISPICKVAL(LeadSource,'Other'), ISBLANK(Source__c))",
"D": "AND(NOT(ISPICKVAL(LeadSource,'Other'))), NOT(ISBLANK(Source__c))"
},
"answer": ["C"]
},
{
"question": "The Universal Containers sales team wants a visual way to manage their opportunity pipeline that allows them to see all deals at once, track progress through sales stages, and quickly move opportunities forward. Which feature should a Platform Administrator recommend to meet these requirements?",
"type": "single",
"options": {
"A": "Set up opportunity reports with chart components and stage-based grouping.",
"B": "Create a custom dashboard with opportunity pipeline charts and stage metrics.",
"C": "Use the Kanban view for opportunities with card fields and drag-and-drop functionality.",
"D": "Configure opportunity list views with custom filters and summary fields."
},
"answer": ["C"]
},
{
"question": "Ursa Major Solar wants to roll out the Salesforce mobile app, and the first information it wants its users to see is the Top Opportunities report. What should a Platform Administrator configure to achieve this?",
"type": "single",
"options": {
"A": "Add the Reports tab to the Salesforce mobile app.",
"B": "Enable Today for the Salesforce mobile app.",
"C": "Enable Mobile Home for the Salesforce mobile app.",
"D": "Add the Dashboards tab to the Salesforce mobile app."
},
"answer": ["C"]
},
{
"question": "A user at Northern Trail Outfitters is having trouble logging into Salesforce. The user's login history shows that this person has attempted to log in multiple times and has been locked out of the organization. Which two ways should the administrator help the user log into Salesforce?",
"type": "multiple",
"options": {
"A": "Use the unlock button on the user's record detail page.",
"B": "Reset password on the user's record detail page.",
"C": "Reset the password policies to allow the user to login.",
"D": "Log in as the user to unlock the user and reset the password."
},
"answer": ["A", "B"]
},
{
"question": "Service reps in a call center do not have assigned desks. They sit at any available desk and use the computer on that desk to access Salesforce. A Platform Administrator has been asked to streamline the login process so the reps do not have to authenticate each time they log in at a different computer. Which function should the administrator use to implement this request?",
"type": "single",
"options": {
"A": "Custom Profile",
"B": "Trusted IP Ranges",
"C": "Multi-factor Authentication",
"D": "Permission Set"
},
"answer": ["B"]
},

{
"question": "Universal Containers has two sales teams, Team A and Team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How should the administrator share records owned by sales Team A with Team B?",
"type": "single",
"options": {
"A": "Hierarchical sharing",
"B": "Use Manual sharing",
"C": "Criteria based sharing",
"D": "Owner based sharing"
},
"answer": ["D"]
},
{
"question": "Cloud Kicks' management team is hoping to increase user productivity by switching to consoles instead of the current traditional Salesforce user interface. What should a Platform Administrator use to implement this request?",
"type": "single",
"options": {
"A": "App Builder",
"B": "Screen Flow",
"C": "App Manager",
"D": "Omni-Channel"
},
"answer": ["C"]
},
{
"question": "A sales rep typically has several open opportunities for each of their accounts. Which tool should a Platform Administrator suggest to the sales rep to obtain the total number of accounts associated with open opportunities in a report?",
"type": "single",
"options": {
"A": "Bucket Column",
"B": "Report Filter",
"C": "Unique Count",
"D": "Group Rows"
},
"answer": ["C"]
},
{
"question": "A Platform Administrator at Cloud Kicks is trying to set up a new user but receives an error about a duplicate username when trying to save the user record. What is causing this error to happen?",
"type": "single",
"options": {
"A": "The username was not configured in the format of an email address.",
"B": "The email address and username must be unique across all Salesforce orgs.",
"C": "The username must be unique across all Salesforce orgs.",
"D": "The username has a restricted domain name within it."
},
"answer": ["C"]
},
{
"question": "Universal Containers customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
"type": "single",
"options": {
"A": "Case Scheduled Reports",
"B": "Case Assignment Rules",
"C": "Case Dashboard Refreshes",
"D": "Case Escalation Rules"
},
"answer": ["B"]
},
{
"question": "When a qualified lead is converted, what happens to its related records?",
"type": "single",
"options": {
"A": "Records from custom objects are attached to the resulting contact, account, and opportunity records.",
"B": "Open activities only are attached to the resulting contact, account, and opportunity records.",
"C": "All activities are attached to the resulting contact, account, and opportunity records.",
"D": "Campaign history is attached to the resulting contact, account, and opportunity records."
},
"answer": ["C"]
},
{
"question": "A Platform Administrator deactivates an agent to add a new topic and action. What happens to any ongoing user conversations with the agent?",
"type": "single",
"options": {
"A": "The agent will pause the conversation and resume once reactivated.",
"B": "The agent will continue conversations using the deactivated agent until reactivated.",
"C": "The agent window automatically closes to prevent new messages.",
"D": "The agent will send a system error message as a response to any new messages."
},
"answer": ["B"]
},
{
"question": "At Cloud Kicks, when a rep needs to seek additional support help, there is a series of actions the company wants to ensure are taken. The steps include sending an email and changing the status and owner of the case. What should a Platform Administrator use to give the reps an easy way to make these updates?",
"type": "single",
"options": {
"A": "Quick Text with Email Templates",
"B": "Macros with Quick Actions",
"C": "Autolaunched Flows with Email Alerts",
"D": "Case Assignment Rules"
},
"answer": ["B"]
},
{
"question": "There are multiple system administrators at Cloud Kicks that make configuration changes. Which tool gives the system administrators the ability to track these changes?",
"type": "single",
"options": {
"A": "Health Check",
"B": "Setup Audit Trail",
"C": "Feed Tracking",
"D": "History Tracking"
},
"answer": ["B"]
},
{
"question": "A salesperson complains that the Log a Call button is missing from the highlights panel of an Opportunity page. What is the reason for this?",
"type": "single",
"options": {
"A": "The Log a Call action will appear within the Activity Component as a standard behavior rather than the highlights panel.",
"B": "The Log a Call action has not been added to the Salesforce Mobile and Lightning Experience Actions section of the page layout.",
"C": "The custom Log a Call permission is missing from the user's profile and assigned permission sets.",
"D": "The custom Log a Call permission has been disabled at the org level in Setup."
},
"answer": ["A"]
},
{
"question": "Which feature gives a sales team the ability to prioritize deals with recent updates in the List view and Kanban view?",
"type": "single",
"options": {
"A": "Big Deal Alerts",
"B": "Report Filters",
"C": "Deal Change Highlights",
"D": "Opportunity Path"
},
"answer": ["C"]
},
{
"question": "In an approval process, which feature allows a user to temporarily assign their approval responsibilities to another user for a predefined time period?",
"type": "single",
"options": {
"A": "Approval Rule",
"B": "Queue",
"C": "Delegated Approver",
"D": "Manager"
},
"answer": ["C"]
},
{
"question": "Sales reps miss key fields when filling out an opportunity record through the sales process. Reps need to move forward in stages but are unable to enter a previous stage. Which three options should the administrator use to address this need?",
"type": "multiple",
"options": {
"A": "Use Flow to mark fields required.",
"B": "Configure Opportunity Path.",
"C": "Mark fields required on the page layout.",
"D": "Use validation rules.",
"E": "Enable guided selling."
},
"answer": ["B", "D", "E"]
},
{
"question": "A sales team is having difficulty understanding which stage the app is in and what the company sales process requires of them in that stage. Which features should a platform admin implement to help the sales team quickly determine where they are in the sales process and what is required of them?",
"type": "single",
"options": {
"A": "Reports and dashboards",
"B": "Opportunity Sales Path",
"C": "Big deal alerts",
"D": "List View"
},
"answer": ["B"]
},
{
"question": "The sales reps at Cloud Kicks should be able to report on each other's account and opportunity records with the organization-wide default for account and opportunity both set to private. What should a platform admin do to achieve this?",
"type": "single",
"options": {
"A": "Create an account and opportunity report to show any owned by each other member of the sales team and save the report into a shared report folder.",
"B": "Create an owner-based sharing rule for account with sharing between public group of sales reps and read only opportunity access.",
"C": "Utilize Apex sharing to share specific account and opportunity records between the sales reps.",
"D": "Create manual sharing to share specific account and opportunity records between the sales reps."
},
"answer": ["B"]
},
{
"question": "Ursa Major Solar wants to see collaboration and updates across various Chatter groups, records, and announcements from the CEO in a single place. What should a Platform Administrator configure to achieve this?",
"type": "single",
"options": {
"A": "Chatter Group",
"B": "Chatter Daily Digest",
"C": "Chatter Feed",
"D": "Chatter Stream"
},
"answer": ["D"]
},
{
"question": "Universal Containers wants to track all stakeholders involved in its sales opportunities to ensure proper relationship management. Sales reps need to identify who has decision-making authority, who influences the buying process, and who serves as the primary contact for each deal. Which feature should a Platform Administrator configure to meet this requirement?",
"type": "single",
"options": {
"A": "Configure opportunity team members to track internal and external stakeholders.",
"B": "Set up account teams to track stakeholders across multiple opportunities.",
"C": "Use standard fields on opportunities to track stakeholder information.",
"D": "Use contact roles on opportunities to identify stakeholder involvement and influence."
},
"answer": ["D"]
},
{
"question": "A Platform Administrator at Cloud Kicks needs to temporarily remove one dashboard from a shared folder with several dashboards to make some required changes. How should the administrator achieve this?",
"type": "single",
"options": {
"A": "Remove View access to the shared folder.",
"B": "Edit the dashboard properties and move it to a private dashboards folder.",
"C": "Remove the permission set to the dashboard from the users.",
"D": "Create a private group and add the dashboard to it."
},
"answer": ["B"]
},
{
"question": "The VP of sales at AW Computing would like sales reps to check in with their top account every Monday. The VP would like a dashboard component to show the status of the check-ins. What should a Platform Administrator configure to remind the reps to contact their top account?",
"type": "single",
"options": {
"A": "Create a time-based workflow task.",
"B": "Enable the creation of recurring tasks.",
"C": "Add the email action to the page layout.",
"D": "Use a process email alert on the account."
},
"answer": ["B"]
},
{
"question": "In an approval process, what happens when a queue is selected as the approver?",
"type": "single",
"options": {
"A": "The queue requires unanimous approval from all of its members before the record is approved.",
"B": "Any member of the queue can approve or reject the record and the queue is treated as a single entity.",
"C": "Only the queue owner is notified about the approval request, not its members.",
"D": "The queue can only be used for objects that do not support individual user approvals."
},
"answer": ["B"]
},
{
"question": "The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner. What should an administrator add to the dashboard to fulfill the request?",
"type": "single",
"options": {
"A": "Bucket Column",
"B": "Dashboard Component",
"C": "Dashboard Filter",
"D": "Combination Chart"
},
"answer": ["C"]
},
{
"question": "A Platform Administrator is building an agent to help an ecommerce support team. The agent needs to call an action, named updateShippingAddress, that modifies a customer's shipping address in the system. Which set of Action Instructions should the administrator use for the updateShippingAddress action, according to best practices?",
"type": "single",
"options": {
"A": "Use this to update shipping information. It's used for any changes to a customer's address in the system.",
"B": "This action updates the customer's shipping address. It is to be used when a user wants to change their address. Only use this when a customer does not have an active order in the system.",
"C": "This action allows for the changing of a shipping address, and the goal is to make sure the address is current and accurate.",
"D": "Updates the shipping address for a customer order. The goal of the action is to modify the address on a customer's record. The agent should only use this action when the user explicitly requests to change their address."
},
"answer": ["D"]
},
{
"question": "An agent is being developed with several actions that all retrieve information from different databases. A Platform Administrator has named the actions as follows: GetCustomerInfo, GetOrderDetails, GetShippingStatus. Which best practice should the administrator follow to improve these names?",
"type": "single",
"options": {
"A": "Remove all verbs and use only nouns, such as CustomerInfo, OrderDetails, and ShippingStatus.",
"B": "Add the word 'Salesforce' to the beginning of each action name to improve context for the large language model.",
"C": "Use a consistent naming convention by starting each action with the verb 'Get'.",
"D": "Use additional related verbs, such as Find, Retrieve, or Identify."
},
"answer": ["C"]
},
{
"question": "An administrator at Cloud Kicks wants to deactivate a User who has left the company. What are two reasons that would prevent a user from being deactivated?",
"type": "multiple",
"options": {
"A": "The user is part of a territory hierarchy.",
"B": "The User is in a Custom hierarchy field.",
"C": "The User is assigned in workflow email alert.",
"D": "The User is the highest role in the role hierarchy"
},
"answer": ["A", "C"]
},
{
"question": "The administrator at Ursa Major Solar imported records into an object by mistake. Which two tools should be used to undo this import?",
"type": "multiple",
"options": {
"A": "Data Loader",
"B": "Data Import Wizard",
"C": "Mass Delete Records",
"D": "Weekly Data Export"
},
"answer": ["A", "C"]
},
{
"question": "What is the next step an agent performs when the tasks within an agentic loop are all unsatisfactory?",
"type": "single",
"options": {
"A": "Provides the best answer possible with caveats",
"B": "Gives an error message",
"C": "Routes to a live agent",
"D": "Asks for additional information"
},
"answer": ["D"]
},

{
"question": "Cloud Kicks wants dashboards for sales and service teams but the administrator does not know where to start. What should the administrator do?",
"type": "single",
"options": {
"A": "Use the Salesforce Labs Field Service Dashboards for service teams from AppExchange.",
"B": "Enable Einstein Analytics and build custom dashboards using advanced analytics tools.",
"C": "Use the Salesforce Labs CRM Dashboards for sales teams from AppExchange.",
"D": "Manually create dashboards without using any prebuilt templates or packages."
},
"answer": ["C"]
},
{
"question": "Cloud Kicks wants Agentforce to adapt its behavior based on real-time customer input. Which feature directly enables this capability?",
"type": "single",
"options": {
"A": "Data Cloud",
"B": "Custom actions",
"C": "Screen flow",
"D": "Tableau"
},
"answer": ["A"]
},
{
"question": "Which action should a Platform Administrator configure to reverse a submitted approval request and unlock the associated record when setting up an approval process?",
"type": "single",
"options": {
"A": "Final Rejection Actions",
"B": "Recall Actions",
"C": "Final Approval Actions",
"D": "Initial Submission Actions"
},
"answer": ["B"]
},
{
"question": "Which component of an approval process defines the chain of approval, determines which records can advance, and specifies where to assign approval requests?",
"type": "single",
"options": {
"A": "Process Definition Detail",
"B": "Approval Steps",
"C": "Entry Criteria",
"D": "Approval Actions"
},
"answer": ["B"]
},
{
"question": "A Platform Administrator at Cloud Kicks wants to deactivate a User who has left the company. What are two reasons that would prevent a user from being deactivated?",
"type": "multiple",
"options": {
"A": "The user is part of a territory hierarchy.",
"B": "The User is in a Custom hierarchy field.",
"C": "The User is assigned in workflow email alert.",
"D": "The User is the highest role in the role hierarchy"
},
"answer": ["A", "C"]
},
{
"question": "The administrator at Ursa Major Solar imported records into an object by mistake. Which two tools should be used to undo this import?",
"type": "multiple",
"options": {
"A": "Data Loader",
"B": "Data Import Wizard",
"C": "Mass Delete Records",
"D": "Weekly Data Export"
},
"answer": ["A", "C"]
},
{
"question": "What is the next step an agent performs when the tasks within an agentic loop are all unsatisfactory?",
"type": "single",
"options": {
"A": "Provides the best answer possible with caveats",
"B": "Gives an error message",
"C": "Routes to a live agent",
"D": "Asks for additional information"
},
"answer": ["D"]
}



	
];
};
