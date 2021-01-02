import { Component } from "@angular/core";

@Component({
    selector: "successAlert",
    templateUrl: "./successAlert.html",
    //template: `<p> "Success message from success alert component!"</p>`,
    styles: [
            `
            p {
                padding: 20px;
                background-color : darkseagreen;
                border: 1px;
              }
            `
        ]
})
export class SuccessAlert{
    successAlert:string = "Success message from success alert component!";
}