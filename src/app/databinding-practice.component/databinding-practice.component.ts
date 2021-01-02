import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-practice',
  templateUrl: './databinding-practice.component.html'
})
export class DatabindingPractice  {
username:string = "";
  constructor() { }
  
  onUsernameClick(event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
  onClickResetUsername(){
    this.username = "";
  }

  isUserNameEmpty(){
    return this.username === '';
  }

}
