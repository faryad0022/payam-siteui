import { Component, Input, OnInit } from '@angular/core';
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

  @Input() addresses: AddressDTO[];
  @Input() socials: SocialDTO[];
  constructor(
  ) { }

  ngOnInit(): void {
  }
  gotoUrl(link: string) : void {
    window.open(link, "_blank");
}

}
