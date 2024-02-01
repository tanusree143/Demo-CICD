@RestResource(urlMapping='/demoWebServices/*')
global class DemoWebServices {
@HttpGet
    global static Account getAccountDetails(){
        RestRequest req = RestContext.request;
        String accountId = req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        System.debug('accountId' + accountId);
        
        Account acc;
        try{
           acc = [Select Id,Name,ShippingCity FROM Account WHERE Id =: accountId limit 1];

        }catch(Exception e)
        {
            System.debug('Exception e: '+e);
        }
        return acc;
        
    }

}

//REST Context Class
//add rest annotation
//make the class as the global
//HttpGet methods do not support parameters
//make the method global method