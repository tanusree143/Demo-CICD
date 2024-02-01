public class DemoLwcApex {
@AuraEnabled(cacheable=true)
    public static Account getAccountRecordByName(String accountName){
        Account acc ;
                System.debug('starting111'+ accountName);

        try{
           acc = [SELECT Id,Name,Industry,Phone FROM Account WHERE Name =:accountName];

        }catch(Exception e){
            System.debug(e);
        }
                    System.debug('12345:::'+acc);

        return acc;
    }
}