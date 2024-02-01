import { LightningElement, api } from 'lwc';

export default class DynamicDataDisplay extends LightningElement {
    @api summaryTitle;
    @api summaryIcon;
    @api summaryData;

    get summaryDetails() {
        return Object.keys(this.summaryData).map(key => ({
            field: key,
            value: this.summaryData[key]
        }));
    }
}