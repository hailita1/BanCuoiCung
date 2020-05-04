import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  id: string;
  listUser: any[];
  // tslint:disable-next-line:max-line-length
  urlTiDa = 'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/15095628_1240803649317565_4406260693776945144_n.jpg?_nc_cat=102&_nc_sid=13bebb&_nc_ohc=8j-8xCcVjksAX_UwhP5&_nc_ht=scontent.fhan3-1.fna&oh=306bb91d609d5a4287471039fc6b46cd&oe=5ED44C3B';
  // tslint:disable-next-line:max-line-length
  urlHaiLit = 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.15752-9/91350837_211883533382731_506886620025192448_n.jpg?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=obZFoZXgT9UAX8Z1mDx&_nc_ht=scontent-sin6-1.xx&oh=c65a4f956a3f7853e9d8739241b333bd&oe=5EA4D9CC';
  // tslint:disable-next-line:max-line-length
  urlHuyVy = 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/s960x960/94259973_1465767533597850_1414423959973134336_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=Zx-5N1tFKS4AX_N9Uz1&_nc_ht=scontent.fhan3-3.fna&_nc_tp=7&oh=ab56b15ca455f11bc8d6cd4b35042753&oe=5ED3EE80';
  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const idChuNha = params.get('id');
      this.id = idChuNha;
      localStorage.setItem('id', this.id);
    });
  }

}
