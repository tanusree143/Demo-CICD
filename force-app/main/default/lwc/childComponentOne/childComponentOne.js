import { LightningElement ,api} from 'lwc';

export default class ChildComponentOne extends LightningElement {
@api parentToChildMessage;
}