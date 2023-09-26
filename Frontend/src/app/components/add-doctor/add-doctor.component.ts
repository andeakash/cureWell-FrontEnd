import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctorClass.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  message: string = '';
  textMessage = ""
  alertClass = ""
  doctorModel=new Doctor();
  constructor(private dataService:DataService, private router:Router){

  }

  //added display
  displayMessage(){
    this.message = 'Doctor successfully added'
  }
  addDoctor(){
    console.log(this.doctorModel);
    this.dataService.addDoctor(this.doctorModel).subscribe( 
      (response: any) => {
        //On successful excecution of service
        this.textMessage = 'Doctors Fetched Successfully';
        this.alertClass = 'alert alert-success';
        console.log(this.textMessage);
      },

      (error: any) => {
        //In case of error
        this.textMessage = 'Error fetching doctors';
        this.alertClass = 'alert alert-danger';
        console.error(this.textMessage);
      }
  );
     
     this.router.navigate(['/home']);
  }
}
