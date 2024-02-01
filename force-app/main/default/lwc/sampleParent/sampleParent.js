import { LightningElement } from 'lwc';

export default class SampleParent extends LightningElement {
    changeMessage(event){
        this.template.querySelector('c-sample-child').messgeToDisplay(event.target.value);
 
    }

}