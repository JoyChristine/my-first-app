import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  buttonLikeStatus = "";
  constructor() { }

  ngOnInit(): void {
  }
  clickLikeButton() {
    this.buttonLikeStatus = "You like this";
  }

}
