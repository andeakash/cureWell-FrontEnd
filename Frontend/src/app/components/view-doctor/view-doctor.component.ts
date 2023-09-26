import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
  doctors:Doctor[]=[];
  tempDoctors:Doctor[]=[];
  doctorIds:any[]=[];
  category:any;
  showMsgDiv:string='';
  couldFetch=false;
  constructor(private http:DataService, private router:Router,private activatedRoute:ActivatedRoute){
    try{
      this.category=this.activatedRoute.snapshot.paramMap.get('specializationCode');
    }
    catch(e){
      this.category=null;
    }
  }
   ngOnInit(){

   
  if(this.category==null){
    this.http.getAllDoctors().subscribe((data:any) => {  
      console.log("Data")
      console.log(data);
      this.doctors=data;
         
      //Error Causing 
     
      //From here
      if(data.length>0){       
        this.showMsgDiv="All Doctors Fetched Successfully!!!";
        this.couldFetch=!this.couldFetch;        
      }
      else{
        this.showMsgDiv="No Doctors Present !!!";
        this.couldFetch=false;
      }
      
      //till here
      
  }); 
    console.log("cate "+this.category);

  }
  else{
    this.http.getDoctorSpecialization(this.category).subscribe((data:any)=>{
      this.doctorIds=data;
      console.log(this.doctorIds);
      this.http.getAllDoctors().subscribe((data:any) => { 
        this.tempDoctors=data;
        console.log(this.tempDoctors);
        this.doctors=this.tempDoctors.filter(item=>{
          return this.doctorIds.some(filterItem=>filterItem.DoctorId==item.DoctorId);
         });
         console.log('Final')
         console.log(this.doctors);
       });
       
    });
    
  }
  }
  
  editDoctor(doctor:any){
    this.router.navigate(['/doctor',doctor.DoctorId])
  }

//Created the httpdelete and Updated Data
  deleteDoctor(doctor:Number){
    // console.log(typeof(doctor))
       this.http.deleteDoctor(doctor).subscribe((data:any)=>{
        //  this.deleteMsg=data;
         this.http.getAllDoctors().subscribe((data:any)=>{
          this.doctors=data;
         });
        
        //  console.log(data)
       })
  }
}
