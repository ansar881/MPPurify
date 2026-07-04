import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  punchLine = "Jaaal Life delivers pure, safe, and refreshing drinking water, empowering healthier lifestyles with trusted quality, sustainable choices, and unmatched hydration."

  metricData = [
    {metricText: 'Cities', metricNumber: '10+'},
    {metricText: 'Hotels and Restaurants', metricNumber: '1000+'},
    {metricText: 'Residential', metricNumber: '1800+'},
    {metricText: 'Educational Institutes', metricNumber: '10+'},
    {metricText: 'Citizens', metricNumber: '1 M'},
    {metricText: 'Peoples Trust', metricNumber: '1 M'},
  ]

  constructor( private router: Router) { }

  ngOnInit() {
  }

  // getInTouch(){
  //   window.open('https://forms.gle/FvLWJmxyqFiu4RgTA', '_blank');
  // }

  getInTouch(){
    window.open('https://forms.gle/HEQBQfK1ckYKwqhQ8', '_blank');
  }

  exploreImpact(){
    this.router.navigate(['greenp']);
  }

  advertiseHere(){
    this.router.navigate(['advertise'], {
      queryParams: {from: 'home-comp', to: 'advertise-comp' }
    })
  }
}
