import { LightningElement, } from 'lwc';

export default class ParentComponentForChildToParent extends LightningElement {
    textMessage;
     message(event){
        this.textMessage =event.detail ;
        alert('ok');
    }
}