import { LightningElement,api } from 'lwc';

export default class ChildCmpParentToChild extends LightningElement {
msg;
@api displayMessage(strMessage){
    this.msg = strMessage.toUpperCase();
}
}