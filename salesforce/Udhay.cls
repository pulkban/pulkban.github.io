//Udhay.createProperty1('5778 001', 'Normal');
//Udhay.createProperty1('5880 002', 'TIC');
//Udhay.createProperty1('5880 003', 'BPPRP');
//Udhay.createProperty1('5778 003', 'PI');
//Udhay.deleteProperty('a1Jcp000004qZIpEAM'); 
//Udhay.deleteCases('34711186,34711184,34711185');
//Udhay.updateCaseAndDeleteChild('34424033');
//Udhay.enrollCases('03012950,03012949,03012948,03012947,03012946')
//SELECT Id, CreatedDate, CaseNumber, Property__c, AssessmentYear__c, SequenceNumber__c, TotalAssessedValueRP__c, RPAmountExempt__c, TotalAmountExempt__c FROM case 
//where Property__c  = 'a1Jcp000003zJQfEAM' order by AssessmentYear__c desc, SequenceNumber__c desc

public class Udhay {
    public static Date eventDate = Date.valueOf('2011-07-07');
	public static Integer latestYear = 2025;
    public static Decimal landValue = 250000.0;
    public static Decimal improvementValue = 250000.0;
    public static Decimal totalValue = 500000.0;

    public static void deleteProperty(String strPropId) {
		Id currentUserId = UserInfo.getUserId();
		disableAllValidationAndTrigger(currentUserId);

        //Flush PI stuff if any.
        List<Property__c> piProps = [SELECT Id FROM Property__c WHERE RecordType.Name = 'Possessory Interest Property' AND ParentProperty__c = :strPropId];
		List<Property__c> bppProps = [SELECT Id FROM Property__c WHERE ParentProperty__c = :strPropId AND RecordType.Name = 'Business Personal Property'];

		Set<Id> piPropIds = new Set<Id>(); for (Property__c p : piProps) piPropIds.add(p.Id);
		Set<Id> bppPropIds = new Set<Id>();  for (Property__c p : bppProps) bppPropIds.add(p.Id);

        if (!piPropIds.isEmpty()) {
			delete [SELECT Id FROM CaseOwnershipRelation__c WHERE Case__c IN (SELECT Id FROM Case WHERE Property__c IN :piPropIds)];
            delete [SELECT Id FROM Case WHERE Property__c IN :piPropIds];
            delete [SELECT Id FROM PropertyEvent__c WHERE Property__c IN :piPropIds];
            delete [SELECT Id FROM Ownership__c WHERE Property__c IN :piPropIds];
            delete [SELECT Id FROM Property__c WHERE Id IN :piPropIds];
        }
		if (!bppPropIds.isEmpty()) {
			delete [SELECT Id FROM AssessmentLineItem__c WHERE Case__c IN (SELECT Id FROM Case WHERE Property__c IN :bppPropIds)];
			delete [SELECT Id FROM Case WHERE Property__c IN :bppPropIds];
			delete [SELECT Id FROM Property__c WHERE Id IN :bppPropIds];
		}
        delete [SELECT Id FROM CaseOwnershipRelation__c WHERE Case__c IN (SELECT Id FROM Case WHERE Property__c = :strPropId)];
        delete [SELECT Id FROM Case WHERE Property__c = :strPropId];
        delete [SELECT Id FROM ParcelGenealogy__c WHERE ChildParcel__c = :strPropId];
        delete [SELECT Id FROM ParcelGenealogy__c WHERE ParentParcel__c = :strPropId];
		delete [SELECT id FROM DocumentGenerationRequest__c where Property__c = :strPropId];
        delete [SELECT Id FROM PropertyTransaction__c WHERE Property__c = :strPropId];
        delete [SELECT Id FROM PropertyEvent__c WHERE Property__c = :strPropId];
        delete [SELECT Id FROM Ownership__c WHERE Property__c = :strPropId];
        delete [SELECT Id FROM Statement__c WHERE Property__c = :strPropId];
        delete [SELECT Id FROM Property__c WHERE Id = :strPropId];

		reEnableAllValidationAndTrigger(currentUserId);
    }

	//Delete Case and CORs
    public static void deleteCases(String commaSeparatedCaseNumbers) {
        List<Case> casesToDelete = [SELECT Id FROM Case WHERE CaseNumber IN :new List<String>(commaSeparatedCaseNumbers.split(','))];
        if (!casesToDelete.isEmpty()) {
            delete [SELECT Id FROM CaseOwnershipRelation__c WHERE Case__c IN :casesToDelete];
            delete casesToDelete;
        }
    }
	
	//Delete APE and update the case to remove EXM
     public static void updateCaseAndDeleteChild(String caseNumber) {
        List<Case> casesToUpdate = [SELECT Id, RPAmountExempt__c FROM Case WHERE CaseNumber = :caseNumber];
        if (!casesToUpdate.isEmpty()) {
            delete [SELECT Id FROM AssessmentPropertyEvent__c WHERE Assessment__c IN :casesToUpdate];
            for (Case c : casesToUpdate) c.RPAmountExempt__c = null;
            update casesToUpdate;
        }
    }
    
	//Give Case numbers in CSV and it will enroll it
    public static void enrollCases(String caseNumbersCsv) {
        List<String> caseNumbers = caseNumbersCsv.split(',');
        List<Case> casesToUpdate = [SELECT Id FROM Case WHERE CaseNumber IN :caseNumbers];
        if (!casesToUpdate.isEmpty()) {
            for (Case c : casesToUpdate) {
                c.SubStatus__c = 'Completed';
                c.IntegrationStatus__c = 'Sent to TTX';
            }
            update casesToUpdate;
        }
    }
	
	//========================================================================PROP Creation
    public static void createProperty1(String strAPN, String strpropType) {
		List<String> firstNames = new List<String>{'CECILIA', 'JOHN', 'EMMA', 'MICHAEL', 'SOPHIA', 'OLIVER', 'ISABELLA', 'JAMES', 'AVA', 'WILLIAM'};
		List<String> lastNames = new List<String>{'CHAPMAN', 'SMITH', 'JOHNSON', 'BROWN', 'DAVIS', 'MILLER', 'WILSON', 'MOORE', 'TAYLOR', 'ANDERSON'};
		Integer randomIndex = (Integer)(Math.random() * firstNames.size());
        
        //============================Get all Record Types once [Start]
		Map<String, Id> rtMap = new Map<String, Id>();
		Map<String, Schema.RecordTypeInfo> rtInfos;
		rtInfos = Schema.SObjectType.Property__c.getRecordTypeInfosByName(); rtMap.put('Property__c:Real Property', rtInfos.get('Real Property').getRecordTypeId()); rtMap.put('Property__c:Possessory Interest Property', rtInfos.get('Possessory Interest Property').getRecordTypeId()); rtMap.put('Property__c:Business Personal Property', rtInfos.get('Business Personal Property').getRecordTypeId());
		rtInfos = Schema.SObjectType.PropertyCharacteristics__c.getRecordTypeInfosByName(); rtMap.put('PropertyCharacteristics__c:Condo/Co-op/Timeshare/TIC Unit', rtInfos.get('Condo/Co-op/Timeshare/TIC Unit').getRecordTypeId());
		rtInfos = Schema.SObjectType.Account.getRecordTypeInfosByName(); rtMap.put('Account:Person Account', rtInfos.get('Person Account').getRecordTypeId());
		rtInfos = Schema.SObjectType.Ownership__c.getRecordTypeInfosByName(); rtMap.put('Ownership__c:Real Property Ownership', rtInfos.get('Real Property Ownership').getRecordTypeId());
		rtInfos = Schema.SObjectType.PropertyEvent__c.getRecordTypeInfosByName(); rtMap.put('PropertyEvent__c:Change in Ownership', rtInfos.get('Change in Ownership').getRecordTypeId()); rtMap.put('PropertyEvent__c:PI Leasing', rtInfos.get('PI Leasing').getRecordTypeId());
		rtInfos = Schema.SObjectType.Valuation__c.getRecordTypeInfosByName(); rtMap.put('Valuation__c:Change In Ownership Valuation', rtInfos.get('Change In Ownership Valuation').getRecordTypeId()); rtMap.put('Valuation__c:Lease Valuation', rtInfos.get('Lease Valuation').getRecordTypeId());
		rtInfos = Schema.SObjectType.Case.getRecordTypeInfosByName(); rtMap.put('Case:Legacy Real Property Assessment', rtInfos.get('Legacy Real Property Assessment').getRecordTypeId()); rtMap.put('Case:Real Property Assessment', rtInfos.get('Real Property Assessment').getRecordTypeId()); rtMap.put('Case:Legacy BPP Assessment', rtInfos.get('Legacy BPP Assessment').getRecordTypeId()); rtMap.put('Case:BPP Assessment', rtInfos.get('BPP Assessment').getRecordTypeId());
		rtInfos = Schema.SObjectType.RollYear__c.getRecordTypeInfosByName(); rtMap.put('RollYear__c:BPP Roll Year', rtInfos.get('BPP Roll Year').getRecordTypeId());

		Id realPropertyRecordTypeId = rtMap.get('Property__c:Real Property');
		Id piRecordTypeId = rtMap.get('Property__c:Possessory Interest Property');
		Id bppRecordTypeId = rtMap.get('Property__c:Business Personal Property');
		Id rtId = rtMap.get('PropertyCharacteristics__c:Condo/Co-op/Timeshare/TIC Unit');
		Id personAccountRecordTypeId = rtMap.get('Account:Person Account');
		Id realPropOwnershipRecordTypeId = rtMap.get('Ownership__c:Real Property Ownership');
		Id PECIORecordTypeId = rtMap.get('PropertyEvent__c:Change in Ownership');
		Id PEPILeasingRecordTypeId = rtMap.get('PropertyEvent__c:PI Leasing');
		Id CIOValuationRecordTypeId = rtMap.get('Valuation__c:Change In Ownership Valuation');
		Id LeaseValuationRecordTypeId = rtMap.get('Valuation__c:Lease Valuation');
		Id caseLegacyRPRecordTypeId = rtMap.get('Case:Legacy Real Property Assessment');
		Id caseRPRecordTypeId = rtMap.get('Case:Real Property Assessment');
		Id caseLegacyBPPRecordTypeId = rtMap.get('Case:Legacy BPP Assessment');
		Id caseBPPRecordTypeId = rtMap.get('Case:BPP Assessment');
		Id bppRollYearRecordTypeId = rtMap.get('RollYear__c:BPP Roll Year');

        //============================Get all Record Types once [End]

        Property__c objProp = new Property__c(AssessorsParcelNumber__c = strAPN, RecordTypeId = realPropertyRecordTypeId, Status__c = 'Active', 
            LocationCity__c = 'San Francisco', LocationState__c = 'US-CA', LocationPostalCode__c = '94104', LocationPostalCodeExtension__c = '2061', 
            LocationCountry__c = 'US', IsVariousLocations__c = false, LocationStreetNumber__c = '12', LocationStreetFraction__c = 'A', 
            LocationStreetPreDirection__c = 'N', LocationStreetName__c = 'Bush', LocationStreetType__c = ' ALY', TRACode__c = '001-000-000', RollCode__c = 'Secured', 
			TaxableStatus__c = 'Taxable', Neighborhood__c = '08-D', Geolocation__Latitude__s = 37.80338618, Geolocation__Longitude__s = -122.4117585);
        if (strpropType.equals('Normal') || strpropType.equals('PI') || strpropType.equals('BPPRP')|| strpropType.equals('BPPRP')) {
            objProp.RealPropertyUse__c = 'Residential';
            objProp.RealPropertyType__c = 'Single Family Residence';
            objProp.RealPropertySubtype__c = 'Single Family Residence';
			objProp.ComplexType__c = 'Condo';
            objProp.TotalAssessedValue__c = totalValue;
            objProp.AssessorParcelOnly__c = 'No';
        } else if (strpropType == 'TIC') {
            objProp.RealPropertyUse__c = 'Residential';
            objProp.RealPropertyType__c = 'Multi Family Residence';
            objProp.RealPropertySubtype__c = 'Apartment';
			objProp.ComplexType__c = 'TIC';
            objProp.TotalAssessedValue__c = totalValue;
            objProp.AssessorParcelOnly__c = 'Yes';
        }
        insert objProp;
        System.debug('Created Property==>' + objProp.id + '--' + objProp.AssessorsParcelNumber__c);
				
		//if TIC - create 2 units==================
		List<PropertyUnits__c> units = new List<PropertyUnits__c>();
		if (strpropType == 'TIC') {
			units.addAll(new List<PropertyUnits__c>{
				new PropertyUnits__c(Property__c = objProp.Id, PropertyUnitSitus__c = '2027'),
				new PropertyUnits__c(Property__c = objProp.Id, PropertyUnitSitus__c = '2027B')
			});
			insert units;

			List<PropertyCharacteristics__c> pcs = new List<PropertyCharacteristics__c>();
			for (PropertyUnits__c u : units) {
				pcs.add(new PropertyCharacteristics__c(
					RecordTypeId = rtId, PropertyUnit__c = u.Id, Status__c = 'Active',
					Storage__c = 'Yes', Property__c = u.Property__c, PropertyUnitSitus__c = u.PropertyUnitSitus__c,
					EffectiveDate__c = eventDate, SquareFootage__c = 910, Bedrooms__c = 2, FullBathrooms__c = 1,
					HalfBathrooms__c = 0, View__c = 'No View', NumberOfStories__c = 0, YearBuilt__c = String.valueOf(eventDate.year()),
					UnitCount__c = 2, ComplexType__c = 'TIC', HOA__c = false, LotDepth__c = 100.000,
					LotWidth__c = 34.000, LotArea__c = 3400.000, LotShape__c = 'Rectangular', Zoning__c = 'RM2'
				));
			}
			insert pcs;
			for (Integer i = 0; i < units.size(); i++) {
				units[i].PropertyCharacteristics__c = pcs[i].Id;
			}
			update units;
            System.debug('Created Units==>' + units.size());
		}
		//TIC Units [End]========================================================================
		
		//===================================================PI Prop [Start]
		Property__c objPIProp;
		if (strpropType == 'PI') {
			objPIProp = new Property__c(
				RecordTypeId = piRecordTypeId, DoingBusinessAs__c = 'MATRIX GROUP INCORPORATED', PIPropertyUse__c = 'Wholesale', PIPropertySubUse__c = 'Produce Stall',
				ParentProperty__c = objProp.id, Status__c = 'Active', RollCode__c = 'Unsecured', TaxableStatus__c = 'Taxable',
				GovernmentAgency__c = 'SF Produce Market (6)', BuildingSqFt__c = '454', LegacyPIAccountNumber__c = '813796', PILocation__c = '2095 JERROLD, #315-316',
            	AgencyLocationName__c = 'unknown');
			insert objPIProp;
		}
		//===================================================PI Prop [End]

		
		//2. address
        PropertyAddress__c propAddress = new PropertyAddress__c(Property__c = objProp.Id, LocationCity__c = 'SAN FRANCISCO', LocationState__c = 'US-CA', LocationPostalCode__c = '94104', 
            LocationCountry__c = 'US', LocationStreetFraction__c = '1/2', LocationStreetName__c = 'BUSH', LocationStreetNumber__c = '345', 
            LocationStreetPostDirection__c = 'N', LocationStreetPreDirection__c = 'N', LocationStreetType__c = 'ST', Primary__c = true);
        insert propAddress;
		//3. taxRateArea
        insert new TaxRateArea__c(Property__c = objProp.Id, StartYear__c = '2009', TRACode__c = '001-000-000', AssessorsParcelNumber__c = strAPN);
		
		//4. propertyValue//======================================================================
		List<PropertyValue__c> propValues = new List<PropertyValue__c>();
		if (strpropType == 'Normal' || strpropType.equals('BPPRP')) {
			propValues.add(new PropertyValue__c(Property__c = objProp.Id, ValueDate__c = eventDate, StartDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()),
				FMVLand__c = landValue, FMVImprovements__c = improvementValue, FMValue__c = landValue + improvementValue, EventType__c = 'Change in Ownership'));
		} else if (strpropType == 'TIC') {
			propValues.add(new PropertyValue__c(Property__c = objProp.Id, PropertyUnits__c = units[0].id, ValueDate__c = eventDate, StartDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()),
				FMVLand__c = landValue * 0.65, FMVImprovements__c = improvementValue * 0.65, FMValue__c = (landValue + improvementValue) * 0.65, EventType__c = 'Change in Ownership'));
			propValues.add(new PropertyValue__c(Property__c = objProp.Id, PropertyUnits__c = units[1].id, ValueDate__c = eventDate, StartDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()),
				FMVLand__c = landValue * 0.35, FMVImprovements__c = improvementValue * 0.35, FMValue__c = (landValue + improvementValue) * 0.35, EventType__c = 'Change in Ownership'));
		} else if (strpropType == 'PI') { //one RP PV, one PI PV
			propValues.add(new PropertyValue__c(Property__c = objProp.Id, ValueDate__c = eventDate, StartDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()),
				FMVLand__c = 0, FMVImprovements__c = 0, FMValue__c = 0, EventType__c = 'Change in Ownership'));
			propValues.add(new PropertyValue__c(Property__c = objPIProp.Id, ValueDate__c = eventDate, StartDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()),
				FMVLand__c = landValue * 0.35, FMVImprovements__c = improvementValue * 0.35, FMValue__c = (landValue + improvementValue) * 0.35, EventType__c = 'Change in Ownership'));
		}
		insert propValues;
        System.debug('propValues==>' + propValues.size());
		//======================================================================

		
		//5. account ===================================
		List<Account> accts = new List<Account>();
		if (strpropType == 'Normal' || strpropType.equals('BPPRP')) {
			accts.add(new Account(FirstName=firstNames[randomIndex], LastName=lastNames[randomIndex], RecordTypeId=personAccountRecordTypeId, MailingUnitNumber__c='92'));
		}else if (strpropType == 'TIC') {
			accts.add(new Account(FirstName=firstNames[randomIndex], LastName=lastNames[randomIndex], RecordTypeId=personAccountRecordTypeId, MailingUnitNumber__c='92'));
			Integer i3 = (Integer)(Math.random() * firstNames.size()), i4 = (Integer)(Math.random() * lastNames.size());
			accts.add(new Account(FirstName=firstNames[i3], LastName=lastNames[i4], RecordTypeId=personAccountRecordTypeId, MailingUnitNumber__c='92'));
		}else if (strpropType == 'PI') {
			accts.add(new Account(LastName=objPIProp.DoingBusinessAs__c, RecordTypeId=personAccountRecordTypeId, MailingUnitNumber__c='316', MailingUnitType__c='STE'));			
		}
		insert accts;
        System.debug('accts==>' + accts.size());
		//===================================

		//===================================ownership
		List<Ownership__c> owners = new List<Ownership__c>();
		if (strpropType == 'TIC') {
			owners.add(new Ownership__c(
				Property__c = objProp.Id, Account__c = accts[0].Id, OwnershipPercent__c = 65,
				OwnershipName__c = accts[0].FirstName + ' ' + accts[0].LastName, RecordTypeId = realPropOwnershipRecordTypeId,
				StartDate__c = eventDate, ValueDate__c = eventDate, IsPrimary__c = true));
			owners.add(new Ownership__c(
				Property__c = objProp.Id, Account__c = accts[1].Id, OwnershipPercent__c = 35,
				OwnershipName__c = accts[1].FirstName + ' ' + accts[1].LastName, RecordTypeId = realPropOwnershipRecordTypeId,
				StartDate__c = eventDate, ValueDate__c = eventDate, IsPrimary__c = false));
		} else if (strpropType == 'Normal' || strpropType.equals('BPPRP')) {
			owners.add(new Ownership__c(
				Property__c = objProp.Id, Account__c = accts[0].Id, OwnershipPercent__c = 100,
				OwnershipName__c = accts[0].FirstName + ' ' + accts[0].LastName, RecordTypeId = realPropOwnershipRecordTypeId,
				StartDate__c = eventDate, ValueDate__c = eventDate, IsPrimary__c = true));
		}else if (strpropType == 'PI') {
			Account acct = [SELECT Id, Name FROM Account WHERE Name = 'CITY & COUNTY OF SAN FRANCISCO' LIMIT 1];
			owners.add(new Ownership__c(
				Property__c = objProp.Id, Account__c = acct.Id, OwnershipPercent__c = 100,
				OwnershipName__c = acct.Name, RecordTypeId = realPropOwnershipRecordTypeId,
				StartDate__c = eventDate, ValueDate__c = eventDate, IsPrimary__c = true));
			/*owners.add(new Ownership__c(
				Property__c = objPIProp.Id, Account__c = accts[0].Id, OwnershipPercent__c = 100,
				OwnershipName__c = accts[0].Name, RecordTypeId = realPropOwnershipRecordTypeId,
				StartDate__c = eventDate, ValueDate__c = eventDate, IsPrimary__c = false));*/
		}
		insert owners;
        System.debug('owners==>' + owners.size());
		//===================================
		
		//======================================================================Lease [Start]
		Lease__c lease;
		if (strpropType == 'PI') {
            lease = new Lease__c(
                PIProperty__c = objPIProp.id, LeaseStatus__c = 'Active', GovernmentAgency__c = objPIProp.GovernmentAgency__c, 
                FacilityLocation__c = '2095 Jerrold Ave, #313', ReevaluationDate__c = eventDate,
                CompanyName__c = objPIProp.DoingBusinessAs__c, //Ownership__c = owners[1].id,
                
                Rent__c = 1500.00, ContractRent__c = 1350.00, RentFrequency__c = 'Monthly', 
                StartDate__c = eventDate, EndDate__c = Date.newInstance(latestYear, 8, 31), LeaseEndDateWithoutOption__c = Date.newInstance(latestYear, 8, 31),
                ExpiryDate__c = Date.newInstance(latestYear, 8, 31),
                AnticipatedTerm__c = 12, LeaseTerm__c = 12, Expenses__c = '5.000', TypeofAgreement__c = 'Lease', LeaseOwnershipPercentage__c = 100.0000,
                MonthLeaseTerm__c = 'No'
            );
            insert lease;
            System.debug('lease==>' + lease.id);
        }
		//======================================================================Lease [End]
		
		//=================================== PUOR - only for TIC
		if (strpropType == 'TIC') {
			List<PropertyUnitOwnership__c> puows = new List<PropertyUnitOwnership__c>();
			for (Integer i = 0; i < units.size(); i++) 
				puows.add(new PropertyUnitOwnership__c(Property__c=objProp.Id, PropertyUnit__c=units[i].Id, Ownership__c=owners[i].Id, OwnershipPercent__c=owners[i].OwnershipPercent__c, UnitPercent__c=100));
			insert puows;
            System.debug('puows==>' + puows.size());
		}
		//=================================== PUOR - only for TIC
		
		//[BPPRP-Start]=========================================================================================================
		List<Case> bppCaseList = new List<Case>();
		if (strpropType == 'BPPRP') {
            String timeStamp4Digit = Datetime.now().format('HHmm');
			Account acc = new Account(
				Name = 'SALARPURIA REAL ESTATE '+timeStamp4Digit, BusinessStatus__c = 'Active',
				BusinessAccountNumber__c = '9241191', EntityId__c = '999'+timeStamp4Digit,
				AccessPIN__c = '105899', NoticeType__c = 'Direct Bill', RequiredToFile__c = 'Optional', FederalId__c = '55-6288620',

				MailingStreetNumber__c = '1850', MailingStreetName__c = 'BRYANT', MailingStreetType__c = 'ST', 
				MailingCity__c = 'SAN FRANCISCO', MailingState__c = 'US-CA', MailingPostalCode__c = '94110',
				MailingPostalCodeExtension__c = '1407', MailingCountry__c = 'US'
			);
			insert acc;
			System.debug('acc==>' + accts.size());
			
			Property__c objBPPprop = new Property__c(
				RecordTypeId = bppRecordTypeId, Account__c = acc.id, ParentProperty__c = objProp.id,
				DoingBusinessAs__c = acc.Name, 
				//Volume__c = 44, TRACode__c = '001-000',
				AccountingAddress__c = '73 MAJESTIC AVE', AssessorsParcelNumber__c = objProp.AssessorsParcelNumber__c, 
				RollCode__c = 'Secured', Status__c = 'Active', Type__c = 'ApartmentUnit', ApartmentBusinessAccountNumber__c = '0489267',
				BusinessClassificationCode__c = '6513', NoticeType__c = 'Direct Bill', RequiredToFile__c = 'Optional', PrimaryFormType__c = '571-R', 
				LastFileDate__c = Date.newInstance(2024, 5, 6), LastFilingMethod__c = 'eFile', 
				InitialAssessmentYear__c = '2021', MostRecentAssessmentYear__c = '2025',
				AccountingContactName__c = 'Sharon Lui', AccountingContactNumber__c='4154349700', 
				LocationStreetNumber__c = '1920', LocationStreetName__c = 'REDWICH', LocationStreetType__c = 'ST', LocationCity__c='SAN FRANCISCO', 
				LocationState__c = 'US-CA', LocationCountry__c='US'
			);
            insert objBPPprop;     
			System.debug('BPPRP_property==>' + objBPPprop);

			//Disable Trigger / VR before Case and ALIs
            Id currentUserId = UserInfo.getUserId();       
            disableAllValidationAndTrigger(currentUserId);

			//Cases for BPP
			Integer bppsevenDigitRandomNumber = (Integer)(Math.random() * 9000000) + 1000000;
			Map<String, Id> rollYearMap = new Map<String, Id>();
			for (RollYear__c ry : [SELECT Id, Year__c FROM RollYear__c WHERE RecordType.DeveloperName = 'BPPRollYear']) {
				rollYearMap.put(String.valueOf(ry.Year__c), ry.Id);
			}
			//Insert BPP Case
			for (String y : new List<String>{'2022', '2023', '2024', '2025'}) {
				bppCaseList.add(new Case(
					RecordTypeId=caseBPPRecordTypeId, 
					Property__c = objBPPprop.Id, AccountId = acc.Id, AssessmentYear__c = y, AssessmentNumber__c = y + String.valueOf(bppsevenDigitRandomNumber), 
					IsCorrectedOrCancelled__c = true, EventDate__c = Date.newInstance(Integer.valueOf(y), 1, 1),
					DoingBusinessAs__c = acc.Name, TRACode__c = '001-000', Volume__c = '01', AssessorsParcelNumber__c = objBPPprop.AssessorsParcelNumber__c, 
					RollCode__c = 'Secured',
					AccountName__c = acc.Name, TotalValueofProperties__c = 0, FederalId__c = '55-6288620', RequiredToFile__c = 'Optional', 
					TotalPersonalPropertyValueOverride__c = 60000, TotalFixturesValueOverride__c = 8000, 
					MailingStreetNumber__c = acc.MailingStreetNumber__c, MailingStreetName__c = acc.MailingStreetName__c, 
					MailingCity__c = acc.MailingCity__c, MailingState__c = acc.MailingState__c, MailingPostalCode__c = acc.MailingPostalCode__c, MailingPostalCodeExtension__c = acc.MailingPostalCodeExtension__c,
					LocationStreetNumber__c = objBPPprop.LocationStreetNumber__c, LocationStreetName__c = objBPPprop.LocationStreetName__c, LocationCity__c = objBPPprop.LocationCity__c, LocationCountry__c = objBPPprop.LocationCountry__c, 
					Type = 'Regular', AdjustmentType__c = 'New', SubType__c='None', Priority = 'Medium', SequenceNumber__c = 1, 
					Status = 'Closed', SubStatus__c = 'Completed', IntegrationStatus__c='Sent to RP', Billable__c='Yes', SubmittedForApproval__c = false,
					Roll__c = rollYearMap.get(y)
				));
			}
			insert bppCaseList;
			//Insert BPP ALI
			List<AssessmentLineItem__c> aliList = new List<AssessmentLineItem__c>();
			for (Case c : bppCaseList) {
				aliList.add(new AssessmentLineItem__c(
					Case__c = c.Id, 
					Category__c = 'Furniture and Appliances', Subcategory__c = 'Furniture and Appliances', AssetSubclassification__c = 'General', 
					AcquisitionYear__c = '2005', Cost__c=879,  FixturesAllocationPercent__c = 0
				));
			}
			insert aliList;

			//ReEnable Trigger
            reEnableAllValidationAndTrigger(currentUserId);
		}
		//[BPP-End]=========================================================================================================

		
		//=========================================================================================================
		//(tic)2 PVs, 2 owners - 1 each 1:1
		//(pi)2 PVs (zero, x$), 2 owners (ccsf, x), 1 each 1:1
		List<OwnershipBaseYear__c> obyList = new List<OwnershipBaseYear__c>();
        if (strpropType == 'TIC') {
            for (Integer i = 0; i < propValues.size(); i++) {
                obyList.add(new OwnershipBaseYear__c(Ownership__c = owners[i].Id, PropertyValue__c = propValues[i].Id, BaseYearValueImprovements__c = propValues[i].FMVImprovements__c, BaseYearValueLand__c = propValues[i].FMVLand__c, BaseYearValue__c = propValues[i].FMValue__c));
            }
        }else {
            for (Integer i = 0; i < 1; i++) {
                obyList.add(new OwnershipBaseYear__c(Ownership__c = owners[i].Id, PropertyValue__c = propValues[i].Id, BaseYearValueImprovements__c = propValues[i].FMVImprovements__c, BaseYearValueLand__c = propValues[i].FMVLand__c, BaseYearValue__c = propValues[i].FMValue__c));
            }
        }
		insert obyList;
        System.debug('obyList==>' + obyList.size());
		//=========================================================================================================
		
		//8. PE
        PropertyEvent__c objPE = new PropertyEvent__c(Assessability__c = 'Assessable', DocumentOrigin__c = 'Unrecorded', Unrecorded_Reason__c = 'Other', 
            EventDate__c = eventDate, RecordTypeId = PECIORecordTypeId, Status__c = 'New', Property__c = objProp.Id, 
            AssessorsParcelNumber__c = strAPN, Title_Code__c = 'Trust', MailingAddress__c = '345 BUSH', MailingUnitNumber__c = '92');
        insert objPE;
        PropertyEvent__c objPIPE;
        if (strpropType == 'PI') {
            objPIPE = new PropertyEvent__c(
                EventDate__c = eventDate, RecordTypeId = PEPILeasingRecordTypeId, Status__c = 'New', Property__c = objPIProp.Id, 
                Lease__c = lease.id, isLegacy__c = true, Statute_of_Limitation__c = '4 years');
            insert objPIPE;
        }
		
		//9. Valuation
        Valuation__c objVal = new Valuation__c(RecordTypeId = CIOValuationRecordTypeId, FairMarketValue__c = totalValue, FMVImprovements__c = improvementValue, 
            FMVLand__c = landValue, Property__c = objProp.Id, PropertyEvent__c = objPE.Id, Status__c = 'Closed', SubStatus__c = 'Completed', 
            ValueDate__c = eventDate, EventDate__c = eventDate);
        insert objVal;
        Valuation__c objPIVal;
        if (strpropType == 'PI') {
            objPIVal = new Valuation__c(RecordTypeId = LeaseValuationRecordTypeId, Property__c = objPIProp.Id, PropertyEvent__c = objPIPE.Id, 
				EventType__c = 'New Lease', EventDate__c = eventDate,
				Status__c = 'Closed', SubStatus__c = 'Completed' );
            insert objPIVal;
        }

        List<PropertyEvent__c> peToUpdate = new List<PropertyEvent__c>();
        objPE.Status__c = 'Closed';
        objPE.SubStatus__c = 'Completed';
        peToUpdate.add(objPE);
        update peToUpdate;
        
		//============================================================
        //============================================================CASES
        List<Case> casesToInsert = new List<Case>();
		
		//Get all Factor Sources
		Integer baseYear = eventDate.year();
		List<String> factorNames = new List<String>();
		for (Integer y = baseYear; y <= latestYear; y++) { 
			factorNames.add(baseYear + '-' + y);
		}
		Map<String, Decimal> factorMap = new Map<String, Decimal>();
        Map<String, String> factorMap2 = new Map<String, String>();
		for (Factor__c factor : [SELECT Id, Name, CumulativeFactor__c FROM Factor__c WHERE Name IN :factorNames]) {
			factorMap.put(factor.Name, factor.CumulativeFactor__c);
            factorMap2.put(factor.Name, factor.Id);
		}
        system.debug('factorMap>>>>' + factorMap);
        system.debug('factorMap2>>>>' + factorMap2);
		
        //For All Old Cases
        for (Integer year = eventDate.year(); year <= latestYear - 1; year++) {
            Integer sevenDigitRandomNumber = (Integer)(Math.random() * 9000000) + 1000000;
			String factorKey = baseYear + '-' + year;
            //system.debug('factorKey>>>' + factorKey);
			
            casesToInsert.add(new Case(RecordTypeId = caseRPRecordTypeId, EventDate__c = Date.valueOf(year + '-01-01'), Property__c = objProp.Id, 
                Type = 'Escape', AdjustmentType__c = 'New', RollYear__c = String.valueOf(year), AssessmentYear__c = String.valueOf(year), RollCode__c = 'Secured', 
                Status = 'New', Billable__c = 'Yes', LandValueRP__c = landValue * factorMap.get(factorKey), ImprovementsValueRP__c = improvementValue * factorMap.get(factorKey), PrimaryAssessee__c = owners[0].Id, 
                TRACode__c = '001-000-000', IsLegacy__c = false, AssessorsParcelNumber__c = strAPN, MailingUnitNumber__c = '92', 
                AssessmentNumber__c = year + String.valueOf(sevenDigitRandomNumber), AccountId = accts[0].Id, TemporaryLandValue__c = 0.0, 
                TemporaryImprovementValue__c = 0.0, TotalTemporaryValue__c = 0.0, TotalAdjustmentValue__c = 0.0, RPAmountExempt__c = 0.0, 
                LegacyExemptionPenaltyAmount__c = 0.0, Legacy480Penalty__c = 0.0, TotalFactoredBaseValue__c = totalValue * factorMap.get(factorKey), 
                TotalFactoredBaseYearValueImprove__c = improvementValue * factorMap.get(factorKey), TotalFactoredBaseYearValueLand__c = landValue * factorMap.get(factorKey), 
                BaseYearEventDate__c = eventDate, TotalPersonalPropertyValueRP__c = 0.0, TotalFixturesValueRP__c = 0.0, 
                LegacyLastCIO__c = 'Legacy Change in Ownership', LegacyLastCIODate__c = eventDate, DoingBusinessAs__c = String.valueOf(factorMap.get(factorKey)),
                AccountName__c = firstNames[randomIndex] + ' ' + lastNames[randomIndex], 
                TaxableStatus__c = 'Taxable'));
        }
        insert casesToInsert;

        for (Case c : casesToInsert) {
            c.Status = 'Closed';
            c.SubStatus__c = 'Completed';
            c.IntegrationStatus__c = 'Sent to TTX';
			c.EnrolledDate__c = Date.newInstance(Integer.valueOf(c.AssessmentYear__c), 6, 15);
            c.SequenceNumber__c = 1;
            c.RollYear__c = c.AssessmentYear__c;
            c.Type = 'Regular';
            c.IsLocked__c = true;
        }
        update casesToInsert;

		//==================================================CORs
		List<CaseOwnershipRelation__c> corToInsert = new List<CaseOwnershipRelation__c>();
		if (strpropType == 'Normal' || strpropType.equals('BPPRP')) {
			for (Case c : casesToInsert) {
				String strYear = String.valueOf(eventDate.year()) + '-' + String.valueOf(c.AssessmentYear__c);
				Decimal factor = Decimal.valueOf(c.DoingBusinessAs__c);
				corToInsert.add(new CaseOwnershipRelation__c(CPIFactor__c = factor, PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * factor, FactoredBaseYearValueImprovements__c = improvementValue * factor, FactoredBaseYearValueLand__c = landValue * factor, Ownership__c = owners[0].Id, OwnershipBaseYear__c = obyList[0].Id, Case__c = c.Id, AccountName__c = accts[0].Id, Factor__c = factorMap2.get(strYear)));
			}
		} else if (strpropType == 'TIC') {
			for (Case c : casesToInsert) {
				String strYear = String.valueOf(eventDate.year()) + '-' + String.valueOf(c.AssessmentYear__c);
				Decimal factor = Decimal.valueOf(c.DoingBusinessAs__c);
				corToInsert.add(new CaseOwnershipRelation__c(CPIFactor__c = factor, PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * 0.65 * factor, FactoredBaseYearValueImprovements__c = improvementValue * 0.65 * factor, FactoredBaseYearValueLand__c = landValue * 0.65 * factor, Ownership__c = owners[0].Id, OwnershipBaseYear__c = obyList[0].Id, Case__c = c.Id, AccountName__c = accts[0].Id, Factor__c = factorMap2.get(strYear)));
				corToInsert.add(new CaseOwnershipRelation__c(CPIFactor__c = factor, PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * 0.35 * factor, FactoredBaseYearValueImprovements__c = improvementValue * 0.35 * factor, FactoredBaseYearValueLand__c = landValue * 0.35 * factor, Ownership__c = owners[1].Id, OwnershipBaseYear__c = obyList[1].Id, Case__c = c.Id, AccountName__c = accts[1].Id, Factor__c = factorMap2.get(strYear)));
			}
		}
		insert corToInsert;
        system.debug('corToInsert>>' + corToInsert.size());
		//==================================================CORs

        //For Working Roll Year Latest
		String latestFactorKey = String.valueOf(eventDate.year()) + '-' + String.valueOf(latestYear);
        system.debug(latestFactorKey);
        system.debug(factorMap.get(latestFactorKey));
        
        Case objCase = new Case(RecordTypeId = caseRPRecordTypeId, EventDate__c = Date.valueOf( String.valueOf(latestYear) + '-01-01'), Property__c = objProp.Id, Type = 'Regular', 
            AdjustmentType__c = 'New', 
			LandValueRP__c = landValue * factorMap.get(latestFactorKey), ImprovementsValueRP__c = improvementValue * factorMap.get(latestFactorKey), 
			TotalFactoredBaseYearValueLand__c = landValue * factorMap.get(latestFactorKey), 
            TotalFactoredBaseYearValueImprove__c = improvementValue * factorMap.get(latestFactorKey), 
			TotalFactoredBaseValue__c = totalValue * factorMap.get(latestFactorKey), 
			TRACode__c = '001-000-000', RollYear__c = String.valueOf(latestYear), 
            AssessmentYear__c = String.valueOf(latestYear), RollCode__c = 'Secured', Status = 'New', AccountId = accts[0].Id, TemporaryLandValue__c = 0.0, 
            TemporaryImprovementValue__c = 0.0, TotalTemporaryValue__c = 0.0, TotalAdjustmentValue__c = 0.0, RPAmountExempt__c = 0.0, 
            LegacyExemptionPenaltyAmount__c = 0.0, Legacy480Penalty__c = 0.0, BaseYearEventDate__c = eventDate, 
            TotalPersonalPropertyValueRP__c = 0.0, TotalFixturesValueRP__c = 0.0, LegacyLastCIO__c = 'Legacy Change in Ownership',
            LegacyLastCIODate__c = eventDate, AccountName__c = firstNames[randomIndex] + ' ' + lastNames[randomIndex], 
            TaxableStatus__c = 'Taxable');
        insert objCase;
        system.debug('objCase>>' + objCase);

		//====Update BPP case to link with Parent Case [START]
		Id currentUserId = UserInfo.getUserId();
		disableAllValidationAndTrigger(currentUserId);

		if (strpropType.equals('BPPRP')) {
			Map<String, Case> rpCaseMap = new Map<String, Case>();
			casesToInsert.add(objCase);
			for (Case c : casesToInsert) {
				rpCaseMap.put(c.AssessmentYear__c, c);
			}

			List<RPBPPRelatedAssessment__c> junctionRecords = new List<RPBPPRelatedAssessment__c>();
			// Update BPP cases with parent case (RP case)
			for (Case bpp : bppCaseList) {
				Case parent = rpCaseMap.get(bpp.AssessmentYear__c);
				if (parent != null) {
					//bpp.ParentId = parent.Id;
					parent.TotalPersonalPropertyValueRP__c = bpp.TotalPersonalPropertyValueOverride__c;
					parent.TotalFixturesValueRP__c = bpp.TotalFixturesValueOverride__c;

					RPBPPRelatedAssessment__c junction = new RPBPPRelatedAssessment__c();
					junction.RPAssessment__c = parent.Id;
					junction.BPPAssessment__c = bpp.Id;
					junctionRecords.add(junction);
				}
			}
			update bppCaseList;
			update casesToInsert;
			insert junctionRecords;
		}

		reEnableAllValidationAndTrigger(currentUserId);
		//====Update BPP case [END]

		//==========COR for Latest
		if (strpropType == 'Normal' || strpropType.equals('BPPRP')) {
			insert new CaseOwnershipRelation__c(CPIFactor__c = factorMap.get(latestFactorKey), PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * factorMap.get(latestFactorKey), FactoredBaseYearValueImprovements__c = improvementValue * factorMap.get(latestFactorKey), FactoredBaseYearValueLand__c = landValue * factorMap.get(latestFactorKey), Ownership__c = owners[0].Id, OwnershipBaseYear__c = obyList[0].Id, Case__c = objCase.Id, AccountName__c = accts[0].Id, Factor__c = factorMap2.get(latestFactorKey));
		} else if (strpropType == 'TIC') {
			insert new List<CaseOwnershipRelation__c>{
				new CaseOwnershipRelation__c(CPIFactor__c = factorMap.get(latestFactorKey), PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * 0.65 * factorMap.get(latestFactorKey), FactoredBaseYearValueImprovements__c = improvementValue * 0.65 * factorMap.get(latestFactorKey), FactoredBaseYearValueLand__c = landValue * 0.65 * factorMap.get(latestFactorKey), Ownership__c = owners[0].Id, OwnershipBaseYear__c = obyList[0].Id, Case__c = objCase.Id, AccountName__c = accts[0].Id, Factor__c = factorMap2.get(latestFactorKey)),
				new CaseOwnershipRelation__c(CPIFactor__c = factorMap.get(latestFactorKey), PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * 0.35 * factorMap.get(latestFactorKey), FactoredBaseYearValueImprovements__c = improvementValue * 0.35 * factorMap.get(latestFactorKey), FactoredBaseYearValueLand__c = landValue * 0.35 * factorMap.get(latestFactorKey), Ownership__c = owners[1].Id, OwnershipBaseYear__c = obyList[1].Id, Case__c = objCase.Id, AccountName__c = accts[1].Id, Factor__c = factorMap2.get(latestFactorKey))
			};
		}		
    }




    //==========Disabling VR and Trigger Code
    public static void disableAllValidationAndTrigger(String currentUserId){
        // Disable All Validation Rules
        ValidationRuleSettings__c setting1 = ValidationRuleSettings__c.getInstance(currentUserId);
        if (setting1 == null) {
            setting1 = new ValidationRuleSettings__c(
                SetupOwnerId = currentUserId
            );
        }
        setting1.DisableValidationRules__c = true;
        upsert setting1;
        // Disable All Trigger Execution
        TriggerHandlerSettings__c setting2 = TriggerHandlerSettings__c.getInstance(currentUserId);
        if (setting2 == null) {
            setting2 = new TriggerHandlerSettings__c(
                SetupOwnerId = currentUserId
            );
        }
        setting2.DisableAllTriggers__c = true;
        setting2.IsDataMigrationRun__c = true;
        setting2.DisableDLRSCalculationTriggers__c = true;
        upsert setting2;
        // Disable All Process Builder
        ProcessBuilderSettings__c setting3 = ProcessBuilderSettings__c.getInstance(currentUserId);
        if (setting3 == null) {
            setting3 = new ProcessBuilderSettings__c(
                SetupOwnerId = currentUserId
            );
        }
        setting3.DisableAllProcesses__c = true;
        upsert setting3;
    }
    public static void reEnableAllValidationAndTrigger(String currentUserId){
        // Enable All Validation Rules
        ValidationRuleSettings__c setting1 = ValidationRuleSettings__c.getInstance(currentUserId);
        if (setting1 == null) {
            setting1 = new ValidationRuleSettings__c(
                SetupOwnerId = currentUserId
            );
        }
        setting1.DisableValidationRules__c = false;
        upsert setting1;
        // Enable All Trigger Execution
        TriggerHandlerSettings__c setting2 = TriggerHandlerSettings__c.getInstance(currentUserId);
        if (setting2 == null) {
            setting2 = new TriggerHandlerSettings__c(
                SetupOwnerId = currentUserId
            );
        }
        setting2.DisableAllTriggers__c = false;
        setting2.IsDataMigrationRun__c = false;
        setting2.DisableDLRSCalculationTriggers__c = false;
        upsert setting2;
        // Enable All Process Builder
        ProcessBuilderSettings__c setting3 = ProcessBuilderSettings__c.getInstance(currentUserId);
        if (setting3 == null) {
            setting3 = new ProcessBuilderSettings__c(
                SetupOwnerId = currentUserId
            );
        }
        setting3.DisableAllProcesses__c = false;
        upsert setting3;
    }
}