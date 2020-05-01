import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';
import {IHost} from '../../../interface/host';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  host: IHost = {
    idChuNha: 0,
    userName: '',
    password: '',
    hoTen: '',
    diaChi: '',
    sdt: '',
  }
  idtest: any;
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  formGroup = new FormGroup({
    idChuNha: new FormControl(),
    userName: new FormControl('', [
      Validators.required,
      // Validators.minLength(6)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    hoTen: new FormControl('', [
      Validators.required,
      // Validators.maxLength(8)
    ]),
    cmnd: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{12}')
    ]),
    diaChi: new FormControl('', Validators.required),
    sdt: new FormControl('', [
      Validators.required,
      Validators.pattern('/((09|03|07|08|05)+([0-9]{8})\\b)/g'),
    ]),
  });
  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const idSearch = params.get('id');
      this.componentsService.findByIdHost(idSearch).subscribe( result => {
        this.host = result;
        this.formGroup.controls.userName.setValue(this.host.userName);
        this.formGroup.controls.password.setValue(this.host.password);
        this.formGroup.controls.hoTen.setValue(this.host.hoTen);
        this.formGroup.controls.diaChi.setValue(this.host.diaChi);
        this.formGroup.controls.sdt.setValue(this.host.sdt);
        this.idtest = Number(idSearch);
      });
    });
  }
  edit() {
    this.isLoading = true;
    this.host.idChuNha = this.idtest;
    this.host.userName = this.formGroup.get('userName').value;
    this.host.password = this.formGroup.get('password').value;
    this.host.hoTen = this.formGroup.get('hoTen').value;
    this.host.diaChi = this.formGroup.get('diaChi').value;
    this.host.sdt = this.formGroup.get('sdt').value;
    console.log(this.host);
    this.componentsService.editUser(this.host).subscribe(result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Sửa thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Sửa thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }
}
