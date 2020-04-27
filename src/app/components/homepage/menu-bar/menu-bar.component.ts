import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ComponentsService} from '../../components.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  checkLogin: any;
  idCustomer: any;
  listHouse: any[];
  listCustomer: any[];
  listCheck: any;
  customerName: any;
  check = false;
  message = '';
  isShow = false;
  isSuccess = true;
  formGroupCheck = new FormGroup( {
    check: new FormControl()
  })
  formGroup = new FormGroup({
    search: new FormControl(),
    input: new FormControl(),
    output: new FormControl()
  });
  constructor(private componentsService: ComponentsService,  private route: Router) { }

  ngOnInit(): void {
    this.componentsService.getListCustomer().subscribe(result => {
      this.listCustomer = result;
    });
    this.checkLogin = localStorage.getItem('check');
    console.log(this.checkLogin);
    this.idCustomer = localStorage.getItem('idCustomer');
    this.customerName = localStorage.getItem('customerName');
    console.log(this.customerName);
    this.componentsService.findByIdCheck(1).subscribe( result => {
      this.listCheck = result;
      this.formGroupCheck.controls.check.setValue(!this.listCheck.checkLogin);
    });
  }
  exit() {
    this.updateCheck();
  }
  updateCheck() {
    const id = 1;
    const check = this.formGroupCheck.get('check').value;
    this.componentsService.updateCheck(id, check).subscribe( result => {});
    this.checkLogin = 'true';
    console.log(this.checkLogin);
    localStorage.removeItem('check');
    localStorage.removeItem('customerName');
  }
  public searchByDiaChi() {
    const diaChi = this.formGroup.get('search').value;
    this.componentsService.searchByDiaChi(diaChi).subscribe( result => {
      this.listHouse = result;
    });
  }

  public searchBySlPhongNgu() {
    const soLuong = this.formGroup.get('search').value;
    this.componentsService.searchBySoLuongPhongNgu(soLuong).subscribe( result => {
      this.listHouse = result;
    });
  }

  public searchBySlPhongTam() {
    const soLuong = this.formGroup.get('search').value;
    this.componentsService.searchBySoLuongPhongTam(soLuong).subscribe( result => {
      this.listHouse = result;
    });
  }
  public searchBetween() {
    const input = this.formGroup.get('input').value;
    const output = this.formGroup.get('output').value;
    this.componentsService.searchBetween(input, output).subscribe( result => {
      this.listHouse = result;
    });
  }
}
