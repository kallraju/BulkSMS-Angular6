import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SmsreportsService} from '../smsreports.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Element } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Component({
  selector: 'app-smsreports',
  templateUrl: './smsreports.component.html',
  styleUrls: ['./smsreports.component.css']
})
export class SmsreportsComponent implements OnInit {
  reports: FormGroup;
  someDate:any;
  fdate:any;
  toodate:any;
  rt:any;
  reportstbldata:any;
  displayedColumns = ['sm_message', 'sm_mno', 'sm_status', 'sm_sender_name'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  userid:any=sessionStorage.getItem('id');
  a:any;
  constructor(private formBuilder: FormBuilder,private reportserviec:SmsreportsService) { 
    this.reports=this.formBuilder.group({
      reporttype:['',Validators.required],
      fdate:['',Validators.required],
      tdate:['',Validators.required],
      //uid:[this.userid]
    })
  }

  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(){
    //
  }

   public onSubmit(obj){
     //FROM DATE
     
     this.rt=obj.reporttype;
     var fd=obj.fdate;
     var date = fd.getDate();
     var month = fd.getMonth()+ 1;
     var year = fd.getFullYear();
     if(fd.getDate()<10){
      date ="0"+date;
      }
      if (fd.getMonth()+ 1<10){
      month="0"+month;
      }
     var fdate=year+"-"+month+"-"+date;
     this.fdate=fdate;
     
     var td=obj.tdate;
     var dt = td.getDate();
    
     var mt = td.getMonth()+ 1;
     var yt = td.getFullYear();
     if(td.getDate()<10){
      dt ="0"+dt;
      }
      if (td.getMonth()+ 1<10){
        mt="0"+mt;
      }
     var todate=yt+"-"+mt+"-"+dt;
    // alert(todate);
     this.toodate=todate;
     
    //console.log({uid:this.userid,reporttype:this.rt,fdate:this.fdate,tdate:this.toodate});

    this.reportserviec.reports({uid:this.userid,reporttype:this.rt,fdate:this.fdate,tdate:this.toodate})
        .subscribe(res=>{
            this.dataSource=res;
            //this.dataSource = new MatTableDataSource(res);
            //this.dataSource.paginator = this.paginator;
        })

  }
   
}
