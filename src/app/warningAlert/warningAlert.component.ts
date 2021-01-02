import { from } from "rxjs";
import { Component } from "@angular/core"

@Component({
    selector: "warningAlert",
    templateUrl:'./warningAlert.html',
    styles: [
        `
        p {
            padding: 20px;
            background-color : mistyrose;
            border: 1px;
          }
        `
    ]
})
export class WarningAlert{
warningMessage:string = "warning message from warning alert component";

}