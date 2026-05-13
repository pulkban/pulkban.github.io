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



	
];
};
