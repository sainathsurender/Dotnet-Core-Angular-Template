import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  public progress: number;
  public message: string;

  selectedFile: File = null;
  selectedFiles = [];
  private newBlogForm: FormGroup;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.newBlogForm = new FormGroup({
      Name: new FormControl(null),
      TileImage: new FormControl(null)
    });
  }

  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
  }

  onSubmit(data) {    
    const formData = new FormData();
    formData.append('Name', data.Name);
    // formData.append('TileImage', this.selectedFile);
    this.selectedFiles.forEach((f) => formData.append('TileImage', f));

    this.http.post('https://localhost:5001/api/WeatherForecast/UploadData', formData)
    .subscribe(res => {
      alert('Uploaded!!');
    });

    this.newBlogForm.reset();
  }

  chooseFile(files: FileList) {
    this.selectedFiles = [];
    if (files.length === 0) {
      return;
    }
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);
    }
  }

}
