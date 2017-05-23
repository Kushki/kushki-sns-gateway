/**
 * Created by david on 5/23/17.
 */
export class Greet {
    private name: string;

    constructor(name: string){
        this.name = name;
    }

    public greet():void {
        console.log('hola ' + this.name);
    }
}