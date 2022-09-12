import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from 'ngx-arrangement';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private alerted: boolean;

  constructor(public layoutService: LayoutService) {
    this.alerted = false;
  }

  @ViewChild('content', { static: false }) content?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    fromEvent(window, 'scroll').subscribe(() => {
      if (!this.alerted && this.content) {
        this.alerted = true;
        alert('Content Loaded');
      }
    });
  }
}
