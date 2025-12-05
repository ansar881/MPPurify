import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
})
export class ContactComponent implements OnInit {

  mobileNumber: string = '+91 9776718582';
  emailAddress: string = "jaaallife@gmail.com"
  constructor() { }

  ngOnInit() {
  }

  getInTouch(){
    window.open('https://forms.gle/HEQBQfK1ckYKwqhQ8', '_blank');
  }
  
}
