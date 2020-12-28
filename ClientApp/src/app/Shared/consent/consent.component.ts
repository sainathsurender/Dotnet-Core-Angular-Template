import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent {

  constructor(private modalService: NgbModal) { }

  close(type) {
    if(type == "accept")
    {
      localStorage.setItem('consent', type);
    }
    else{
      
    }
    this.modalService.dismissAll();
  }

}
