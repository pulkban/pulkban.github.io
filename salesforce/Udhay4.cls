//Udhay.createProperty1('5783 103', 'Normal', '0000 000');
//Udhay.createProperty1('5778 001', 'Timeshare', '0000 000');
//Udhay.deleteProperty('a1Jcp000003I80gEAC'); 
public class Udhay {
    public static Date eventDate = Date.valueOf('2011-07-07');
	public static Integer latestYear = 2024;
    public static Decimal landValue = 75000.0;
    public static Decimal improvementValue = 75000.0;
    public static Decimal totalValue = 150000.0;

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

    /*public static void logMessage(String message) {
        insert new UdhayLog__c(LogText__c = message);
    }*/

    public static void createProperty1(String strAPN, String strpropType, String strParentAPN) {
        List<String> firstNames = new List<String>{'CECILIA', 'JOHN', 'EMMA', 'MICHAEL', 'SOPHIA'};
        List<String> lastNames = new List<String>{'CHAPMAN', 'SMITH', 'JOHNSON', 'BROWN', 'DAVIS'};
        Integer randomIndex = (Integer)(Math.random() * firstNames.size());
        Id realPropertyRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Property__c' AND Name = 'Real Property' LIMIT 1].Id;

        Property__c objProp = new Property__c(AssessorsParcelNumber__c = strAPN, RecordTypeId = realPropertyRecordTypeId, Status__c = 'Active', 
            LocationCity__c = 'San Francisco', LocationState__c = 'US-CA', LocationPostalCode__c = '94104', LocationPostalCodeExtension__c = '2061', 
            LocationCountry__c = 'US', IsVariousLocations__c = false, LocationStreetNumber__c = '12', LocationStreetFraction__c = 'A', 
            LocationStreetPreDirection__c = 'N', LocationStreetName__c = 'Bush', LocationStreetType__c = ' ALY', TRACode__c = '001-000-000', ComplexType__c = 'Condo');
        
        if (strpropType == 'Normal') {
            objProp.RealPropertyUse__c = 'Residential';
            objProp.RealPropertyType__c = 'Single Family Residence';
            objProp.RealPropertySubtype__c = 'Single Family Residence';
            objProp.TotalAssessedValue__c = totalValue;
            objProp.AssessorParcelOnly__c = 'No';
            objProp.RollCode__c = 'Secured';
            objProp.TaxableStatus__c = 'Taxable';
        } else if (strpropType == 'Timeshare') {
            Property__c objPropParent = new Property__c(AssessorsParcelNumber__c = strParentAPN, RecordTypeId = realPropertyRecordTypeId, Status__c = 'Active', 
                RealPropertyUse__c = 'Commercial', RealPropertyType__c = 'Timeshare', RealPropertySubtype__c = 'Individual', TotalAssessedValue__c = totalValue, 
                AssessorParcelOnly__c = 'No', Neighborhood__c = '06-E', LocationCity__c = 'San Francisco', LocationState__c = 'US-CA', 
                LocationPostalCode__c = '94104', LocationPostalCodeExtension__c = '2061', LocationCountry__c = 'US', IsVariousLocations__c = false, 
                LocationStreetNumber__c = '12', LocationStreetFraction__c = 'A', LocationStreetPreDirection__c = 'N', LocationStreetName__c = 'Bush', 
                LocationStreetType__c = ' ALY', TRACode__c = '001-000-000', ComplexType__c = 'Condo');
            insert objPropParent;
            objProp.ParentProperty__c = objPropParent.Id;
            objProp.RealPropertyUse__c = 'Commercial';
            objProp.RealPropertyType__c = 'Timeshare';
            objProp.RealPropertySubtype__c = 'Individual';
            objProp.TotalAssessedValue__c = totalValue;
            objProp.AssessorParcelOnly__c = 'Yes';
            objProp.Neighborhood__c = '06-E';
        }
        
        insert objProp;
		
		//2. address
        PropertyAddress__c propAddress = new PropertyAddress__c(Property__c = objProp.Id, LocationCity__c = 'SAN FRANCISCO', LocationState__c = 'US-CA', LocationPostalCode__c = '94104', 
            LocationCountry__c = 'US', LocationStreetFraction__c = '1/2', LocationStreetName__c = 'BUSH', LocationStreetNumber__c = '345', 
            LocationStreetPostDirection__c = 'N', LocationStreetPreDirection__c = 'N', LocationStreetType__c = 'ST', Primary__c = true);
        insert propAddress;
		
		//3. taxRateArea
        insert new TaxRateArea__c(Property__c = objProp.Id, StartYear__c = '2009', TRACode__c = '001-000-000', AssessorsParcelNumber__c = strAPN);
		
		//4. propertyValue
		PropertyValue__c objPropValue = new PropertyValue__c(Property__c = objProp.Id, ValueDate__c = eventDate, BaseYear__c = String.valueOf(eventDate.year()), 
            FMVLand__c = landValue, FMVImprovements__c = improvementValue, FMValue__c = totalValue, EventType__c = 'Change in Ownership');
        insert objPropValue;
		
		//5. account
        Id personAccountRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Account' AND Name = 'Person Account' LIMIT 1].Id;
        Account objAccount = new Account(LastName = lastNames[randomIndex], FirstName = firstNames[randomIndex], 
            RecordTypeId = personAccountRecordTypeId, MailingUnitNumber__c = '92');
        insert objAccount;
		
		//6. ownership
        Id realPropOwnershipRecordTypeId = [SELECT Id FROM RecordType WHERE SObjectType = 'Ownership__c' AND Name = 'Real Property Ownership' LIMIT 1].Id;
        Ownership__c objOwner = new Ownership__c(Property__c = objProp.Id, Account__c = objAccount.Id, OwnershipPercent__c = 100, 
            OwnershipName__c = firstNames[randomIndex] + ' ' + lastNames[randomIndex], RecordTypeId = realPropOwnershipRecordTypeId, 
            StartDate__c = eventDate, ValueDate__c = eventDate, IsPrimary__c = true);
        insert objOwner;
		//7. oby
        OwnershipBaseYear__c objOBY = new OwnershipBaseYear__c(Ownership__c = objOwner.Id, PropertyValue__c = objPropValue.Id, 
            BaseYearValueImprovements__c = improvementValue, BaseYearValueLand__c = landValue, BaseYearValue__c = totalValue);
        insert objOBY;
		
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

        objPropValue.Valuation__c = objVal.Id;
        update objPropValue;

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
                Status = 'New', Billable__c = 'Yes', LandValueRP__c = landValue * factorMap.get(factorKey), ImprovementsValueRP__c = improvementValue * factorMap.get(factorKey), PrimaryAssessee__c = objOwner.Id, 
                TRACode__c = '001-000-000', IsLegacy__c = true, AssessorsParcelNumber__c = strAPN, MailingUnitNumber__c = '92', 
                AssessmentNumber__c = year + String.valueOf(sevenDigitRandomNumber), AccountId = objAccount.Id, TemporaryLandValue__c = 0.0, 
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

        List<CaseOwnershipRelation__c> corToInsert = new List<CaseOwnershipRelation__c>();
        for (Case c : casesToInsert) {
            String strYear = String.valueOf(eventDate.year()) + '-' + String.valueOf(c.AssessmentYear__c);
            System.debug(strYear);
            System.debug(factorMap2.get(strYear));
            corToInsert.add(new CaseOwnershipRelation__c
				(
                CPIFactor__c = Decimal.valueOf(c.DoingBusinessAs__c), PropertyValueEventType__c = 'Change in Ownership', 
                FactoredBaseYearValue__c = totalValue * Decimal.valueOf(c.DoingBusinessAs__c), FactoredBaseYearValueImprovements__c = improvementValue * Decimal.valueOf(c.DoingBusinessAs__c), FactoredBaseYearValueLand__c = landValue * Decimal.valueOf(c.DoingBusinessAs__c), 
                Ownership__c = objOwner.Id, OwnershipBaseYear__c = objOBY.Id, Case__c = c.Id, AccountName__c = objAccount.Id,
                Factor__c = factorMap2.get(strYear)
                ));
            system.debug('corToInsert insideLoop>>' + corToInsert.size());
        }
        insert corToInsert;
        system.debug('corToInsert>>' + corToInsert.size());

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
            AssessmentYear__c = String.valueOf(latestYear), RollCode__c = 'Secured', Status = 'New', AccountId = objAccount.Id, TemporaryLandValue__c = 0.0, 
            TemporaryImprovementValue__c = 0.0, TotalTemporaryValue__c = 0.0, TotalAdjustmentValue__c = 0.0, RPAmountExempt__c = 0.0, 
            LegacyExemptionPenaltyAmount__c = 0.0, Legacy480Penalty__c = 0.0, BaseYearEventDate__c = eventDate, 
            TotalPersonalPropertyValueRP__c = 0.0, TotalFixturesValueRP__c = 0.0, LegacyLastCIO__c = 'Legacy Change in Ownership',
            LegacyLastCIODate__c = eventDate, AccountName__c = firstNames[randomIndex] + ' ' + lastNames[randomIndex], 
            TaxableStatus__c = 'Taxable');
        insert objCase;
        system.debug('objCase>>' + objCase);
        
        insert new CaseOwnershipRelation__c(CPIFactor__c = factorMap.get(latestFactorKey), PropertyValueEventType__c = 'Change in Ownership', FactoredBaseYearValue__c = totalValue * factorMap.get(latestFactorKey), 
            FactoredBaseYearValueImprovements__c = improvementValue * factorMap.get(latestFactorKey), FactoredBaseYearValueLand__c = landValue * factorMap.get(latestFactorKey), Ownership__c = objOwner.Id, 
            OwnershipBaseYear__c = objOBY.Id, Case__c = objCase.Id, AccountName__c = objAccount.Id, Factor__c = factorMap2.get(latestFactorKey));
    }
}