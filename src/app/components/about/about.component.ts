import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  tophTitle = 'Delivering Purity, One Drop at a Time — A Legacy of Trust, Innovation, and Care That Hydrates Millions Every Day';
  juorneyTitle = 'The MP Purify Juorney';
  journeyContent = 'At MP Purify, our journey began with a simple yet profound mission: to provide pure, safe, and refreshing drinking water to communities everywhere. Founded on the principles of trust, innovation, and care, we have dedicated ourselves to ensuring that every drop of water we deliver meets the highest standards of quality and purity. Over the years, we have expanded our reach, embracing cutting-edge technology and sustainable practices to minimize our environmental impact. Our commitment to excellence is unwavering, as we continuously strive to enhance our products and services. Today, MP Purify stands as a beacon of reliability and health, hydrating millions of lives daily while fostering a legacy of trust and well-being for generations to come.';

  constructor() {}
}
