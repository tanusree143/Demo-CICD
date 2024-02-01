public class DisplayGetContactDetails {
@AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts(){
        List<Contact> contactList = new List<Contact>();
        try{
          contactList = [SELECT Id,FirstName,LastName,Phone , Email FROM Contact];  
        } catch(Exception e){
            System.debug('Exception ::'+e);
        }
        return contactList;
        
    }
}