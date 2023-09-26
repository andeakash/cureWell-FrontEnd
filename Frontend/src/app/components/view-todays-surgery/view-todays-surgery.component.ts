import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Surgery } from 'src/app/models/surgery.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-todays-surgery',
  templateUrl: './view-todays-surgery.component.html',
  styleUrls: ['./view-todays-surgery.component.css']
})
export class ViewTodaysSurgeryComponent {
  surgeries:Surgery[]=[];
  alertClass = ""
  textMessage = ""
  getTodaySurgery: any;
  constructor( private router:Router,private dataService:DataService){
    this.dataService.getAllSurgeries().subscribe((data:any) => {
        this.surgeries=data;
      }
    );
  }
  editSurgery(surgery:any){
    console.log(surgery);
    this.router.navigate(['/editSurgery',surgery.SurgeryId],{
      state:
        {data:surgery }    
    })
  }
  ngOnInit(){
     this.getTodaySurgery().subscribe((data: Surgery[]) => {  
      console.log(data);
      this.surgeries=data;
    },
  (response: any) => {
    //On successful excecution of service
    this.textMessage = 'Specializations Fetched Successfully';
    this.alertClass = 'alert alert-success';
    console.log(this.textMessage);
  },

  (error: any) => {
    //In case of error
    this.textMessage = 'Error fetching Specializations';
    this.alertClass = 'alert alert-danger';
    console.error(this.textMessage);
  }); 
}
}