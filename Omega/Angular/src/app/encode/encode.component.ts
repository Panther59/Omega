import { Component, OnInit } from '@angular/core';
import { StringContainer } from '../_models/stringContainer';
import { MessageService } from '../_services/message.service';
import { EncodeDecodeService } from '../_services/encodeDecode.service';

@Component({
  selector: 'app-encode',
  templateUrl: './encode.component.html',
  styleUrls: ['./encode.component.scss']
})
export class EncodeComponent implements OnInit {

  constructor(private service: EncodeDecodeService, private messageService: MessageService) { }
  inputData: string;
  outputData: string;
  editorOptions = { theme: 'vs-dark', language: 'text' };
  encodeString() {
    const input = new StringContainer();
    input.text = this.inputData;
    this.service.encode(input).subscribe(data => {
      this.outputData = data.text;
    }, error => {
      this.messageService.showMessage("Error", error.message);
    });
  }

  ngOnInit() {
  }

}
