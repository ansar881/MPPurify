import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
  standalone: true,
  imports:[CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  faqs = [
    {
      title: "How is Jaaal Life Free?",
      description: "We provide drinking water, with the cost subsidized through advertisements covering 80% of the bottle's surface. Consumers pay only for the water, while advertisers cover the remaining expenses."
    },
    {
      title: "Can you promote my brand at any location in India?",
      description: "We are continuously working to offer nationwide water bottle advertising services. Currently, our services are available across Hyderabad."
    },
    {
      title: "How can I help Jaaal Life?",
      description: "Please help us to spread the word by sharing our project on social media and with your friends and family."
    },
    {
      title: "How much does it cost to advertise?",
      description: "The cost of advertising on water bottles which depends on various factors: *Bottle size:** 250 ml or 500 ml *Order quantity:** Pricing decreases as order size increases *Distribution locations:** The placement of your branded water bottles *Distribution method:** Whether you prefer carts, strollers, or direct distribution"
    },
    {
      title: "How long does it take to place an advertising order?",
      description: "The preparation time of an order along with the label design finalization, label printing, getting the bottles ready, packaging, and moving them to the distributors takes around 10-12 days. So, within 16 days of placing an order with free aqua for all your water ads will hit the market."
    },
    {
      title: "How does Jaaal Life compare to other advertising mediums?",
      description: "Jaaal Life offers a **unique, high-visibility** advertising solution compared to traditional mediums like billboards, digital ads, or print media. Here's how it stands out: *Direct Consumer Engagement:** Your brand reaches consumers in a **tangible way** as they hold and drink from branded water bottles. *Higher Retention:** Unlike fleeting digital ads, your branding stays visible for **several minutes** while the consumer drinks the water. *Cost-Effective:** Compared to billboards or TV ads, water bottle advertising provides **affordable, widespread exposure** with **less ad fatigue**. **Targeted Distribution:** You can place bottles at **strategic locations** (events, offices, gyms, public areas) to reach the **right audience**. *Eco-Friendly Image:** Associating with drinking water enhances your brand's **social responsibility** and goodwill."
    },
    {
      title: "Does Free Aqua for All distribute customized water bottles?",
      description: "Yes, we do provide that service. You just need to pay the bottle manufacturing and transportation costs."
    },
    {
      title: "How do I advertise?",
      description: "To advertise with Jaaal Life, please visit https://Jaaal Life.com"
    }
  ];

}
