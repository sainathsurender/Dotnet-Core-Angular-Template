import { Component } from '@angular/core';

import { NgbModal,NgbModalConfig, NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css'],
  providers: [NgbModal,NgbModalConfig]
})
export class ConsentComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

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
