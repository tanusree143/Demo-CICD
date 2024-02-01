import { LightningElement,track } from 'lwc';

export default class Test2 extends LightningElement {
    @track name ='Swapna Jayaprakash';
    handleChange(event){
        this.name = event.target.value;
    }
}