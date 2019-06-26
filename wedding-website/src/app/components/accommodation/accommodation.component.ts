import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  public hotelList = [
    {
      title: 'Fairfield Inn & Suites by Marriott',
      address: '3320 Preyde Blvd, Lansing, MI 48912',
      imgSrc: 'fairfield_marriott.jpg',
      content: 'We have a hotel block here! $124/night', 
      link: 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1561408039609&key=GRP&app=resvlink',
    },
    {
      title: 'Hyatt Place',
      address: '2401 Showtime Dr, Lansing, MI 48912',
      imgSrc: 'hyatt_place.jpg',
      content: 'Nothing Special. ~$180/night', 
      link: 'https://www.hyatt.com/en-US/hotel/michigan/hyatt-place-lansing-eastwood-towne-center/lanzl?src=corp_lclb_gmb_seo_nam_lanzl',
    },
    {
      title: 'Holiday Inn Express & Suites',
      address: '2924 West Rd, East Lansing, MI 48823',
      imgSrc: 'holiday_inn.jpg',
      content: 'Special Wedding Deal. ~$144/night', 
      link: 'https://www.hiexpress.com/redirect?path=hd&brandCode=EX&localeCode=en&hotelCode=LANLL&rateCode=IL4D4&_PMID=99502056&corpNum=100235822&cn=no&viewfullsite=true',
    },
    {
      title: 'Courtyard by Marriott',
      address: '2710 Lake Lansing Rd, Lansing, MI 48912',
      imgSrc: 'courtyard_marriott.jpg',
      content: 'Nothing Special. ~$155/night', 
      link: 'https://www.marriott.com/hotels/travel/lancy-courtyard-lansing/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
