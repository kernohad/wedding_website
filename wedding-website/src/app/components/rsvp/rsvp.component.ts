import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {

      let s = this._renderer2.createElement('script');
      s.type = `text/javascript`;
      s.src = `http://app.rsvpify.com/embed/500182186`;
      s.scrolling = 'yes';

      this._renderer2.appendChild(this._document.body, s);

      let d = this._renderer2.createElement('script');
      d.type = `text/javascript`;
      d.src = `http://app.rsvpify.com/js/iframeResizer.min.js`;

      this._renderer2.appendChild(this._document.body, d);

      let x = this._renderer2.createElement('script');
      x.type = `text/javascript`;
      x.innerHTML = `iFrameResize({ autoResize: true, checkOrigin: false, heightCalculationMethod: 'max', enablePublicMethods: true}, "#RSVPifyIFrame");`;

      this._renderer2.appendChild(this._document.body, x);
  }

}

