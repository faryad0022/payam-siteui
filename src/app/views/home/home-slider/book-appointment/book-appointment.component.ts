import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/core/services/appointment/appointment.service';
import { AppointmentDTO } from 'src/app/data/api/appointment/AppointmentDTO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit, OnDestroy {
  subManager = new Subscription();
  appointment: AppointmentDTO[] = [];
  appointmentForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.maxLength(100)]],
    telephone:['', [Validators.required, Validators.maxLength(20)]],
    cellPhone:['', [Validators.required, Validators.maxLength(20)]],

  });
  constructor(
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) { }
  ngOnInit(): void {
      
  }
  ngOnDestroy(): void {
      this.subManager.unsubscribe();
  }
  SendAppointmentRequest(){
    let appointmentDTO: AppointmentDTO = {
      cellPhone: this.appointmentForm.controls.cellPhone.value,
      email: this.appointmentForm.controls.email.value,
      name: this.appointmentForm.controls.name.value,
      telephone: this.appointmentForm.controls.telephone.value,
      status: 'در انتظار',
    }
    if(this.appointmentForm.valid){
      this.subManager.add(
        this.appointmentService.sendAppointmentRequest(appointmentDTO).subscribe(res=> {
            if(res.status === "ModelError"){
              Swal.fire({
                title: 'اخطار....!!!',
                text: "لطفا تمام موارد موجود در فرم را به درستی وارد نمائید.",
                icon: 'error',
                showConfirmButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'باشه'
              });
            }
            if (res.status === "ServerError"){
              
              Swal.fire({
                icon: 'error',
                title: 'لطفا زمان دیگری درخواست خودرا ارسال نمائید',
                showConfirmButton: false,
                timer: 3500
              });
            }
            if(res.status === "Success"){
              Swal.fire({
                icon: 'success',
                title: 'درخواست شما ارسال شد. همکاران ما با شما تماس خواهند گرفت',
                showConfirmButton: false,
                timer: 3500
              });

            }
        })
      );
    } else {
      Swal.fire({
        title: 'اخطار....!!!',
        html: '<p>لطفا تمام موارد را وارد نمائید</p>' + '<p><strong>ایمیل</strong> را در فرمت درست وارد نمائید</p>',
        icon: 'warning',
        showConfirmButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'باشه'
      });
    }

  }
}
