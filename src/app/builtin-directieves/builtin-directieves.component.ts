import { Component } from "@angular/core"

@Component({
    selector: "app-builtin-directives",
    templateUrl: "./builtin-directieves.component.html",
    styleUrls:["./builtin-directieves.component.css"]
})
export class BuiltinDirectives{

    counter(i:number){
        return new Array(i);
    }

    isEvenNumber(number){
        return number % 2 === 0;
    }

    isOddNumber(number){
        return number % 2 != 0; 
    }
}