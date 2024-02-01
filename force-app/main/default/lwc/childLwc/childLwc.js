import { LightningElement ,api} from 'lwc';

export default class ChildLwc extends LightningElement {
    msg;
   @api displayMessage(strMessage){
    this.msg = strMessage;
   }
}