import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  socialLinkClicked(linktype:string){
    switch(linktype){
      case 'facebook':{
        // window.open('https://www.facebook.com/the.ansarkhan3', '_blank');
        break;
      }

      case 'instagram':{
        window.open('https://www.instagram.com/jaaallife?igsh=dzFtcWNtenNnY2pn', '_blank');
        break;
      }

      default:{
        console.error('Invalid link');
        break;
      }
    }
  }

}
