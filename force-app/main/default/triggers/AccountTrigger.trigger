trigger AccountTrigger on Account (After insert,After update) {
  if (Trigger.isInsert && Trigger.isAfter) {
        
    List<Id> accountIds = new List<Id>();
    for(Account account: Trigger.new){
        accountIds.add(account.id);
    }
      if(!accountIds.isEmpty())   {
            MyCall.callFlowMethod(accountIds);

      }
}
 List<Contact> conList = new List<Contact>();
    if(Trigger.isUpdate && Trigger.isAfter){
        for(Account account :Trigger.new ){
            if(account.Phone != null ){
               Contact con = new Contact();
                con.LastName = 'test1';
                con.Phone = account.Phone;
                con.AccountId = account.id;
                conList.add(con);
            }
        }
        
    }
    if(!conList.isEmpty()){
        insert conList;
    }
}