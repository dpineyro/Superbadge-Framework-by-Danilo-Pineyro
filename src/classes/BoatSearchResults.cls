public class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        String condition = '';
        if (!String.isBlank(boatTypeId)) {
            condition = ' WHERE BoatType__c=:boatTypeId';
        }
        List<Boat__c> result = Database.query('SELECT Id,Name,Picture__c,Geolocation__Longitude__s,Geolocation__Latitude__s FROM Boat__c' + condition);
        return result;
    }
}