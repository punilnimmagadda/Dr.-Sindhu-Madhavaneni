import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AppConfig } from './interfaces/app-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  toggleIconName: string = 'menu';
  showMobileNav: boolean = false;
  isDataReady: boolean = false;
  data: AppConfig;

  constructor(_firebase: AngularFireDatabase) {
    const itemsRef: AngularFireObject<any> = _firebase.object('app-config');
    itemsRef.valueChanges().subscribe(res => {
      this.data = res;
      this.isDataReady = true;
      console.log(this.data.appName);
    });
  }

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
