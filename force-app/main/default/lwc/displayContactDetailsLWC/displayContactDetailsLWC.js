import { LightningElement ,track} from 'lwc';
import getContactRecordDetailsByName from '@salesforce/apex/GetContactDetails.getContactRecordDetailsByName';

export default class DisplayContactDetailsLWC extends LightningElement {
    @track name ='';
    @track contactData;
    changeName(event){
        this.name = event.target.value;
    }
    getContactDetails({}){
        getContactRecordDetailsByName({
            contactName : this.name
        })
        .then(result=>{this.contactData=result})
        .catch(error =>{console.log('print error'+error)})
    }
}