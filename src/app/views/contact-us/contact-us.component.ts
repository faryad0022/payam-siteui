import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AddressService } from 'src/app/core/services/address/address.service';
import { ContactUsService } from 'src/app/core/services/contact-us/contact-us.service';
import { AddressDTO } from 'src/app/data/api/address/addressDTO';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  addresses: AddressDTO[] = [];
  messageForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.maxLength(100)]],
    title: ['', [Validators.required, Validators.maxLength(100)]],
    telephone:['', [Validators.required, Validators.maxLength(20)]],
    description: ['', [Validators.required, Validators.maxLength(500)]]
  });
  constructor(
    private addressService: AddressService,
    private contactUsService: ContactUsService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(res=> {
      this.addresses = res.data; 
    });
}
Submit(){
if(this.messageForm.valid){
  this.contactUsService.sendMessage(this.messageForm.value).subscribe(res=>{
    if(res.status === 'Success'){
      this.toastr.success(res.data,'Success');
      this.messageForm.reset();
    }
    if(res.status === 'ServerError'){
      this.toastr.error(res.data,'Error');
      this.messageForm.reset();
    }
    if(res.status === 'ModelError'){
      this.toastr.warning(res.data,'Warn');
    }
  })
}

}

}
