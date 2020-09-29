import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpRequestService } from '../../services/user.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  post;
  contactUsForm: FormGroup
  constructor(private fb:FormBuilder, private service: HttpRequestService) { }

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      message : ['', Validators.required],
    })
  }

  get name(){
    return this.contactUsForm.get('name')
  }

  get email(){
    return this.contactUsForm.get('email')
  }

  get message(){
    return this.contactUsForm.get('message')
  }

  contactUs(){
    console.log(this.contactUsForm.value);
    return this.service.contactUs(this.contactUsForm.value).subscribe(res=>{
      console.log(res);

      this.post = "Thanks for your interest. We will revert you in 24 hours..!"
    })
    
  }
}
