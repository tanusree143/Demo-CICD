import { LightningElement } from 'lwc';

export default class ParentOne extends LightningElement {
    message = 'swapna Kalapati';
    handleClick(){
        this.message="changing name as Jayaprakash";
    }
}