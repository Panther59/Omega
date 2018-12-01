import { Component } from '@angular/core';
import { Base64Service } from 'src/_services/base64.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: Base64Service) { }
  inputData: string;
  ouputData: string;

  encodeString() {
    console.log(this.inputData);
    this.service.encode(this.inputData).subscribe(data => {
      this.ouputData = data;
    }, error => {
      console.error(error);
    });
  }

  decodeString() {
    console.log(this.inputData);
    this.service.decode(this.inputData).subscribe(data => {
      this.ouputData = data;
    }, error => {
      console.error(error);
    });
  }
}
