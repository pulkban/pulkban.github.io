//Udhay.createProperty1('5768 002', 'Normal', '0000 000');
//Udhay.createProperty1('5768 001', 'TIC', '0000 000');
//Udhay.deleteProperty('a1Jcp000004iGSNEA2'); 
//Udhay.deleteCases('34711186,34711184,34711185');
//Udhay.updateCaseAndDeleteChild('34424033');
//Udhay.enrollCases('03012950,03012949,03012948,03012947,03012946')
//SELECT Id, CreatedDate, CaseNumber, Property__c, AssessmentYear__c, SequenceNumber__c, TotalAssessedValueRP__c, RPAmountExempt__c, TotalAmountExempt__c FROM case 
//where Property__c  = 'a1Jcp000003zJQfEAM' order by AssessmentYear__c desc, SequenceNumber__c desc
//
public class Udhay {
    public static Date eventDate = Date.valueOf('2011-07-07');
	public static Integer latestYear = 2024;
    public static Decimal landValue = 250000.0;
    public static Decimal improvementValue = 250000.0;
    public static Decimal totalValue = 500000.0;

    public static void deleteProperty(String strPropId) {
        delete [SELECT Id FROM CaseOwnershipRelation__c WHERE Case__c IN (SELECT Id FROM Case WHERE Property__c = :strPropId)];
        delete [SELECT Id FROM Case WHERE Property__c = :strPropId];
        delete [SELECT Id FROM ParcelGenealogy__c WHERE ChildParcel__c = :strPropId];
        delete [SELECT Id FROM ParcelGenealogy__c WHERE ParentParcel__c = :strPropId];
		delete [SELECT id from DocumentGenerationRequest__c where Property__c = :strPropId];
        delete [SELECT Id FROM PropertyTransaction__c WHERE Property__c = :strPropId];
        delete [SELECT Id FROM PropertyEvent__c WHERE Property__c = :strPropId];
        delete [SELECT Id FROM Ownership__c WHERE Property__c = :strPropId];
        delete [SELECT Id FROM Statement__c WHERE Property__c = :strPropId];
        delete [SELECT Id FROM Property__c WHERE Id = :strPropId];
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

    
    /*public static void logMessage(String message) {
        insert new UdhayLog__c(LogText__c = message);
    }*/

    public static void createProperty1(String strAPN, String strpropType, String strParentAPN) {
		List<String> firstNames = new List<String>{'CECILIA', 'JOHN', 'EMMA', 'MICHAEL', 'SOPHIA', 'OLIVER', 'ISABELLA', 'JAMES', 'AVA', 'WILLIAM'};
		List<String> lastNames = new List<String>{'CHAPMAN', 'SMITH', 'JOHNSON', 'BROWN', 'DAVIS', 'MILLER', 'WILSON', 'MOORE', 'TAYLOR', 'ANDERSON'};
		Integer randomIndex = (Integer)(Math.random() * firstNames.size());

        Id realPropertyRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Property__c' AND Name = 'Real Property' LIMIT 1].Id;

        Property__c objProp = new Property__c(AssessorsParcelNumber__c = strAPN, RecordTypeId = realPropertyRecordTypeId, Status__c = 'Active', 
            LocationCity__c = 'San Francisco', LocationState__c = 'US-CA', LocationPostalCode__c = '94104', LocationPostalCodeExtension__c = '2061', 
            LocationCountry__c = 'US', IsVariousLocations__c = false, LocationStreetNumber__c = '12', LocationStreetFraction__c = 'A', 
            LocationStreetPreDirection__c = 'N', LocationStreetName__c = 'Bush', LocationStreetType__c = ' ALY', TRACode__c = '001-000-000', RollCode__c = 'Secured', 
			TaxableStatus__c = 'Taxable', Neighborhood__c = '08-D', Geolocation__Latitude__s = 37.80338618, Geolocation__Longitude__s = -122.4117585);
        if (strpropType == 'Normal') {
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
		
		//if TIC - create 2 units==================
		List<PropertyUnits__c> units = new List<PropertyUnits__c>();
		if (strpropType == 'TIC') {
			Id rtId = [SELECT Id FROM RecordType WHERE SObjectType = 'PropertyCharacteristics__c' AND Name = 'Condo/Co-op/Timeshare/TIC Unit' LIMIT 1].Id;
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
		}

		
		//2. address
        PropertyAddress__c propAddress = new PropertyAddress__c(Property__c = objProp.Id, LocationCity__c = 'SAN FRANCISCO', LocationState__c = 'US-CA', LocationPostalCode__c = '94104', 
            LocationCountry__c = 'US', LocationStreetFraction__c = '1/2', LocationStreetName__c = 'BUSH', LocationStreetNumber__c = '345', 
            LocationStreetPostDirection__c = 'N', LocationStreetPreDirection__c = 'N', LocationStreetType__c = 'ST', Primary__c = true);
        insert propAddress;
		
		//3. taxRateArea
        insert new TaxRateArea__c(Property__c = objProp.Id, StartYear__c = '2009', TRACode__c = '001-000-000', AssessorsParcelNumber__c = strAPN);
		
		//4. propertyValue//======================================================================
		List<PropertyValue__c> propValues = new List<PropertyValue__c>();
		if (strpropType == 'Normal') {
			propValues.add(new PropertyValue__c(Property__c = objProp.Id, ValueDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()),
				FMVLand__c = landValue, FMVImprovements__c = improvementValue, FMValue__c = landValue + improvementValue, EventType__c = 'Change in Ownership'));
		} else if (strpropType == 'TIC') {
			propValues.add(new PropertyValue__c(Property__c = objProp.Id, PropertyUnits__c = units[0].id, ValueDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()),
				FMVLand__c = landValue * 0.65, FMVImprovements__c = improvementValue * 0.65, FMValue__c = (landValue + improvementValue) * 0.65, EventType__c = 'Change in Ownership'));
			propValues.add(new PropertyValue__c(Property__c = objProp.Id, PropertyUnits__c = units[1].id, ValueDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()),
				FMVLand__c = landValue * 0.35, FMVImprovements__c = improvementValue * 0.35, FMValue__c = (landValue + improvementValue) * 0.35, EventType__c = 'Change in Ownership'));
		}
		insert propValues;
		//======================================================================

		
		//5. account ===================================
        Id personAccountRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Account' AND Name = 'Person Account' LIMIT 1].Id;
		Account a1 = new Account(FirstName=firstNames[randomIndex], LastName=lastNames[randomIndex], RecordTypeId=personAccountRecordTypeId, MailingUnitNumber__c='92');
		List<Account> accts = new List<Account>{ a1 };
		if (strpropType == 'TIC') {
			Integer i3 = (Integer)(Math.random() * firstNames.size()), i4 = (Integer)(Math.random() * lastNames.size());
			accts.add(new Account(FirstName=firstNames[i3], LastName=lastNames[i4], RecordTypeId=personAccountRecordTypeId, MailingUnitNumber__c='92'));
		}
		insert accts;
		//===================================

		//===================================ownership
		Id realPropOwnershipRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Ownership__c' AND Name = 'Real Property Ownership' LIMIT 1].Id;
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
		} else {
			owners.add(new Ownership__c(
				Property__c = objProp.Id, Account__c = accts[0].Id, OwnershipPercent__c = 100,
				OwnershipName__c = accts[0].FirstName + ' ' + accts[0].LastName, RecordTypeId = realPropOwnershipRecordTypeId,
				StartDate__c = eventDate, ValueDate__c = eventDate, IsPrimary__c = true));
		}
		insert owners;
		//===================================
		
		//=================================== PUOR - only for TIC
		if (strpropType == 'TIC') {
			List<PropertyUnitOwnership__c> puows = new List<PropertyUnitOwnership__c>();
			for (Integer i = 0; i < units.size(); i++) 
				puows.add(new PropertyUnitOwnership__c(Property__c=objProp.Id, PropertyUnit__c=units[i].Id, Ownership__c=owners[i].Id, OwnershipPercent__c=owners[i].OwnershipPercent__c, UnitPercent__c=100));
			insert puows;
		}
		//=================================== PUOR - only for TIC

		
		//===================================
		List<OwnershipBaseYear__c> obyList = new List<OwnershipBaseYear__c>();
		for (Integer i = 0; i < propValues.size(); i++) {
			obyList.add(new OwnershipBaseYear__c(Ownership__c = owners[i].Id, PropertyValue__c = propValues[i].Id, BaseYearValueImprovements__c = propValues[i].FMVImprovements__c, BaseYearValueLand__c = propValues[i].FMVLand__c, BaseYearValue__c = propValues[i].FMValue__c));
		}
		insert obyList;
		//===================================
		
		//8. PE
        Id PECIORecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'PropertyEvent__c' AND Name = 'Change in Ownership' LIMIT 1].Id;
        PropertyEvent__c objPE = new PropertyEvent__c(Assessability__c = 'Assessable', DocumentOrigin__c = 'Unrecorded', Unrecorded_Reason__c = 'Other', 
            EventDate__c = eventDate, RecordTypeId = PECIORecordTypeId, Status__c = 'New', Property__c = objProp.Id, 
            AssessorsParcelNumber__c = strAPN, Title_Code__c = 'Trust', MailingAddress__c = '345 BUSH', MailingUnitNumber__c = '92');
        insert objPE;
		
		//9. valuation
        Id CIOValuationRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Valuation__c' AND Name = 'Change In Ownership Valuation' LIMIT 1].Id;
        Valuation__c objVal = new Valuation__c(RecordTypeId = CIOValuationRecordTypeId, FairMarketValue__c = totalValue, FMVImprovements__c = improvementValue, 
            FMVLand__c = landValue, Property__c = objProp.Id, PropertyEvent__c = objPE.Id, Status__c = 'Closed', SubStatus__c = 'Completed', 
            ValueDate__c = eventDate, EventDate__c = eventDate);
        insert objVal;

        propValues[0].Valuation__c = objVal.Id;
        update propValues[0];

        objPE.Status__c = 'Closed';
        objPE.SubStatus__c = 'Completed';
        update objPE;

        Id caseLegacyRPRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Case' AND Name = 'Legacy Real Property Assessment' LIMIT 1].Id;
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
        for (Integer year = eventDate.year(); year <= 2023; year++) {
            Integer sevenDigitRandomNumber = (Integer)(Math.random() * 9000000) + 1000000;
			String factorKey = baseYear + '-' + year;
            system.debug('factorKey>>>' + factorKey);
			
            casesToInsert.add(new Case(RecordTypeId = caseLegacyRPRecordTypeId, EventDate__c = Date.valueOf(year + '-01-01'), Property__c = objProp.Id, 
                Type = 'Escape', AdjustmentType__c = 'New', RollYear__c = String.valueOf(year), AssessmentYear__c = String.valueOf(year), RollCode__c = 'Secured', 
                Status = 'New', Billable__c = 'Yes', LandValueRP__c = landValue * factorMap.get(factorKey), ImprovementsValueRP__c = improvementValue * factorMap.get(factorKey), PrimaryAssessee__c = owners[0].Id, 
                TRACode__c = '001-000-000', IsLegacy__c = true, AssessorsParcelNumber__c = strAPN, MailingUnitNumber__c = '92', 
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
		if (strpropType == 'Normal') {
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
        
        Id caseRPRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Case' AND Name = 'Real Property Assessment' LIMIT 1].Id;
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

		//==========COR for Latest
		if (strpropType == 'Normal') {
			insert new CaseOwnershipRelation__c(CPIFactor__c = factorMap.get(latestFactorKey), PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * factorMap.get(latestFactorKey), FactoredBaseYearValueImprovements__c = improvementValue * factorMap.get(latestFactorKey), FactoredBaseYearValueLand__c = landValue * factorMap.get(latestFactorKey), Ownership__c = owners[0].Id, OwnershipBaseYear__c = obyList[0].Id, Case__c = objCase.Id, AccountName__c = accts[0].Id, Factor__c = factorMap2.get(latestFactorKey));
		} else if (strpropType == 'TIC') {
			insert new List<CaseOwnershipRelation__c>{
				new CaseOwnershipRelation__c(CPIFactor__c = factorMap.get(latestFactorKey), PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * 0.65 * factorMap.get(latestFactorKey), FactoredBaseYearValueImprovements__c = improvementValue * 0.65 * factorMap.get(latestFactorKey), FactoredBaseYearValueLand__c = landValue * 0.65 * factorMap.get(latestFactorKey), Ownership__c = owners[0].Id, OwnershipBaseYear__c = obyList[0].Id, Case__c = objCase.Id, AccountName__c = accts[0].Id, Factor__c = factorMap2.get(latestFactorKey)),
				new CaseOwnershipRelation__c(CPIFactor__c = factorMap.get(latestFactorKey), PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * 0.35 * factorMap.get(latestFactorKey), FactoredBaseYearValueImprovements__c = improvementValue * 0.35 * factorMap.get(latestFactorKey), FactoredBaseYearValueLand__c = landValue * 0.35 * factorMap.get(latestFactorKey), Ownership__c = owners[1].Id, OwnershipBaseYear__c = obyList[1].Id, Case__c = objCase.Id, AccountName__c = accts[1].Id, Factor__c = factorMap2.get(latestFactorKey))
			};
		}
		//==========COR for Latest

    }
}