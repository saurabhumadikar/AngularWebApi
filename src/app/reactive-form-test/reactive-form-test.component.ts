import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';



@Component({
  selector: 'app-reactive-form-test',
  templateUrl: './reactive-form-test.component.html',
  styleUrls: ['./reactive-form-test.component.css']
})
export class ReactiveFormTestComponent implements OnInit {

  constructor(private ser:EmployeeService,private toastr: ToastrService)
   {
     this.toastr.success('Succesfully Inserted Data','EMPLOYEE REGISTER'); 
    
    }
    service=this.ser;
    EmployeeForm:FormGroup;
    
  ngOnInit() {
    this.EmployeeForm = new FormGroup({
      FullName: new FormControl(''),
      EmployeeID: new FormControl(),
     
      EMPCode:new FormControl(''),
      Mobile:new FormControl(''),
      Position:new FormControl(''),
    });

  }

  
  onSubmit(){
    this.service.formData=this.EmployeeForm.value;
    console.log(JSON.stringify(this.service.formData))
    if(this.service.formData.EmployeeID == null){
      
      this.insertData(this.EmployeeForm);
    }else{
      this.updateRecord(this.EmployeeForm);
    }
    
      
    
    }
    
    insertData(EmployeeForm){
      
    this.service.postEmployee(EmployeeForm.value).subscribe((res)=>
    {
    
      this.EmployeeForm.reset(this.EmployeeForm);
      this.toastr.success("Succesfully Inserted Data","EMPLOYEE REGISTER");
      this.service.refreshEmployee();
    })
    }
    
    updateRecord(EmployeeForm){
      this.service.putEmployee(this.EmployeeForm.value).subscribe(res=>{
        this.EmployeeForm.reset(this.EmployeeForm);
        this.toastr.success("Succesfully Updated Data","EMPLOYEE REGISTER");})
        this.service.refreshEmployee();
    
    
    }
    

}
