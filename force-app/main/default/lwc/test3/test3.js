import { LightningElement } from 'lwc';

export default class Test3 extends LightningElement {
    name = 'Swapna ';
    blogName = 'Kalapati';
    get blogname(){
        const completeName = `${this.name}  ${this.blogName}`;
        return completeName.trim().toLowerCase();
    }
}