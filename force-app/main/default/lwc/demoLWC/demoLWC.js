import { LightningElement,track } from 'lwc';
import getAccountRecordByName from '@salesforce/apex/DemoLwcApex.getAccountRecordByName';
export default class DemoLWC extends LightningElement {
    @track Name ='';
    @track accountData;

    changeAccountName(event){
        this.Name = event.target.value;
    }
    getAccountDetails({}){
        console.log('name =>1');
 
            getAccountRecordByName({
                accountName : this.Name
            })
            .then(result=>{this.accountData = result;})
            .catch(error=>{
                console.error(error);
            })
            console.log('name =>2'+result);

    }

}