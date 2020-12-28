import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-posteexample',
  templateUrl: './posteexample.component.html',
  styleUrls: ['./posteexample.component.css']
})
export class PosteexampleComponent implements OnInit {

  // issueForm: FormGroup;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private httpService: HttpService) { }

  ngOnInit() {
  }

  issueForm = new FormGroup({
    issue_name: new FormControl(),
    issue_message: new FormControl()
 });

  submitForm() {
    this.httpService.PostData('testapi',this.issueForm.value).subscribe(res => {
      console.log('Issue added!')
      // this.ngZone.run(() => this.router.navigateByUrl('/issues-list'))
    });
  }

}
