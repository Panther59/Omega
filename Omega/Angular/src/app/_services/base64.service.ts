import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StringContainer } from '../_models/stringContainer';

@Injectable()
export class Base64Service {
  constructor(private httpClient: HttpClient) { }

  encode(input: StringContainer): Observable<StringContainer> {
    return this.httpClient.post<StringContainer>('api/base64/encode', input);
  }

  decode(input: StringContainer): Observable<StringContainer> {
    return this.httpClient.post<StringContainer>('api/base64/decode', input);
  }
}
