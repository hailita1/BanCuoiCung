import { Component, OnInit } from '@angular/core';
import {IHost} from '../../../interface/host';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ComponentsService} from '../../components.service';
import {ICustomer} from '../../../interface/customer';

@Component({
  selector: 'app-signup-homepage',
  templateUrl: './signup-homepage.component.html',
  styleUrls: ['./signup-homepage.component.scss']
})
export class SignupHomepageComponent implements OnInit {

  customer: ICustomer = {
    userName: '',
    password: '',
    ho: '',
    ten: '',
    cmnd: 0,
    diaChi: '',
    sdt: 0,
  }
  formGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(12)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    ho: new FormControl('', [
      Validators.required,
      Validators.maxLength(8)
    ]),
    ten: new FormControl('', [
      Validators.required,
      Validators.maxLength(8)
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
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  constructor(private componentsService: ComponentsService) { }

  ngOnInit(): void {
  }
  save() {
    this.isLoading = true;
    this.customer.userName = this.formGroup.get('userName').value;
    this.customer.password = this.formGroup.get('password').value;
    this.customer.ho = this.formGroup.get('ho').value;
    this.customer.ten = this.formGroup.get('ten').value;
    this.customer.cmnd = this.formGroup.get('cmnd').value;
    this.customer.diaChi = this.formGroup.get('diaChi').value;
    this.customer.sdt = this.formGroup.get('sdt').value;
    this.componentsService.addCustomer(this.customer).subscribe( result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Đăng kí thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Đăng kí thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }

}
