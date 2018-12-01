import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Base64Service {
    constructor(private httpClient: HttpClient) { }

    encode(input: string): Observable<string> {
        return this.httpClient.post<string>('api/base64/encode', input);
    }

    decode(input: string): Observable<string> {
        return this.httpClient.post<string>('api/base64/decode', input);
    }
}
