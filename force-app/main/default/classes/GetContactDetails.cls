public class GetContactDetails {
    @AuraEnabled(cacheable=true)
    public static Contact getContactRecordDetailsByName(String contactName){
        Contact con ;
        try{
            con =[Select FirstName,LastName,AccountId,Email,Phone from Contact Where LastName =: contactName];
        }catch(Exception e){
            System.debug('Exception =>'+e);
        }
        System.debug('contact record'+con);
        return con;
    }

}