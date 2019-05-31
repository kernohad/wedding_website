import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**Application title. Used in Header */
  public title = 'Kernohan Wedding!';

  /**Variable that controls side nav open / close */
  public isExpanded = false

  /**Header links */
  public links = [
    {
        label: 'Event',
        anchor: 'event'
    },
    {
        label: 'RSVP',
        anchor: 'rsvp'
    },
    {
        label: 'Contact',
        anchor: 'contact'
    }
  ];
}
