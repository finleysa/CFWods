import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WodsService } from '../../providers/wods-service/wods-service';
import { Wod } from '../../models/wod';
/*
  Generated class for the WodListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/wod-list/wod-list.html',
  providers: [WodsService]
})
export class WodListPage {
  wods: Array<Wod>;

  constructor(private nav: NavController, public wodsService: WodsService) {
    wodsService
      .load()
      .then(wods => this.wods = wods);
  }

}
