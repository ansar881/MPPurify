import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  sidebar:boolean = false;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  getInTouch(){
    window.open('https://forms.gle/HEQBQfK1ckYKwqhQ8', '_blank');
  }
  
  tabClicked(type:string, frm = false){
    switch (type) {
      case 'home':
        this.router.navigate(['home'], {
          queryParams: {from: 'header-comp', to: 'home-comp' }
        })
        break;
      case 'about':
        this.router.navigate(['about'], {
          queryParams: {from: 'header-comp', to: 'about-comp' }
        })
        break;
      case 'faq':
        this.router.navigate(['faqs'], {
          queryParams: {from: 'header-comp', to: 'faqs-comp' }
        })
        break;
      case 'cont':
        this.router.navigate(['contact'], {
          queryParams: {from: 'header-comp', to: 'contact-comp' }
        })
        break;
      case 'greenp':
      this.router.navigate(['greenp'], {
        queryParams: {from: 'header-comp', to: 'greenpromise-comp' }
      })
      break;
      case 'shopp':
      this.router.navigate(['shopp'], {
        queryParams: {from: 'header-comp', to: 'shopproducts-comp' }
      })
      break;
      
      default:
    }
    if(frm)this.toggleSidebar();
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
