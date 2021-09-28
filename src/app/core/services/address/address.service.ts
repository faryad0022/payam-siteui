import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressDTO } from 'src/app/data/api/address/addressDTO';
import { IResponseResult } from 'src/app/data/common/IResponseResult';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

constructor(private http: HttpClient) { }
getAddresses():Observable<IResponseResult<AddressDTO[]>>{
  return this.http.get<IResponseResult<AddressDTO[]>>('/Addresses/get-address');
}

}
