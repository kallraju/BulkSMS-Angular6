import { Component, OnInit } from '@angular/core';
//import {SmsService} from ''
import {SmsService} from '../sms.service';
import { async } from 'q';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {NumberOnlyDirective} from '../number-only.directive';
import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {
    composeForm: FormGroup;
    senderdata:any;
    savedmsg:any;
    msg:string;
    tempdata:any;
    composedata:any;
    mnodata:any;
    //buttonStatus:boolean=false;
    visible = false;
    mpbiletextarea=true;
    fileup=false;
    selectedfile:File=null;
    userid:any=sessionStorage.getItem('id');
    constructor(private formBuilder: FormBuilder,private senderload:SmsService) {
        this.composeForm = this.formBuilder.group({
            Rtype: ['', Validators.required],
            senderid: ['', Validators.required],
            //mno: ['', Validators.required],
            mno: [null],
           // mno: ['', [Validators.required,Validators.minLength(5)]],
           // savemsg: ['', Validators.required],
            //transmsg: ['', Validators.required],
            msg: ['', Validators.required],
            cap: [''],
            uid:[this.userid],
            FU:[null]
            //msg.replace('/n', ',');
        });
      //alert(sessionStorage.getItem('id'));

      
    }
    
    ngOnInit() {
        
        /*this.senderload.getsenderids(sessionStorage.getItem('id')).
            subscribe(data => {
                this.senderdata = data
        }
        );*/
        this.senderdata = this.senderload.getsenderids(sessionStorage.getItem('id'));
        //this.savedmsg = this.senderload.getsavedmsg(sessionStorage.getItem('id'));
        let objSavedMsgSubscript=this.senderload.getsavedmsg(sessionStorage.getItem('id')).
            subscribe(data => {
                this.savedmsg = data;
                objSavedMsgSubscript.unsubscribe();    
            }
        );

        //subscribe(data=>this.senderdata=console.log(data));


        let objtemp=this.senderload.gettemplates(sessionStorage.getItem('id')).
            subscribe(data => {
                this.tempdata = data;
                objtemp.unsubscribe();    
            }
        );
    }

    

    public getSaveMsgID(value){
        
        let result=this.savedmsg.find(o => o.mid == value.value );
        this.msg=result.msg;
    }

    public gettemID(value:any){
       
        let result=this.tempdata.find(o => o.tid == value.value );
        //alert(JSON.stringify(result));
        this.msg=result.template;
    }

    //remove duplicate numbers
    unique(mnodata){
        var arr = this.mnodata.split("\n");
        alert(arr.length);
        let unique_array = []
        for(let i = 0;i < arr.length; i++){
            if(unique_array.indexOf(arr[i]) == -1){
                unique_array.push(arr[i])
            }
        }       
        var a=unique_array.toString().replace(",","\n");
        this.mnodata=a;  
    }
    //cleare
    public clear(mnodata){
        this.mnodata="";
    }
    //count
    public count(mnodata){
        //alert(this.mnodata);
        var arr = this.mnodata.split("\n");
        alert(arr.length);
    }
    public number(){
       //alert();
        //this.composeForm.get('mno').setValidators([Validators.required]);
       //this.composeForm.get('FU').clearValidators();
       
       const phoneControl = this.composeForm.get('mno');
       phoneControl.setValidators([Validators.required]);
       this.composeForm.get('FU').clearValidators();
       phoneControl.updateValueAndValidity();
       this.mpbiletextarea=true;
       this.fileup=false;
    }
    public file(){
        //const phoneControl = this.composeForm.get('file');
        //phoneControl.setValidators([Validators.required]);
        this.mnodata="";
        const flup = this.composeForm.get('FU');
        flup.setValidators([Validators.required]);
        this.composeForm.get('mno').clearValidators();
        flup.updateValueAndValidity();
        this.mpbiletextarea=false;
        this.fileup=true;
    }
    //fileupload
    onfileselected(event) {
        this.selectedfile=<File>event.target.files[0];
        //console.log(event);
      }
      

    onSubmit(post){
        this.visible = true;
        if(this.fileup){
            const fd=new FormData();
            fd.append('UF',this.selectedfile,this.selectedfile.name);
            fd.append("Rtype",post.Rtype);
            fd.append("senderid",post.senderid);
            fd.append("msg",post.msg);
            fd.append("cap",post.cap);
            fd.append("uid",this.userid);
            fd.append("sendtype",'2');
            //console.log(fd.getAll('UF'));
            var composedataunsubscribe= this.senderload.compose(fd).subscribe(
                res=>{
                     this.composedata=res;
                     this.visible = false;
                     if(this.composedata.Success!==undefined){
                         this.composeForm.reset();
                         alert(this.composedata.Success);
                     }
                     else if(this.composedata.failed!==undefined){
                         alert(this.composedata.failed);
                     }
                     else
                         alert(this.composedata);
                     composedataunsubscribe.unsubscribe();
                }  
            )            
            return;
        }
        post.sendtype = 1;
        console.log(post);
        this.unique(post.mno);
        post.mno=this.mnodata;
        console.log(post);
        var composedataunsubscribe= this.senderload.compose(post).subscribe(
           res=>{
                this.composedata=res;
                this.visible = false;
                if(this.composedata.Success!==undefined){
                    this.composeForm.reset();
                    //post.reset();
                    alert(this.composedata.Success);
               
                }
                else if(this.composedata.failed!==undefined){
                    alert(this.composedata.failed);
                }
                else
                    alert(this.composedata);
                composedataunsubscribe.unsubscribe();
           }  
       )
        
     }

     

}
