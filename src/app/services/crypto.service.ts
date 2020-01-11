import { Injectable } from '@angular/core';
import * as CryptoJs from 'crypto-js';

@Injectable({ providedIn: 'root' })
export class CryptoService {
  constructor() { }
  // base64 encoded
  utoa(str: string) {
    const encryptedWord = CryptoJs.enc.Utf8.parse(str);
    return CryptoJs.enc.Base64.stringify(encryptedWord);
  }
  // base64 decoded
  atou(enc: string) {
    const encryptedWord = CryptoJs.enc.Base64.parse(enc);
    return CryptoJs.enc.Utf8.stringify(encryptedWord);
  }
  // md5
  md5(str: any) {
    return CryptoJs.MD5(str).toString();
  }

}