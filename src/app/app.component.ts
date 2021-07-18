import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  toggleIconName: string = 'menu';
  showMobileNav: boolean = false;

  ngOnInit() { }

  onNavToggleClick() {
    if (this.toggleIconName.toLowerCase() === 'menu') {
      this.toggleIconName = 'close';
      this.showMobileNav = true;
    } else {
      this.toggleIconName = 'menu';
      this.showMobileNav = false;
    }
  }

}
