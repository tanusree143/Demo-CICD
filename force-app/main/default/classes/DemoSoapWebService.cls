Global class DemoSoapWebService {
    webService static Account getAccountDetails(String accountId){
        Account acc; 

        try{
          acc =[SELECT Id,Name,ShippingCity FROM Account WHERE id =: accountId];
        }catch(exception e){
           System.debug('Exeception :'+e) ;
        }
         return acc;  
    }

}