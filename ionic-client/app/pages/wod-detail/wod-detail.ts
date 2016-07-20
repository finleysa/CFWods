import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WodsService } from '../../providers/wods-service/wods-service'
import { Wod } from '../../models/wod'

/*
  Generated class for the WodDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/wod-detail/wod-detail.html',
  providers: [WodsService]
})
export class WodDetailPage {
  name: string;
  wod: Wod = new Wod;

  constructor(private nav: NavController, navParams: NavParams, wodsService: WodsService) {
    this.name = navParams.get('wod');
    wodsService.loadDetails(this.name)
      .then(wod => this.wod = wod);
  }

}
