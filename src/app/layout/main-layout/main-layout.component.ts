import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from 'src/app/utils/animations/fader.animation';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [
    // <-- add your animations here
    fader,
  ],
})
export class MainLayoutComponent implements OnInit {
  showFiller = false;
  dataNav = {
    list: [
      {
        icon: 'assets/img/home.svg',
        name: 'Trang chủ',
        linkURL: 'home',
        subs: [
          { name: 'Danh sách doanh nghiệp', path: 'home/enterprise-list' },
          { name: 'Danh sách sản phẩm', path: 'home/product-list' }
        ]
      },
      {
        icon: 'assets/img/enterprise-code.svg',
        name: 'Doanh nghiệp',
        linkURL: 'enterprise',
        subs: []
      },
      {
        icon: 'assets/img/distributor.svg',
        name: 'Nhà phân phối',
        linkURL: 'distributor',
        subs: []
      },
      {
        icon: 'assets/img/shop.svg',
        name: 'Điểm bán',
        linkURL: 'shop',
        subs: []
      },
      {
        icon: 'assets/img/bag.svg',
        name: 'Sản phẩm',
        linkURL: 'product',
        subs: []
      },
      {
        icon: 'assets/img/service-package.svg',
        name: 'Gói dịch vụ',
        linkURL: 'service-package',
        subs: []
      },
      {
        icon: 'assets/img/icon-setting.svg',
        name: 'Cài đặt',
        linkURL: 'setting',
        subs: [
          { name: 'Danh sách tài khoản', path: 'setting/account-list' }
        ]
      },

    ],
  };

  constructor() { }

  ngOnInit(): void {
    // if (localStorage.getItem("role") === 'saleAdmin') {
    //   this.dataNav.list.pop();
    // }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
