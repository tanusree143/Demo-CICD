import { LightningElement,track } from 'lwc';




export default class DataBindingType2 extends LightningElement {


@track name = 'Ajinkya';




handleChange(event) {


this.name = event.target.value;


}
}