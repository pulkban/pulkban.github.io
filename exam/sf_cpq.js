window.getQuestions = function() {
    return [







    {
      "question": "At Universal Containers, each storage container is configured as a bundle. An important property of the bundle is cubic volume. The volume selected at the bundle level must match the volume of every Product Option. Which two actions must the admin take to allow a sales rep to choose a volume that will apply to all Product Options?",
      "type": "multi-select",
      "options": {
        "A": "Create a Feature level Configuration Attribute.",
        "B": "Set up a Lookup Price Rule referencing a custom object.",
        "C": "Create a bundle level Configuration Attribute.",
        "D": "Set the Configuration Attribute with Apply to Product Options to True."
      },
      "answer": ["B", "C"]
    },
    {
      "question": "Universal Containers has a customer account for which the sales rep has negotiated a lower price for a product. The new price for the product should stay in effect for new quotes, renewal and amendment quotes. Which two individual actions could the admin take to set up a Contracted Price for this customer?",
      "type": "multi-select",
      "options": {
        "A": "Generate a Contracted Price via the Contracted checkbox on the Quote record.",
        "B": "Use a Price Action to inject the discounted price into the SBQQ_CustomerPrice__c field.",
        "C": "Populate the Generate Contracted Price field on a Quote record.",
        "D": "Create a Contracted Price record related to the desired Account."
      },
      "answer": ["A", "C"]
    },
    {
      "question": "Universal Containers wants to have quantity requirements for certain Product Options in a bundle. The Product Option's quantity must be multiplied by the quantity of the bundle product. How should the admin set this up in the bundle to meet the requirement?",
      "type": "single",
      "options": {
        "A": "Select Component as the Type field on the Product Option.",
        "B": "Select the Quantity Editable checkbox on the Product Option.",
        "C": "Select the Bundled checkbox on the Product Option.",
        "D": "Select the Multiplier checkbox on the Bundle."
      },
      "answer": "A"
    },
    {
      "question": "Universal Containers (UC) utilizes bundles to sell hardware and related accessories together as a package. Several of the accessories are component-type Options, with quantities dependent on the hardware. UC wants to begin using split Orders to manage a fulfillment process, with Orders broken out based on when items are shipped to the customer. What should UC consider before implementing split Orders?",
      "type": "single",
      "options": {
        "A": "The hardware bundle and component-type Options can be split into separate Orders without preserving the bundle structure.",
        "B": "The hardware bundle and component-type Options must be placed in the same Order together.",
        "C": "The hardware bundle and component-type Options can be split manually.",
        "D": "The hardware bundle and component-type Options can be split using the Order By field."
      },
      "answer": "B"
    },
    {
      "question": "The admin at Universal Containers receives a report from a user that checking the Contracted box on an Opportunity with a single Product fails to generate a Contract. What are two possible reasons a Contract fails to generate?",
      "type": "multi-select",
      "options": {
        "A": "The Opportunity must have a Primary Quote associated to it.",
        "B": "The Subscription Pricing field on the Product is One-time.",
        "C": "The Subscription Pricing field on the Product is blank.",
        "D": "The Subscription Conversion Behavior field on the Product is set to None."
      },
      "answer": ["A", "D"]
    },
    {
      "question": "Universal Containers requires a specific level of approval for an enterprise-level customer if a single line's Net Price is above a certain threshold. The admin has set up a Price Rule with a reference to a custom formula field on the Price Condition to update a field used to flag this Quote Line for approval. On the initial calculation, the field is not updated. When the user clicks Calculate for a second time, the field value is correctly updated from the price rule. What is the most likely cause of the issue?",
      "type": "single",
      "options": {
        "A": "The formula fields are only evaluated once during the price calculation, so this rule will not work.",
        "B": "The referenced formula field contains information that has yet to be calculated, so the Price Rule fires the second time it is evaluated.",
        "C": "The use of formula fields in Price Conditions is unsupported, so the Price Rule fires and returns an error the first time.",
        "D": "The Evaluation Scope of the Price Rule is set incorrectly to fire on the Configurator, so the Price Rule fires on the Configure Products page."
      },
      "answer": "A"
    },
    {
      "question": "Universal Containers has a bundle with many Features. In Feature A, all Product Options share the same Discount Schedule. How should the admin set up a Discount Schedule so the quantities of all Product Options in Feature A are aggregated when determining the Discount Tier?",
      "type": "single",
      "options": {
        "A": "Set the Discount Schedule on the Product Option records and mark the Cross Orders checkbox as True on the Discount Schedule.",
        "B": "Set the Discount Schedule on Product Feature A and mark the Cross Orders checkbox as True on the Discount Schedule.",
        "C": "Set the Discount Schedule on Product Feature A and mark the Cross Products checkbox as True on the Discount Schedule.",
        "D": "Set the Discount Schedule on the Product Option records and mark the Cross Products checkbox as False on the Discount Schedule."
      },
      "answer": "B"
    },
	
  {
      "question": "Universal Containers sells Subscription Products with prorated pricing dependent on the total Subscription Term as follows:\n* Product A is configured to have a 36 Month Subscription Term (SBQQ_SubscriptionTerm__c = 36) with a List Unit Price of $36,000.\n* Product B is configured to have a 1 Month Subscription Term (SBQQ_SubscriptionTerm__c = 1) with a List Unit Price of $2,000.\nEach Quote Line has a Quantity of 15. The Quote has a Subscription Term of 18 Months without a discount applied. What is the expected Prorate Multiplier and resulting Net Total for both Quote Lines?",
      "type": "single",
      "options": {
        "A": "Product A Prorate Multiplier = 1\nProduct A Net Total = $27,000\nProduct B Prorate Multiplier = 1\nProduct B Net Total = $36,000",
        "B": "Product A Prorate Multiplier = 0.5\nProduct A Net Total = $270,000\nProduct B Prorate Multiplier = 18\nProduct B Net Total = $360,000",
        "C": "Product A Prorate Multiplier = 0.5\nProduct A Net Total = $270,000\nProduct B Prorate Multiplier = 18"
      },
      "answer": "A"
    },
    {
      "question": "Universal Containers (UC) has asked their admin to add a new product selection rule to their flagship bundle. In their flagship bundle, there is a nested bundle \"Warranty\" that contains three warranty options: Gold, Platinum, and Diamond. By default, there is no warranty option selected. If a user has not set a warranty option and selects the product option \"Premium Container\" in the flagship bundle, the Diamond warranty option should automatically be selected in the child bundle. How should the UC admin set the configuration rule?",
      "type": "single",
      "options": {
        "A": "Set the configuration rule Child Bundle Condition Level to 1, set the Child Bundle Action Level to 1.",
        "B": "Set the configuration rule Child Bundle Condition Level to 1, set the Child Bundle Action Level to None.",
        "C": "Set the configuration rule Child Bundle Condition Level to None, set the Child Bundle Action Level to 1.",
        "D": "Set the configuration rule Child Bundle Condition Level to None, set the Child Bundle Action Level to None."
      },
      "answer": "A"
    },

{
  "question": "Universal Containers (UC) sells its Support SKU both as a stand-alone product and a product option within a bundle. When sold as a stand-alone product, the expected List Unit Price is $1,000. When sold as part of a bundle, UC wants to reduce the List Unit Price to $800. What should the admin do to meet the requirement?",
  "type": "single",
  "options": {
    "A": "Create a product rule to insert 800 into the SBQQ_ListPrice__c field on the quote line when the SBQQ_RequiredBy__c field is blank.",
    "B": "Enter 800 into the SBQQ_UnitPrice__c field on the product option to define a bundle specific price for the Support SKU.",
    "C": "Create a price rule to insert 800 into the SBQQ_ListPrice__c field on the quote line when the SBQQ_RequiredBy__c field is blank.",
    "D": "Enter 20 into the SBQQ_Discount__c field on the product option to reduce the price from $1,000 to $800."
  },
  "answer": "B"
},
    {
      "question": "A renewal quote has been generated through automation 45 days before the contract ends on December 31. The customer wants to increase the quantity of their monthly service subscription. The customer is unprepared to renew at the moment, but needs to arrange the quantity Increase for the last month of the contract immediately. Upon finalizing the amendment Quote and contracting the amendment Opportunity, the sales ops team has discovered that the renewal Opportunity is out of sync with the latest change. How can the sales ops team ensure the renewal Quote reflects the increased quantity?",
      "type": "single",
      "options": {
        "A": "Delete the existing Renewal Quote, and uncheck and re-check the Renewal Quoted checkbox on the Contract.",
        "B": "Delete the Renewal Opportunity, contract the amendment Opportunity again, then create a new renewal Opportunity and Quote.",
        "C": "Terminate the Contract with an and Date of November 30, and set the renewal Quote Stast Date to December 1 of this year.",
        "D": "Create an Order from the amendment Opportunity, then contract the amendment Order and refresh the renewal Quote."
      },
      "answer": "B"
    },
    {
      "question": "Sales reps at Universal Containers want to be able to filter products based on their Release Date. For example, a sales rep would like to see products with a Release Date between their input values of 11/23/04 and 01/16/07 when adding products. What should the admin create for this use case?",
      "type": "single",
      "options": {
        "A": "Configuration attributes for the earliest and latest date",
        "B": "A custom action condition for the Release Date field",
        "C": "A custom action with the Filter Source Field set to Release Date",
        "D": "A search filter for the Release Date field"
      },
      "answer": "D"
    },
  {
    "question": "Universal Containers wants to change its $500 maintenance product to be based on a percentage of subscription products in the Storage product family. The maintenance product has been updated to be priced as Percent Of Total and the percentage has been set. How should the product records be altered to meet this requirement?",
    "type": "single",
    "options": {
      "A": "Set the maintenance product Percent Of Total Category to Storage. On all Storage subscription products, set the Percent Of Total Category to Storage and set Include in Percent of Total to True.",
      "B": "Set the maintenance product Include in Percent of Total to True. On all Storage subscription products, set the Percent Of Total Category to Storage and set Include in Percent of Total to True.",
      "C": "Set the maintenance product Percent Of Total Category to Storage and set Include in Percent of Total to True. On all Storage subscription products, set the Percent Of Total Category to Storage.",
      "D": "Set the maintenance product Percent Of Total Category to Storage. On all Storage subscription products, set the Percent Of Total Category to Storage and set Exclude From Percent of Total to False."
    },
    "answer": "A"
  },
  {
    "question": "Universal Containers (UC) defines a Warranty Period in a new Products and wants to ensure that this Warranty Period is correctly stored on the Asset record. A twin field has been created on the Asset record. UC contracts from the Order. When leveraging the twin field functionality to pass this information to the Asset record, on which object should the admin create a twin field?",
    "type": "single",
    "options": {
      "A": "Order Product",
      "B": "Product Option",
      "C": "Quote Line",
      "D": "Opportunity Product"
    },
    "answer": "C"
  },
  {
    "question": "Universal Containers has a Product that requires a price of USD 100 and EUR 95 in the 2022 Price Book. When the Product is selected under a bundle, the price should be included as part of the bundle. How should the admin meet this requirement?",
    "type": "single",
    "options": {
      "A": "Create a Product Option record and set the Unit Price field to 100 and the Currency field to USD. Create a Product Option record and set the Unit Price field to 95 and the Currency field to EUR. On both Product Option records, set the Required field to True.",
      "B": "Change the Price Book Entries for the Product in the 2022 Price Book to 100 USD and 95 EUR. On the Product Option, set the Selected field to True.",
      "C": "Change the Price Book Entries for the Product in the 2022 Price Book to 100 USD and 95 EUR. On the Product Option, set the Bundled field to True.",
      "D": "Change the Price Book Entries for the Product in the 2022 Price Book to 100 USD and 95 EUR. On the Product Option, set the System field to True."
    },
    "answer": "A"
  },
  {
    "question": "Universal Containers (UC) wants to organize quoted products representing different project milestones with Quote Line Groups in the Quote Line Editor. When the customer accepts the Quote, UC wants the sales operations team to generate a separate order per Quote Line Group. How should the admin meet the business requirements?",
    "type": "single",
    "options": {
      "A": "Leverage Salesforce automation to set the Ordered By field on the Quote to a picklist value that represents a custom Quote Line field.",
      "B": "Leverage Salesforce automation to select the Order by Quote Line Group field on the Quote.",
      "C": "Create a Validation Rule that prevents an Order Product from being created on an Order representing the wrong milestone.",
      "D": "Create a procedure where Sales Rep enter notes on each Quote Line to indicate which products belong on the same Order."
    },
    "answer": "B"
  },
{
  "question": "A user has created an Amendment Quote. Opportunity Product records were created for only some Quote Lines. What are two reasons that could explain this behavior?",
  "type": "multiple",
  "options": {
    "A": "The Disable Initial Quote Sync has been set to TRUE in the Installed Package Settings.",
    "B": "The Exclude from Opportunity checkbox on the Product has been set to TRUE.",
    "C": "The Price Book Entry of the Product has been set to Inactive.",
    "D": "The Quote Line optional field is set to FALSE."
  },
  "answer": [
    "A",
    "B"
  ]
},
  {
    "question": "Admins at Universal Containers (UC) created an automation that selects the Renewal Forecast and Renewal Quoted checkboxes when a Contract is activated. However, UC has found that amendments to the Contract fail to update the Renewal Opportunity. What is the explanation for this result?",
    "type": "single",
    "options": {
      "A": "The Quote generated by Renewal Quoted is impeding data flow from the amendment to the Renewal.",
      "B": "Contracts must be deactivated before amendments will update the Opportunity.",
      "C": "The Opportunity Products generated by Renewal Forecast are impeding data flow from the amendment to the renewal.",
      "D": "Renewal Quoted must be selected after Renewal Forecast has been selected."
    },
    "answer": "A"
  },
  {
    "question": "A sales rep notices on Opportunities that only some Opportunity Products are synched from Quotes. This discrepancy causes inaccuracies in the pipeline. Which three troubleshooting steps should the admin take to resolve the issue?",
    "type": "multiple",
    "options": {
      "A": "Ensure the Quote's Primary checkbox has a value of False.",
      "B": "Ensure the Quote's Primary checkbox has a value of True.",
      "C": "Ensure the Opportunity's Primary Quote lookup is populated.",
      "D": "Ensure the Quote's Opportunity lookup is populated.",
      "E": "Ensure the Quote's Account lookup is populated."
    },
    "answer": [
      "B",
      "C",
      "D"
    ]
  },
  {
    "question": "Universal Containers sends a company PDF brochure with each Quote to potential customers. Sales reps attach the brochure to each email sent. What should the admin do to simplify this process?",
    "type": "single",
    "options": {
      "A": "Create an HTML Template Content record for the PDF and include it in a Template Section.",
      "B": "Manually attach the PDF as an Additional Document on each Quote the sales rep sends.",
      "C": "Upload the PDF into the Documents object folder named Output Attachments.",
      "D": "Add the PDF as a required Additional Document on the Quote Template."
    },
    "answer": "D"
  },
  {
    "question": "Universal Containers has four Price Rules with different Calculator Evaluation Events and Evaluation Orders. Which rule will evaluate first?",
    "type": "single",
    "options": {
      "A": "Rule C with Evaluation Order of 20; and Calculator Evaluation Event of Before Calculate",
      "B": "Rule D with Evaluation Order of 5, and Calculator Evaluation Event of On Calculate",
      "C": "Rule B with Evaluation Order of 20, and Calculator Evaluation Event of On Initialization",
      "D": "Rule A with Evaluation Order of 10, and Calculator Evaluation Event of Before Calculate"
    },
    "answer": "B"
  },
  {
    "question": "An admin is creating a Product Rule with an Advanced Condition. How should the admin reference a specific Error Condition record in the text of the Advanced Condition field?",
    "type": "single",
    "options": {
      "A": "Value of the Condition # field",
      "B": "Salesforce ID of the Error Condition record",
      "C": "API name of the field in the Tested Field",
      "D": "Value of the Index field"
    },
    "answer": "B"
  },
  {
    "question": "Universal Containers uses over 45,000 different container Product records with CPQ. When a sales rep views the Add Products page, a list of the first 2,000 Products is displayed in a disorganized manner. The product management team wants the products to display in collapsible groups based on the product family. How should a CPQ specialist enable this functionality from the Salesforce CPQ managed package configuration settings?",
    "type": "single",
    "options": {
      "A": "Check the Solution Groups Enabled checkbox, set Object to Quote Line, and set Name Field to Product Family.",
      "B": "Select Product Family in the Product Search Plugin field in Plugins.",
      "C": "Select Product Family in the Product Results Group Field Name field in Additional Settings.",
      "D": "Add the Product Family field to the Search Results Field Set on the Product object."
    },
    "answer": "C"
  },
{
  "question": "Universal Containers wants to show a Monthly Price column on the Quote Document if the Quote has Payment Terms of Net 30. In addition to creating the Monthly Price Line Column, which two configurations are needed to satisfy this requirement?",
  "type": "multiple",
  "options": {
    "A": "Include Monthly Price in the Quote Line Editor Field Set.",
    "B": "Create an additional Line Items section without the Monthly Price field.",
    "C": "Create a custom checkbox formula field indicating if the Payment Terms are Net 30.",
    "D": "Set the Conditional Print Field on the Line Column record."
  },
  "answer": [
    "C",
    "D"
  ]
},
{
  "question": "Universal Containers has an add-on Product that can only be sold as part of bundles. Which two steps should the admin take to meet this requirement?",
  "type": "multiple",
  "options": {
    "A": "Set the Component checkbox to TRUE on the add-on Product record.",
    "B": "Create a Product Option record referencing the add-on Product for each bundle.",
    "C": "Set the Customer Community Availability picklist on the add-on Product to Never.",
    "D": "Create a Product Feature record referencing the add-on Product."
  },
  "answer": [
    "A",
    "B"
  ]
},
{
  "question": "A Universal Containers user states that a Configuration Attribute value can be set up during the initial configuration, but the value is absent when the user reconfigures. What should the admin check to ensure the Configuration Attribute value is properly saved?",
  "type": "single",
  "options": {
    "A": "A twin field must be created on the Quote Line object.",
    "B": "A twin field must be created on the Quote object.",
    "C": "A twin field must be created on the Product object.",
    "D": "A twin field must be created on the Product Option object."
  },
  "answer": "A"
},
{
  "question": "Universal Containers has a fixed bundle with selected Product Options. After selecting the bundle, the user should bypass the configuration process. How should the admin set up the bundle to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Set the bundle product record fields Configuration Type to Required and Configuration Event to Always.",
    "B": "Set the bundle product record fields Configuration Type to Disabled and Configuration Event to Always.",
    "C": "Set the bundle product record fields Configuration Type to Allowed and Configuration Event to Add.",
    "D": "Set the bundle product record fields Configuration Type to Allowed and Configuration Event to Always."
  },
  "answer": "B"
},
{
  "question": "Universal Containers (UC) licenses shipping software that is sold for a fixed price based on each quantity tier as seen in the table below. For example, buying eight licenses would cost a total of $1,800 rather than multiplying unit price by quantity. Further discounts on this product are unavailable.\n\n| Licenses | Price |\n|---|---| \n| 1-5 | $1,000 |\n| 6-10 | $1,800 |\n| 11-20 | $3,000 |\n| 21-50 | $5,000 |\n| 50+ | $8,000 |\n\nWhich three steps should the admin take to set up this pricing? {{sf_cpq8.jpg}}",
  "type": "multiple",
  "options": {
    "A": "Set Pricing Method to Fixed Price on the Product record.",
    "B": "Set Non Discountable to True on the Product record.",
    "C": "Create a Slab Discount Schedule for the Product for each quantity tier with a different discount for each tier.",
    "D": "Set Pricing Method to Block on the Product record.",
    "E": "Create Block Pricing records on the Product for each quantity tier with a different price for each tier."
  },
  "answer": [
    "B",
    "D",
    "E"
  ]
},
{
  "question": "Universal Containers has created a Discount Schedule with the Override Behavior set to All Tiers and applied it to a Product. A sales rep then adds this Product to a Quote, manually changes the discount percent of a Discount Tier, and saves the Quote. At what point during the sales process can the sales rep be assured that the override amount will be unaffected by changes the admin may make to the original Discount Schedule?",
  "type": "single",
  "options": {
    "A": "The Save or Quick Save buttons are clicked.",
    "B": "The Quote status has changed to Approved.",
    "C": "Override values are subject to Discount Schedule updates made by the admin.",
    "D": "The Opportunity status has changed to Proposal/Price Quote."
  },
  "answer": "A"
},
{
  "question": "An admin has implemented a new CPQ business requirement in a sandbox. They have created new products and used them to construct a bundle. The admin has also created a Product Rule that automatically selects Product Options when the user selects a specific Configuration Attribute. In which sequence should the admin migrate the records related to the new CPQ functionality in order to maintain record relationships?",
  "type": "single",
  "options": {
    "A": "Products, Configuration Attributes, Product Options, Product Rules, Configuration Rules",
    "B": "Products, Configuration Attributes, Product Rules, Configuration Rules, Product Options",
    "C": "Products, Product Options, Configuration Attributes, Product Rules, Configuration Rules",
    "D": "Configuration Attributes, Products, Product Options, Product Rules, Configuration Rules"
  },
  "answer": "A"
},
{
  "question": "The Require Approved Quote package-level setting prevents CPQ from generating records for which object?",
  "type": "single",
  "options": {
    "A": "Contract",
    "B": "Order",
    "C": "Quote Document",
    "D": "Contracted Price"
  },
  "answer": "B"
},
{
  "question": "An admin wants to map Configuration Attribute values to Quote Lines that are for parent bundle products only. The fields are set up to correctly map between Quote Lines and Product Options. Which setup will ensure this condition is met?",
  "type": "single",
  "options": {
    "A": "On the child options, Apply Immediately is False and Apply Immediately Context is Always.",
    "B": "On the Configuration Attribute, Auto-Select is False.",
    "C": "On the Configuration Attribute, Apply to Product Options is False.",
    "D": "On the bundled parent, Apply to Product Options is False."
  },
  "answer": "A"
},
{
  "question": "Northern Trail Outfitters has two different user profiles that need to see different Quote Line fields in the Quote Line Editor. How should the admin configure CPQ so users automatically see the desired fields in the Quote Line Editor?",
  "type": "single",
  "options": {
    "A": "Create two field sets on the Quote Line object representing each profile, and create a text formula field with the API name EditLinesFieldSetName on the Quote object that returns the appropriate field set name based on the user's profile.",
    "B": "Create two field sets on the Quote object representing each profile, and create a text formula field with the API name HeaderFieldSetName on the Quote object that returns the appropriate field set name based on the user's profile.",
    "C": "Create two field sets on the Quote Line object representing each profile, and create a text formula field with the API name HeaderFieldSetName on the Quote object that returns the appropriate field set name based on the user's profile.",
    "D": "Create two field sets on the Quote object representing each profile, and create a text formula field with the API name EditLinesFieldSetName on the Quote object that returns the appropriate field set name based on the user's profile."
  },
  "answer": "A"
},
{
  "question": "Cloud Kicks (CK) has recently phased out Product Option X and is no longer actively selling it to new customers. New customers can sign up for the current Product Option Y instead. Management has decided that CK will also migrate existing contracts to this new product version at renewal. Which steps should the admin take to achieve this?",
  "type": "single",
  "options": {
    "A": "Update the Renewal Product field on the Product and Product Options, and set the Renewal Forecast checkbox to TRUE on the Contract record.",
    "B": "Leverage a Selection Product Rule, to remove the old Product, and automatically add the new product?",
    "C": "Use a Price Rule to swap the Product Lookup on Quote Line when a Renewal Quote Line is generated.",
    "D": "On the Subscription record, change the Product Lookup to refer to the new version of the Product."
  },
  "answer": "A"
},
{
  "question": "Universal Containers sells a product which must be priced as 10% of the total of all other fixed-priced products present on a quote. Which two options represent a valid configuration to meet this requirement?",
  "type": "multiple",
  "options": {
    "A": "Pricing Method set to List and Subscription Pricing set to Percent of Total",
    "B": "Pricing Method set to Percent of Total and Subscription Pricing set to Custom",
    "C": "Pricing Method set to Custom and Subscription Pricing set to Custom",
    "D": "Pricing Method set to Percent of Total and Subscription Pricing blank"
  },
  "answer": [
    "A",
    "D"
  ]
},
{
  "question": "An admin has constructed a Price Rule that utilizes a Lookup Object and Lookup Queries. In a given scenario, two lookup records meet the query criteria for a single Quote Line. Which behavior can the admin expect in this scenario?",
  "type": "single",
  "options": {
    "A": "The Target Field maintains its original value and an error message appears in the Quote Line Editor.",
    "B": "The value from the first record sorted alphabetically by Name is applied to the Target Field.",
    "C": "The value from the record that was created most recently is applied to the Target Field.",
    "D": "The value from the second record sorted alphabetically by Name is applied to the Target Field."
  },
  "answer": "A"
},
{
  "question": "The EditLinesFieldSetName special field on the Quote object references a Field Set that directly controls which characteristic of the Quote Line Editor?",
  "type": "single",
  "options": {
    "A": "The fields that trigger a calculation event to occur.",
    "B": "The Quote Line fields that are visible.",
    "C": "The fields that appear in the Quote Line Drawer.",
    "D": "The Quote fields that may be edited."
  },
  "answer": "B"
},
{
  "question": "Universal Containers requires an output document that has Quote Terms localized in three languages selectable by the user. Which two tasks should the admin complete to set up localization of the quote PDF?",
  "type": "multiple",
  "options": {
    "A": "Create Localization records for individual Quote Terms for all three languages.",
    "B": "Set the Quote Terms field Language to the desired output language for each Quote Term.",
    "C": "Check the Enable Multi-Language Translations box in the managed package settings.",
    "D": "Create a Quote picklist field named Output Language with language codes as values."
  },
  "answer": ["A", "C"]
},
{
  "question": "Universal Containers has a single Price Book for several currencies. The admin is creating a Primary Quote from an Opportunity and notices the Quote inherits the Price Book from the Opportunity. Which Products will be available within the Product Selection page?",
  "type": "single",
  "options": {
    "A": "All Products with Price Book Entries in the Opportunity/Quote Currency",
    "B": "All Products with Price Book Entries with a positive Price",
    "C": "All Products with Price Book Entries when Dated Exchange Rates are enabled",
    "D": "All Products with Price Book Entries in all Active Currencies"
  },
  "answer": "A"
},
{
  "question": "A subscription product that was newly created fails to display in the Product Selection screen when users search for it. What are three possible reasons for this behavior?",
  "type": "multiple",
  "options": {
    "A": "The Component checkbox is TRUE on the Product record.",
    "B": "The Optional checkbox is TRUE on the Product record.",
    "C": "The Product is missing a Pricebook Entry for the Quote's Pricebook.",
    "D": "The Active checkbox is FALSE on the Product record.",
    "E": "The Product is missing a related Cost record."
  },
  "answer": ["A", "C", "D"]
},
{
  "question": "Universal Containers sells a monthly subscription service with tiered pricing: Total Price - $1,000 for the first 100 units, $1,000 plus $9 per unit above 100, $4,600 plus $8 per unit above 500, $8,600 plus $7 per unit above 1,000. Which approach will allow the Quote Line's List Price to reflect these tiers?{{sf_cpq7.jpg}}",
  "type": "single",
  "options": {
    "A": "Create a Discount Schedule with Type = Slab and Discount Unit = Amount.",
    "B": "Create a Discount Schedule with Type = Range and Discount Unit = Price.",
    "C": "Set the Product Pricing Method = Block and Create Block Prices.",
    "D": "Set the Product's Pricing Method = List and Create Block Prices."
  },
  "answer": "C"
},
{
  "question": "Universal Containers has a Standard Warranty product that is priced as a Percent of Total subscription product. It is priced as 25% of the Net Price of all Shipping Container products added to the Quote. When generating a partial Order via the Create Order button, the admin notices the Standard Warranty was absent from the Order Product selection page. What should the admin do to allow the Standard Warranty product to create an Order Product?",
  "type": "single",
  "options": {
    "A": "Create one Standard Warranty Quote Line for every Shipping Container Quote Line on the Quote.",
    "B": "Select any Shipping Container product on the Order Product selection page to automatically generate a Standard Warranty Order Product on the Order.",
    "C": "Set the Product Family picklist on the Standard Warranty product's Product record to Services.",
    "D": "Ensure that the Standard Warranty Quote Line's Start Date and End Date match the Order's Start Date and End Date."
  },
  "answer": "A"
},
{
  "question": "Universal Containers (UC) sells Product A with a tiered pricing model using a discount schedule with three discount tiers. UC signed an agreement that gives a client a 50% discount on Product A with a flat rate for the next calendar year, overriding the current discount schedule. Which set of actions would meet these requirements?",
  "type": "single",
  "options": {
    "A": "Create a price book for this client with a price book entry at half the price for Product A and create a Flow that assigns this price book to all opportunities for this client.",
    "B": "Create a product rule that clears the discount schedule and injects 50% into the Additional Discount field on the quote line for Product A when the account associated with the quote is this client.",
    "C": "Create a price rule that applies the 50% discount to the List Price and inserts it into the Customer Price field on the quote line when the account associated with the quote is this client.",
    "D": "Create a discount schedule with a single discount tier at 0% discount and associate it with a Contracted Price giving 50% discount to Product A on this client's account record."
  },
  "answer": "A"
},
{
  "question": "Universal Containers only sells lid Products as part of a container Product. The admin wants to hide all lid Products from Product Selection. How should the admin set up lid Products?",
  "type": "single",
  "options": {
    "A": "Set the Product Family value to Accessory.",
    "B": "Include lid Products in the description of container Products.",
    "C": "Check the Hidden checkbox.",
    "D": "Check the Component checkbox."
  },
  "answer": "A"
},
{
  "question": "A sales rep at Universal Containers is adjusting pricing for, a subscription Product on a new business Quote. The Subscription Term is 24 months. The Product's Default Subscription Term is 12 months. The Quantity is 10. The List Unit Price is $120. If a 10% Volume Discount, 20% Additional Discount, and 5% Partner Discount are applied, what are the values at each step in the standard price waterfall?",
  "type": "single",
  "options": {
    "A": "Regular Unit Price: $216.00, Customer Unit Price: $168.00, Net Unit Price: $156.00",
    "B": "Regular Unit Price: $216.00, Customer Unit Price: $172.80, Net Unit Price: $164.16",
    "C": "Regular Unit Price: $108.00, Customer Unit Price: $168.00, Net Unit Price: $156.00",
    "D": "Regular Unit Price: $108.00, Customer Unit Price: $86.40, Net Unit Price: $82.08"
  },
  "answer": "B"
},
{
  "question": "A sales user generated a Renewal Opportunity with Opportunity Products by using the Renewal Forecast checkbox on the Contract. Near the end of the Contract, the sales user navigates to the Renewal Opportunity and uses the New button from the Quotes Related List. The sales user notices the Renewal Quote is missing some of the renewable Products. Preserve Bundle Structure on the Contract is set to True. What are two ways a sales user should generate an accurate Renewal Quote?",
  "type": "multiple",
  "options": {
    "A": "Clone the original Quote and update Quote Type to Renewal.",
    "B": "Clone the original Opportunity using the Clone with Products button and use the New Quote button in the Quote related list.",
    "C": "Create Renewal Quotes using the Renew Contracts button from the Account's Contract Related List.",
    "D": "Create Renewal Quotes using the Renewal Quoted checkbox on the Contract."
  },
  "answer": ["C", "D"]
},
{
  "question": "A user has added multiple bundles to the Quote. Each bundle consists of Product Options of the Product Families: Hardware, Licenses, Maintenance. On the output document, different line columns need to be rendered that contain the Products of each Family. Moreover, the Product Options of each Family need to be rendered separately for each bundle. Which two steps should the admin take to meet the requirement?",
  "type": "multiple",
  "options": {
    "A": "Construct a formula field on the Quote Line object that returns the bundle's Name and Number, and use this field in the Group field on the Line Item section.",
    "B": "Populate the Sort Order field on each Product record to properly sort the Quote Lines within each section.",
    "C": "Create a different Line Item section for each Product Family and leverage the Conditional Print field to show the correct products.",
    "D": "Create a different Line Item section for each Product Family, and leverage the Filter field to show the correct products."
  },
  "answer": ["A", "D"]
},
{
  "question": "A user created a Quote containing two Products. The Subscription Pricing field on Product A is blank. Product B has Subscription Pricing set to Percent of Total and both Products share the same Percent of Total Category. When the Contract is renewed, both Products are shown in the renewal Quote, but Product A has a Net Total of zero. Why does Product A have a Net Total of zero?",
  "type": "single",
  "options": {
    "A": "Product A is an Asset that the customer already owns.",
    "B": "Include Net-New Products in Maintenance must be flagged in CPQ Package settings.",
    "C": "Renewal Model was set to Asset Based at the Account Level.",
    "D": "The Asset Conversion behavior on the Product must be set to Allow Renewals."
  },
  "answer": "A"
},

{
  "question": "An admin is setting up multiple Option Constraints. When configuring the bundle, a user should be unable to select Product B unless the user has also selected Product A. What are two steps the admin must take to set up the Option Constraint?{{sf_cpq6.jpg}}",
  "type": "multiple",
  "options": {
    "A": "The Active checkbox should be set to True.",
    "B": "Check Prior Purchases should be set to False.",
    "C": "Option Constraint Group should be populated.",
    "D": "Type should be Dependency."
  },
  "answer": ["A", "D"]
},
{
  "question": "Universal Containers is rolling out a new version of its Premier Support offering named Premier Pro. The sales operations team wants to ensure that when a sales rep renews an existing Contract with Premier Support, it is replaced with Premier Pro. What does the admin need to do to support this business requirement?",
  "type": "single",
  "options": {
    "A": "Set the Upgrade Target field on the Premier Support Product record to Premier Pro.",
    "B": "Set the Renewal Product field on the Premier Support Product record to Premier Pro.",
    "C": "Create a Price Rule to replace Premier Support Quote Lines with Premier Pro.",
    "D": "Create a Report of all Renewal Quotes with Premier Support Product and replace Quote Lines with Premier Pro."
  },
  "answer": "B"
},
{
  "question": "A user is renewing a Contract that was uploaded during a data migration. There is no Opportunity or Quote associated to the Contract. After renewing the Contract, the user has noticed that the Price Book on the Renewal Opportunity and Quote is incorrect. What should the admin do to resolve this issue?",
  "type": "single",
  "options": {
    "A": "Build Automation to automatically populate the correct Price Book on the Renewal Quote.",
    "B": "Populate the Renewal Pricebook ID field on the Contract.",
    "C": "Populate the Opportunity or Quote Price Book Id field on the Contract.",
    "D": "Associate an Order with the correct Price Book to the Contract before renewing."
  },
  "answer": "A"
},
{
  "question": "An admin wants Configuration Attribute X to appear on the configuration page of bundle Y. The value selected will drive a Selection Product Rule and be listed in a Line Item Column in the output document. On which objects will the admin need to create the Configuration Attribute X custom field to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Configuration Attribute and Quote",
    "B": "Product Option and Quote",
    "C": "Product Option and Quote Line",
    "D": "Configuration Attribute and Product Option"
  },
  "answer": "C"
},
{
  "question": "An admin created a dynamic bundle and needs a Product Rule to limit which products users see when configuring the bundle. Which type of Product Action should the admin create to ensure that only a specific set of products may be selected for the dynamic bundle?",
  "type": "single",
  "options": {
    "A": "Enable",
    "B": "Default Filter",
    "C": "Show",
    "D": "Optional Filter"
  },
  "answer": "B"
},
{
  "question": "Universal Containers Implemented CPQ Contract Amendment functionality via the Amend button on the Opportunity. Since an Account can have many different Contracts, the admin implemented a Contract Name custom field to allow the user to enter identifying information on each Contract record. How can the admin ensure that the user is presented with the custom Contract Name field when the user initiates an Amendment?",
  "type": "single",
  "options": {
    "A": "Add the custom Contract Name field into the Active Contract Lookup Field Set on the Contract object.",
    "B": "Add the custom Contract Name field into the Active Contract Lookup Field Set on the Opportunity object.",
    "C": "Create a custom Page Layout and add the custom Contract Name field to the layout.",
    "D": "Create a custom Field Set on Contract and add the custom Contract Name fields to the Field Set."
  },
  "answer": "A"
},
{
  "question": "Universal Containers wants to give a 25% discount on a specific Product Option purchased in the Big Box bundle. In which two ways could the admin configure CPQ to automatically apply this discount?",
  "type": "multiple",
  "options": {
    "A": "Set Discounted by Package to TRUE on the Product Option for the bundle.",
    "B": "Create a Price Rule that applies the 25% discount when the product is added as part of the bundle.",
    "C": "Set the Option Discount (%) field on the Product Feature for the bundle.",
    "D": "Set the Option Discount (%) field on the Product Option for the bundle."
  },
  "answer": ["B", "D"]
},
{
  "question": "An admin has created a bundle with four Product Options for Products A, B, C, and D. When configuring the bundle, the user should not be allowed to select both Product C and Product D at the same time. How should the admin set up Bundle A to accomplish this?",
  "type": "single",
  "options": {
    "A": "Create a Product Feature and set both Min Options and Max Options to 1.",
    "B": "Create an Option Constraint and set Type = Exclusion.",
    "C": "Create an Option Constraint and set Type = Dependency.",
    "D": "Create a Product Feature and set both Min Options and Max Options to 4."
  },
  "answer": "B"
},
{
  "question": "How should the admin ensure Universal Containers' users can generate output documents in Microsoft Word format?",
  "type": "single",
  "options": {
    "A": "Set the Allow Output Format Change checkbox on the Quote Template.",
    "B": "Create duplicate Template Sections in Microsoft Word format.",
    "C": "Set the Allow Output Format Change checkbox on each user In User Settings.",
    "D": "Create a second Quote Template in Microsoft Word format."
  },
  "answer": "A"
},

{
  "question": "In what way does Smart Approvals expedite the approval process?",
  "type": "single",
  "options": {
    "A": "Rejected Quotes that are resubmitted within previously approved values go directly to the person who rejected them.",
    "B": "Quotes within defined thresholds will be automatically approved.",
    "C": "Approving a Quote will auto-approve any lesser-discount Quotes related to the same Opportunity.",
    "D": "Quotes with multiple steps in the approval chain go directly to the highest approver required."
  },
  "answer": "A"
},
{
  "question": "Universal Containers sells a total of 100 Products. There are 80 Products that are generally available for selection by all users (General Access). The remaining 20 Products should only be available to a certain group of users (Special Access). Which Product Selection and Price Book strategy should the admin utilize to meet the requirement?",
  "type": "single",
  "options": {
    "A": "Create one Price Book that contains all 100 Products. Create a custom Product field to designate General Access and/or Special Access. Utilize Hidden Search Filters to support dynamic Product visibility based on the level of User access.",
    "B": "Create two Price Books: one General Access Price Book with the 80 generally available Products, and one Special Access Price Book with the 20 Special Access Products. Create automation to populate the appropriate Price Book ID into the SBQQ__QuotePricebookId__c on the Opportunity.",
    "C": "Create one Price Book that contains all 100 Products. Create a Validation Rule on the Quote object to prevent selection of a Special Access Product based on the level of User access.",
    "D": "Create two Price Books: one General Access Price Book with the 80 generally available Products, and one Special Access Price Book with all 100 Products. Use Guided Selling to assign the appropriate Price Book based on the level of User access."
  },
  "answer": "D"
},
{
  "question": "An admin has created a Flow to automatically generate the renewal Opportunity and Quote when a user activates the Contract. The Renewal Pricing Method is set to List. The original Quote contains only standalone fixed-price subscription products and non-subscription products. What should the user see on the renewal Quote?",
  "type": "single",
  "options": {
    "A": "All Quote Line items will be pulled through from the original Quote.",
    "B": "Optional products from the original Quote will pull into the renewal.",
    "C": "Additional discounts from the original Quote will automatically populate on the renewal.",
    "D": "The renewal Quote start date will be the Contract end date plus one day."
  },
  "answer": "D"
},
{
  "question": "An admin has created a Product and defined Price Dimensions for yearly segments. They want the Product to appear unsegmented when it is first added to a Quote, with the option to segment when needed. How should the admin meet this requirement?",
  "type": "single",
  "options": {
    "A": "Create a Quote formula field named StartSegmented__c that returns 0.",
    "B": "Set the Display Order of the Desegment Line action to 1.",
    "C": "Set the Product's Default Pricing Table to Standard.",
    "D": "Set the Price Dimension's Type to One-Time."
  },
  "answer": "C"
},
{
  "question": "An admin has created a text field Configuration Attribute for Bundle A. The admin wants the attribute to start with a dynamic value the moment the configuration page loads. Which steps should the admin take to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Create a text field on the Quote Line object with the same API name as the Configuration Attribute field. Create a Price Rule to target the Quote Line field to give it a value.",
    "B": "Create a formula text field on the Quote, constructing the formula to return the desired default value. Update the Configuration Attribute Default Field to identify the Quote formula field.",
    "C": "Create a Flow to update the Product Option field that is used for the Configuration Attribute value. Set the process to trigger upon new record creation.",
    "D": "Create a Price Rule to target the Product Option field that is used for Configuration Attribute to give it a value. Ensure the end user selects Apply Rules in the Configurator."
  },
  "answer": "C"
},
{
  "question": "Universal Containers has a high volume of contracts that are renewed each year. Recently, a number of orders have failed to generate a contract despite those orders being activated and containing subscription-based products. Where should the admin look to identify the source of the error?",
  "type": "single",
  "options": {
    "A": "Record Jobs",
    "B": "Debug Logs",
    "C": "Apex Jobs",
    "D": "Paused & Failed Flow Interviews"
  },
  "answer": "B"
},
{
  "question": "An admin creates a Search Filter for Product Code that has a predefined Filter Value of Green and an operator of \"starts with.\" If the Search Filter is visible, how can sales reps interact with the filter on the Product Selection screen?",
  "type": "single",
  "options": {
    "A": "Sales reps can delete the text to ignore the filter.",
    "B": "Sales reps can replace the text, but are unable to leave the required field blank.",
    "C": "Sales reps can change the operator from \"starts with\" to \"contains.\"",
    "D": "Sales reps can see the filter, but are unable to alter the filter text."
  },
  "answer": "A"
},
{
  "question": "Universal Containers wants its users to be able to apply Additional Discounts in the Line Editor at both the Quote and Group level. Which two steps should the admin take to fulfill this requirement?",
  "type": "multiple",
  "options": {
    "A": "Add Additional Disc. (%) to the Line Editor Field Set on the Quote object.",
    "B": "Add Additional Disc. to the Line Editor Field Set on the Quote Line object.",
    "C": "Add Additional Disc. to the Segmented Line Editor Field Set on the Quote Line object.",
    "D": "Add Additional Disc. (%) to the Line Editor Field Set on the Quote Line Group object."
  },
  "answer": [
    "A",
    "D"
  ]
},
{
  "question": "The admin at Universal Containers recently created a new custom field referenced on the Target Field on a Price Action in a Price Rule. While testing the Price Rule, the admin noticed that the Price Action failed to populate the custom field. The admin checked the CPQ Package Setting and noticed that the Triggers Disabled checkbox was checked. After unchecking Triggers Disabled, the custom field still failed to populate. How can the admin ensure this custom field can be referenced by the Calculator?",
  "type": "single",
  "options": {
    "A": "The admin must reference a standard CPQ field because custom fields are unsupported with Price Rules.",
    "B": "Rename the custom field label, then recreate the Price Action to reference the new field label.",
    "C": "Revoke the Advanced Calculator and re-authorize the Calculation Service.",
    "D": "Re-execute the Post Install Script in Package Settings to ensure the Calculator Referenced Fields are up-to-date."
  },
  "answer": "D"
},
{
  "question": "Cloud Kicks (CK) uses Salesforce CPQ to streamline its sales process for customers, partners, and distributors. As part of CK's implementation, sales reps are able to specify a Partner Discount within the Quote Line Editor. Sales reps are reporting the Quote and Quote Lines' prices fail to recalculate automatically after a value is entered or changed in the Partner Discount field. The reps must press the Save or Quick Save button manually to trigger the calculation instead. How can the consultant ensure the real-time calculation is triggered in response to field changes within the Quote Line Editor?",
  "type": "single",
  "options": {
    "A": "Ensure the ChannelDiscountsOffList__c field value is set to 1.",
    "B": "Enable the Calculate Immediately field on the Pricing and Calculation tab.",
    "C": "Ensure the ApplyPartnerDiscountFirst__c field value is set to 1.",
    "D": "Enable the Partner Discount in the Calculating Fields field set."
  },
  "answer": "B"
},
{
  "question": "Universal Containers (UC) wants to sell products with monthly subscription terms. UC wants additional days to round up to the nearest month for calculating the prorated price. Which CPQ package settings should UC use to meet the business requirement?",
  "type": "single",
  "options": {
    "A": "Subscription Term Unit: Month;  Subscription Prorate Precision: Day",
    "B": "Subscription Term Unit: Month;  Subscription Prorate Precision: Month",
    "C": "Subscription Term Unit: Day;  Subscription Prorate Precision: Day",
    "D": "Subscription Term Unit: Month;  Subscription Prorate Precision: Monthly + Daily"
  },
  "answer": "B"
},
{
  "question": "Which two scenarios can be supported using Amendments?",
  "type": "multiple",
  "options": {
    "A": "Add new Products; use different End Date from existing Contract",
    "B": "Change quantities of existing Products; apply different discounts than original Quote.",
    "C": "Change quantities of existing Products; maintain same discounts as original Quote.",
    "D": "Add new Products; co-terminate to existing Contract."
  },
  "answer": ["C", "D"]
},
{
  "question": "An admin wants to generate one Asset record for each Quantity of a new Product. Currently, zero Asset records are generated for this Product when included on Quotes that are Contracted. Which setting should the admin change to meet the business requirement?",
  "type": "single",
  "options": {
    "A": "Set the CPQ Package setting Renewal Model to Asset Based.",
    "B": "Set the Account field Renewal Model to Asset Based.",
    "C": "Set the Product field Asset Conversion picklist to One per Unit.",
    "D": "Set the Product field Asset Amendment Behavior picklist to Allow Refund."
  },
  "answer": "C"
},
{
  "question": "Universal Containers sells a bundle with several pre-selected Product Options. Most of the time, sales reps leave the bundle configuration as-is, but want the ability to change the configuration if desired. What should the admin do to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Set the Configuration Type field of the bundle to a value of Required and the Configuration Event field to a value of Always.",
    "B": "Set the Configuration Type field of the bundle to a value of Allowed and the Configuration Event field to a value of Add.",
    "C": "Set the Configuration Type field of the bundle to a value of Disabled and the Configuration Event field to a value of Always.",
    "D": "Set the Configuration Type field of the bundle to a value of Allowed and the Configuration Event field to a value of Edit."
  },
  "answer": "B"
},
{
  "question": "Universal Containers has three different range discount schedules. All three have a reference to Product A through the objects shown below. Product A is an option in a bundle and has a list price of $100.  Given this scenario, what should the Net Total Price of Product A be if the user enters a Quantity of 15 on a quote where contracted pricing is applicable? {{sf_cpq5.jpg}} ",
  "type": "single",
  "options": {
    "A": "$1,320.00",
    "B": "$1,125.00",
    "C": "$1,350.00",
    "D": "$1,275.00"
  },
  "answer": "D"
},
{
  "question": "Universal Containers (UC) sells a Product in four geographical regions that comes in 10 colors and four sizes. Instead of having a separate SKU for all combinations, UC needs the sales reps to specify location, color, and size during configuration. Which CPQ functionality can the admin leverage to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Product Features",
    "B": "Option Constraints",
    "C": "Product Options",
    "D": "Configuration Attributes"
  },
  "answer": "D"
},
{
  "question": "Universal Containers (UC) has an upcoming user conference that UC wants to promote to its customers. The admin has created a Product Selection Rule to automatically add a Conference Pass Product to all new Quotes. When can a user expect the Conference Pass Product to be added to the Quote during the quoting process?",
  "type": "single",
  "options": {
    "A": "The user selects a Configuration Attribute value for a Product.",
    "B": "The user selects a Product for the Quote.",
    "C": "The user calculates a Quote.",
    "D": "The user saves the Quote."
  },
  "answer": "B"
},
{
  "question": "When sold a la carte, a processor Product should be priced at USD 200 and EUR 150. When sold as a component of a laptop bundle in USD, this processor should be priced at USD 180 and EUR 135. If Universal Containers must enable multi-currency, how should the admin implement this discounted price?",
  "type": "single",
  "options": {
    "A": "Create a new Product record with a USD 180 Price Book Entry for the discounted Processor.",
    "B": "Set the Bundled checkbox to True.",
    "C": "Set the Unit Price field on the processor Product Option to a value of 180.",
    "D": "Set the Discount % field on the processor Product Option to 10%."
  },
  "answer": "D"
},
{
  "question": "Universal Containers sells a monthly subscription service with tiered pricing: \n\n$1,000 for the first 100 units\n$1,000 plus $9 per unit above 100\n$4,600 plus $8 per unit above 500\n$8,600 plus $7 per unit above 1,000\n\nWhich pricing method should the admin select for this service?{{sf_cpq4.jpg}}",
  "type": "single",
  "options": {
    "A": "List",
    "B": "Block",
    "C": "Tiered",
    "D": "Segmented"
  },
  "answer": "C"
},
{
  "question": "When amending a contract, users have reported that the net pricing of some products is incorrect. The admin has done a preliminary investigation and found that the issue only happens on existing products when the quantity is adjusted. What is the likely cause?",
  "type": "single",
  "options": {
    "A": "A Price Rule is firing On Calculate and changing the Effective Quantity.",
    "B": "The products have a Discount Schedule and Cross Order is unselected.",
    "C": "A Price Rule is firing Before Calculate and changing the Regular Unit Price.",
    "D": "The Revised Quantity has been set on the Subscription record."
  },
  "answer": "B"
},
{
  "question": "An admin sets Asset Conversion for a non-subscription Product A to \"One per unit.\" A sales rep creates a quote that includes Product A with a quantity of 2. Sales Operations creates an order from the quote, then creates a contract from the order, then creates a renewal opportunity from the contract. Which object(s) show multiple records related to Product A?",
  "type": "single",
  "options": {
    "A": "Asset",
    "B": "Asset and Opportunity Product",
    "C": "Asset and Order Product",
    "D": "Order Product"
  },
  "answer": "A"
},
{
  "question": "What is the correct order of data import to load Products and Product bundles in CPQ?",
  "type": "single",
  "options": {
    "A": "Product Features, Product, Product Options, Option Constraints",
    "B": "Product, Product Features, Product Options, Option Constraints, Configuration Attributes",
    "C": "Product Rules, Error Conditions, Configuration Rules, Product Action",
    "D": "Product Option, Product Feature, Product, Option Constraints, Configuration Attributes"
  },
  "answer": "B"
},
{
  "question": "Universal Containers (UC) maintains a large Product catalog with more than 500 Products. Ten Products from various Product Families are frequently requested and purchased by UC's customers and must be easy to find for users. How should the admin meet the requirement?",
  "type": "single",
  "options": {
    "A": "Create a Custom Action with Search Filters that targets the Product Selection page to show only the ten Products.",
    "B": "Set the Sort Order for each of the ten Product records to a numeric value that is greater than any other Product.",
    "C": "Create a Global Action to clone a pre-made Quote containing the ten Products, and then refresh prices.",
    "D": "Create a Custom Action that targets the Product Configuration page for a bundle that contains the ten Products."
  },
  "answer": "A"
},
{
  "question": "The admin at Universal Containers has created a Configuration Attribute in a bundle that allows the end user to choose a picklist field value. A Price Rule has been created in the calculator that will set a discount based on the chosen picklist field value. This discount should be applied on the bundle Product and its Options. What should the admin do to confirm the Price Rule is working correctly when setting up the Configuration Attribute?",
  "type": "single",
  "options": {
    "A": "Ensure that the Configuration Attribute's Feature field is set to Null.",
    "B": "Ensure that Apply to Product Options has been set to TRUE.",
    "C": "Ensure that the Default Object field is set to Quote Line.",
    "D": "Ensure that Apply Immediately has been set to TRUE."
  },
  "answer": "B"
},
{
  "question": "Northern Trail Outfitters (NTO) has a growing list of Products. NTO has experienced challenges in keeping its bundled Products up-to-date and has asked the CPQ specialist if there is a way to manage its Product bundle without having to maintain additional Product Options. Which option is the most appropriate for the CPQ specialist to suggest first?",
  "type": "single",
  "options": {
    "A": "Use a Dynamic Feature for the bundle parent and create a Filter Product Rule.",
    "B": "Use the Preserve Bundle Structure checkbox in Package Settings to allow new products to be added to existing bundles.",
    "C": "Use Option Layout of Tabs for the bundle parent to expose Features on individual tabs within Product Configuration.",
    "D": "Use Nested Bundles to reduce the number of Product Options that need to be maintained when new products become available."
  },
  "answer": "A"
},
{
  "question": "Universal Containers wants to show a custom text field with the API name Additional_Text__c on the Quote Document. This field already exists and is located on the Quote object. What is the correct syntax to insert this into an HTML Template Content?",
  "type": "single",
  "options": {
    "A": "{!Quote__r.Additional_Text__c}",
    "B": "{!SBQQ__Quote__r.Additional_Text__c}",
    "C": "{!SBQQ__Quote__c.Additional_Text__c}",
    "D": "{!Quote.Additional_Text__c}"
  },
  "answer": "D"
},
{
  "question": "Universal Containers (UC) licenses shipping software that is sold for a fixed price based on each quantity tier as seen in the table below. For example, buying eight licenses would cost a total of $1,800 rather than multiplying unit price by quantity. Further discounts on this product are unavailable.\n\n[Table of Licenses and Prices]\n\nWhich three steps should the admin take to set up this pricing? {{sf_cpq3.jpg}}",
  "type": "multiple",
  "options": {
    "A": "Set Pricing Method to Fixed Price on the Product record.",
    "B": "Set Non Discountable to True on the Product record.",
    "C": "Create Block Pricing records on the Product for each quantity tier with a different price for each tier.",
    "D": "Create a Slab Discount Schedule for the Product for each quantity tier with a different discount for each tier.",
    "E": "Set Pricing Method to Block on the Product record."
  },
  "answer": ["B", "C", "E"]
},
{
  "question": "Universal Containers restricts users from selling more than 10 different products within a specific Product Feature at once. What should the admin set up to satisfy this requirement?",
  "type": "single",
  "options": {
    "A": "An Error Condition in a Product Rule should be set up to validate that all Product Option's Quantity field is less than or equal to 10.",
    "B": "The Min Quantity and Max Quantity fields on each Option should be set to zero and 10, respectively.",
    "C": "A value of 10 should be added to the Max Options field on the Feature record.",
    "D": "A Summary Variable with Filter Fields should be used in an Error Condition of a Product Alert Rule."
  },
  "answer": "C"
},
{
  "question": "Universal Containers has Products that should only be selected as part of a bundle. How should the admin configure CPQ so users are unable to add this Product outside of a bundle?",
  "type": "single",
  "options": {
    "A": "Ensure that the Configuration Event field on the Product is set to Always.",
    "B": "Remove the Product's Price Book Entry, then set Unit Price on the Product Option record.",
    "C": "Create a Product Rule with a Remove action when the Product is sold à la carte.",
    "D": "Ensure that the Component checkbox on the Product is set to TRUE."
  },
  "answer": "D"
},
{
  "question": "Universal Containers is utilizing Lookup Price Rules to pull Daily Rate values from the Rental Rates object. After activating the Price Rule, the admin notices the Daily Rate value remains blank, but the user is still able to save the quote. Which aspect of the Price Rule should the admin review to identify the underlying issue?",
  "type": "single",
  "options": {
    "A": "Confirm the API Name selected in the SBQQ__LookupObject__c field on the Price Rule record is inputted accurately.",
    "B": "Confirm the Tested Field(s) referenced in the Lookup Queries of the Price Rule exist on the Lookup object.",
    "C": "Confirm the Lookup Queries of the Price Rule are configured to pull only a single referenced value from the Lookup object.",
    "D": "Confirm the Price Conditions of the Price Rule are configured accurately based on expected behavior."
  },
  "answer": "A"
},
{
  "question": "Universal Containers (UC) sells Product A for a List Unit Price of $150. One of UC's customers, Cloud Kicks (CK), has negotiated a Contracted Price of $100 for Product A on all of its deals, and has negotiated an additional 10% discretionary discount to be applied for a deal set to close at the end of the month. If CK purchases 10 units of Product A, what are the expected unit price values at each step in the price waterfall?",
  "type": "single",
  "options": {
    "A": "List Unit Price: $150\nRegular Unit Price: $100\nCustomer Unit Price: $90\nNet Unit Price: $90",
    "B": "List Unit Price: $100\nRegular Unit Price: $100\nCustomer Unit Price: $90\nNet Unit Price: $90",
    "C": "List Unit Price: $150\nRegular Unit Price: $150\nCustomer Unit Price: $140\nNet Unit Price: $140",
    "D": "List Unit Price: $150\nRegular Unit Price: $150\nCustomer Unit Price: $100\nNet Unit Price: $90"
  },
  "answer": "A"
},
{
  "question": "Given the Discount Schedule and pricing details of the Cloud Storage Product, what is the calculated Regular Unit Price for the Quote Line? {{sf_cpq2.jpg}} ",
  "type": "single",
  "options": {
    "A": "$480.00",
    "B": "$450.00",
    "C": "$500.00",
    "D": "$470.00"
  },
  "answer": "D"
},
{
  "question": "The sales team at Universal Containers wants more control over the Product Information that is displayed on the Quote Template output. Specifically, the team wants to stop displaying the Additional Discount column based on the needs of the transaction. How should an admin meet the requirement?",
  "type": "single",
  "options": {
    "A": "Create a custom checkbox, Show_Discount__c, and reference it in the Conditional Print Field picklist for the Additional Discount Line Column.",
    "B": "Create a Special Field on the Quote object with the API Name of HideAdditionalDiscount__c and display it in the Quote Line Editor.",
    "C": "Create a custom field called HideAdditionalDiscount__c on the Template Section object, then create two Template Sections, one with HideAdditionalDiscount__c checked.",
    "D": "Create two Quote Templates, one with Show Customer Discount as TRUE and another with Show Customer Discount as FALSE."
  },
  "answer": "A"
},
{
  "question": "Universal Containers (UC) is a reseller of a Product made by another company. UC wants to price the Product based on the Cost that UC pays for it. How should the admin set the Cost for this Product?",
  "type": "single",
  "options": {
    "A": "Use a Price Rule to set the Cost field on the Quote Line.",
    "B": "Add a Cost Discount Schedule to the Product's Discount Schedule related list.",
    "C": "Create a custom Cost field on the Price Book Entry object.",
    "D": "Create a Cost record in the Product's Costs related list."
  },
  "answer": "D"
},
{
  "question": "The admin at Universal Containers wants to add some Maintenance and some Support products to the parent bundle. Maintenance and Support products should display in separate sections during configuration, with the Support products displaying above the Maintenance products. How should the admin set up the bundle to meet both requirements?",
  "type": "single",
  "options": {
    "A": "Create two Product Options: Maintenance and Support. The Support Option should have a lower value in the Number field.",
    "B": "Create two Product Options: Maintenance and Support. The Maintenance Option will always display first, due to alphabetical ordering.",
    "C": "Create two Product Features: Maintenance and Support. The Support Feature should have a lower value in the Number field.",
    "D": "Create two Product Features: Maintenance and Support. The Maintenance Feature will always display first, due to alphabetical ordering."
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) has rolled out a new product, Warranty, priced as 10% of all the hardware products on the Quote. After implementing, UC realizes that the price is calculating a percentage of the prices before discounts have been applied, whereas UC actually wants it to reflect the discounted prices. Which field should UC update to ensure the pricing is correct to meet the requirement?",
  "type": "single",
  "options": {
    "A": "Update Percent of Total Target on Warranty to Standard Warranty.",
    "B": "Update Percent of Total Base on Warranty to Net Price.",
    "C": "Update Percent of Total (%) on the hardware products to 10.",
    "D": "Update Percent of Total Category on the hardware products to Hardware."
  },
  "answer": "B"
},
{
  "question": "When selecting Product Option A inside a bundle, Universal Containers has a requirement that Product Option B's Quantity should be updated in real time. Apply Immediately has been set on Product Option A. Which settings should be used on the Price Rule to meet these requirements?",
  "type": "single",
  "options": {
    "A": "Evaluation Scope = Configurator;  Configurator Evaluation Event = Edit",
    "B": "Evaluation Scope = Calculator;  Calculator Evaluation Event = Edit",
    "C": "Evaluation Scope = Configurator;  Configurator Evaluation Event = Save",
    "D": "Evaluation Scope = Calculator;  Calculator Evaluation Event = Save"
  },
  "answer": "B"
},
{
  "question": "Universal Containers requires a specific level of approval for an enterprise-level customer if a single line's Net Price is above a certain threshold. The admin has set up a Price Rule with a reference to a custom formula field on the Price Condition to update a field used to flag this Quote Line for approval. The user has to click Calculate twice for the field to update. What is the most likely cause of the issue?",
  "type": "single",
  "options": {
    "A": "The referenced formula field contains information that has yet to be calculated, so the Price Rule fires the second time it is evaluated.",
    "B": "The Evaluation Scope of the Price Rule is set incorrectly to fire on the Configurator, so the Price Rule fires on the Configure Products page.",
    "C": "The use of formula fields in Price Conditions is unsupported, so the Price Rule fires and returns an error the first time.",
    "D": "The referenced formula field contains date/time data information that is unsupported, so the Price Rule fires sporadically."
  },
  "answer": "A"
},
{
  "question": "The admin decides to use a Price Rule to set a default 10% discount on Product A if a client has already purchased this item. Product A is an Asset product. The admin has already created Price Conditions to target Quote Lines for Product A and the appropriate Actions to apply the 10% discount. Which Summary Variable and Price Condition are needed to apply this Price Rule to Quote Lines for Product A, the item the customer purchased previously?",
  "type": "single",
  "options": {
    "A": "Create a Summary Variable summing the Quantity field on Asset records for Product A and create a Price Condition verifying that the Summary Variable is greater than the value 0.",
    "B": "Create a Summary Variable summing the Quantity field of Product A from Quote Lines and create a Price Condition verifying that the Summary Variable is greater than the value 1.",
    "C": "Create a Summary Variable counting the Asset records for Product A and create a Price Condition verifying that the Quantity field on the Quote Line is greater than the Summary Variable.",
    "D": "Create a Summary Variable counting the Asset records for Product A and create a Price Condition with the Tested Field value set to Quantity and the Tested Object value set to Asset is greater than the value 0."
  },
  "answer": "A"
},
{
  "question": "Universal Containers (UC) sells licenses set up as subscription Products. A UC sales rep has closed an Opportunity associated to a Quote with a Subscription Term of 36 months. The sales rep and a customer have agreed to a Quantity of 100 licenses for the term of the Contract. The customer wants to decrease the license count to 80 licenses after the first year. After the second year, the Contract will be amended again to increase the license count to 120 licenses. After the sales rep amends the Contract to incorporate these changes, what are the respective Quantities of the following records:\n\n*   The original Subscription\n*   The first amended Subscription\n*   The second amended Subscription",
  "type": "single",
  "options": {
    "A": "100, 80, 120",
    "B": "80, 0, 40",
    "C": "120, -20, 40",
    "D": "100, -20, 40"
  },
  "answer": "D"
},
{
  "question": "An admin wants to set up a product bundle that dynamically generates SKUs depending on what users choose during the selling process. Which three fields are required for this type of configuration?",
  "type": "multiple",
  "options": {
    "A": "Component Code Position",
    "B": "Configured Code Pattern",
    "C": "Configured Description Pattern",
    "D": "Component Description Position",
    "E": "Component Code"
  },
  "answer": ["A", "B", "E"]
},
{
  "question": "An admin has a requirement within a specific bundle to ensure that Product B is automatically selected when the user selects Product A. The admin correctly configured a Product Rule to meet this requirement, however Product B remains unselected when Product A is checked. What does the admin need to adjust so the Product Rule fires as expected?",
  "type": "single",
  "options": {
    "A": "Set Apply Immediately to True on Product Option record for Product B.",
    "B": "Set System field to True on Product Option record for Product A.",
    "C": "Set Apply Immediately to True on Product Option record for Product A.",
    "D": "Set System field to True on Product Option record for Product B."
  },
  "answer": "C"
},
{
  "question": "Universal Containers allows clients to negotiate a discount for Product A until a specified date upon Contract activation. Which three fields on the Contracted Price record should be configured to satisfy this requirement?",
  "type": "multiple",
  "options": {
    "A": "Effective Date",
    "B": "Product",
    "C": "Discount",
    "D": "Contract",
    "E": "Expiration Date"
  },
  "answer": ["B", "C", "E"]
},
{
  "question": "Universal Containers (UC) has a required Configuration Attribute for Color on all containers it sells. UC wants to display the Color of the containers in the output document. On which objects will the admin need to create the Color field to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Product Option, Quote Line",
    "B": "Product, Product Option",
    "C": "Quote Line, Asset",
    "D": "Product, Quote Line"
  },
  "answer": "A"
},
{
  "question": "An admin wants to set up a bundle product so a user can view all available options and selected options by scrolling in a single page. Which updates should the admin make to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Create Features related to the parent Product and assign all Options to one of the created Features.",
    "B": "Update Option Layout on the parent Product record to Sections.",
    "C": "Create Features related to the parent Product and assign each Feature the Option Selection Method of Dynamic.",
    "D": "Update Option Layout on the parent Product record to Wizard."
  },
  "answer": "B"
},
{
  "question": "After installing the Advanced Approvals managed package, which object is enabled out of the box to leverage all Advanced Approvals functionality?",
  "type": "single",
  "options": {
    "A": "Opportunity object",
    "B": "CPQ Quote object",
    "C": "CPQ Quote Line object",
    "D": "Core Salesforce Quote object"
  },
  "answer": "A"
},
{
  "question": "Universal Containers offers a bundle with two Products. Product A should always be added. Product B should be included initially, but can be removed by the user. What are two Option configurations that must be utilized for Product B to meet the requirement?",
  "type": "multiple",
  "options": {
    "A": "Set Bundled to FALSE.",
    "B": "Set Required to FALSE.",
    "C": "Set Quantity Editable to TRUE.",
    "D": "Set Selected to TRUE."
  },
  "answer": ["B", "D"]
},
{
  "question": "What are two ways Salesforce CPQ Advanced Approvals support obtaining approval from a group in a single Approval Step? Choose 2 answers",
  "type": "multiple",
  "options": {
    "A": "Smart Approvals can exclude group members below the approval threshold.",
    "B": "Approval must be obtained from one group member at a time.",
    "C": "Any group member may approve.",
    "D": "All group members must approve."
  },
  "answer": ["C", "D"]
},
{
  "question": "Universal Containers (UC) has a Product Family called Software. When a Configuration Attribute in the bundle is set to Perpetual, UC wants to Hide all Products with the Product Family called Software. The admin has created a Product Rule with a Configuration Rule. Which additional supporting records should the admin configure so the Product Rule meets this requirement?",
  "type": "single",
  "options": {
    "A": "An Error Condition should compare the Perpetual value against the Configuration Attribute. A Product Action should Hide each Product.",
    "B": "An Error Condition should check the Product Family value on the Product Option record. A Product Action using the Filter Field should Hide the Products.",
    "C": "An Error Condition should compare the Product Family value on the Product Option record. A Product Action should Show all Products with Product Family other than Software.",
    "D": "An Error Condition should compare the Perpetual value against the Configuration Attribute. A Product Action using the Filter Field should Hide the Products."
  },
  "answer": "D"
},
{
  "question": "Cloud Kicks (CK) wants to ensure its sales reps are able to edit non-contracted and non-activated Orders to re-distribute Order Products from one Order to another. What are two considerations the CPQ admin must take into account to meet the requirement?",
  "type": "multiple",
  "options": {
    "A": "Ensure the CPQ Orders package setting \"Allow Multiple Orders\" is selected.",
    "B": "Ensure the Edit Order Products button is exposed in the Order Page Layout.",
    "C": "Ensure the sales rep is listed as the owner of the Order.",
    "D": "Ensure the sales rep has Modify All in their profile."
  },
  "answer": ["A", "B"]
},
{
  "question": "Universal Containers must be able to create Quotes that contain Quote Lines with different Start Dates. Order Products must be separated into Orders after generation based on the Start Dates. How can a CPQ specialist meet this business requirement?",
  "type": "single",
  "options": {
    "A": "Separate Quotes must be created for each unique Start Date.",
    "B": "Set both the Order by Quote Line Group and Ordered checkboxes to True.",
    "C": "Change Default Order Start Date in CPQ Package settings to Quote Start Date.",
    "D": "Set the Order By picklist on the Quote to SBQQ__StartDate__c, and the Ordered checkbox to True."
  },
  "answer": "D"
},
{
  "question": "Universal Containers offers a maintenance subscription, Product B, that is based on the price of a separate platform license subscription, Product A. The current configuration is: {{sf_cpq1.jpg}} Both Products are being quoted for a Term of 24 months. The List Unit Price for Product A is $200. The Net Total of Product A is $2,400. What is the expected Net Total for Product B?",
  "type": "single",
  "options": {
    "A": "$120.00",
    "B": "$480.00",
    "C": "$240.00",
    "D": "$0.00"
  },
  "answer": "C"
},
{
  "question": "Universal Containers requires a subset of products to be viewed based on a button on the Quote Line Editor. Which Salesforce CPQ functionality will satisfy this requirement?",
  "type": "single",
  "options": {
    "A": "Custom Action with Search Filter",
    "B": "Product Rules of filter type",
    "C": "Price Rules",
    "D": "Custom page security plug-in script"
  },
  "answer": "A"
},
{
  "question": "Universal Containers requires sales reps to choose a Square Footage value on the Configuration Attribute on one of the bundles to hide Product Options that are incompatible for the selected square footage. When the sales reps re-configure the bundle on a Renewal Quote, the Square Footage value that was set on the Configuration Attribute of the original Quote is reset to its default value. Currently, the sales reps must select the square footage again on the Renewal Quote. How should the admin improve this process so the Configuration Attribute retains its value upon Renewal?",
  "type": "single",
  "options": {
    "A": "Set the Renewed Subscription lookup field on the renewal Quote Lines to reference the original Subscriptions.",
    "B": "Set the Renewed Asset lookup field on the renewal Quote Lines to reference the original Assets.",
    "C": "Create a Twin Field of the Square Footage field on the Asset and Subscription objects.",
    "D": "Create a Twin Field of the Square Footage field on the Quote Line object."
  },
  "answer": "C"
},
{
  "question": "When Product A is added to a Primary Quote, sales reps can view the Quote Line and make adjustments. However, an Opportunity Line Item is missing for Product A after the Primary Quote has been saved. What are two possible causes for this behavior?",
  "type": "multiple",
  "options": {
    "A": "Product A has \"Optional\" set to TRUE.",
    "B": "Product A has \"Hidden\" set to TRUE.",
    "C": "Product A has \"Component\" set to TRUE.",
    "D": "Product A has \"Exclude From Opportunity\" set to TRUE."
  },
  "answer": [
    "C",
    "D"
  ]
},
{
  "question": "Universal Containers wants to make sure that Product Option A is added when Product B is being configured and sold. Sales reps should be unable to remove Product Option A. Which field should be set for the Product Option A?",
  "type": "single",
  "options": {
    "A": "Required",
    "B": "Selected",
    "C": "Quantity Editable",
    "D": "Bundled"
  },
  "answer": "A"
},
{
  "question": "A user needs to amend a contract and change prices to reflect new discounts for existing active subscriptions and assets. How should the user achieve this?",
  "type": "single",
  "options": {
    "A": "Change the status of the contract to Draft. Make price changes on the original quote used to generate the contract and check Contracted on the Opportunity again.",
    "B": "Clone the Quote Lines which need to be updated. Modify the desired discounts on the cloned Quote Lines. Update the original Quote Lines to a Quantity of zero.",
    "C": "Create a Price Book with Price Book Entries to reflect the new prices. Populate the Contract Amendment Price Book ID field with the new Price Book ID to generate Amendment Lines with new prices.",
    "D": "Change the values for Net Price on the subscription or Price field on the asset. Amend the contract and use Refresh Prices."
  },
  "answer": "D"
},
{
  "question": "Universal Containers has a series of required PDF documents that need to be attached to the output document when generated. These PDF files are already stored in Documents. What should the admin do on the Quote Template to meet this requirement?",
  "type": "single",
  "options": {
    "A": "Select the correct Documents Folder from the Documents field on the Quote Template.",
    "B": "Create a new Template Section for each PDF document.",
    "C": "Create a new Additional Document on the Quote Template for each PDF document.",
    "D": "Reference each PDF Document in Custom Template Content records."
  },
  "answer": "C"
},
{
  "question": "Universal Containers (UC) sells Product A for an initial, fixed price without the need for renewal behavior. UC must be able to track an individual serial number on the Asset record for each Product A sold. Which Product field value should the admin set up to handle this use case?",
  "type": "single",
  "options": {
    "A": "Asset Conversion: One Per Line",
    "B": "Subscription Type: One-Time",
    "C": "Subscription Price: List Price",
    "D": "Asset Conversion: One Per Unit"
  },
  "answer": "D"
},
{
  "question": "Subscription Product A has a Subscription Term of 6, a List Price of $100, and a Ranged Discount Schedule. A user has added this Product to a Quote with a Term of 12. The Ranged Discount Schedule is automatically applying a Discount of 25%. What is the Regular Price in this scenario?",
  "type": "single",
  "options": {
    "A": "Regular Price of $75",
    "B": "Regular Price of $150",
    "C": "Regular Price of $200",
    "D": "Regular Price of $100"
  },
  "answer": "C"
},
{
  "question": "How should an admin enable renewal uplift on an Account?",
  "type": "single",
  "options": {
    "A": "Select the Combine Subscription Quantities checkbox on the Contract record related to the Account.",
    "B": "Change the Renewal Pricing Method to Same on the Account.",
    "C": "Update the Markup (%) field on the Renewal Quote.",
    "D": "Update the Renewal Pricing Method to Uplift on the Account, then populate the Renewal Uplift (%) field on the Contract record."
  },
  "answer": "D"
},
{
  "question": "A user has created two Quotes related to an Opportunity. The user has changed the Primary Quote by checking the Primary checkbox on the non-Primary Quote. After performing this action, the amount of the Opportunity fails to update and the Quote Lines fail to sync to the Opportunity. What is the root cause of this issue?",
  "type": "single",
  "options": {
    "A": "Primary Quote Keeps Opportunity Products is set to FALSE in the Installed Package Settings.",
    "B": "The triggers have been disabled in the Installed Package Settings.",
    "C": "The Primary field on the Quote is missing from the Quote object's Calculating Fields field set.",
    "D": "Twin fields between the Quote Line and the Opportunity Product need to be set up."
  },
  "answer": "B"
},
{
  "question": "The sales team at Universal Containers (UC) has received customer feedback that numerous lines on a typical Quote make it difficult to understand how the total amount breaks down across the various types of Products: Hardware, Software, and Professional Services. UC uses Quote Templates to generate Quote Documents. Which solution would allow customers to see separate tables and subtotals organized by Product Family?",
  "type": "single",
  "options": {
    "A": "Create Roll-Up Summary fields on the Quote for each Product Family and add them as merge fields to the Template Top.",
    "B": "Create an HTML Template Content record with three tables to represent each Product Family.",
    "C": "Create a Line Items section and set SBQQ__ProductFamily__c as the Group field.",
    "D": "Create a Line Items section and set SBQQ__ProductFamily__c as the Roll-Up field."
  },
  "answer": "C"
},
{
  "question": "The admin at Universal Containers has received feedback about the amount of horizontal scrolling necessary to access Clone and Delete actions on Quote Lines in the Quote Line Editor. What should the admin do to resolve this issue?",
  "type": "single",
  "options": {
    "A": "Set a lower value in the Display Order field on the Custom Action record.",
    "B": "Change the Actions Column Placement in package settings to Left.",
    "C": "Move the Clone and Delete actions into the Quote Line Editor drawers.",
    "D": "Update the Custom Action Location to Quote."
  },
  "answer": "B"
},







	
];
};
