import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/core/services/address/address.service';
import { AddressDTO } from 'src/app/data/api/address/addressDTO';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  addresses: AddressDTO[] = [];
  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(res=> {
      this.addresses = res.data;
      
    })
  }

}
