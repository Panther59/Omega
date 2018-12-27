import { Component, OnInit } from '@angular/core';

import { EncodeDecodeService } from '../_services/encodeDecode.service';
import { StringContainer } from '../_models/stringContainer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: EncodeDecodeService) { }
  inputData: string;
  ouputData: string;
  editorOptions = { theme: 'vs-dark', language: 'text' };
  encodeString() {
    console.log(this.inputData);
    const input = new StringContainer();
    input.text = this.inputData;
    this.service.encode(input).subscribe((data: { text: string; }) => {
      this.ouputData = data.text;
    }, (error: any) => {
      console.error(error);
    });
  }

  decodeString() {
    console.log(this.inputData);
    const input = new StringContainer();
    input.text = this.inputData;
    this.service.decode(input).subscribe((data: { text: string; }) => {
      this.ouputData = data.text;
    }, (error: any) => {
      console.error(error);
    });
  }

  ngOnInit(): void {
  }

}
