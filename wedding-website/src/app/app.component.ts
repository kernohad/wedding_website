import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**Application title. Used in Header */
  public title = 'Dylan & Brooke';

  /**Header links */
  public links = [
    {
      label: 'Event',
      anchor: 'event'
    },
    {
      label: 'About Us',
      anchor: 'about-us'
    },
    {
        label: 'RSVP',
        anchor: 'rsvp'
    },
    {
      label: 'Accommodation',
      anchor: 'accommodation'
    },
    {
      label: 'Registry',
      anchor: 'registry'
  },
  ];

  scrollPosition: number;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = window.pageYOffset;
  }

  ngOnInit() {
    this.onWindowScroll();
  }

  public goToSection(section): void {
    const element = document.getElementById(section);
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
}
}
