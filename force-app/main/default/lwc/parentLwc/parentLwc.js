import { LightningElement } from 'lwc';

export default class ParentLwc extends LightningElement {
    sendMessageToChild(event){
        this.template.querySelector('c-child-lwc').displayMessage(event.target.value);
    }
}