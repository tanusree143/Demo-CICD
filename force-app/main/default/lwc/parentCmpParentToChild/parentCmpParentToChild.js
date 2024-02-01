import { LightningElement } from 'lwc';

export default class ParentCmpParentToChild extends LightningElement {
  
    handleMessage(event){
            this.template.querySelector('c-child-cmp-parent-to-child').displayMessage(event.target.value)
        }
    
}