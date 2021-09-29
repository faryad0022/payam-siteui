import { Component, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { AddressService } from 'src/app/core/services/address/address.service';
import { AddressDTO } from 'src/app/data/api/address/addressDTO';
import { SocialDTO } from 'src/app/data/api/address/socialDTO';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faCoffee = faCoffee;

  addresses: AddressDTO[] = [];
  socials: SocialDTO[] = [];
  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(res=> {
      this.addresses = res.data;
      
    });
    this.addressService.getSocials().subscribe(socialRes=> {
      
      this.socials = socialRes.data;
    });
  }
  gotoUrl(link: string) : void {
    window.open(link, "_blank");
}

}
