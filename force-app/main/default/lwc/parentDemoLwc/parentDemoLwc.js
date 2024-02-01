import { LightningElement,track } from 'lwc';
import getContactRecordDetailsByName from '@salesforce/apex/GetContactDetails.getContactRecordDetailsByName';

export default class ParentDemoLwc extends LightningElement {
    @track inputValue;
     contactDetails;
   
    getContactDetails({}){
        getContactRecordDetailsByName({
            contactName : this.name
        })
        .then(result=>{this.contactData=result})
        .catch(error =>{console.log('print error'+error)})
    }
    handlechange(event){
        this.inputValue = event.target.value;
    }
}