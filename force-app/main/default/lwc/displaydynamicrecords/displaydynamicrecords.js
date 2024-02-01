import { LightningElement, api, wire } from 'lwc';
import { getObjectInfo, getRecord } from 'lightning/uiObjectInfoApi';

export default class DisplayDynamicRecords extends LightningElement {
    @api recordId; // Record Id passed to the component
    @api objectApiName; // Object API name passed to the component
    record;
    objectFields;
    error;

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectInfo({ error, data }) {
        console.log("123123456789::"+ record +"::"+objectFields );

        if (data) {
            const fieldInfos = data.fields;
            this.objectFields = Object.values(fieldInfos).filter(field => field.apiName !== 'Id');
        } else if (error) {
            this.error = error.body.message;
        }
    }

    handleLoad(event) {
        console.log("123"+ this.recordId +"::"+this.objectApiName );
        this.record = event.detail.records[this.recordId];
    }

    handleError(error) {
        this.error = error.body.message;
    }
}