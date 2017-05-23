"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by david on 5/23/17.
 */
class Greet {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log('hola ' + this.name);
    }
}
exports.Greet = Greet;
