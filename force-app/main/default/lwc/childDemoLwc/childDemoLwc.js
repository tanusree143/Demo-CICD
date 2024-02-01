import { LightningElement,api,track } from 'lwc';

export default class ChildDemoLwc extends LightningElement {
    @api
    get contactData(){
        return this._contactData;

    }
    set contactData(value){
        this._contactData=value;
    }

    _contactData;
}