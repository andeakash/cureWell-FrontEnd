import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctorClass.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent {
  textMessage=''
  alertClass=''
  doctorModel=new Doctor();
  constructor(private dataService:DataService,private activatedRoute:ActivatedRoute, private router:Router){
    this.doctorModel.DoctorId=Number(this.activatedRoute.snapshot.paramMap.get('docId'));
  }
 
  updateDoctor(){

    console.log(this.doctorModel);
    this.dataService.updateDoctor(this.doctorModel).subscribe(
      (response: any) => {
        //On successful excecution of service
        this.textMessage = 'Updated successfully right now';
        this.alertClass = 'alert alert-success';
        console.log(this.textMessage);
      },

      (error: any) => {
        //In case of error
        this.textMessage = 'Some error occured';
        this.alertClass = 'alert alert-danger';
        console.error(this.textMessage);
      }
  );  
  
      this.router.navigate(['/home']);
}
}


