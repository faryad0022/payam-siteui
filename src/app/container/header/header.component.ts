import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/core/services/address/address.service';
import { AddressDTO } from 'src/app/data/api/address/addressDTO';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  defaultMobile!: string;
  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(res=> {
      if(res.data.length){
        this.defaultMobile = res.data[0].cellPhone;
      }
      
    })
  }

}
