import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData :Employee;
  emplist:Employee[];

  readonly rootUrl='http://localhost:53720/';
  constructor(private http:HttpClient) {
  }

  postEmployee(formData:Employee){
    
    return this.http.post(this.rootUrl+'api/Employee/insert',formData);

  }

  refreshEmployee(){
    this.http.get(this.rootUrl+'api/Employee').toPromise().then(res=> this.emplist=res as Employee[])
  }
putEmployee(formData:Employee){
return this.http.put(this.rootUrl+'api/Employee/update/'+formData.EmployeeID,formData);
}

deleteEmployee(id:number){
  return this.http.delete(this.rootUrl+'api/Employee/delete/'+id)
}

}

