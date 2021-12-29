import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AddressService } from 'src/app/core/services/address/address.service';
import { ContactUsService } from 'src/app/core/services/contact-us/contact-us.service';
import { AddressDTO } from 'src/app/data/api/address/addressDTO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
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
ngOnDestroy(): void {
    this.subManager.unsubscribe();
}
Submit(){
if(this.messageForm.valid){
  this.subManager.add(
  this.contactUsService.sendMessage(this.messageForm.value).subscribe(res=>{
    if(res.status === 'Success'){
      Swal.fire({
        icon: 'success',
        title: 'درخواست شما ارسال شد. همکاران ما با شما تماس خواهند گرفت',
        showConfirmButton: false,
        timer: 3500
      });
      this.messageForm.reset();
    }
    if(res.status === 'ServerError'){
      Swal.fire({
        icon: 'error',
        title: 'لطفا زمان دیگری درخواست خودرا ارسال نمائید',
        showConfirmButton: false,
        timer: 3500
      });
      this.messageForm.reset();
    }
    if(res.status === 'ModelError'){
      Swal.fire({
        title: 'اخطار....!!!',
        text: "لطفا تمام موارد موجود در فرم را به درستی وارد نمائید.",
        icon: 'error',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'باشه'
      });
    }
  }));
} else {
  Swal.fire({
    title: 'اخطار....!!!',
    text: "لطفا تمام موارد موجود در فرم را به درستی وارد نمائید.",
    icon: 'warning',
    showConfirmButton: true,
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'باشه'
  });
}

}
}

