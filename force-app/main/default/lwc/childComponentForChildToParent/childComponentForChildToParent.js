import { LightningElement} from 'lwc';

export default class ChildComponentForChildToParent extends LightningElement {
    handleEvent(){
        console.log('execute 1');

    const mycustomEvent = new CustomEvent('simpleevent',{
        detail: 'this is my first message from child to parent'
    });
    console.log('execute 2');
    this.dispatchEvent(mycustomEvent);
   }
}