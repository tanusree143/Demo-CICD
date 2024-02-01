import { LightningElement ,wire} from 'lwc';
import getAllContacts from '@salesforce/apex/DisplayGetContactDetails.getAllContacts';
export default class DisplayContacts extends LightningElement {
    contacts = [];

    @wire(getAllContacts, { })

    wiredContacts({ error, data }) {

        if (data) {

            this.contacts = data;

        } 
}
}