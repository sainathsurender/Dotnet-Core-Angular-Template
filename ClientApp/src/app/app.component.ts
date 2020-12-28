import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConsentComponent } from './Shared/consent/consent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  closeResult = '';

  ngOnInit() {
    if(localStorage.getItem('consent') != "accept")
    {
      this.modalService.open(ConsentComponent);
    }
  }

  constructor(private modalService: NgbModal) { }
}
