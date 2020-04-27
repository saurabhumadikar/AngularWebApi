import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private ser:EmployeeService,private toastr: ToastrService
    ) {this.toastr.success('Succesfully Inserted Data','EMPLOYEE REGISTER'); }
    service=this.ser;
  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?:NgForm){
    
    if (form != null)
      form.resetForm();
    
    this.service.formData={
      EmployeeID:null,
      FullName: '',
      Position: '',
      EMPCode: '',
      Mobile: ''
    }

  }
OnSubmit(form:NgForm){
if(form.value.EmployeeID == null){
  this.insertData(form);
}

  this.updateRecord(form);

}

insertData(form:NgForm){
  
this.service.postEmployee(form.value).subscribe((res)=>
{

  this.resetForm(form)
  this.toastr.success("Succesfully Inserted Data","EMPLOYEE REGISTER");
  this.service.refreshEmployee();
})
}

updateRecord(form:NgForm){
  this.service.putEmployee(form.value).subscribe(res=>{
    this.resetForm(form)
    this.toastr.success("Succesfully Updated Data","EMPLOYEE REGISTER");})
    this.service.refreshEmployee();


}

}
