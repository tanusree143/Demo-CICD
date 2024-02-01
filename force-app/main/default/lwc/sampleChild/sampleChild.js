import { LightningElement ,api} from 'lwc';

export default class SampleChild extends LightningElement {
    msg;
    @api messgeToDisplay(strMessage){
        this.msg = strMessage;
    }
}