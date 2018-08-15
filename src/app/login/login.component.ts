import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginService} from '../login.service';
import { map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  logindata:any;
  signupForm: FormGroup;
  name:any;
  password:any;
  visible = false;
  sub;
  constructor(private fb:FormBuilder,private loginservice:LoginService,
    private router:Router,private route:ActivatedRoute) { 
      this.signupForm=fb.group({
        'name':[null,Validators.required],
        'psw':[null,Validators.required]
      })
  }

  ngOnInit() { }

  public  onSubmit(post){
    this.visible = true;
    this.name=post.name;
    this.password=post.psw;
      this.sub=this.loginservice.login(post).subscribe(data=>{
        //alert(data.user_id);
        //sessionStorage.setItem('id', data.user_id);
       
        //var datass = sessionStorage.getItem('id');
        //alert(datass);
      if(data.status===1)
      {
        this.visible = false;
        sessionStorage.setItem('id', data.user_id);
        this.router.navigate(['/main/sms']);
      }
      else{
        alert("fail");
      }

    })
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
