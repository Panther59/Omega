import { Component, OnInit } from '@angular/core';
import { Base64Service } from '../_services/base64.service';
import { MessageService } from '../_services/message.service';
import { StringContainer } from '../_models/stringContainer';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.scss']
})
export class DecodeComponent implements OnInit {

  constructor(private service: Base64Service, private messageService: MessageService) { }
  inputData: string;
  outputData: string;
  editorOptions = { theme: 'vs-dark', language: 'text' };
  decodeString() {
    const input = new StringContainer();
    input.text = this.inputData;
    this.service.decode(input).subscribe(data => {
      this.outputData = data.text;
    }, error => {
      this.messageService.showMessage("Error", error.message);
    });
  }


  ngOnInit() {
  }

}
