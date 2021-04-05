import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { ConsentComponent } from './Shared/consent/consent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  closeResult = '';
  consentDate : Date;
  currentDate : Date = new Date();

  ngOnInit() {
    if(localStorage.getItem('consent') != "accept")
    {
      this.modalService.open(ConsentComponent);
    }

    this.consentDate = new Date(localStorage.getItem('consentDate'));
    this.consentDate.setDate(this.consentDate.getDate() + 1);
    this.consentDate.setHours(this.consentDate.getHours());
    this.consentDate.setMinutes(this.consentDate.getMinutes());
    this.consentDate.setSeconds(this.consentDate.getSeconds());

    if(this.consentDate > this.currentDate)
    {
      // alert(1);
    }
    else{
      // alert(2);
    }
  }

  constructor(private modalService: NgbModal) { }
}
