import { Component, OnInit } from '@angular/core';
import { MessageService } from '../_services/message.service';
import { StringContainer } from '../_models/stringContainer';
import { EncodeDecodeService } from '../_services/encodeDecode.service';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.scss']
})
export class DecodeComponent implements OnInit {

  constructor(private service: EncodeDecodeService, private messageService: MessageService) { }
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
