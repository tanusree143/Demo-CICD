public class UpdateContactAddressQueueable implements Queueable {

    public void execute(QueueableContext context) {
     List<Contact> contactList = [SELECT Id,Name,AccountId,MailingStreet,MailingCity,MailingState,MailingPostalCode,MailingCountry FROM Contact];
     List<Contact> updateContactList = new List<Contact>();
     List<Contact> insertContactList = new List<Contact>();
     Map<String,Contact> contactMap = new Map<String,Contact>();
        for(Contact contact : contactList)
        {
            contactMap.put(contact.AccountId,contact);
        }
        for(Account account : [Select Id, Name, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry FROM Account]){
           Contact contact = contactMap.get(account.id);
            if(contact != NULL){
                contact.MailingStreet = account.BillingStreet;
                contact.MailingCity = account.BillingCity;
                contact.MailingState = account.BillingState;
                contact.MailingPostalCode = account.BillingPostalCode;
                contact.MailingCountry = account.BillingCountry;
                updateContactList.add(contact);
                
            }else{
                Contact con = new Contact();
                con.LastName = 'Test'+ account.id;
                con.AccountId = account.id;
                con.MailingStreet = account.BillingStreet;
                con.MailingCity = account.BillingCity;
                con.MailingState = account.BillingState;
                con.MailingPostalCode = account.BillingPostalCode;
                con.MailingCountry = account.BillingCountry;
                insertContactList.add(con);
            }
        }
        if( !updateContactList.isEmpty()){
            database.update(updateContactList);
        }
        if( !insertContactList.isEmpty()){
            database.insert(insertContactList);
        }
        
    }
}