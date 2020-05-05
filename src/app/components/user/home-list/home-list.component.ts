import {Component, OnInit} from '@angular/core';
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
  urlHaiLit = 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/67941865_2456397517929546_7418600163163242496_n.jpg?_nc_cat=106&_nc_sid=0be424&_nc_ohc=92G7O64X4swAX_0DC-S&_nc_ht=scontent.fhan1-1.fna&oh=b91772451e6881c9b06e557367c1f685&oe=5ED58B00';
  // tslint:disable-next-line:max-line-length
  urlHuyVy = 'https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/s960x960/94259973_1465767533597850_1414423959973134336_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=Zx-5N1tFKS4AX_N9Uz1&_nc_ht=scontent.fhan3-3.fna&_nc_tp=7&oh=ab56b15ca455f11bc8d6cd4b35042753&oe=5ED3EE80';

  constructor(private componentsService: ComponentsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idChuNha = params.get('id');
      this.id = idChuNha;
      localStorage.setItem('id', this.id);
    });
  }

}
