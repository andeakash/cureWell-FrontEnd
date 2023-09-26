import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { ISpecialization } from '../models/specialization.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getAllDoctors():Observable<Doctor[]>{
   
  //Change the port Number Whoever is running The Backend ~AS 

    
    //return this.http.get<IDoctor[]>('https://localhost:7170/api/Doctor');
    return this.http.get<Doctor[]>('https://localhost:44384/api/doctor');

  }
  deleteDoctor(doctor: any):any{
   
    //return this.http.delete('https://localhost:7170/api/Doctor/'+doctor);
    return this.http.delete('https://localhost:44384/api/Doctor/'+doctor);
  }
  updateDoctor(doctor: any):any{
    //return this.http.put('https://localhost:7170/api/Doctor',doctor);
    return this.http.put('https://localhost:44384/api/Doctor',doctor);
  }
  addDoctor(doctor:any):any{
    //return this.http.post('https://localhost:7170/api/Doctor',doctor);
    return this.http.post('https://localhost:44384/api/Doctor',doctor);
  }
  getAllSpecializations():Observable<ISpecialization[]>{
    //return this.http.get<ISpecialization[]>('https://localhost:7170/api/Specialization');
    return this.http.get<ISpecialization[]>('https://localhost:44384/api/specialization');
  }
  getAllSurgeries():any{
    //return this.http.get('https://localhost:7170/api/Surgery');
    return this.http.get('https://localhost:44384/api/Surgery');
  }
  updateSurgery(surgery:any):any{
    //return this.http.put('https://localhost:7170/api/Surgery',surgery);
    return this.http.put('https://localhost:44384/api/Surgery',surgery);
  }
  getDoctorSpecialization(specializationCode :any):any{
    //return this.http.get('https://localhost:7170/api/DoctorSpecialization/'+specializationCode);
    return this.http.get('https://localhost:44384/api/doctorspecialization?specializationCode='+specializationCode);
  }

}
