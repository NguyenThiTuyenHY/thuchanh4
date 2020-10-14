import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import { flatten } from '@angular/compiler';
@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent implements OnInit {
  myform: FormGroup;
  submitt = false;
  constructor(private _http: HttpClient, private _router: ActivatedRoute, private _builer: FormBuilder) { }
  item:any;
  i = 0;
  iscreate :boolean;
  ngOnInit(): void {
    this.myform = this._builer.group({
      txtdanhmuc: ['',Validators.required]
    })
    this._router.params.subscribe(params=>{
      this._http.get("https://localhost:44374/api/danhmuc/get_all_danh_muc").subscribe(res=>{
        this.item = res;
      })
    })
  }
  get f() {return this.myform.controls;}
  submit_on(){
    this.submitt = true;
    if(this.myform.invalid){
      return;
    }
    alert(this.myform.controls["txtdanhmuc"]);
    alert("Thêm thành công");
  }
  insert(){
    this.iscreate = true;
  }
  xoa_delete(id){
    this.iscreate = false;
  }
  edit(id){

  }
  onReset() {
    // reset whole form back to initial state
    this.submitt = false;
    this.myform.reset();
  } 
}
