import { LightningElement ,api} from 'lwc';
export default class ChildComponent extends LightningElement {
   @api empDetails;
   Message ='';
    @api
    changeMessage(strString) {
        this.Message = strString;
   }
}